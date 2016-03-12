default: print-usage

TEXT_EDITOR        = emacs
GIT_COMMIT_MESSAGE = "editing..."

print-usage:
	@echo "make <command>"
	@echo ""
	@echo "  print-usage: Prints this usage message."
	@echo "  start-editor: Opens source files in text editor."
	@echo "  compile-webpage: Compiles the required source files into the ./www directory."
	@echo "  upload-webpage: Compiles and uploads the ./www director to bomorgan.com"
	@echo ""
	@echo "  git-pull: "
	@echo "  git-push: "
	@echo "  git-commit: "
	@echo "  git-add: "
	@echo "  git-development-cycle: "
	@echo ""

start-editor:
	$(TEXT_EDITOR) makefile html/*.html js/*.js

compile-webpage:
	mkdir -p ./www/
	mkdir -p ./www/scripts/
	mkdir -p ./www/images/
	cp ./html/*.html ./www/
	cp ./js/*.js ./www/scripts/
	cp ./images/go_stone_white.png ./www/images/
	cp ./images/go_stone_black.png ./www/images/
	cp ./images/go_empty_cell.png ./www/images/
	chmod -R a+rx ./www/

upload-webpage: compile-webpage
	rsync -avz ./ bomorgan@bomorgan.com:bomorgan/nips-sals/

git-pull:
	git pull

git-push:
	git push

git-commit:
	git commit -am $(GIT_COMMIT_MESSAGE)

git-add:
	git add --all .

git-development-cycle:
	make git-pull; make compile-webpage; make git-add; make git-commit; make git-push


