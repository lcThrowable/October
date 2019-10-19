/**
 * 
 * @param noticeid
 * @param type
 *            1主被保險人 2附屬
 */
function hiddenNoticeELements(topvue, noticeid, type,noticeinfoType) {

	if(!noticeinfoType){
		noticeinfoType="i";
	}
	
	var insuquestion ="insuquestion";
	if(noticeinfoType=="q"){
		
		insuquestion="noticeInfo";
	}
	
	if(noticeinfoType=="a"){
		
		insuquestion="appntquestion";
	}
	
	var questionID = noticeid + noticeinfoType + type;
	try {
		// topvue.form_elementsBYID.commonFormNotice[noticeid].insuquestion[questionID].elementstatus="02";
		if (topvue.form_elementsBYID.commonFormNotice[noticeid][insuquestion][questionID].elementstatus == "02") {
			console.info(noticeid + " 该条告知配置不显示不作处理"); 

		} else {
				
				topvue.$set( topvue.form_elementsBYID.commonFormNotice[noticeid][insuquestion][questionID],
						"elementstatus", "04");
				
			
		}

	} catch (e) {
		console.info(" error : 告知：" + noticeid + " 所属子元素节点ID配置未找到被保人问题，"
				+ " 请检查告知formelement 的告知配置项 请按照约定进行ID设置 " + noticeid + noticeinfoType
				+ type + " exception:" + e);
	}

	// topvue

}

function showNoticeELements(topvue, noticeid, type ,noticeinfoType) {

	if(!noticeinfoType){
		noticeinfoType="i";
	}
	var questionID = noticeid + noticeinfoType + type;
	var insuquestion ="insuquestion";
	if(noticeinfoType=="q"){
		
		insuquestion="noticeInfo";
	}
    if(noticeinfoType=="a"){
		
		insuquestion="appntquestion";
	}
	try {
		if (topvue.form_elementsBYID.commonFormNotice[noticeid][insuquestion][questionID].elementstatus == "02") {
			console.info(noticeid + " 该条告知配置不显示不作处理");

		} else {
			
				topvue.$set(topvue.form_elementsBYID.commonFormNotice[noticeid][insuquestion][questionID],
						"elementstatus", "01");
			
		}
		// topvue.form_elementsBYID.commonFormNotice[noticeid].insuquestion[questionID].elementstatus="02";
	
	} catch (e) {
		console.info(" error : 告知：" + noticeid + " 所属子元素节点ID配置未找到被保人问题，"
				+ " 请检查告知formelement 的告知配置项 请按照约定进行ID设置 " + noticeid + noticeinfoType
				+ type + " exception:" + e);
	}

	// topvue

}


function showFather(topvue,noticeid){
	if (topvue.form_elementsBYID.commonFormNotice[noticeid].elementstatus == "02") {
		console.info(noticeid + " 该条告知配置不显示不作处理");

	} else {
//		topvue.form_elementsBYID.commonFormNotice[noticeid].elementstatus  = "04";
		topvue.$set(topvue.form_elementsBYID.commonFormNotice[noticeid],
				"elementstatus", "01");
	}
	
}

function hiddenFather(topvue,noticeid){
	
	if ( topvue.form_elementsBYID.commonFormNotice[noticeid].elementstatus == "02") {
		console.info(noticeid + " 该条告知配置不显示不作处理");

	} else {
		topvue.$set(topvue.form_elementsBYID.commonFormNotice[noticeid],
				"elementstatus", "04");
	}
}
//隐藏婴幼儿告知
function hiddenAllinfant(topvue,noticeid){
	hiddenFather(topvue, "notice30");
	hiddenFather(topvue, "notice31");
	hiddenNoticeELements(topvue, "notice30", "1", "i");
	hiddenNoticeELements(topvue, "notice30", "1", "q");
	hiddenNoticeELements(topvue, "notice30", "2", "q");
	hiddenNoticeELements(topvue, "notice31", "1", "a");
	hiddenNoticeELements(topvue, "notice31", "1", "i");	 		
}

//显示婴幼儿告知
function showAllinfant(topvue){	
	showFather(topvue,"notice30");
	showFather(topvue,"notice31");
	showNoticeELements(topvue, "notice30", "1", "i");
	showNoticeELements(topvue, "notice30", "1", "q");
	showNoticeELements(topvue, "notice30", "2", "q");
	showNoticeELements(topvue, "notice31", "1", "a");
	showNoticeELements(topvue, "notice31", "1", "i");	 		
}
/**
 * 控制婴幼儿问题 是否显示
 * @param topvue
 */
