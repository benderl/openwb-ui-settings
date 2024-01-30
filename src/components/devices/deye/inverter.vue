<template>
	<div class="device-batterx-inverter">
		<openwb-base-heading>
			Einstellungen für Deye Wechselrichter
		</openwb-base-heading>
		<openwb-base-number-input
			title="Modbus ID"
			required
			:model-value="component.configuration.modbus_id"
			min="1"
			max="255"
			@update:model-value="
				updateConfiguration($event, 'configuration.modbus_id')
			"
		/>
	</div>
</template>

<script>
import ComponentConfigMixin from "../componentConfigMixin.vue";

export default {
	name: "DeviceDeyeInverter",
	mixins: [ComponentConfigMixin],
};
</script>
