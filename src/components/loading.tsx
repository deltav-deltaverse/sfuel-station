/**
 * @license
 * 
 * SChain Dashboard
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 * /**
 * @file src/ui/widgets/loading.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 *
 */

 import styled from "styled-components";

 const LoadingIconCss = styled.div`
     position: relative;
     margin: 0 auto;
     width: 40px;
     height: 40px;
 `;
 
interface Props {
    primary: boolean;
}

 const LoadingIcon = ({ primary }: Props) => {
 
     if (primary) {
         return (
             <LoadingIconCss className="lds-default">
                 <div className='primary'></div><div className='primary'></div><div className='primary'></div><div className='primary'></div><div className='primary'></div><div className='primary'></div><div className='primary'></div><div className='primary'></div><div className='primary'></div><div className='primary'></div><div className="primary"></div><div className='primary'></div>
             </LoadingIconCss>
         );    
     }
 
     return (
         <LoadingIconCss className="lds-default">
             <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
         </LoadingIconCss>
     );
 }
 
 export {
     LoadingIcon
 }