function hiddenAllInsuTwo(topvue){

	hiddenNoticeELements(topvue, "notice1", "3", "q");
	hiddenNoticeELements(topvue, "notice1", "4", "q");
	hiddenNoticeELements(topvue, "notice2", "4", "q");
	hiddenNoticeELements(topvue, "notice2", "5", "q");
	hiddenNoticeELements(topvue, "notice2", "6", "q");
	hiddenNoticeELements(topvue, "notice2", "2","i");
}

//显示所有的 第二被保人 问题
function showAllInsuTwo(topvue){

	showNoticeELements(topvue, "notice1", "3", "q");
	showNoticeELements(topvue, "notice1", "4", "q");
	showNoticeELements(topvue, "notice2", "4", "q");
	showNoticeELements(topvue, "notice2", "5", "q");
	showNoticeELements(topvue, "notice2", "6","q");
	showNoticeELements(topvue, "notice2", "2","i");
	
}
/**
 * 控制第二被保人问题 是否显示
 * @param topvue
 */
function checkInsuTwoNotice(topvue) {
	var formdata = topvue.formdata;
	if (formdata['lcinsured'] 
			&& formdata['lcinsured'].lcinsuredtwoflag
			&& formdata['lcinsured'].lcinsuredtwoflag.length >=1
			&& formdata['lcinsured'].lcinsuredtwoflag[0] == 'lcinsuredtwoflag') {
		showAllInsuTwo(topvue);
	}else{
		hiddenAllInsuTwo(topvue);
		
	}
}
function checkinfantNotice(topvue) {
	var formdata = topvue.formdata;
	if (formdata['lcinsured'] 
			&& formdata['lcinsured'].lcinsuredage
			&& formdata['lcinsured'].lcinsuredage < 2) {
		showAllinfant(topvue);
	}else{
		hiddenAllinfant(topvue);
		
	}
}
//隐藏未成年人告知
function hiddenAllsimple(topvue,noticeid){
	hiddenFather(topvue,"notice49");
	hiddenFather(topvue,"notice50");
	hiddenFather(topvue,"notice51");
	hiddenFather(topvue,"notice52");
	hiddenNoticeELements(topvue, "notice50", "1", "q");
	hiddenNoticeELements(topvue, "notice51", "1", "q");
	hiddenNoticeELements(topvue, "notice52", "1", "q"); 		
}

//显示未成年人告知
function showAllsimple(topvue){	
	showFather(topvue,"notice49");
	showFather(topvue,"notice50");
	showFather(topvue,"notice51");
	showFather(topvue,"notice52");
	showNoticeELements(topvue, "notice50", "1", "q");
	showNoticeELements(topvue, "notice51", "1", "q");
	showNoticeELements(topvue, "notice52", "1", "q");	 		
}
/**
 * 控制未成年人问题 是否显示
 * @param topvue
 */
function checksimpleNotice(topvue) {
	var formdata = topvue.formdata;
	if (formdata['lcinsured'] 
			&& formdata['lcinsured'].lcinsuredage
			&& formdata['lcinsured'].lcinsuredage < 18) {
		showAllsimple(topvue);
	}else{
		hiddenAllsimple(topvue);
		
	}
}




afterloadNewElements.lcbnf_tabinfo = function(url, form_element) {
	
	try {
		var topvue = getTopvueObj(this);
		showBelongInsu(topvue);
	} catch (e) {
		
		console.info("afterloadNewElements.lcbnf_tabinfo : " + e);
	}
	
};

afterloadNewElements.subriskcode_tabinfo = function(url, form_element) {
	
	try {
		var topvue = getTopvueObj(this);
		showBelongInsu(topvue);
	} catch (e) {
		console.info("afterloadNewElements.subriskcode_tabinfo : " + e);
	}
	
};

/***
 * 控制特殊告知显示
 * @param topvue
 * @returns {Boolean}
 */
