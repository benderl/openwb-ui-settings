<template>
	<div class="device-solaredge-external-inverter">
		<openwb-base-heading>
			Einstellungen für SolarEdge externen Wechselrichter
		</openwb-base-heading>
		<openwb-base-alert subtype="info">
			Diese Komponente nur konfigurieren, wenn ein weiteres Solaredge
			SmartMeter verbaut ist, welches z.B. die Leistung einer vorhandenen
			Bestands-PV-Anlage erfasst. Dieses zusätzliche SmartMeter muss dann
			als "Zähler 2" / "Position 2" im Wechselrichter-Konfigurationsmenü
			konfiguriert sein.
		</openwb-base-alert>
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
		<openwb-base-number-input
			title="Meter ID"
			:model-value="component.configuration.meter_id"
			min="1"
			max="255"
			@update:model-value="
				updateConfiguration($event, 'configuration.meter_id')
			"
		/>
	</div>
</template>

<script>
import ComponentConfigMixin from "../componentConfigMixin.vue";

export default {
	name: "DeviceSolaredgeExternalInverter",
	mixins: [ComponentConfigMixin],
};
</script>
