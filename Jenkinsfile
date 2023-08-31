pipeline{ 

  agent any

  tools {nodejs "node"}

  stages{
             
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test main page') {
      steps {
         sh 'npm run cy:run:main-page:remote:api && npm run cy:run:main-page:remote:ui'  
      }
    }

       stage('Test registration page') {
      steps {
         sh 'npm run cy:run:reg:ui'  
      }
    }

    stage('Test login page') {
      steps {
         sh 'npm run cy:run:login:api'

      }
    }
      
  }
}