function showELementSByInsu(topvue) {	
	try{
				
		var formdata = topvue.formdata;
		var lcappntsex = formdata['lcappnt'].appntsex;
		var lcinsuredsex = formdata['lcinsured'].lcinsuredsex;
		if(lcappntsex=='1'&&lcinsuredsex=='1'){
			showFather(topvue,"notice28");
			showFather(topvue,"notice29");
			showNoticeELements(topvue, "notice28", "1", "a");
			showNoticeELements(topvue, "notice28", "1", "i");
			showNoticeELements(topvue, "notice28", "1", "q");
			showNoticeELements(topvue, "notice29", "1", "a");
			showNoticeELements(topvue, "notice29", "1", "i");
		}else{
			if(lcappntsex=='1'){
				showFather(topvue,"notice28");
				showNoticeELements(topvue, "notice28", "1", "a");
				showNoticeELements(topvue, "notice28", "1", "q");
				hiddenNoticeELements(topvue, "notice28", "1", "i");
				showFather(topvue,"notice29");
				showNoticeELements(topvue, "notice29", "1", "a");				
				hiddenNoticeELements(topvue, "notice29", "1", "i");
			}else if(lcinsuredsex=='1'){
				showFather(topvue,"notice28");
				showNoticeELements(topvue, "notice28", "1", "q");
				showNoticeELements(topvue, "notice28", "1", "i");
				hiddenNoticeELements(topvue, "notice28", "1", "a");
				showFather(topvue,"notice29");
				hiddenNoticeELements(topvue, "notice29", "1", "a");				
				showNoticeELements(topvue, "notice29", "1", "i");
			}else{
				hiddenFather(topvue,"notice28");
				hiddenNoticeELements(topvue, "notice28", "1", "a");
				hiddenNoticeELements(topvue, "notice28", "1", "i");
				hiddenNoticeELements(topvue, "notice28", "1", "q");
				hiddenFather(topvue,"notice29");
				hiddenNoticeELements(topvue, "notice29", "1", "a");				
				hiddenNoticeELements(topvue, "notice29", "1", "i");
			}
		}
		
   } catch (e) {
		// TODO: handle exception
	}

	return true;	
}
/***
 * 控制特殊告知显示
 * @param topvue
 * @returns {Boolean}
 */
