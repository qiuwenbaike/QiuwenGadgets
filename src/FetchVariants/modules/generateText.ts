const generateText = (string: string) =>
	`<ul id="fetchvariants">
		<li id="zh">-{zh|${string}}-</li>
		<li id="zh-hans">-{zh-hans|${string}}-</li>
		<li id="zh-hant">-{zh-hant|${string}}-</li>
		<li id="zh-cn">-{zh-cn|${string}}-</li>
		<li id="zh-hk">-{zh-hk|${string}}-</li>
		<li id="zh-mo">-{zh-mo|${string}}-</li>
		<li id="zh-my">-{zh-my|${string}}-</li>
		<li id="zh-sg">-{zh-sg|${string}}-</li>
		<li id="zh-tw">-{zh-tw|${string}}-</li>
	</ul>`;

export {generateText};
