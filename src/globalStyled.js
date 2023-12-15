import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


html,
body {
	width: 100%;
	height: 100%;
}

html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
code,
blockquote,
abbr,
sub,
sup,
time,
em,
strong,
img,
q,
dl,
dt,
dd,
address,
cite,
ul,
ol,
li,
header,
section,
footer,
article,
nav,
aside,
table,
caption,
thead,
tbody,
tfoot,
tr,
td,
th,
form,
fieldset,
legend,
label {
	margin: 0;
	padding: 0;
}

ul,
ol,
li {
	list-style: none;
}
q {
	quotes: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
textarea {
	resize: none;
}

a:link {
	color: #222;
	text-decoration: none;
}
a:visited {
	color: #222;
}
a:hover {
	color: #222;
}
a:active {
	color: #222;
}

em,
address {
	font-style: normal;
}
hr,
caption,
legend {
	display: none;
}
img,
fieldset {
	border: none;
}
label,
button {
	cursor: pointer;
}

body {
	color: #222;
	font-size: 12px;
	/* font-size:0.8em; */
	line-height: 1.2;
	font-family: 'Nanum Gothic', 돋움, 굴림;
}

.text-center {
	height: 100px;
	line-height: 100px;
	text-align: center;
}

.text-hide {
	display: none;
}

/* 스크린리더가 읽을 수 있어 접근성이 향상됨 */
.sr-only {
	position: absolute;
	left: -9999px;
}

.clearfix {
	*zoom: 1;
}

.clearfix:after {
	display: block;
	clear: both;
	content: '';
}

`;