function showELementSByInsuTWo(topvue) {	
	try{
		if (!topvue.form_elements.commonFormNotice) {
			return true;
		}		
		var maininsuAge = getAgeFromBrithday(topvue.formdata.lcinsured.lcinsuredbirthday); // 年龄
		var formdata = topvue.formdata;
		var lcappntsex = formdata['lcappnt'].appntsex;
		var lcinsuredsex = formdata['lcinsured'].lcinsuredsex;
		var hasInsuTwoFlag = false;
		var twoinsuAge = "";
		try {
			if (formdata['lcinsured']
					&& formdata['lcinsured'].lcinsuredtwoflag
					&& formdata['lcinsured'].lcinsuredtwoflag.length>=1
					&& formdata['lcinsured'].lcinsuredtwoflag[0] == 'lcinsuredtwoflag') {
			twoinsuAge = getAgeFromBrithday(topvue.formdata.lcinsuredtwo.lcinsuredbirthday); // 年龄
			hasInsuTwoFlag = true;
			}
		} catch (e) {
			console.info("error : 附属被保险人 年龄 获取 失败 " + e);
		}
		var twoinsuSex='0';		 
		if(hasInsuTwoFlag){
		    twoinsuSex = topvue.formdata.lcinsuredtwo.lcinsuredsex;
		    
		}
		if(lcappntsex=='1'&&lcinsuredsex=='1'&&twoinsuSex=='1'){
			showFather(topvue,"notice28");
			showFather(topvue,"notice29");
			showNoticeELements(topvue, "notice28", "1", "a");
			showNoticeELements(topvue, "notice28", "1", "i");
			showNoticeELements(topvue, "notice28", "2", "i");
			hiddenNoticeELements(topvue, "notice28", "1", "q");
			showNoticeELements(topvue, "notice28", "2", "q");
			showNoticeELements(topvue, "notice28", "3", "q");
			showNoticeELements(topvue, "notice28", "4", "q");
			showNoticeELements(topvue, "notice29", "1", "a");
			showNoticeELements(topvue, "notice29", "1", "i");
			showNoticeELements(topvue, "notice29", "2", "i");
		}else{		
			if(lcappntsex=='1'&&lcinsuredsex=='1'){
				showFather(topvue,"notice28");
				showNoticeELements(topvue, "notice28", "1", "a");
				showNoticeELements(topvue, "notice28", "2", "q");
				showNoticeELements(topvue, "notice28", "1", "i");
				showNoticeELements(topvue, "notice28", "3", "q");
				hiddenNoticeELements(topvue, "notice28", "2", "i");
				hiddenNoticeELements(topvue, "notice28", "1", "q");
				hiddenNoticeELements(topvue, "notice28", "4", "q");
				showFather(topvue,"notice29");
				showNoticeELements(topvue, "notice29", "1", "a");				
				showNoticeELements(topvue, "notice29", "1", "i");
				hiddenNoticeELements(topvue, "notice29", "2", "i");
				
			}else if(lcappntsex=='1'&&twoinsuSex=='1'){
				
				showFather(topvue,"notice28");
				showNoticeELements(topvue, "notice28", "1", "a");
				showNoticeELements(topvue, "notice28", "2", "q");
				hiddenNoticeELements(topvue, "notice28", "1", "i");
				hiddenNoticeELements(topvue, "notice28", "3", "q");
				showNoticeELements(topvue, "notice28", "2", "i");
				hiddenNoticeELements(topvue, "notice28", "1", "q");
				showNoticeELements(topvue, "notice28", "4", "q");
				showFather(topvue,"notice29");
				showNoticeELements(topvue, "notice29", "1", "a");				
				hiddenNoticeELements(topvue, "notice29", "1", "i");
				showNoticeELements(topvue, "notice29", "2", "i");
			}else if(lcinsuredsex=='1'&&twoinsuSex=='1'){
				showFather(topvue,"notice28");
				hiddenNoticeELements(topvue, "notice28", "1", "a");
				hiddenNoticeELements(topvue, "notice28", "2", "q");
				showNoticeELements(topvue, "notice28", "1", "i");
				showNoticeELements(topvue, "notice28", "3", "q");
				showNoticeELements(topvue, "notice28", "2", "i");
				hiddenNoticeELements(topvue, "notice28", "1", "q");
				showNoticeELements(topvue, "notice28", "4", "q");
				showFather(topvue,"notice29");
				hiddenNoticeELements(topvue, "notice29", "1", "a");				
				showNoticeELements(topvue, "notice29", "1", "i");
				showNoticeELements(topvue, "notice29", "2", "i");			
			}else if(lcappntsex=='1'){
				showFather(topvue,"notice28");
				showNoticeELements(topvue, "notice28", "1", "a");
				showNoticeELements(topvue, "notice28", "2", "q");
				hiddenNoticeELements(topvue, "notice28", "1", "i");
				hiddenNoticeELements(topvue, "notice28", "3", "q");
				hiddenNoticeELements(topvue, "notice28", "2", "i");
				hiddenNoticeELements(topvue, "notice28", "1", "q");
				hiddenNoticeELements(topvue, "notice28", "4", "q");
				showFather(topvue,"notice29");
				showNoticeELements(topvue, "notice29", "1", "a");				
				hiddenNoticeELements(topvue, "notice29", "1", "i");
				hiddenNoticeELements(topvue, "notice29", "2", "i");	
			}else if(lcinsuredsex=='1'){
				showFather(topvue,"notice28");
				hiddenNoticeELements(topvue, "notice28", "1", "a");
				hiddenNoticeELements(topvue, "notice28", "2", "q");
				showNoticeELements(topvue, "notice28", "1", "i");
				showNoticeELements(topvue, "notice28", "3", "q");
				hiddenNoticeELements(topvue, "notice28", "2", "i");
				hiddenNoticeELements(topvue, "notice28", "1", "q");
				hiddenNoticeELements(topvue, "notice28", "4", "q");
				showFather(topvue,"notice29");
				hiddenNoticeELements(topvue, "notice29", "1", "a");				
				showNoticeELements(topvue, "notice29", "1", "i");
				hiddenNoticeELements(topvue, "notice29", "2", "i");	
			}else if(twoinsuSex=='1'){
				showFather(topvue,"notice28");
				hiddenNoticeELements(topvue, "notice28", "1", "a");
				hiddenNoticeELements(topvue, "notice28", "2", "q");
				hiddenNoticeELements(topvue, "notice28", "1", "i");
				hiddenNoticeELements(topvue, "notice28", "3", "q");
				showNoticeELements(topvue, "notice28", "2", "i");
				hiddenNoticeELements(topvue, "notice28", "1", "q");
				showNoticeELements(topvue, "notice28", "4", "q");
				showFather(topvue,"notice29");
				hiddenNoticeELements(topvue, "notice29", "1", "a");				
				hiddenNoticeELements(topvue, "notice29", "1", "i");
				showNoticeELements(topvue, "notice29", "2", "i");	
			}else{
				
				hiddenFather(topvue,"notice28");
				hiddenNoticeELements(topvue, "notice28", "1", "a");
				hiddenNoticeELements(topvue, "notice28", "2", "q");
				hiddenNoticeELements(topvue, "notice28", "1", "i");
				hiddenNoticeELements(topvue, "notice28", "3", "q");
				hiddenNoticeELements(topvue, "notice28", "2", "i");
				hiddenNoticeELements(topvue, "notice28", "1", "q");
				hiddenNoticeELements(topvue, "notice28", "4", "q");
				hiddenFather(topvue,"notice29");
				hiddenNoticeELements(topvue, "notice29", "1", "a");				
				hiddenNoticeELements(topvue, "notice29", "1", "i");
				hiddenNoticeELements(topvue, "notice29", "2", "i");	
			}
		}
		//婴幼儿告知
		if(hasInsuTwoFlag){
			if(maininsuAge<=2&&twoinsuAge<=2){
				showFather(topvue,"notice30");
				showFather(topvue,"notice31");
				showNoticeELements(topvue, "notice30", "1", "i");
				showNoticeELements(topvue, "notice30", "2", "i");
				showNoticeELements(topvue, "notice30", "1", "q");
				showNoticeELements(topvue, "notice30", "2", "q");
				showNoticeELements(topvue, "notice31", "1", "i");	
				showNoticeELements(topvue, "notice31", "2", "i");
			}else if(twoinsuAge<=2){
				showFather(topvue,"notice30");
				showFather(topvue,"notice31");
				hiddenNoticeELements(topvue, "notice30", "1", "i");
				showNoticeELements(topvue, "notice30", "2", "i");
				showNoticeELements(topvue, "notice30", "1", "q");
				showNoticeELements(topvue, "notice30", "2", "q");
				hiddenNoticeELements(topvue, "notice31", "1", "i");	
				showNoticeELements(topvue, "notice31", "2", "i");
			}else{
				hiddenFather(topvue,"notice30");
				hiddenFather(topvue,"notice31");
				hiddenNoticeELements(topvue, "notice30", "1", "i");
				hiddenNoticeELements(topvue, "notice30", "2", "i");
				hiddenNoticeELements(topvue, "notice30", "1", "q");
				hiddenNoticeELements(topvue, "notice30", "2", "q");
				hiddenNoticeELements(topvue, "notice31", "1", "i");	
				hiddenNoticeELements(topvue, "notice31", "2", "i");
			}
		}else{
			if(maininsuAge<=2){
				showFather(topvue,"notice30");
				showFather(topvue,"notice31");
				showNoticeELements(topvue, "notice30", "1", "i");
				hiddenNoticeELements(topvue, "notice30", "2", "i");
				showNoticeELements(topvue, "notice30", "1", "q");
				showNoticeELements(topvue, "notice30", "2", "q");
				showNoticeELements(topvue, "notice31", "1", "i");	
				hiddenNoticeELements(topvue, "notice31", "2", "i");
			}else{
				hiddenFather(topvue,"notice30");
				hiddenFather(topvue,"notice31");
				hiddenNoticeELements(topvue, "notice30", "1", "i");
				hiddenNoticeELements(topvue, "notice30", "2", "i");
				hiddenNoticeELements(topvue, "notice30", "1", "q");
				hiddenNoticeELements(topvue, "notice30", "2", "q");
				hiddenNoticeELements(topvue, "notice31", "1", "i");	
				hiddenNoticeELements(topvue, "notice31", "2", "i");
			}			
		}
		if(hasInsuTwoFlag){
			if(maininsuAge<18||twoinsuAge<18){
				showFather(topvue,"notice49");
				showFather(topvue,"notice50");
				showFather(topvue,"notice51");
				showFather(topvue,"notice52");
				showNoticeELements(topvue, "notice50", "1", "q");
				showNoticeELements(topvue, "notice51", "1", "q");
				showNoticeELements(topvue, "notice52", "1", "q");
			}else{
				hiddenFather(topvue,"notice49");
				hiddenFather(topvue,"notice50");
				hiddenFather(topvue,"notice51");
				hiddenFather(topvue,"notice52");
				hiddenNoticeELements(topvue, "notice50", "1", "q");
				hiddenNoticeELements(topvue, "notice51", "1", "q");
				hiddenNoticeELements(topvue, "notice52", "1", "q"); 
			}
		}else{
			if(maininsuAge<18){
				showFather(topvue,"notice49");
				showFather(topvue,"notice50");
				showFather(topvue,"notice51");
				showFather(topvue,"notice52");
				showNoticeELements(topvue, "notice50", "1", "q");
				showNoticeELements(topvue, "notice51", "1", "q");
				showNoticeELements(topvue, "notice52", "1", "q");
			}else{
				hiddenFather(topvue,"notice49");
				hiddenFather(topvue,"notice50");
				hiddenFather(topvue,"notice51");
				hiddenFather(topvue,"notice52");
				hiddenNoticeELements(topvue, "notice50", "1", "q");
				hiddenNoticeELements(topvue, "notice51", "1", "q");
				hiddenNoticeELements(topvue, "notice52", "1", "q"); 
			}
		}
	    //吸烟smoke
		if(hasInsuTwoFlag){
			/*showFather(topvue,"notice21");*/
			showNoticeELements(topvue, "notice21", "2", "i");
			showNoticeELements(topvue, "notice21", "5", "q");
			showNoticeELements(topvue, "notice21", "6", "q");
			showNoticeELements(topvue, "notice21", "7", "q");	
			showNoticeELements(topvue, "notice21", "8", "q");
		}else{
			/*hiddenFather(topvue,"notice21");*/
			hiddenNoticeELements(topvue, "notice21", "2", "i");
			hiddenNoticeELements(topvue, "notice21", "5", "q");
			hiddenNoticeELements(topvue, "notice21", "6", "q");
			hiddenNoticeELements(topvue, "notice21", "7", "q");	
			hiddenNoticeELements(topvue, "notice21", "8", "q");
		}
		 //饮酒drink
		if(hasInsuTwoFlag){
		/*	showFather(topvue,"notice22");*/
			showNoticeELements(topvue, "notice22", "2", "i");
			showNoticeELements(topvue, "notice22", "7", "q");
			showNoticeELements(topvue, "notice22", "8", "q");
			showNoticeELements(topvue, "notice22", "9", "q");	
			showNoticeELements(topvue, "notice22", "10", "q");
			showNoticeELements(topvue, "notice22", "11", "q");
			showNoticeELements(topvue, "notice22", "12", "q");
		}else{
			/*hiddenFather(topvue,"notice22");*/
			hiddenNoticeELements(topvue, "notice22", "2", "i");
			hiddenNoticeELements(topvue, "notice22", "7", "q");
			hiddenNoticeELements(topvue, "notice22", "8", "q");
			hiddenNoticeELements(topvue, "notice22", "9", "q");	
			hiddenNoticeELements(topvue, "notice22", "10", "q");
			hiddenNoticeELements(topvue, "notice22", "11", "q");
			hiddenNoticeELements(topvue, "notice22", "12", "q");
		}
		//保险公司
		if(hasInsuTwoFlag){
			/*	showFather(topvue,"notice22");*/
				showNoticeELements(topvue, "notice40", "2", "i");
				showNoticeELements(topvue, "notice40", "12", "q");
				showNoticeELements(topvue, "notice40", "13", "q");
				showNoticeELements(topvue, "notice40", "14", "q");
				showNoticeELements(topvue, "notice40", "15", "q");
				showNoticeELements(topvue, "notice40", "16", "q");
				showNoticeELements(topvue, "notice40", "17", "q");
				showNoticeELements(topvue, "notice40", "18", "q");
				showNoticeELements(topvue, "notice40", "19", "q");
				showNoticeELements(topvue, "notice40", "20", "q");
				showNoticeELements(topvue, "notice40", "21", "q");
				showNoticeELements(topvue, "notice40", "22", "q");
				showNoticeELements(topvue, "notice40", "23", "q");
			}else{
				/*hiddenFather(topvue,"notice22");*/
				hiddenNoticeELements(topvue, "notice40", "2", "i");
				hiddenNoticeELements(topvue, "notice40", "12", "q");
				hiddenNoticeELements(topvue, "notice40", "13", "q");
				hiddenNoticeELements(topvue, "notice40", "14", "q");
				hiddenNoticeELements(topvue, "notice40", "15", "q");
				hiddenNoticeELements(topvue, "notice40", "16", "q");
				hiddenNoticeELements(topvue, "notice40", "17", "q");
				hiddenNoticeELements(topvue, "notice40", "18", "q");
				hiddenNoticeELements(topvue, "notice40", "19", "q");
				hiddenNoticeELements(topvue, "notice40", "20", "q");
				hiddenNoticeELements(topvue, "notice40", "21", "q");
				hiddenNoticeELements(topvue, "notice40", "22", "q");
				hiddenNoticeELements(topvue, "notice40", "23", "q");
			}
   } catch (e) {
		// TODO: handle exception
	}

	return true;
	
}

