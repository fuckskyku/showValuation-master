
import Vue from 'vue'
import Router from 'vue-router'
//引入路由组件
import Index from '@/components/Index'
import Login from '@/components/pages/login/Login'
// import Home from '@/components/pages/home/Index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: { title: "登录" }
    },
    {
      path: '/',
      redirect: '/index',
      name: 'Index',
      component: Index,
      children: [
        //首页路由
        // 思想品德
        // { path: '/index', name: "Home", component: (resolve) => require(['@/components/pages/home/Home'], resolve), meta: { title: "首页" } },
        { path: '/index', name: "ActivityProject", component: (resolve) => require(['@/components/pages/home/Moral/ActivityProject/ActivityProject'], resolve), meta: { title: "活动项目" } },
        { path: '/HonorProject', name: "HonorProject", component: (resolve) => require(['@/components/pages/home/Moral/HonorProject/HonorProject'], resolve), meta: { title: "先进个人荣誉项目" } },
        { path: '/DisciplinaryProject', name: "DisciplinaryProject", component: (resolve) => require(['@/components/pages/home/Moral/DisciplinaryProject/DisciplinaryProject'], resolve), meta: { title: "违纪违规项目" } },
        { path: '/IfCrime', name: "IfCrime", component: (resolve) => require(['@/components/pages/home/Moral/IfCrime/IfCrime'], resolve), meta: { title: "是否有犯罪记录" } },
        // 社会实践
        { path: '/SocialPracticeProject', name: "SocialPracticeProject", component: (resolve) => require(['@/components/pages/home/SocialPractice/SocialPracticeProject/SocialPracticeProject'], resolve), meta: { title: "社会实践参与项目" } },
        { path: '/InvestigativeStudy', name: "InvestigativeStudy", component: (resolve) => require(['@/components/pages/home/SocialPractice/InvestigativeStudy/InvestigativeStudy'], resolve), meta: { title: "科技创新、研究性学习成果" } },
        { path: '/Invention', name: "Invention", component: (resolve) => require(['@/components/pages/home/SocialPractice/Invention/Invention'], resolve), meta: { title: "创造发明成果" } },
                
        // 学业水平
        { path: '/DisciplineCompetitionPerformance', name: "DisciplineCompetitionPerformance", component: (resolve) => require(['@/components/pages/home/Academic/DisciplineCompetitionPerformance/DisciplineCompetitionPerformance'], resolve), meta: { title: "学科竞赛成绩" } },
        // 身心健康
        { path: '/CompetitionItem', name: "CompetitionItem", component: (resolve) => require(['@/components/pages/home/Physical/CompetitionItem/CompetitionItem'], resolve), meta: { title: "参加体育比赛项目" } },
        { path: '/SynthesisScore', name: "SynthesisScore", component: (resolve) => require(['@/components/pages/home/Physical/SynthesisScore/SynthesisScore'], resolve), meta: { title: "《国家学生体质健康标准》测试综合得分" } },
        { path: '/NationalAthleteClass', name: "NationalAthleteClass", component: (resolve) => require(['@/components/pages/home/Physical/NationalAthleteClass/NationalAthleteClass'], resolve), meta: { title: "国家运动员等级" } },
        // 艺术素养
        { path: '/ArtActivity', name: "ArtActivity", component: (resolve) => require(['@/components/pages/home/Art/ArtActivity/ArtActivity'], resolve), meta: { title: "参加艺术活动项目" } },
        { path: '/ArtTeam', name: "ArtTeam", component: (resolve) => require(['@/components/pages/home/Art/ArtTeam/ArtTeam'], resolve), meta: { title: "参加学生艺术团队" } },
        // 典型案例材料
        { path: '/CaseMaterial', name: "CaseMaterial", component: (resolve) => require(['@/components/pages/home/Case/CaseMaterial/CaseMaterial'], resolve), meta: { title: "典型案例材料" } },
      ]
    },
    { path: '/MoralDetails', name: "MoralDetails", component: (resolve) => require(['@/components/pages/home/Moral/MoralDetails/MoralDetails'], resolve), meta: { title: "思想品德详情" } },
    { path: '/SocialPracticeDetails', name: "SocialPracticeDetails", component: (resolve) => require(['@/components/pages/home/SocialPractice/SocialPracticeDetails/SocialPracticeDetails'], resolve), meta: { title: "社会实践详情" } },
    { path: '/AcademicDetails', name: "AcademicDetails", component: (resolve) => require(['@/components/pages/home/Academic/AcademicDetails/AcademicDetails'], resolve), meta: { title: "学业水平详情" } },
    { path: '/PhysicalDetails', name: "PhysicalDetails", component: (resolve) => require(['@/components/pages/home/Physical/PhysicalDetails/PhysicalDetails'], resolve), meta: { title: "身心健康详情" } },
    { path: '/ArtDetails', name: "ArtDetails", component: (resolve) => require(['@/components/pages/home/Art/ArtDetails/ArtDetails'], resolve), meta: { title: "艺术素养详情" } },
    { path: '/CaseDetails', name: "CaseDetails", component: (resolve) => require(['@/components/pages/home/Case/CaseDetails/CaseDetails'], resolve), meta: { title: "典型案例材料详情" } },
  ]
})
