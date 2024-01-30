<template>
	<div class="device-mqtt">
		<openwb-base-heading>
			Einstellungen für MQTT
			<span class="small">(Modul: {{ $options.name }})</span>
		</openwb-base-heading>
		<openwb-base-alert subtype="info">
			Das MQTT Modul stellt keine aktive Verbindung her, sondern erwartet,
			dass die Daten an spezielle Topics im Broker gesendet werden.<br />
			Alle Daten sind als gültiges JSON zu senden! Zahlen mit
			Nachkommastellen (Float) müssen einen Punkt als Dezimaltrenner
			verwenden (internationales Format).
		</openwb-base-alert>
	</div>
</template>

<script>
import DeviceConfigMixin from "../deviceConfigMixin.vue";

export default {
	name: "DeviceMqtt",
	mixins: [DeviceConfigMixin],
};
</script>
