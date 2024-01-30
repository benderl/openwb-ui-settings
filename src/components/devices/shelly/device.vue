<template>
	<div class="device-shelly">
		<openwb-base-heading> Einstellungen für Shelly </openwb-base-heading>
		<openwb-base-text-input
			title="IP oder Hostname"
			subtype="host"
			required
			:model-value="device.configuration.ip_address"
			@update:model-value="
				updateConfiguration($event, 'configuration.ip_address')
			"
		/>
		<openwb-base-select-input
			title="Generation"
			notSelected="Bitte auswählen"
			:options="[
				{ value: 1, text: 'Shelly 1pm' },
				{ value: 2, text: 'Shelly 1pm plus/ Shelly Pro3EM' },
			]"
			:model-value="device.configuration.generation"
			@update:model-value="
				updateConfiguration($event, 'configuration.generation')
			"
		/>
	</div>
</template>

<script>
import DeviceConfigMixin from "../deviceConfigMixin.vue";

export default {
	name: "DeviceShelly",
	mixins: [DeviceConfigMixin],
};
</script>
