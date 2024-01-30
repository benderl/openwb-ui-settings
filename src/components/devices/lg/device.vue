<template>
	<div class="device-lg">
		<openwb-base-heading>
			Einstellungen für LG ESS V1.0
		</openwb-base-heading>
		<openwb-base-text-input
			title="IP oder Hostname"
			subtype="host"
			required
			:model-value="device.configuration.ip_address"
			@update:model-value="
				updateConfiguration($event, 'configuration.ip_address')
			"
		/>
		<openwb-base-text-input
			title="Passwort"
			subtype="password"
			required
			:model-value="device.configuration.password"
			@update:model-value="
				updateConfiguration($event, 'configuration.password')
			"
		/>
	</div>
</template>

<script>
import DeviceConfigMixin from "../deviceConfigMixin.vue";

export default {
	name: "DeviceLG",
	mixins: [DeviceConfigMixin],
};
</script>
