pipeline{ 

  agent any

  tools {nodejs "node"}

  stages{
             
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm run cy:run:mainpage'
        
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

