FROM tomcat:8.5.47-jdk8-openjdk
WORKDIR /usr/local/tomcat/webapps/
#COPY ./demo-0.0.1-SNAPSHOT.war .
#ADD ./target/*.war ./crud.war
COPY ./angular/* ./ROOT/ui/
#EXPOSE 8081
