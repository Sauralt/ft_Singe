NAME = Inception

COMPOSE_FILE = ./srcs/docker-compose.yml

BUILD = docker compose -f $(COMPOSE_FILE) up -d --build
STOP = docker compose -f $(COMPOSE_FILE) stop
DELETE = docker compose -f $(COMPOSE_FILE) down
DELETEALL = docker compose -f $(COMPOSE_FILE) down -v

all: $(NAME)

$(NAME):
	$(BUILD)

clean:
	$(STOP)
	$(DELETEALL)

fclean:
	$(STOP)
	$(DELETE)

re: fclean all

.PHONY: all clean fclean re