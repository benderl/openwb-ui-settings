<template>
	<div class="ripple-control-receiver-gpio">
		<openwb-base-alert subtype="info">
			Wenn mindestens ein Kontakt geschlossen ist, wird die Ladung
			gesperrt. Wenn beide Kontakte offen sind, darf geladen werden.
		</openwb-base-alert>
		<openwb-base-heading>
			Konfiguration der Kontakte
		</openwb-base-heading>
		<openwb-base-select-input
			class="mb-2"
			title="RSE 1 offen, 2 offen"
			:options="[
				{value: 100, text: '- keine Aktion -'},
				{value: 0, text: 'Ladung beenden'},
			]"
			:model-value="100"
			disabled
			readonly
		/>
		<openwb-base-select-input
			class="mb-2"
			title="RSE 1 geschlossen, 2 offen"
			:options="[
				{value: 100, text: '- keine Aktion -'},
				{value: 0, text: 'Ladung beenden'},
			]"
			:model-value="0"
			disabled
			readonly
		/>
		<openwb-base-select-input
			class="mb-2"
			title="RSE 1 offen, 2 geschlossen"
			:options="[
				{value: 100, text: '- keine Aktion -'},
				{value: 0, text: 'Ladung beenden'},
			]"
			:model-value="0"
			disabled
			readonly
		/>
		<openwb-base-select-input
			class="mb-2"
			title="RSE 1 geschlossen, 2 geschlossen"
			:options="[
				{value: 100, text: '- keine Aktion -'},
				{value: 0, text: 'Ladung beenden'},
			]"
			:model-value="0"
			disabled
			readonly
		/>
	</div>
</template>

<script>
export default {
	name: "RippleControlReceiverGpio",
	emits: ["update:configuration"],
	props: {
		rippleControlReceiver: { type: Object, required: true },
	},
	data() {
		return {};
	},
	methods: {
		updateConfiguration(event, path = undefined) {
			this.$emit("update:configuration", { value: event, object: path });
		},
	},
};
</script>
