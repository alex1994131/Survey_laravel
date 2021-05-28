/*
 Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.plugins.setLang("a11yhelp", "mk", {
    title: "Инструкции за пристапност",
    contents: "Содржина на делот за помош. За да го затворите овој дијалог притиснете ESC.",
    legend: [{
            name: "Општо",
            items: [{ name: "Мени за уредувачот", legend: "Press ${toolbarFocus} to navigate to the toolbar. Move to the next and previous toolbar group with TAB and SHIFT+TAB. Move to the next and previous toolbar button with RIGHT ARROW or LEFT ARROW. Press SPACE or ENTER to activate the toolbar button." }, {
                    name: "Дијалот за едиторот",
                    legend: "Inside a dialog, press TAB to navigate to the next dialog element, press SHIFT+TAB to move to the previous dialog element, press ENTER to submit the dialog, press ESC to cancel the dialog. When a dialog has multiple tabs, the tab list can be reached either with ALT+F10 or with TAB as part of the dialog tabbing order. With tab list focused, move to the next and previous tab with RIGHT and LEFT ARROW, respectively."
                }, { name: "Контекст-мени на уредувачот", legend: "Press ${contextMenu} or APPLICATION KEY to open context-menu. Then move to next menu option with TAB or DOWN ARROW. Move to previous option with SHIFT+TAB or UP ARROW. Press SPACE or ENTER to select the menu option. Open sub-menu of current option with SPACE or ENTER or RIGHT ARROW. Go back to parent menu item with ESC or LEFT ARROW. Close context menu with ESC." },
                { name: "Editor List Box", legend: "Inside a list-box, move to next list item with TAB OR DOWN ARROW. Move to previous list item with SHIFT+TAB or UP ARROW. Press SPACE or ENTER to select the list option. Press ESC to close the list-box." }, { name: "Editor Element Path Bar", legend: "Press ${elementsPathFocus} to navigate to the elements path bar. Move to next element button with TAB or RIGHT ARROW. Move to previous button with SHIFT+TAB or LEFT ARROW. Press SPACE or ENTER to select the element in editor." }
            ]
        },
        {
            name: "Наредби",
            items: [{ name: " Undo command", legend: "Press ${undo}" }, { name: " Redo command", legend: "Press ${redo}" }, { name: " Bold command", legend: "Press ${bold}" }, { name: " Italic command", legend: "Press ${italic}" }, { name: " Underline command", legend: "Press ${underline}" }, { name: " Link command", legend: "Press ${link}" }, { name: " Toolbar Collapse command", legend: "Press ${toolbarCollapse}" }, { name: " Access previous focus space command", legend: "Press ${accessPreviousSpace} to access the closest unreachable focus space before the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces." },
                { name: " Access next focus space command", legend: "Press ${accessNextSpace} to access the closest unreachable focus space after the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces." }, { name: " Accessibility Help", legend: "Press ${a11yHelp}" }, { name: " Paste as plain text", legend: "Press ${pastetext}", legendEdge: "Press ${pastetext}, followed by ${paste}" }
            ]
        }
    ],
    tab: "Tab",
    pause: "Пауза",
    capslock: "Caps Lock",
    escape: "Escape",
    pageUp: "Page Up",
    pageDown: "Page Up",
    leftArrow: "Стрелка лево",
    upArrow: "Стрелка горе",
    rightArrow: "Стрелка десно",
    downArrow: "Стрелка доле",
    insert: "Insert",
    leftWindowKey: "Лево Windows копче",
    rightWindowKey: "Десно Windows копче",
    selectKey: "Select копче",
    numpad0: "Нум. таст. 0",
    numpad1: "Нум. таст. 1",
    numpad2: "Нум. таст. 2",
    numpad3: "Нум. таст. 3",
    numpad4: "Нум. таст. 4",
    numpad5: "Нум. таст. 5",
    numpad6: "Нум. таст. 6",
    numpad7: "Нум. таст. 7",
    numpad8: "Нум. таст. 8",
    numpad9: "Нум. таст. 9",
    multiply: "Multiply",
    add: "Add",
    subtract: "Subtract",
    decimalPoint: "Decimal Point",
    divide: "Divide",
    f1: "F1",
    f2: "F2",
    f3: "F3",
    f4: "F4",
    f5: "F5",
    f6: "F6",
    f7: "F7",
    f8: "F8",
    f9: "F9",
    f10: "F10",
    f11: "F11",
    f12: "F12",
    numLock: "Num Lock",
    scrollLock: "Scroll Lock",
    semiColon: "Semicolon",
    equalSign: "Equal Sign",
    comma: "Comma",
    dash: "Dash",
    period: "Period",
    forwardSlash: "Forward Slash",
    graveAccent: "Grave Accent",
    openBracket: "Open Bracket",
    backSlash: "Backslash",
    closeBracket: "Close Bracket",
    singleQuote: "Single Quote"
});