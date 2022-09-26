<template>
  <div @click="openSharing">
    <slot name="icon"></slot>
  </div>
</template>

<script setup>
import availableNetworks from '@packages/utils/network';
import { ref, reactive, computed, getCurrentInstance } from 'vue';

let $window = typeof window !== 'undefined' ? window : null;
const { proxy } = getCurrentInstance();
const props = defineProps({
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  quote: {
    type: String,
    default: ''
  },
  hashtags: {
    type: String,
    default: ''
  },
  twitterUser: {
    type: String,
    default: ''
  },
  media: {
    type: String,
    default: ''
  },
  network: {
    type: String,
    default: 'whatsapp'
  },
  popup: {
    type: Object,
    default: () => ({
      width: 626,
      height: 436
    })
  }
});
const popupTop = ref(0);
const popupLeft = ref(0);
const emit = defineEmits(['click']);
const networks = computed(() => {
  return availableNetworks;
});
const key = computed(() => {
  return props.network.toLocaleLowerCase();
});
const rawLink = computed(() => {
  return props.networks[key];
});
const encodedHashtags = computed(() => {
  if (props.key === 'facebook' && props.hashtags.length) {
    return '%23' + props.hashtags.split(',')[0];
  }
  return props.hashtags;
});
const shareLink = computed(() => {
  let link = rawLink;
  if (key === 'twitter') {
    if (!props.hashtags.length) {
      link = link.replace('&hashtags=@h', '');
    }
    if (!props.twitterUser.length) {
      link = link.replace('@tu', '');
    }
  }
  return link
    .replace(/@tu/g, '&via=' + encodeURIComponent(props.twitterUser))
    .replace(/@u/g, encodeURIComponent(props.url))
    .replace(/@t/g, encodeURIComponent(props.title))
    .replace(/@d/g, encodeURIComponent(props.description))
    .replace(/@q/g, encodeURIComponent(props.quote))
    .replace(/@h/g, encodedHashtags)
    .replace(/@m/g, encodeURIComponent(props.media));
});
const resizePopup = () => {
  const width =
    $window.innerWidth ||
    document.documentElement.clientWidth ||
    $window.screenX;
  const height =
    $window.innerHeight ||
    document.documentElement.clientHeight ||
    $window.screenY;
  const systemZoom = width / $window.screen.availWidth;

  popupLeft.value =
    (width - props.popup.width) / 2 / systemZoom +
    ($window.screenLeft !== undefined ? $window.screenLeft : $window.screenX);
  popupTop.value =
    (height - props.popup.height) / 2 / systemZoom +
    ($window.screenTop !== undefined ? $window.screenTop : $window.screenY);
};
const openSharing = () => {
  proxy?.$amplitude.getInstance().logEvent('dp-b:share page successfully', {
    page_url: window.location.href,
    sharing_platform: props.network
  });
  window.open(
    shareLink,
    '',
    'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=' +
      props.popup.height +
      ',width=' +
      props.popup.width +
      ',top=' +
      popupTop +
      ',left=' +
      popupLeft
  );
  emit('click', shareLink);
};
</script>
