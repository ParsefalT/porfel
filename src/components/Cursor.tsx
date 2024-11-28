import { useEffect } from "react";
export default function Cursor(): JSX.Element {
	useEffect(() => {
		const cursorBall = document.querySelector(".cursor-ball") as HTMLDivElement;
		document.addEventListener("mousemove", (e) => {
			cursorBall.style.top = e.pageY + "px";
			cursorBall.style.left = e.pageX + "px";
		});
		document.addEventListener("mousedown", (e) => {
			if (e.button === 0) {
				cursorBall.classList.add("cursor-mousedown");
			}
		});

		document.addEventListener("mouseup", () => {
			cursorBall.classList.remove("cursor-mousedown");
		});
	}, []);
	return <div className="cursor-ball"></div>;
}
