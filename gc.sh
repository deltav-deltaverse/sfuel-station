#!/bin/bash

# /**
#  * @license
#  * 
#  * SFuel Station
#  *
#  * This program is free software: you can redistribute it and/or modify
#  * it under the terms of the GNU Lesser General Public License as published by
#  * the Free Software Foundation, either version 3 of the License, or
#  * (at your option) any later version.
#  *
#  * This program is distributed in the hope that it will be useful,
#  * but WITHOUT ANY WARRANTY; without even the implied warranty of
#  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  * GNU Lesser General Public License for more details.
#  *
#  * You should have received a copy of the GNU Lesser General Public License
#  * along with this program.  If not, see <https://www.gnu.org/licenses/>.
#  * 
#  * /**
#  * @file gc.sh
#  * @copyright TheGreatAxios and Lilius, Inc 2022-Present
#  * 
#  * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
#  *
#  */

commitMsg=$@
branch="$(git rev-parse --abbrev-ref HEAD)"
echo $commitMsg
echo $branch

git add .

git commit -am "$HEAD $commitMsg"

git push -u origin "$branch"

gh pr create

gh pr merge

git checkout development

git pull --no-ff