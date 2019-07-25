import api from './apiSetting'

/**
 * 
 * @param {学生综合素质评价系统接口抛出}
 * 
 */ 

//登录
export const login = param => { return api.post('/api/login', param) }

//年级班级列表
export const gradeClassList = param => { return api.get('/api/zxxx0200/gradeClassList', param) }

//一级目录 未审核数量
export const jxmlZtNotCount = param => { return api.get('/api/pntXsszpjXmkhgl/jxmlZtNotCount', param) }

//二级目录 未审核数量
export const ejxmZtNotCount = param => { return api.get('/api/pntXsszpjXmkhgl/ejxmZtNotCount', param) }

//参加艺术活动项目 列表
// export const ysSyCjYshdXmList = param => { return api.get('/pntXsszpjRckh/ysSyCjYshdXmList', param) }

//参加学生艺术团队名称 列表
// export const ysSyCjXsYstdMcList = param => { return api.get('/pntXsszpjRckh/ysSyCjXsYstdMcList', param) }

// 审核 或 撤销审核
export const audit = param => { return api.post('/api/pntXsszpjRckhZt/audit', param) }

// 批量审核 或 撤销审核
export const ALLaudit = param => { return api.postJson('/api/pntXsszpjRckhZt/betchAudit', param) }

// 学生素质评价_日常考核 列表




//所有列表统一接口
export const getListApi = param => { return api.get('/api/pntXsszpjRckhZt/rckhList', param) }

/*
    省平台接口抛出
    
*/
// 累计次数，累计时间 统计 ( 党团活动 \ 社团活动 \ 志愿服务 \ 公益劳动 ) 列表
export const sxPdTimeStatisList = param => { return api.get('/api/pntXsszpjRckh/sxPdTimeStatisList', param) }

// 先进个人荣誉 列表
export const sxPdXjGrRyList = param => { return api.get('/api/pntXsszpjRckh/sxPdXjGrRyList', param) }

// 违纪违规项目 列表
export const sxPdWjWgXmList = param => { return api.get('/api/pntXsszpjRckh/sxPdWjWgXmList', param) }

//是否有犯罪记录
export const sxPdShYfzJlList = param => { return api.get('/api/pntXsszpjRckh/sxPdShYfzJlList', param) }

// 学科竞赛成绩 列表
export const xySpXkJsCjList = param => { return api.get('/api/pntXsszpjRckh/xySpXkJsCjList', param) }

// 参加艺术活动项目 列表
export const ysSyCjYshdXmList = param => { return api.get('/api/pntXsszpjRckh/ysSyCjYshdXmList', param) }

// 参加学生艺术团队名称 列表
export const ysSyCjXsYstdMcList = param => { return api.get('/api/pntXsszpjRckh/ysSyCjXsYstdMcList', param) }

// 运动员国家等级 列表
export const sxJkYdyGjDjList = param => { return api.get('/api/pntXsszpjRckh/sxJkYdyGjDjList', param) }

// 参加体育比赛项目 列表
export const sxJkCjTyBsXmList = param => { return api.get('/api/pntXsszpjRckh/sxJkCjTyBsXmList', param) }

// 社会实践累计次数，累计时间 统计接口
export const shSjTimeStatisList = param => { return api.get('/api/pntXsszpjRckh/shSjTimeStatisList', param) }

// 科技创新、研究性学习成果
export const shSjCxList = param => { return api.get('/api/pntXsszpjRckh/shSjCxList', param) }

// 创造发明成果
export const shSjCzList = param => { return api.get('/api/pntXsszpjRckh/shSjCzList', param) }

// 省平台 党团活动 列表
export const sxPdDtHdList = param => { return api.get('/api2/pntXsszpjRckhPro/sxPdDtHdList', param) }

// 省平台 社团活动 列表
export const sxPdStHdList = param => { return api.get('/api2/pntXsszpjRckhPro/sxPdStHdList', param) }

// 省平台 志愿服务 列表
export const sxPdZyFwList = param => { return api.get('/api2/pntXsszpjRckhPro/sxPdZyFwList', param) }

// 省平台 公益劳动 列表
export const sxPdGyLdList = param => { return api.get('/api2/pntXsszpjRckhPro/sxPdGyLdList', param) }

// 省平台 是否有犯罪记录 列表
export const sxPdShYfzJlList2 = param => { return api.get('/api2/pntXsszpjRckhPro/sxPdShYfzJlList', param) }

// 省平台 违纪违规项目 列表
export const sxPdWjWgXmList2 = param => { return api.get('/api2/pntXsszpjRckhPro/sxPdWjWgXmList', param) }

// 省平台 先进个人荣誉 列表
export const sxPdXjGrRyList2 = param => { return api.get('/api2/pntXsszpjRckhPro/sxPdXjGrRyList', param) }

// 省平台 学科竞赛成绩 列表
export const xySpXkJsCjList2 = param => { return api.get('/api2/pntXsszpjRckhPro/xySpXkJsCjList', param) }

// 省平台 运动员国家等级 列表
export const sxJkYdyGjDjList2 = param => { return api.get('/api2/pntXsszpjRckhPro/sxJkYdyGjDjList', param) }

// 省平台 参加体育比赛项目 列表
export const sxJkCjTyBsXmList2 = param => { return api.get('api2/pntXsszpjRckhPro/sxJkCjTyBsXmList', param) }

// 省平台 军事训练 列表
export const shSjJsXlList = param => { return api.get('api2/pntXsszpjRckhPro/shSjJsXlList', param) }

// 省平台 生产劳动 列表
export const shSjScLdList = param => { return api.get('api2/pntXsszpjRckhPro/shSjScLdList', param) }

// 省平台 社会调查 列表
export const shSjShDcList = param => { return api.get('api2/pntXsszpjRckhPro/shSjShDcList', param) }

// 省平台 勤工俭学 列表
export const shSjQgJxList = param => { return api.get('api2/pntXsszpjRckhPro/shSjQgJxList', param) }

// 省平台 参观体验 列表
export const shSjCgTjList = param => { return api.get('api2/pntXsszpjRckhPro/shSjCgTjList', param) }

// 省平台 研学旅行 列表
export const shSjYxLxList = param => { return api.get('api2/pntXsszpjRckhPro/shSjYxLxList', param) }

// 省平台 科技创新、研究性学习成果 列表
export const shSjCxList2 = param => { return api.get('api2/pntXsszpjRckhPro/shSjCxList', param) }

// 省平台 创造发明成果 列表
export const shSjCzList2 = param => { return api.get('api2/pntXsszpjRckhPro/shSjCzList', param) }

// 省平台 参加艺术活动项目 列表
export const ysSyCjYshdXmList2 = param => { return api.get('api2/pntXsszpjRckhPro/ysSyCjYshdXmList', param) }

// 省平台 参加学生艺术团队名称 列表
export const ysSyCjXsYstdMcList2 = param => { return api.get('api2/pntXsszpjRckhPro/ysSyCjXsYstdMcList', param) }


