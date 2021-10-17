<template>
    <div>
        <!-- 和呃呃呃 -->
        <el-card>
            <el-form :model="loginForm" ref="loginForm"
                     :rules="loginRules"
                     label-position="left"
              >
                <div>
                    <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
                </div>
                <h2 class="login-title color-main">mall-admin-web</h2>
                <el-form-item prop="username">
                    <el-input 
                    type="text"
                     name="username"
                      v-model="loginForm.username" 
                      autoComplete="on"
                       placeholder="请输入用户名">
                    <span slot="prefix">
                        <svg-icon icon-class="user" class="color-main"></svg-icon>
                    </span>

                    </el-input>
                    <!-- <el-input name="username"
                              type="text"
                              v-model=""
                    
                    ></el-input> -->
                </el-form-item>
                <el-form-item prop="password">
                    <el-input name="password"
                      :type="pwdType"
                      @keyup.enter.native="handleLogin"
                      v-model="loginForm.password"
                      autoComplete="on"
                      placeholder="请输入密码"
                     >
                     <span slot="prefix">
                         <svg-icon icon-class="password" class="color-main"></svg-icon>
                     </span>
                     <span slot="suffix" @click="showPwd">
                         <svg-icon icon-class="eye" class="color-main"></svg-icon>
                     </span>

                    </el-input>

                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
                    <el-button type="primary" @click.native.prevent="handleTry"> 获取体验账号</el-button>
                </el-form-item>
            </el-form>
        </el-card>

        <el-dialog 
         title="公众号二维码"
        
         >
            <div>
                <span>
                    <span>关注公众号</span>
                </span>
                    <br>
                 <img src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg" width="160" height="160" style="margin-top: 10px">

            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogConfirm">确定</el-button>
            </span>

        </el-dialog>
    </div>
</template>

<script>
  import {isvalidUsername} from '@/utils/validate';
  import {setSupport,getSupport,setCookie,getCookie} from '@/utils/support'
export default {
    name: 'login',
    data() {
        const validateUsername =(rule, value,callback) =>{
            if(!isvalidUsername(value)) {
                callback(new Error('请输入正确的用户名'))
            }else{
                callback()
            }
        }

        const validatePass = (rule,value,callback) =>{
            if(value.length < 3) {
                callback(new Error('密码不能小于3位'))
            }else{
                callback()
            }
        }

        return{
            loginForm: {
                username: '',
                password: '',
            },
            loginRules:{
                username: [{require: true,trigger:'blur',validator: validateUsername}],
                password: [{require: true, trigger:'blur', validator: validatePass}]
            },
            loading: false,
            pwdType: 'password',
            login_center_bg:'',
            dialogVisible:false,
            supportDialogVisible:false

        }
    },
    methods: {
        showPwd(){
            if(this.pwdType==='password'){
                this.pwdType =''

            }else{
                this.pwdType= 'password'
            }
        },
        handleLogin(){
            this.$refs.loginForm.validate( valid => {
                if(valid) {
                    console.log('asd')
                }
            })

        },

        handleTry() {

        },
        dialogConfirm() {
            
        }
    },
    created() {
        this.loginForm.username = getCookie("username");
        this.loginForm.password = getCookie("password");

        if(this.loginForm.username === undefined || this.loginForm.username == null || this.loginForm.username===''){
             this.loginForm.username = 'admin';
        }
        if(this.loginForm.password === undefined || this.loginForm.password == null) {
            this.loginForm.password = ''
        }
    }


}
</script>