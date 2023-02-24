pipeline{
    agent any
     environment {
		DOCKERHUB_CREDENTIALS = credentials('DockerHub')
	        GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse --short HEAD')
	        PORT_ui= 9193
//           DIST= /var/lib/jenkins/workspace/${job}/dist
          USER_DOCKER= 8485012281
          PASS_DOCKER= "Aditya@123"
          IMG_NAME= 'db_ui'
          docker= sh (script: 'sshpass -p s1 ssh vboxuser@192.168.56.102 docker --version',returnStdout: true)
//           CONTAINER_NAME= 'ui-container'
          
	}
    stages {
// 	    stage('name'){
// 		    steps {
			    
// 			    sh'echo $JOB_NAME'
// 	        sh'job=${JOB_NAME}'
// 	        sh'echo $job'
// 		    }
// 	    }
    
    
	   

        stage('angular build') {
             steps {
            
                sh'''
                  pwd
                  cd /var/lib/jenkins/workspace/${JOB_NAME}/
                  ls
                  npm i
                  ng build
              
              
                  '''
             }
         }
	
// 	stage('	Copy dist file'){
// 	     steps{
// 		 sh'pwd'    
//      sh'ls'    
// 		 sh'cp -r -i /var/lib/jenkins/workspace/$JOB_NAME/dist .'
// 		 sh'ls'    
// 		// sh 'docker build -t spring-img --build-arg dokcerjob=$JOB_NAME .'
// 	     }
// 	 }
	    
	  
	
	    
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
			sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $USER_DOCKER -p $PASS_DOCKER'
	     }
	 }
   stage('docker push'){
	     steps{
		 sh 'docker push $USER_DOCKER/$IMG_NAME:$GIT_COMMIT'
	     }
	 }   
   stage('docker check on remote ') {
     when { environment name: 'docker', value: '' }
     steps {
       sh 'ansible-playbook docker-playbook.yml'
     }
   }   
   stage('docker login on remote machine'){
	     steps{
         sh 'ansible-playbook login.yml --extra-vars "uname=$USER_DOCKER passwd=$PASS_DOCKER"'
       }
   }
	 
	 stage('docker container run on remote'){
	     steps{
         sh 'ansible-playbook frontend.yml --extra-vars "image_name=$USER_DOCKER/$IMG_NAME:$GIT_COMMIT port=$PORT_ui"'    
		     sh 'sleep 30'
		     sh 'docker ps'
	     }
	 }
    }
}
