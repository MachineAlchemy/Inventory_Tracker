"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/firestore */ \"(app-pages-browser)/./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Modal/Modal.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Correct Firestore imports\n\n\nfunction Home() {\n    _s();\n    const [inventory, setInventory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [itemName, setItemName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const updateInventory = async ()=>{\n        const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)();\n        const snapshot = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(db, \"inventory\"));\n        const docs = await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(snapshot);\n        const inventoryList = [];\n        docs.forEach((doc)=>{\n            inventoryList.push({\n                name: doc.id,\n                ...doc.data()\n            });\n        });\n        setInventory(inventoryList);\n        console.log(inventoryList);\n    };\n    const addItem = async (item)=>{\n        const docRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"inventory\"), item);\n        const docSnap = await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);\n        if (docSnap.exists()) {\n            const { quantity } = docSnap.data();\n            await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)(docRef, {\n                quantity: quantity + 1\n            });\n        } else {\n            await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)(docRef, {\n                quantity: 1\n            });\n        }\n        await updateInventory();\n    };\n    const removeItem = async (item)=>{\n        const docRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"inventory\"), item);\n        const docSnap = await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);\n        if (docSnap.exists()) {\n            const { quantity } = docSnap.data();\n            if (quantity === 1) {\n                await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.deleteDoc)(docRef);\n            } else {\n                await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)(docRef, {\n                    quantity: quantity - 1\n                });\n            }\n        }\n        await updateInventory();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        updateInventory();\n    }, []);\n    const handleOpen = ()=>setOpen(true);\n    const handleClose = ()=>setOpen(false); // Corrected function to update state\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h1\",\n                textAlign: \"center\",\n                children: \"Inventory Management\"\n            }, void 0, false, {\n                fileName: \"/Users/taimoorawan/Documents/Inventory_Tracker/app/page.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"outlined\",\n                onClick: handleOpen,\n                children: \"Add New Item\"\n            }, void 0, false, {\n                fileName: \"/Users/taimoorawan/Documents/Inventory_Tracker/app/page.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                open: open,\n                onClose: handleClose,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    position: \"absolute\",\n                    top: \"50%\",\n                    left: \"50%\",\n                    width: 500,\n                    bgcolor: \"white\",\n                    border: \"2px solid #000\",\n                    boxShadow: 24,\n                    p: 4,\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    gap: 3,\n                    sx: {\n                        transform: \"translate(-50%, -50%)\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            variant: \"h6\",\n                            children: \"Add Item\"\n                        }, void 0, false, {\n                            fileName: \"/Users/taimoorawan/Documents/Inventory_Tracker/app/page.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            width: \"100%\",\n                            direction: \"row\",\n                            spacing: 2,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    variant: \"outlined\",\n                                    fullWidth: true,\n                                    value: itemName,\n                                    onChange: (e)=>{\n                                        setItemName(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/taimoorawan/Documents/Inventory_Tracker/app/page.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    variant: \"outlined\",\n                                    onClick: ()=>{\n                                        addItem(itemName);\n                                        setItemName(\"\");\n                                        handleClose(); // Ensure handleClose is called\n                                    },\n                                    children: \"Add\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/taimoorawan/Documents/Inventory_Tracker/app/page.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/taimoorawan/Documents/Inventory_Tracker/app/page.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/taimoorawan/Documents/Inventory_Tracker/app/page.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/taimoorawan/Documents/Inventory_Tracker/app/page.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                width: \"100vw\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                flexDirection: \"column\",\n                gap: 2,\n                mt: 4,\n                children: inventory.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        display: \"flex\",\n                        justifyContent: \"space-between\",\n                        alignItems: \"center\",\n                        width: \"50%\",\n                        border: \"1px solid #ddd\",\n                        p: 2,\n                        mb: 2,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"/Users/taimoorawan/Documents/Inventory_Tracker/app/page.js\",\n                                lineNumber: 111,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                children: item.quantity\n                            }, void 0, false, {\n                                fileName: \"/Users/taimoorawan/Documents/Inventory_Tracker/app/page.js\",\n                                lineNumber: 112,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                variant: \"outlined\",\n                                color: \"secondary\",\n                                onClick: ()=>removeItem(item.name),\n                                children: \"Remove\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taimoorawan/Documents/Inventory_Tracker/app/page.js\",\n                                lineNumber: 113,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, item.name, true, {\n                        fileName: \"/Users/taimoorawan/Documents/Inventory_Tracker/app/page.js\",\n                        lineNumber: 110,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/taimoorawan/Documents/Inventory_Tracker/app/page.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/taimoorawan/Documents/Inventory_Tracker/app/page.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ZFkVGfZadB1ckxhdEVDTu3A2yMw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBjb2xsZWN0aW9uLCBxdWVyeSwgZ2V0RG9jcywgZG9jLCBzZXREb2MsIGdldERvYywgZGVsZXRlRG9jIH0gZnJvbSBcIkBmaXJlYmFzZS9maXJlc3RvcmVcIjsgLy8gQ29ycmVjdCBGaXJlc3RvcmUgaW1wb3J0c1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIE1vZGFsLCBTdGFjaywgVGV4dEZpZWxkLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJAL2ZpcmViYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpbnZlbnRvcnksIHNldEludmVudG9yeV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2l0ZW1OYW1lLCBzZXRJdGVtTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgdXBkYXRlSW52ZW50b3J5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKCk7XG4gICAgY29uc3Qgc25hcHNob3QgPSBxdWVyeShjb2xsZWN0aW9uKGRiLCAnaW52ZW50b3J5JykpO1xuICAgIGNvbnN0IGRvY3MgPSBhd2FpdCBnZXREb2NzKHNuYXBzaG90KTtcbiAgICBjb25zdCBpbnZlbnRvcnlMaXN0ID0gW107XG4gICAgZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgIGludmVudG9yeUxpc3QucHVzaCh7XG4gICAgICAgIG5hbWU6IGRvYy5pZCxcbiAgICAgICAgLi4uZG9jLmRhdGEoKSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNldEludmVudG9yeShpbnZlbnRvcnlMaXN0KTtcbiAgICBjb25zb2xlLmxvZyhpbnZlbnRvcnlMaXN0KTtcbiAgfTtcblxuICBjb25zdCBhZGRJdGVtID0gYXN5bmMgKGl0ZW0pID0+IHtcbiAgICBjb25zdCBkb2NSZWYgPSBkb2MoY29sbGVjdGlvbihmaXJlc3RvcmUsICdpbnZlbnRvcnknKSwgaXRlbSk7XG4gICAgY29uc3QgZG9jU25hcCA9IGF3YWl0IGdldERvYyhkb2NSZWYpO1xuXG4gICAgaWYgKGRvY1NuYXAuZXhpc3RzKCkpIHtcbiAgICAgIGNvbnN0IHsgcXVhbnRpdHkgfSA9IGRvY1NuYXAuZGF0YSgpO1xuICAgICAgYXdhaXQgc2V0RG9jKGRvY1JlZiwgeyBxdWFudGl0eTogcXVhbnRpdHkgKyAxIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCBzZXREb2MoZG9jUmVmLCB7IHF1YW50aXR5OiAxIH0pO1xuICAgIH1cblxuICAgIGF3YWl0IHVwZGF0ZUludmVudG9yeSgpO1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlSXRlbSA9IGFzeW5jIChpdGVtKSA9PiB7XG4gICAgY29uc3QgZG9jUmVmID0gZG9jKGNvbGxlY3Rpb24oZmlyZXN0b3JlLCAnaW52ZW50b3J5JyksIGl0ZW0pO1xuICAgIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBnZXREb2MoZG9jUmVmKTtcblxuICAgIGlmIChkb2NTbmFwLmV4aXN0cygpKSB7XG4gICAgICBjb25zdCB7IHF1YW50aXR5IH0gPSBkb2NTbmFwLmRhdGEoKTtcbiAgICAgIGlmIChxdWFudGl0eSA9PT0gMSkge1xuICAgICAgICBhd2FpdCBkZWxldGVEb2MoZG9jUmVmKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHNldERvYyhkb2NSZWYsIHsgcXVhbnRpdHk6IHF1YW50aXR5IC0gMSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgdXBkYXRlSW52ZW50b3J5KCk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZUludmVudG9yeSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHNldE9wZW4odHJ1ZSk7XG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0T3BlbihmYWxzZSk7IC8vIENvcnJlY3RlZCBmdW5jdGlvbiB0byB1cGRhdGUgc3RhdGVcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+SW52ZW50b3J5IE1hbmFnZW1lbnQ8L1R5cG9ncmFwaHk+XG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZU9wZW59PkFkZCBOZXcgSXRlbTwvQnV0dG9uPlxuICAgICAgPE1vZGFsIG9wZW49e29wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgPEJveCBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICB0b3A9XCI1MCVcIlxuICAgICAgICAgIGxlZnQ9XCI1MCVcIlxuICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgYmdjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBib3JkZXI9XCIycHggc29saWQgIzAwMFwiXG4gICAgICAgICAgYm94U2hhZG93PXsyNH1cbiAgICAgICAgICBwPXs0fVxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICBnYXA9ezN9XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkFkZCBJdGVtPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxTdGFjayB3aWR0aD1cIjEwMCVcIiBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHZhbHVlPXtpdGVtTmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SXRlbU5hbWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGFkZEl0ZW0oaXRlbU5hbWUpO1xuICAgICAgICAgICAgICAgIHNldEl0ZW1OYW1lKCcnKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZSgpOyAvLyBFbnN1cmUgaGFuZGxlQ2xvc2UgaXMgY2FsbGVkXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L01vZGFsPlxuICAgICAgPEJveCB3aWR0aD1cIjEwMHZ3XCIgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsyfSBtdD17NH0+XG4gICAgICAgIHtcbiAgICAgICAgICBpbnZlbnRvcnkubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8Qm94IGtleT17aXRlbS5uYW1lfSBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB3aWR0aD1cIjUwJVwiIGJvcmRlcj1cIjFweCBzb2xpZCAjZGRkXCIgcD17Mn0gbWI9ezJ9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57aXRlbS5uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e2l0ZW0ucXVhbnRpdHl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gcmVtb3ZlSXRlbShpdGVtLm5hbWUpfT5SZW1vdmU8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRGaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJnZXREb2NzIiwiZG9jIiwic2V0RG9jIiwiZ2V0RG9jIiwiZGVsZXRlRG9jIiwiQm94IiwiQnV0dG9uIiwiTW9kYWwiLCJTdGFjayIsIlRleHRGaWVsZCIsIlR5cG9ncmFwaHkiLCJmaXJlc3RvcmUiLCJIb21lIiwiaW52ZW50b3J5Iiwic2V0SW52ZW50b3J5Iiwib3BlbiIsInNldE9wZW4iLCJpdGVtTmFtZSIsInNldEl0ZW1OYW1lIiwidXBkYXRlSW52ZW50b3J5IiwiZGIiLCJzbmFwc2hvdCIsImRvY3MiLCJpbnZlbnRvcnlMaXN0IiwiZm9yRWFjaCIsInB1c2giLCJuYW1lIiwiaWQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImFkZEl0ZW0iLCJpdGVtIiwiZG9jUmVmIiwiZG9jU25hcCIsImV4aXN0cyIsInF1YW50aXR5IiwicmVtb3ZlSXRlbSIsImhhbmRsZU9wZW4iLCJoYW5kbGVDbG9zZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsInZhcmlhbnQiLCJ0ZXh0QWxpZ24iLCJvbkNsaWNrIiwib25DbG9zZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIndpZHRoIiwiYmdjb2xvciIsImJvcmRlciIsImJveFNoYWRvdyIsInAiLCJnYXAiLCJzeCIsInRyYW5zZm9ybSIsImRpcmVjdGlvbiIsInNwYWNpbmciLCJmdWxsV2lkdGgiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImp1c3RpZnlDb250ZW50IiwibXQiLCJtYXAiLCJtYiIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});