// 告知加载后的处理
afterloadNewElements.notice_tabinfo = function(url, form_element) {
	console.info( " 告知加载后的处理");
	var topvue = getTopvueObj(this);
	if(this.formdata.newContApply.investment =='N'){
		checksimpleNotice(topvue);
		checkinfantNotice(topvue);
		showELementSByInsu(topvue);
	}else{
		checkInsuTwoNotice(topvue);
		showELementSByInsuTWo(topvue);
	}
	

	var showElement= 0 ;
	for ( var index in topvue.form_elements.commonFormNotice) {
		if(topvue.form_elements.commonFormNotice[index].elementstatus=='01'){
			showElement++;
		}
		
	}
	
	if(showElement==0){
		
		$("#notice_submit").trigger("click");
	}else{
		$("#tab_notice_tabinfo").removeClass("disabled");
		$("#notice_tabinfo").removeClass("disabled");
		
	}
	
};


//告知提交前 清空所有不显示的数据
beforesubmitvueform.notice_tabinfoform = function() {
//	v-bind:elementstatus ="form_element.elementstatus"
	//$("#notice_tabinfoform").find("input[elementstatus][elementstatus!='01'][value!='']").val('').trigger("click");
$("#notice_tabinfoform").find("input:checked[type='radio'][elementstatus]:hidden[value!=''],input[type!='radio'][elementstatus]:hidden[value]").val('').click();
//$("#notice_tabinfoform").find("input[type!='radio'][elementstatus][elementstatus!='01'][value!='']").val('').click();

//	if($("#notice_tabinfoform").find("[elementstatus][elementstatus!='01']").length==0){
//		
//		
////		this.$set(this.formdata.newContApply,"currentSIDIndex",7);
//		
//		this.$set(this.formdata.newContApply,"currentSID", "contsubmit_tabinfo");
////		this.$set(this.formdata.newContApply,"currentSIDIndex",8);
////		$("#tab_notice_tabinfo").removeClass("active");
////		$("#tab_notice_tabinfo").addClass("disabled");
////		$("#notice_tabinfo").removeClass("active");
////		$("#notice_tabinfo").addClass("disabled");
////		$("#tab_contsubmit_tabinfo").addClass("active");
////		$("#contsubmit_tabinfo").addClass("active");
//	}else{
		 
		
//	}
//if($("#notice_tabinfoform").find("[elementstatus][elementstatus='01']").length==0){
//		
//		
//		this.$set(this.formdata.newContApply,"currentSID", "contsubmit");
//		this.$set(this.formdata.newContApply,"currentSIDIndex",8);
// con
//	}else{
//		 
//		
//	}
	return true; 
};

