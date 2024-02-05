import { shallowMount } from "@vue/test-utils";
import OpenwbBaseButtonInput from "../OpenwbBaseButtonInput.vue";

describe("OpenwbBaseButtonInput", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(OpenwbBaseButtonInput, {
      props: {
        title: "Test Title",
        buttonText: "Test Button",
        disabled: false,
        subtype: "secondary",
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(".col-form-label").text()).toBe("Test Title");
    expect(wrapper.find(".btn-secondary").text()).toBe("Test Button");
    expect(wrapper.find(".btn-secondary").attributes("disabled")).toBe("false");
    expect(wrapper.find(".text-info").exists()).toBe(false);
    expect(wrapper.find(".alert-info").exists()).toBe(false);
  });

  it("toggles help correctly", async () => {
    const wrapper = shallowMount(OpenwbBaseButtonInput, {
      props: {
        title: "Test Title",
        buttonText: "Test Button",
        disabled: false,
        subtype: "secondary",
      },
      slots: {
        help: "Test Help",
      },
    });

    expect(wrapper.find(".alert-info").exists()).toBe(false);

    await wrapper.find(".col-form-label").trigger("click");

    expect(wrapper.find(".alert-info").exists()).toBe(true);

    await wrapper.find(".col-form-label").trigger("click");

    expect(wrapper.find(".alert-info").exists()).toBe(false);
  });

  it("emits buttonClicked event correctly", () => {
    const wrapper = shallowMount(OpenwbBaseButtonInput, {
      props: {
        title: "Test Title",
        buttonText: "Test Button",
        disabled: false,
        subtype: "secondary",
      },
    });

    wrapper.find(".btn-secondary").trigger("click");

    expect(wrapper.emitted("buttonClicked"));
  });
});
