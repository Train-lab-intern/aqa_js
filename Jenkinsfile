pipeline{ 

  agent any

  tools {nodejs "node"}

  stages{

 // stages {
        
 //    stage('Cloning Git') {
 //      steps {
 //        git 'https://github.com/gustavoapolinario/node-todo-frontend'
 //      }
 //    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm run cy:run'
      }
    }
        
  }
     post{
        success{
           publishHTML ([allowMissing: false,
           alwaysLinkToLastBuild: false,
           keepAll: true,
           reportDir: 'cypress/reports/html',
           reportFiles: 'index.html',
           reportName: 'HTML Report',
           ])
        }
     }
}
}
