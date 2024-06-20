import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("AreaSelect-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/AreaSelect/index.vue"))),
      app.component("BlueTitle-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/BlueTitle/index.vue"))),
      app.component("DialogMsg-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/DialogMsg/index.vue"))),
      app.component("DialogCopy-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/DialogCopy/index.vue"))),
      app.component("Drawer-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/Drawer/index.vue"))),
      app.component("EditTable-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/EditTable/index.vue"))),
      app.component("ErrorIcon-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/ErrorIcon/index.vue"))),
      app.component("Dialog-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/Dialog/index.vue"))),
      app.component("Form-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/Form/index.vue"))),
      app.component("FormBtns-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/FormBtns/index.vue"))),
      app.component("Info-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/Info/index.vue"))),
      app.component("ListPage-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/ListPage/index.vue"))),
      app.component("LoginAgreement-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/LoginAgreement/index.vue"))),
      app.component("MarkDown-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/MarkDown/index.vue"))),
      app.component("RightMenu-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/RightMenu/index.vue"))),
      app.component("Tinymce-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/Tinymce/index.vue"))),
      app.component("TreeSync-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/TreeSync/index.vue"))),
      app.component("UploadFileList-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/UploadFileList/index.vue"))),
      app.component("moduleList-index", defineAsyncComponent(() => import("D:/codes/xnsk_admin_ui/src/components/moduleList/index.vue")))
  },
}
