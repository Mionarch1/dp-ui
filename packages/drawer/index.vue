<template>
	<transition
		name="drawer-fade"
		@after-enter="afterEnter"
		@after-leave="afterLeave"
	>
		<div class="DP-drawer-wrapper" v-show="visible" @click.self="handleClose">
			<div
				:class="[
					'DP-drawer',
					`DP-drawer-${direction}`,
					`DP-drawer-${direction}-out`,
					visible && `DP-drawer-${direction}-in`
				]"
				:style="style"
			>
				<div class="DP-drawer-body">
					<slot></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	direction: { type: String, default: 'right' },
	visible: { type: Boolean, default: false },
	width: { type: String, default: '250px' },
	borderRadius: { type: String, default: '0px' }
});

const style = computed(() => {
	return {
		'border-radius': props.borderRadius,
		width: ['right', 'left'].includes(props.direction) ? props.width : '100%',
		height: ['bottom', 'top'].includes(props.direction) ? props.width : '100%'
	};
});

const emit = defineEmits(['update:visible', 'onOpened', 'onClosed']);

const handleClose = () => {
	emit('update:visible', false);
};
const afterEnter = () => {
	emit('onOpened');
};
const afterLeave = () => {
	emit('onClosed');
};
</script>
