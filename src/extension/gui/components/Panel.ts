/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


module egret {

	/**
	 * @class egret.Panel
	 * @classdesc
	 * 带有标题，内容区域的面板组件
	 * @extends egret.SkinnableContainer
	 */	
    export class Panel extends SkinnableContainer {
        /**
         * 构造函数
		 * @method egret.Panel#constructor
         */
        public constructor() {
            super();
            this.hostComponentKey = "egret.Panel";
            this.touchEnabled = false;
        }

        /**
         * [SkinPart]标题显示对象
		 * @member egret.Panel#titleDisplay
         */
        public titleDisplay:IDisplayText;

        private _title:string = "";
        /**
         * 标题内容改变
         */
        private titleChanged:boolean;

        /**
         * 标题文本内容
		 * @member egret.Panel#title
         */
        public get title():string {
            return this._title;
        }

        public set title(value:string) {
            this._title = value;

            if (this.titleDisplay)
                this.titleDisplay.text = this.title;
        }

        /**
		 * @method egret.Panel#partAdded
		 * @param partName {string} 
		 * @param instance {any} 
         */
        public partAdded(partName:string, instance:any):void {
            super.partAdded(partName, instance);

            if (instance == this.titleDisplay) {
                this.titleDisplay.text = this.title;
            }
        }

    }
}