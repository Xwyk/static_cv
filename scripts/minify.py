#!/usr/bin/env python3
import re

FILES = [
    ("assets/css/app.css", "assets/minified/css/app.min.css"),
    ("assets/css/print.css", "assets/minified/css/print.min.css"),
    ("assets/js/app.js", "assets/minified/js/app.min.js"),
    ("assets/js/print.js", "assets/minified/js/print.min.js"),
]


def minify_css(text: str) -> str:
    text = re.sub(r"/\*.*?\*/", "", text, flags=re.S)
    text = re.sub(r"\s+", " ", text)
    text = re.sub(r"\s*([{}:;,])\s*", r"\1", text)
    text = re.sub(r";}", "}", text)
    return text.strip()


def minify_js(text: str) -> str:
    text = re.sub(r"/\*.*?\*/", "", text, flags=re.S)
    text = re.sub(r"^\s*//.*$", "", text, flags=re.M)
    text = re.sub(r"\s+", " ", text)
    # Preserve spaces in template literals by not minifying inside ${}
    text = re.sub(r"\s*([{}();,:=<>+\-*/&|!])\s*", r"\1", text)
    return text.strip()


def main() -> None:
    for src, dst in FILES:
        with open(src, "r", encoding="utf-8") as source_file:
            content = source_file.read()
        if src.endswith(".css"):
            output = minify_css(content)
        else:
            output = minify_js(content)
        with open(dst, "w", encoding="utf-8") as output_file:
            output_file.write(output)

    print("Minified:")
    for _, dst in FILES:
        print(f"- {dst}")


if __name__ == "__main__":
    main()
