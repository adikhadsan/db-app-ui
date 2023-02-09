pipeline{
    agent any
     environment {
		DOCKERHUB_CREDENTIALS = credentials('DockerHub')
	        GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD')
	        PORT_ui= 9193
//           DIST= /var/lib/jenkins/workspace/${job}/dist
          USER_DOCKER= 8485012281
          IMG_NAME= 'db_ui'
          CONTAINER_NAME= 'ui-container'
          
	}
    stages {
// 	    stage('name'){
// 		    steps {
			    
// 			    sh'echo $JOB_NAME'
// 	        sh'job=${JOB_NAME}'
// 	        sh'echo $job'
// 		    }
// 	    }
    
    
	   

//         stage('angular build') {
//              steps {
            
//                 sh'''
//                   pwd
//                   cd /var/lib/jenkins/workspace/${JOB_NAME}/
//                   ls
//                   npm i
//                   ng build
              
              
//                   '''
//              }
//          }
	
	stage('	Copy dist file'){
	     steps{
		 sh'pwd'    
		 sh'cp -r /var/lib/jenkins/workspace/$JOB_NAME/dist .'
		 sh'ls'    
		// sh 'docker build -t spring-img --build-arg dokcerjob=$JOB_NAME .'
	     }
	 }
	    
	  
	
	    
	    stage('git commit id'){
		    steps{
// 			    sh'git_id=$(git rev-parse --short "$GITHUB_SHA")'
			    sh'echo $GIT_COMMIT'
		    }
	    }
	
	 stage('docker build'){
	     steps{
		 sh'docker build -t $USER_DOCKER/$IMG_NAME:$GIT_COMMIT .'
		// sh 'docker build -t spring-img-jar --build-arg dokcerjob=$JOB_NAME .'
	     }
	 } 
	 stage('image check'){
	     steps{
		 sh'sleep 30'
		 sh'docker images'
	     }
	 }
	 stage('docker login'){
	     steps{

		sh 'echo $DOCKERHUB_CREDENTIALS_USR'
		sh 'echo $DOCKERHUB_CREDENTIALS_PSW'
			sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR -p $DOCKERHUB_CREDENTIALS_PSW'
	     }
	 } 
	 stage('docker push'){
	     steps{
		 sh 'docker push $USER_DOCKER/$IMG_NAME:$GIT_COMMIT'
	     }
	 }
	 stage('docker run'){
	     steps{
// 		 sh 'docker run -d -p 5000:3306 --name mysql-$GIT_COMMIT -e MYSQL_ROOT_PASSWORD=root mysql'  
// 		 sh 'sleep 30'    
		 sh 'docker run -d -p $PORT_ui:8080 --net static --ip 10.11.0.14 --name $CONTAINER_NAME-$GIT_COMMIT $USER_DOCKER/$IMG_NAME:$GIT_COMMIT'
		 sh 'sleep 30'
		 sh 'docker ps'
	     }
	 }
    }
}
