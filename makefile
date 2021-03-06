default: print-usage

TEXT_EDITOR        = emacs
GIT_COMMIT_MESSAGE = "editing..."
REMOTE_DIRECTORY   = bomorgan@sals.bomorgan.io:sals.bomorgan.io/public/

less-usage:
	make -s print-usage | less

print-usage:
	@echo ""
	@echo "USAGE"
	@echo ""
	@echo "  make <command>"
	@echo ""
	@echo "COMMANDS"
	@echo ""
	@echo "  print-usage"
	@echo "  start-editor"
	@echo "  compile-webpage"
	@echo "  upload-webpage"
	@echo "  git-pull"
	@echo "  git-push"
	@echo "  git-commit"
	@echo "  git-add"
	@echo "  git-development-cycle"
	@echo ""
	@echo "COMMANDS' DESCRIPTIONS"
	@echo ""
	@echo "  print-usage"
	@echo "    - prints this usage message"
	@echo ""
	@echo "  start-editor"
	@echo "    - $(TEXT_EDITOR) is used to edit all source files"
	@echo ""
	@echo "  compile-webpage"
	@echo "    - compiles the required source files into the ./www directory"
	@echo ""
	@echo "  upload-webpage"
	@echo "    - compiles and uses rsync over ssh to update the remote bomorgan.com/sals"
	@echo "      directory"
	@echo ""
	@echo "  git-pull"
	@echo "    - pulls from remote repository"
	@echo ""
	@echo "  git-push"
	@echo "    - pushes to remote repository"
	@echo ""
	@echo "  git-commit"
	@echo "    - uses \"$(GIT_COMMIT_MESSAGE)\" as git commit message"
	@echo ""
	@echo "  git-add"
	@echo "    - add --all files to reflect the current directory exactly"
	@echo ""
	@echo "  git-development-cycle"
	@echo "    - git-pull, compile-webpage, git-add, git-commit, git-push"
	@echo ""
	@echo "DATE"
	@echo ""
	@echo "  This documentation was last edited on April 18, 2016."
	@echo ""
	@echo "AUTHORS"
	@echo ""
	@echo "  Bo Morgan <bo.morgan@bomorgan.io>"
	@echo ""

SOURCE_FILES=              \
  js/SalsCons.js           \
  js/SalsCore.js           \
  js/SalsFrameArray.js     \
  js/SalsFrame.js          \
  js/SalsGo.js             \
  js/SalsGraph.js*         \
  js/SalsHashMatrix.js     \
  js/SalsIndex.js          \
  js/SalsLogic.js          \
  js/SalsMachine.js        \
  js/SalsMath.js           \
  js/SalsObject.js         \
  js/SalsObjectRegistry.js \
  js/SalsPattern.js        \
  js/SalsPlanner.js        \
  js/SalsPrimitive.js      \
  js/SalsRender.js         \
  js/SalsThree.js          \
  js/SalsVis.js            \
  js/sals.js               \
  html/index.html          \
  sals.sh                  \
  makefile                 \
  README.md

start-editor:
	$(TEXT_EDITOR) $(SOURCE_FILES)

compile-webpage:
	rm -Rf ./www/
	mkdir -p ./www
	cp -af ./html/* ./www/
	rm -Rf ./www/scripts/
	mkdir -p ./www/scripts/
	cp -af ./js/* ./www/scripts/
	rm -Rf ./www/scripts/third-party
	mkdir -p ./www/scripts/third-party
	cp -af ./js/third-party/* ./www/scripts/third-party
	rm -Rf ./www/images
	mkdir -p ./www/images/
	cp -af ./images/go_stone_white.png ./www/images/
	cp -af ./images/go_stone_black.png ./www/images/
	cp -af ./images/go_empty_cell.png ./www/images/
	chmod -R a+rx ./www/

upload-webpage: compile-webpage
	rsync -avz ./www/ $(REMOTE_DIRECTORY)

git-pull:
	git pull

git-push:
	git push

git-commit:
	git commit -am $(GIT_COMMIT_MESSAGE)

git-add:
	git add --all .

git-development-cycle:
	make git-pull; make compile-webpage; make git-add; make git-commit; make git-push; make upload-webpage

sals:
	./sals.sh


