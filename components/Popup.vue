<template>
  <div>
    <a-drawer
      title="Get offer"
      :width="720"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <a-form :form="form" layout="vertical" hide-required-mark>
        <a-row :gutter="16">
          <a-form-item label="Name">
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [{ required: true, message: 'Please enter name' }]
                }
              ]"
              placeholder="Please enter name"
            />
          </a-form-item>
        </a-row>
        <a-row :gutter="16">
          <a-form-item label="E-mail">
            <a-input
              v-decorator="[
                'email',
                {
                  rules: [
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!'
                    },
                    { required: true, message: 'Please enter e-mail' }
                  ]
                }
              ]"
              placeholder="Please enter e-mail"
            />
          </a-form-item>
        </a-row>
        <a-row :gutter="16">
          <a-form-item label="Phone">
            <a-input
              v-decorator="[
                'phone',
                {
                  rules: [
                    { required: true, message: 'Please enter phone number' }
                  ]
                }
              ]"
              placeholder="Please enter phone number"
            />
          </a-form-item>
        </a-row>
      </a-form>
      <div class="popup-btn">
        <a-button class="close-btn" @click="onClose">
          Cancel
        </a-button>
        <a-button type="primary" @click="onSubmit">
          Submit
        </a-button>
      </div>
    </a-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  computed: {
    ...mapGetters({
      visible: "news/popup",
      paginationClickedCounter: "news/paginationClickedCounter"
    })
  },
  methods: {
    ...mapActions({ changePopupVisibility: "news/changePopupVisibility" }),
    onClose() {
      this.changePopupVisibility(false);
    },
    onSubmit() {
      const data = JSON.stringify({
        name: this.form.getFieldValue("name"),
        email: this.form.getFieldValue("email"),
        phone: this.form.getFieldValue("phone"),
        paginationCounter: this.paginationClickedCounter
      });
      console.log(data);
      this.changePopupVisibility(false);
    }
  }
};
</script>

<style lang="scss" scoped>
.popup-btn {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e9e9e9;
  padding: 10px 16px;
  background: #fff;
  text-align: right;
  z-index: 1;
  .close-btn {
    margin-right: 8px;
  }
}
</style>
