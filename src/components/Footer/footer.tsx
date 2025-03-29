import { createEffect, Show } from "solid-js";
import "./footer.css";

export default function Footer() {

    return (
        <footer class={`text-center justify-items-center footer`}>
            <div style={"height: 1.5em"} />
            <p style={"width: 100%; font-size: 12px; color: grey; font-weight: 200;"}>
                © 2025 Owen Wilson. All Rights Reserved.
            </p>
        </footer>
    );
}