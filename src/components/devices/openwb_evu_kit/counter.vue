<template>
	<div class="device-openwb-evukit-counter">
		<openwb-base-heading>
			Einstellungen für openWB EVU-Kit Zähler
		</openwb-base-heading>
		<openwb-base-select-input
			title="Zählermodell"
			notSelected="Bitte auswählen"
			:options="[
				{ value: 0, text: 'MPM3PM' },
				{ value: 1, text: 'Lovato' },
				{ value: 2, text: 'SDM630/SDM72D-M' },
			]"
			:model-value="component.configuration.version"
			@update:model-value="
				updateConfiguration($event, 'configuration.version')
			"
		/>
	</div>
</template>

<script>
import ComponentConfigMixin from "../componentConfigMixin.vue";

export default {
	name: "DeviceOpenwbEvukitCounter",
	mixins: [ComponentConfigMixin],
};
</script>
