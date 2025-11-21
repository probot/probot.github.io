function copyToClipboard(text) {
    if(navigatior.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text);
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        return Promise.resolve();
    }
}

function addCopyButtons() {
    //find all codeBlocks
    const codeBlocks = document.querySelectorAll("pre > code");

    codeBlocks.forEach((codeBlock) => {
        const pre = codeBlock.parentElement

        if(!pre.parentElement.classList.contains("code-block-wrapper")) {
            const wrapper = document.createElement("div");
            wrapper.className = "code-block-wrapper";
            pre.parentNode.insertBefore(wrapper, pre)
            wrapper.appendChild(pre);
        }

        if(pre.parentElement.querySelector(".copy-button")) {
            return
        }

        //create copy button
        const copyButton = document.createElement("button");
        copyButton.className = "copy-button"
        copyButton.innerHTML = `
        <svg class="copy-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
            <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
        </svg>
        <span class="copy-text">Copy</span>
        `;
        copyButton.setAttribute("aria-label", "Copy code to clipboard");
        copyButton.setAttribute("type", "button");

        //add click event
        copyButton.addEventListener("click", async () => {
            const code = codeBlock.textContent;

            try {
                await copyToClipboard(code);
                
                //show success feedback
                copyButton.classList.add("copied");
                copyButton.innerHTML = `
                <svg class="check-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                </svg>
                <span class="copy-text">Copied!</span>
                `;

                //reset button after 2 secs
                setTimeout(() => {
                    copyButton.classList.remove("copied");
                    copyButton.innerHTML = `
                    <svg class="copy-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                        <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                    </svg>
                    <span class="copy-text">Copy</span>
                    `;
                }, 2000);
            } catch (err) {
                console.error(`Failed to copy: ${err}`);
            }
        });

        //add button to wrapper
        pre.parentElement.appendChild(copyButton);

    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addCopyButtons);
} else {
    addCopyButtons();
}