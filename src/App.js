import logo from "./logo.svg";
import "./App.scss";
import React, { useRef, useEffect } from "react";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";
function App() {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");
  const tl = new TimelineLite();
  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } })
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  });
  return (
    <section className="main">
      <div className="container">
        <>
          <div ref={(el) => (container = el)} className="img-container">
            <img
              src="https://images.unsplash.com/photo-1497271679421-ce9c3d6a31da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
              alt="People"
              ref={(el) => (image = el)}
            />
          </div>
        </>
      </div>
    </section>
  );
}

export default App;
