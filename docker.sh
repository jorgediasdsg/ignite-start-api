#Mostra os containers ativos
docker ps

#Mostra a quanto tempo foi criado e o statos
docker ps -a

#Remover docker docker já parado.
docker rm <id>

# Iniciar docker
docker start <nome>

#Parar doker
docker stop

#Subir o container
docker-compose up -d

#Parar e excluir container
docker-compose down

#Abrir terminal do docker
docker exec -it <id> /bin/bash

#Mostra ultimos logs
docker logs

#Mostra em tempo real
docker logs -f