aftersubmitvueform.notice_tabinfoform = function() {
	 
	
//	if($("#notice_tabinfoform").find("[name^='noticeinfo'][elementstatus][elementstatus='01']").length==0){
//		
//		this.$set(this.formdata.newContApply,"currentSID", "contsubmit");
//		this.$set(this.formdata.newContApply,"currentSIDIndex",8);
//		this.$set(this.formdata.newContApply,"contsubmit", false);
//		$('#tab_contsubmit_tabinfo').trigger("click");
//		this.$set(this.form_elementsBYID.INSHinsuranceContInput['notice_tabinfo'],
//				"elementstatus", "04");
//		
//		
//	}else{
//		 
//		
//	}
	try {
		var proposalcontno=vueobj["testdivchange"].formdata.lccont.proposalcontno;
		buttonControl(proposalcontno);
	} catch (e) {

	}
	return true; 
};
//主要工资来源
commonCombobox_option.commonCombobox_incomesource = {
		url : path + '/newCont/codeselect/common/appntincomesource',
		valueField : "code",
		relateType: "vue",
		// 显示在输入框的
		inputText :  "codename" ,
		textShow : [ "codename" ]
	};

afterVueSelect.notice32q2 = function(form_element) {
	var topvue = getTopvueObj(this);
	if(vueobj["testdivchange"].formdata.noticeincomeInsu.noticeinfo2 != "4"){
		hiddenNoticeELements(topvue, "notice32", "3", "q");
		vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.noticeincomeInsu,"noticeinfo3", null);
	}else{
		showNoticeELements(topvue, "notice32", "3", "q");
	}
	
}
afterVueSelect.notice30i1 = function(form_element) {
	var topvue = getTopvueObj(this);
	var form =$(this.$el).parentsUntil("form").parent("form");		
	if(vueobj["testdivchange"].formdata.noticeinfos[25].insuredyesorno != null&&vueobj["testdivchange"].formdata.noticeinfos[25].insuredyesorno != "Y"){
		if(vueobj["testdivchange"].formdata.noticeinfos[25].insuredyesorno2 != null&&vueobj["testdivchange"].formdata.noticeinfos[25].insuredyesorno2 == "Y")
		{
	
		}else{
			//重置校验
			form.data('bootstrapValidator').resetField($('#notice30q125'));
			form.data('bootstrapValidator').resetField($('#notice30q225'));
			//置灰输入框并清空值
			$('#notice30q125').attr("disabled",true);
		vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.noticeinfantInsu,"noticeinfo1", null);
			$('#notice30q225').attr("disabled",true);
		vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.noticeinfantInsu,"noticeinfo2", null);	
		}		
	}else{
		if(vueobj["testdivchange"].formdata.noticeinfos[25].insuredyesorno2 != null&&vueobj["testdivchange"].formdata.noticeinfos[25].insuredyesorno2 == "Y")
		{
			
		}else{
			$('#notice30q125').removeAttr("disabled");
			$('#notice30q225').removeAttr("disabled");
		}
		
	}
}
afterVueSelect.notice30i2 = function(form_element) {
	var topvue = getTopvueObj(this);
	var form =$(this.$el).parentsUntil("form").parent("form");
	
	if(vueobj["testdivchange"].formdata.noticeinfos[25].insuredyesorno2 != null&&vueobj["testdivchange"].formdata.noticeinfos[25].insuredyesorno2 != "Y"){
		if(vueobj["testdivchange"].formdata.noticeinfos[25].insuredyesorno != null&&vueobj["testdivchange"].formdata.noticeinfos[25].insuredyesorno == "Y"){

		}else{
			//重置校验
		    form.data('bootstrapValidator').resetField($('#notice30q125'));
			form.data('bootstrapValidator').resetField($('#notice30q225'));
			//置灰输入框并清空值
			$('#notice30q125').attr("disabled",true);
			vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.noticeinfantInsu,"noticeinfo1", null);
			$('#notice30q225').attr("disabled",true);
			vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.noticeinfantInsu,"noticeinfo2", null);
		}

	}else{
		if(vueobj["testdivchange"].formdata.noticeinfos[25].insuredyesorno != null&&vueobj["testdivchange"].formdata.noticeinfos[25].insuredyesorno == "Y"){
			
		}else{
			$('#notice30q125').removeAttr("disabled");
			$('#notice30q225').removeAttr("disabled");
		}		
	}
}
//是否负债，负债打开输入框，否则置灰必录项
afterVueSelect.notice33i1 = function(form_element) {
	var topvue = getTopvueObj(this);
	var form =$(this.$el).parentsUntil("form").parent("form");
	
	if(vueobj["testdivchange"].formdata.noticeinfos[28].insuredyesorno != "Y"){
		//重置校验
		form.data('bootstrapValidator').resetField($('#notice33q128'));
		form.data('bootstrapValidator').resetField($('#notice33q228'));
		//置灰输入框并清空值
		$('#notice33q128').attr("disabled",true);
		vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.noticeliabilityInsu,"noticeinfo1", null);
		$('#notice33q228').attr("disabled",true);
		vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.noticeliabilityInsu,"noticeinfo2", null);
	}else{
		$('#notice33q128').removeAttr("disabled");
		$('#notice33q228').removeAttr("disabled");
	}
}