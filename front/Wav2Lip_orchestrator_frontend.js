var Wav2Lip_orchestrator_frontendLauncher = (function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function getDefaultExportFromNamespaceIfPresent (n) {
		return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
	}

	function getDefaultExportFromNamespaceIfNotNamed (n) {
		return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
	}

	function getAugmentedNamespace(n) {
	  if (n.__esModule) return n;
	  var f = n.default;
		if (typeof f == "function") {
			var a = function a () {
				if (this instanceof a) {
	        return Reflect.construct(f, arguments, this.constructor);
				}
				return f.apply(this, arguments);
			};
			a.prototype = f.prototype;
	  } else a = {};
	  Object.defineProperty(a, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	function commonjsRequire(path) {
		throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
	}

	var formant$1 = {exports: {}};

	var formant = formant$1.exports;

	var hasRequiredFormant;

	function requireFormant () {
		if (hasRequiredFormant) return formant$1.exports;
		hasRequiredFormant = 1;
		(function (module, exports) {
			(function(f){if('object'==="object"&&'object'!=="undefined"){module.exports=f();}else if(typeof undefined==="function"&&undefined.amd){undefined([],f);}else {var g;if(typeof window!=="undefined"){g=window;}else if(typeof commonjsGlobal!=="undefined"){g=commonjsGlobal;}else if(typeof self!=="undefined"){g=self;}else {g=this;}g.formant = f();}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof commonjsRequire&&commonjsRequire;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t);}return n[i].exports}for(var u="function"==typeof commonjsRequire&&commonjsRequire,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
			"use strict";
			const formantCore = _dereq_('formantCore');

			const components = formantCore.App.componentTypes;
			const componentsAndValidators = _dereq_('src/_buildTools/_UIpackages')(null, { UIpackage: 'all' });
			const componentLib = componentsAndValidators.packageList;
			const validators = componentsAndValidators.validatorList;
			formantCore.validators = {};

			for (let type in componentLib) {
				if (typeof componentLib[type] === 'string')
					components[type] = _dereq_(componentLib[type]);
			}
			for (let type in validators) {
				formantCore.validators[type] = _dereq_(validators[type]);
			}
			formantCore.App.localComponentTypes = {};
			const dependancyInjector = _dereq_('src/secondaryAppLauncher/dependancyInjector');

			module.exports = formantCore;
			},{"formantCore":2,"src/_buildTools/_UIpackages":38,"src/secondaryAppLauncher/dependancyInjector":39}],2:[function(_dereq_,module,exports){
			"use strict";
			(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else {var g;if(typeof window!=="undefined"){g=window;}else if(typeof commonjsGlobal!=="undefined"){g=commonjsGlobal;}else if(typeof self!=="undefined"){g=self;}else {g=this;}g.formantCore = f();}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof _dereq_&&_dereq_;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t);}return n[i].exports}for(var u="function"==typeof _dereq_&&_dereq_,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
			"use strict";
			const App = _dereq_('src/core/App');
			App.data = {
				stringifiedSources : []
			};

			const dependancyInjector = _dereq_('src/appLauncher/dependancyInjector');

			module.exports = {
				App : App,
				appConstants : _dereq_('src/appLauncher/appLauncher'),
				CoreTypes : _dereq_('src/core/CoreTypes'),
				Components : _dereq_('src/core/Component'),
				TemplateFactory : _dereq_('src/core/TemplateFactory'),
				TypeManager : _dereq_('src/core/TypeManager'),
				Registries : _dereq_('src/core/Registries'),
				ReactiveDataset : _dereq_('src/core/ReactiveDataset'),
				ComponentSet : _dereq_('src/core/ComponentSet'),
				CreateStyle : _dereq_('src/core/GenericStyleConstructor'),
				integratedLibs : {
					md5 : _dereq_('src/integrated_libs_&_forks/md5.min'),
					Validate : _dereq_('src/integrated_libs_&_forks/Validate')
				}
			};
			},{"src/appLauncher/appLauncher":6,"src/appLauncher/dependancyInjector":7,"src/core/App":38,"src/core/Component":42,"src/core/ComponentSet":43,"src/core/CoreTypes":45,"src/core/GenericStyleConstructor":47,"src/core/ReactiveDataset":52,"src/core/Registries":53,"src/core/TemplateFactory":55,"src/core/TypeManager":57,"src/integrated_libs_&_forks/Validate":68,"src/integrated_libs_&_forks/md5.min":69}],2:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @module errorHandler
			 */


				var Logger = function() {
			//		Factory.CoreModule.call(this);
					this.objectType = 'Logger';
					
					this._currentlyCallingObjectName;
					this._currentlyCallingObjectType;
				};
				Logger.prototype = {};//Object.create(Factory.CoreModule.prototype);
				Logger.prototype.objectType = 'Logger';
				Logger.prototype.constructor = Logger;

				Logger.prototype.colors = {
				                message : 'color:#777',
				                messageEven : 'color:#777',
				                messageOdd : 'color:#222',
				                target : 'color:#5555FF',
				                warning : 'color:#CC5500',
				                error : 'color:#CC0000',
				                serialized : 'color:#999'
								};

				Logger.prototype.changeCallingObject = function(e) {
					this._currentlyCallingObjectName = e.data.name;
					this._currentlyCallingObjectType = e.data.objectType;
				};

				Logger.prototype.log = function(isOfType) {
					var args = Array.apply(null, arguments), logs = [];
					if (Object.keys(this.colors).indexOf(args[0]) !== -1) {
						isOfType = args[0];
						preambule = '%c %s %c %s %c %s ';
						logs = [
						            preambule,
						            this.colors[isOfType],
						            isOfType
						            ];
						args.shift();
					}
					else {
						preambule = '%c %s %c %s ';
						logs = [preambule];
					}

					var message = args[0] || 'empty log',
					target = args[1] + ':' || 'empty target:',
					isSerialized = args[args.length - 1] === 'serialized' ? true : undefined,

					logs = logs.concat([
					            this.colors['target'],
					            args[1],
					            typeof isOfType !== 'undefined' ? this.colors[isOfType] : this.colors['message'],
					            args[0]		
					            ]);

					for (var i = 2, l = args.length, val; i < l; i++) {
						(function(i) {
							val = args[i];
							switch(typeof val) {
								case 'string':
									logs[0] += '%c %s ';
									break;
								case 'object':
									logs[0] += '%c %o ';
									break;
								case 'number':
									if (Math.round(val) === val)
										logs[0] += '%c %i ';
									else
										logs[0] += '%c %.2f ';
									break;
							}
							
							logs.push(typeof isSerialized !== 'undefined' ? this.colors['serialized'] : (i % 2 === 0) ? this.colors['messageOdd'] : this.colors['messageEven']);
							logs.push(val);
						}).call(this, i);
					}
			//		console.log(args, logs);
					console.log.apply(null, logs);
				};
				
				Logger.prototype.warn = Logger.prototype.log.bind(Logger.prototype, 'warning');
				Logger.prototype.error = Logger.prototype.log.bind(Logger.prototype, 'error');

				Logger.prototype.m = {
						OK : 'OK'
				};
				
			//var logger =  new Logger();

			module.exports = Logger;

			},{}],3:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor SWrapperInViewManipulator
			 */

			var appConstants = _dereq_('src/appLauncher/appLauncher');
			var TypeManager = _dereq_('src/core/TypeManager');
			//var CoreTypes = require('src/core/CoreTypes');

			var textSizeGetter = appConstants.textSizeGetter;
			//var ScalesUtilities = require('src/tools/ScalesUtilities');


			var SWrapperInViewManipulator = function(hostView) {
			//	if (!hostView.sWrapper) {
			//		return null;
			//	}
				this.hostView = hostView;
				this.currentViewAPI = hostView.currentViewAPI;
				// TODO: this.s refers to the AbstractStylesheet => change that, it's not at all explicit
				this.s;// = hostView.sWrapper;
				
				this.rulesCache = new TypeManager.PropertyCache('rulesCache');
			//	this.textSizeGetter = textSizeGetter;
				
				this.viewPresenceKeyWord;
				this.fontSize;
				this.boundingBox;
				
				this.getViewPresenceKeyWord();
			};
			SWrapperInViewManipulator.prototype = Object.create(Object.prototype);
			//SWrapperInViewManipulator.prototype.extends = 'EventEmitter';





			SWrapperInViewManipulator.prototype.getBoundingBox = function() {
				var self = this;
				
				return new Promise(function(resolve, reject) {
					var inter = setInterval(function() {
						if (self.hostView.getMasterNode()) {
							clearInterval(inter);
							
							appConstants.resizeObserver.observe(self.hostView.getMasterNode(), self.storeBoundingBox.bind(self));
						}
					}, 512);
				});
			};
			SWrapperInViewManipulator.prototype.storeBoundingBox = function(resolve, e) {
				resolve(this.boundingBox = e.data.boundingBox);
			};
			SWrapperInViewManipulator.prototype.getViewPresenceKeyWord = function() {
				(this.s && (this.viewPresenceKeyWord = this.s.getRuleDefinition(':host', 'display'))) || (this.viewPresenceKeyWord = this.hostView.isCustomElem ? 'inline-block' : 'block');
			};
			SWrapperInViewManipulator.prototype.getFontSize = function() {
				var self = this;
				return new Promise(function(resolve, reject) {
					self.textSizeGetter.oneShot(
						self.hostView.getMasterNode(),
						self.storeFontSize.bind(self, resolve)
					);
				});
			};
			SWrapperInViewManipulator.prototype.storeFontSize = function(resolve, fontStyle) {
				resolve(this.fontSize = fontStyle.fontSize);
			};
			SWrapperInViewManipulator.prototype.setFontSize = function(fontSize) {
				this.s.setProp(':host', 'fontSize', fontSize.toString() + 'px');
			};
			SWrapperInViewManipulator.prototype.setFontFamily = function(fontFamily) {
				this.s.setProp(':host', 'fontFamily', fontFamily.toString());
			};
			SWrapperInViewManipulator.prototype.setTextInputFontSize = function(fontSize) {
				this.s.setProp('input[type=text]', 'fontSize', fontSize.toString() + 'px');
			};
			SWrapperInViewManipulator.prototype.setTextInputFontFamily = function(fontFamily) {
				this.s.setProp('input[type=text]', 'fontFamily', fontFamily.toString());
			};
			SWrapperInViewManipulator.prototype.getPresence = function() {
				
			};
			SWrapperInViewManipulator.prototype.setPresence = function() {
				
			};
			SWrapperInViewManipulator.prototype.getVisibility = function() {
				
			};
			SWrapperInViewManipulator.prototype.setVisibility = function() {
				
			};
			SWrapperInViewManipulator.prototype.getOpacity = function() {
				
			};
			SWrapperInViewManipulator.prototype.setOpacity = function() {
				
			};
			SWrapperInViewManipulator.prototype.revealSelfOnly = function() {
				
			};
			SWrapperInViewManipulator.prototype.setNeonEmphasis = function() {
				
			};
			SWrapperInViewManipulator.prototype.restoreOriginalEmphasis = function() {
				
			};
			SWrapperInViewManipulator.prototype.addEventListener = function(eventType, handler) {
				this.currentViewAPI.addEventListener(eventType, handler);
			};
			SWrapperInViewManipulator.prototype.removeEventListener = function(eventType, handler) {
				this.currentViewAPI.removeEventListener(eventType, handler);
			};
			SWrapperInViewManipulator.prototype.getWidth = function(selector) {
				var width;
				if (width = this.s.getRuleAsObject(selector).rule.attributes.width)
					return parseInt(width.replace(/px/, ''));
			};
			SWrapperInViewManipulator.prototype.setWidth = function(selector, w) {
				var rule = this.s.getRuleAsObject(selector).rule;
				rule.attributes.width = w.toString();
				this.s.replaceStyle(rule, rule.attributes);
			};
			SWrapperInViewManipulator.prototype.setMaxWidth = function(selector, w) {
				var rule = this.s.getRuleAsObject(selector).rule;
				rule.attributes.maxWidth = w.toString();
				this.s.replaceStyle(rule, rule.attributes);
			};
			SWrapperInViewManipulator.prototype.getHeight = function(selector) {
				var height;
				if (height = this.s.getRuleAsObject(selector).rule.attributes.height)
					return parseInt(height.replace(/px/, ''));
			};
			SWrapperInViewManipulator.prototype.setHeight = function(selector, h) {
				var rule = this.s.getRuleAsObject(selector).rule;
				rule.attributes.height = h.toString();
				this.s.replaceStyle(rule, rule.attributes);
			};
			SWrapperInViewManipulator.prototype.setMaxHeight = function(selector, h) {
				var rule = this.s.getRuleAsObject(selector).rule;
				rule.attributes.maxHeight = h.toString();
				this.s.replaceStyle(rule, rule.attributes);
			};

			SWrapperInViewManipulator.prototype.setFlex = function(selector, f) {
				this.s.setProp(selector, 'flex', f.toString());
			};

			SWrapperInViewManipulator.prototype.getComponentViewAsCanvas = function(nodeName) {
				var member;
				if (nodeName === 'header')
					member = this.hostView.subViewsHolder.firstMember();
				else
					member = this.hostView.getMasterNode();
				
				return Rasterizer(member);
			};
			SWrapperInViewManipulator.prototype.setRotationAlongCylinder = function(nodeName) {
				var y;	
			//	var rule = this.s.getRuleAsObject('header').rule;
			//	rule.attributes.transform = 'scaleY(' + this.getRotationBasedOnYPos(y) + ')';
				
				var partialCanvas = this.getComponentViewAsCanvas(nodeName);
				// => then compose a new Canvas assembling alltogether the partials Canvas
				
				
			//	this.s.replaceStyle(rule, rule.attributes);
			};
			SWrapperInViewManipulator.prototype.getRotationBasedOnYPos = function(y) {
				return ScalesUtilities.elevationDependantAngle(y);
			};









			module.exports = SWrapperInViewManipulator;
			},{"src/appLauncher/appLauncher":6,"src/core/TypeManager":57}],4:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * Constructor NaiveDOMNode
			 * 
			 * 
			 */


			var TypeManager = _dereq_('src/core/TypeManager');
			var CoreTypes = _dereq_('src/core/CoreTypes');
			var Components = _dereq_('src/core/Component');
			var UIDGenerator = _dereq_('src/core/UIDGenerator').UIDGenerator;




			/*
			 * constructor NaiveDOMNode
			 * 
			 * All is conditionned on the presence of the view Object as the layoutTreePrepare is using this constructor
			 * to build a "viewport" layoutNode
			 */
			var NaiveDOMNode = function(viewWrapper, view, hierarchicalDepth, _defUID, hostNode, hostView, subNodesGroup) {
				this.objectType = 'NaiveDOMNode';
				this.hasBeenSeenForLayout = false;
			//	console.log(view.currentViewAPI, view);
				var masterNode = view ? view.getMasterNode() : null;
				
				this._viewWrapper = viewWrapper;
				this._parentView = view ? this.getParentView(view, hierarchicalDepth, hostNode, hostView, subNodesGroup) : null;
				this._UID = UIDGenerator.newUID();
				
				this.nodeName = view ? masterNode.nodeName.toLowerCase() : null;
				this.nodeId = view ? masterNode.id : null;
				this.section = view 
								? view.section === null ? '0' : view.section.toString()
								: '0';
				this.classNames = view ? Object.values(masterNode.classList) : null;
				if (view) {
					var textContent,
						href;
					this.attributes = new CoreTypes.ListOfPairs();//masterNode.attributes);
			//		console.log(masterNode.textContent);
					if (viewWrapper.textContent.length)
						this.attributes.push(new CoreTypes.Pair(
							'textContent',
							viewWrapper.textContent
						));
					else if ((textContent = TypeManager.caches.attributes.getItem(view._defUID).getObjectValueByKey('textContent'))) {
						this.attributes.push(new CoreTypes.Pair(
							'textContent',
							textContent
						));
					}
					else if ((textContent = view.getTextContent()) !== '') {
						this.attributes.push(new CoreTypes.Pair(
							'textContent',
							textContent
						));
					}
					
					if (hierarchicalDepth === 0) {
			//			console.log(_defUID, TypeManager.caches['attributes'].getItem(_defUID).getObjectValueByKey('href'));
						if ((href = TypeManager.caches['attributes'].getItem(_defUID).getObjectValueByKey('href')))
							this.attributes.push(new CoreTypes.Pair(
								'href',
								href
							));
					}
			//		console.log(this.attributes);
				}
				else
					this.attributes = new CoreTypes.ListOfPairs();
				
			//	this.computedStyle = null;
				
				TypeManager.naiveDOMRegistry.setItem(
					this._UID,
					this
				);
			};
			NaiveDOMNode.prototype = {};
			NaiveDOMNode.prototype.objectType = 'NaiveDOMNode';

			NaiveDOMNode.prototype.hasAttributes = function() {
				return this.attributes.length !== 0;
			};

			NaiveDOMNode.prototype.getParentView = function(view, hierarchicalDepth, hostNode, hostView, subNodesGroup) {
				switch(hierarchicalDepth) {
					case 0 : 
						return null;
					case 1 :
						return hostNode;
					case 2 :
						return subNodesGroup.length
							? subNodesGroup[hostView.subViewsHolder.subSections.indexOf(view.parentView)]
							: hostNode;
				}
			};





















			module.exports = NaiveDOMNode;
			},{"src/core/Component":42,"src/core/CoreTypes":45,"src/core/TypeManager":57,"src/core/UIDGenerator":58}],5:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * Constructor SpecialDependencyInjector
			 * 
			 * Decorates the HierarchicalComponent's ctor
			 * 	adding it some methods to build a "DOM looking" hierarchy.
			 * 	We'll be using those methods to construct the NaiveDOM.
			 */


			var TypeManager = _dereq_('src/core/TypeManager');
			var CoreTypes = _dereq_('src/core/CoreTypes');
			var Components = _dereq_('src/core/Component');
			var UIDGenerator = _dereq_('src/core/UIDGenerator').UIDGenerator;

			var NaiveDOMNode = _dereq_('src/_LayoutEngine/NaiveDOMNode');


			// NOTE: should not be a ctor, but helper functions
			// to be conditionnaly required / called in dependencyInjector.js
			// (actual implementation is very similar to that, making no use of the following ctor)
			var SpecialDependencyInjector = function() {
				
			};
			SpecialDependencyInjector.prototype = {};

			SpecialDependencyInjector.prototype.getNaiveDOM = function() {
				return this.getNaiveDOMTree();
			};

			SpecialDependencyInjector.prototype.getNaiveDOMTree = function () {
				var self= this, nodeUID;
				function getNode(component, parentNode) {
					var node = {
						styleRefstartIdx : 0,
						styleRefLength : 0,
						_UID : component._UID,
						_parentNode : parentNode,
						isShadowHost : component.view.currentViewAPI ? component.view.currentViewAPI.isShadowHost : false,
						name : Object.getPrototypeOf(component).objectType.slice(0),
						textContent : TypeManager.caches.attributes.getItem(component._defUID).getObjectValueByKey('textContent') || '',
						views : {},
						children : [],
						styleDataStructure : component.styleHook ? component.styleHook.s : null
					};
					node.views = this.getInDepthViewStructure(component, node);
					return node;
			//		var meta = this.getViewRelatedNodeDescription(component);
				}
				var ret = getNode.call(this, this);
				this.collectNaiveDOMandStyleInDescendants(this, ret, getNode.bind(this));
				return ret;
			};

			SpecialDependencyInjector.prototype.collectNaiveDOMandStyleInDescendants = function (component, componentTreeParent, getNode) {
				var node;
				
				// We want to be able to render the "code" nodes with syntax highlighting.
				// (mainly when we get those nodes after having converted markdown to the framework's syntax)
				// So we're going to use a highlighting lib at its lowest level
				// in order to add typed node that the layout engine is able to handle
				// (basically, those nodes shall have a class attribuse which shall be interpreted by our CSS engine)
				// REMINDER: inject manually the stylesheet of the Prism lib (the external CSS grabber shall include it in our "inner" CSS rules)
				
				if (component.view.getMasterNode().tagName === 'CODE') {
					if (typeof Prism === 'undefined') {
						console.warn('The Prism-highlighter lib must be included manually in the HTML header (with the data-manual attribute)');
						return componentTreeParent;
					}
					if (Array.prototype.indexOf.call(component.view.getMasterNode().classList, 'language-javascript') !== -1) {
						this.handleCodeNode(component, componentTreeParent);
						return componentTreeParent;
					}
				}
				
				component._children.forEach(function(child) {
			//		console.log(child.view.getMasterNode().tagName, child.view.API.nodeName);
					node = getNode(child, componentTreeParent);
					if (Array.isArray(child._children) && child._children.length) {
						componentTreeParent.children.push(this.collectNaiveDOMandStyleInDescendants(child, node, getNode));
					}
					else {
						componentTreeParent.children.push(node);
					}
				}, this);

				return componentTreeParent;
			};

			SpecialDependencyInjector.prototype.getInDepthViewStructure = function (component, viewsWrapper) {
				var hostNode, subNodesGroup;
				return {
					masterView : (hostNode = new NaiveDOMNode(viewsWrapper, component.view, 0, component._defUID)),
					subSections : (subNodesGroup = component.view.subViewsHolder.subViews.map(function(view) {
						return new NaiveDOMNode(viewsWrapper, view, 1, component._defUID, hostNode, component.view);
					})),
					memberViews : component.view.subViewsHolder.memberViews.map(function(view) {
						return new NaiveDOMNode(viewsWrapper, view, 2, component._defUID, hostNode, component.view, subNodesGroup);
					})
				};
			};

			SpecialDependencyInjector.prototype.handleCodeNode = function (component, componentTreeParent) {
				var codeNodeTextContent = '', prismTokenStream = [];
				
				codeNodeTextContent = component._children[0].view.getTextContent();
				prismTokenStream = Prism.tokenize(codeNodeTextContent, Prism.languages.javascript);
				this.explorePrismTokenStream(prismTokenStream, componentTreeParent);
			};

			SpecialDependencyInjector.prototype.explorePrismTokenStream = function (tokenStream, componentTreeParent) {
				var parentNode, tokenTypes = {}, node, textContent = '', lineFeedIdx = 0;
				
				function getNode(parentNode, textContent, isDisplayBlock, tokenType, isClassName) {
					var view = {
						objectType : 'NaiveDOMNode',
						_UID : UIDGenerator.newUID(),
						_parentView : parentNode.views.masterView,
						nodeId : '',
						nodeName : isDisplayBlock ? 'div' : 'span',
						classNames : [],			// the className prop is a shorthand replacing the "className" attributes
																	// => handier when matching selectors
						attributes : new CoreTypes.ListOfPairs([
							{
								name : 'textContent',
								value : textContent
							}
						])
					};
					if (tokenType) {
			//			console.log(tokenType, textContent);
						view.classNames.push('token', tokenType);
					}
					else  if (isClassName)
						view.classNames.push('token', 'class-name');
					
					
			//		else if (textContent === 'App' || textContent === 'App.')
			//			view.classNames.push('token', 'constant');	// HACK to beautify our main Factory (DOESN'T WORK, as "host: App." is a single string)
				


					var node = {
						styleRefstartIdx : 0,
						styleRefLength : 0,
						_UID : UIDGenerator.newUID(),
						_parentNode : parentNode,
						isShadowHost : false,
						views : {
							masterView : view,
							subSections : [],
							memberViews : []
						},
						children : [],
						styleDataStructure : null
					};
			//		node.views = this.getInDepthViewStructure(component, node);
				
					TypeManager.naiveDOMRegistry.setItem(
						view._UID,
						view
					);
					return node;
				}
				
				parentNode = getNode(componentTreeParent, textContent, true);
				componentTreeParent.children.push(parentNode);
				
				
				var handleToken = function(tokenOrString, key, isClassName) {
					if (tokenOrString instanceof Prism.Token) {
						tokenTypes[tokenOrString.type] = tokenOrString.content;
						
						// A class-name token may content a tokenStream inside
						if (Array.isArray(tokenOrString.content)) {
							tokenOrString.content.forEach(function(subTokenOrString) {
								handleToken(subTokenOrString, key, 'isClassName');
							});
							return;
						}
						
						textContent = tokenOrString.content;
						node = getNode(parentNode, textContent, false, tokenOrString.type, isClassName);
						
						// Avoid building a new parent if the next token (and last from the stream) is an empty string
						if (key === tokenStream.lenngth - 2
								&& textContent === ''
								&& tokenStream[key + 1] === ''
							) {
							return;
						}

						parentNode.children.push(node);
					}
					else {
						textContent = tokenOrString;
						node = getNode(parentNode, textContent, false, null, isClassName);
						
						// Don't generate a new "block" node if the line feed char is the last of the code as as string
						if (key === tokenStream.length - 1
								&& (textContent.indexOf('\n') === tokenOrString.length - 1 || textContent === '')
							) {
							parentNode.children.push(node);
							return;
						}
						else if ((lineFeedIdx = tokenOrString.indexOf('\n')) !== -1) {
							textContent = textContent.split('\n');
							parentNode.children.push(getNode(parentNode, textContent[0], false));
							textContent.shift();
							
							parentNode = getNode(parentNode, '', true);
							parentNode.children.push(getNode(parentNode, textContent.join(), false));
							
							componentTreeParent.children.push(parentNode);
							return;
						}

						parentNode.children.push(node);
					}
				};
				
				
				tokenStream.forEach(function(tokenOrString, key) {
					
					// Start a "block" node
					// if string matches "\n" => close the block node => start a new one
					// Add every "inline" node as child of the curernt "block" node
					
					handleToken(tokenOrString, key);
				});
				
				
				
				
			//	var reconstructed = '', chuncksNbr = 0;
			//	componentTreeParent.children.forEach(function(child, key){
			//		console.log(child.views.masterView.nodeName, child.views.masterView.attributes[0].value);
			////		if (key === 0 || key === 1) {
			//			child.children.forEach(function(test, idx){
			//				console.log(test.views.masterView.nodeName, test.views.masterView.attributes[0].value);	// 
			//			});
			////		}
			//		child.children.forEach(function(strObj) {
			//			reconstructed += strObj.textContent;
			//			chuncksNbr++;
			//		})
			//		reconstructed += '\n';
			//	})
			//	console.log(tokenStream);
			};

			/*
			block-comment

			punctuation

			attr-name

			function-name

			boolean
			function
			number

			class-name
			constant
			property

			keyword

			attr-value
			char
			regex
			string
			variable

			entity
			operator



			*/










			//SpecialDependencyInjector.prototype.getViewRelatedNodeDescription = function (view) {
			//	var masterNode = view.getMasterNode();
			//	
			//	return {
			//		nodeName : masterNode.nodeName,
			//		nodeId : masterNode.Id,
			//		classNames : masterNode.classList
			//	};
			//}






			module.exports = SpecialDependencyInjector;
			},{"src/_LayoutEngine/NaiveDOMNode":4,"src/core/Component":42,"src/core/CoreTypes":45,"src/core/TypeManager":57,"src/core/UIDGenerator":58}],6:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @module appLauncher
			 */

			// Get compatibility with node.js and standalone engines
			//if (typeof window === 'undefined') {
			//	if (typeof global === 'undefined')
			//		window = this;
			//	else
			//		window = global;
			//}


			if (typeof Object.getOwnPropertyDescriptor(String.prototype, 'escapeRegExp') === 'undefined') { 
				_dereq_('src/extendedNative/string');
				_dereq_('src/extendedNative/array');
				_dereq_('src/extendedNative/boolean');
				_dereq_('src/extendedNative/object');
				_dereq_('src/extendedNative/regexp');
			}
			var Validate = _dereq_('src/integrated_libs_&_forks/Validate');
			var Hamster = _dereq_('src/integrated_libs_&_forks/Hamster');
			//var MasterTimer = require('src/timers/MasterTimer');
			var NodeResizeObserver = _dereq_('src/core/ResizeObserver');
			var TextSizeGetter = _dereq_('src/core/TextSizeGetter');

			// TODO: move the main dependancies to permanent include
			// Ensure that ctor is required at least once : it is responsible for dependancy injection (moved to index.js...  shall be moved to browserify permanent include)
			//var rDataset = require('src/core/ReactiveDataset');

			var classConstructor = (function() {	
				var debugMode = false,
			//		masterTimer = new MasterTimer(),
					resizeObserver = new NodeResizeObserver(),
					textSizeGetter = new TextSizeGetter(),
					options = {
						
					},
					baseAppDefaultOptions = {
						UIDPrefix : '',
						APIurl : ''
					},
					baseApp = {},
					currentHostPath,
					browserName,
					knownIDs = {};
				
			//	console.log(knownIDs);
				var launch = function(customOptions) {
					
					debugMode = window.location && window.location.href.match(/[\?&]debug=(.+)&?/);
					if (debugMode && debugMode[0])
						debugMode = debugMode[0];
					
					Object.assign(options, baseAppDefaultOptions);
					if (typeof customOptions === 'object' && Object.keys(customOptions).length) {
						for(var prop in customOptions) {
							if (customOptions.hasOwnProperty(prop))
								options[prop] = customOptions[prop];
						};
					}
					
					// ensure we have an underscore at the end of the "app specific" prefix
					options.UIDPrefix = (options.UIDPrefix.lastIndexOf('_') === options.UIDPrefix.length - 1) ? options.UIDPrefix : options.UIDPrefix + '_';
					
					// helper styles
			//		require('src/UI/styles/helperStyles')(context).getInstance();
					
					// Validate init
					Validate.options = {format: "flat"};
					
					currentHostPath = window.location && window.location.href.match(/(.*\/)[^/]*$/)[1];
					browserName = parseUserAgent();
					
			//		masterTimer.startQueue();
				};
				
				var parseUserAgent = function() {
					var UA = window.navigator && window.navigator.userAgent;
					
					// Mobile
					if (/iPad/i.test(UA) || /iPhone/i.test(UA)) {
						var webkit = /WebKit/i.test(UA);
						if (webkit && !/CriOS/i.test(UA))
							return 'IOSsafari';
					}
					// Desktop
					else if(/Firefox/.test(UA) && !/Seamonkey/.test(UA))
						return 'Firefox';
					else if(/Seamonkey/.test(UA))
						return 'Seamonkey';
					else if(/Chrome/.test(UA) && !/Chromium/.test(UA))
						return 'Chrome';
					else if(/Chromium/.test(UA))
						return 'Chromium';
					else if(/Safari/.test(UA) && !/Chrome/.test(UA))
						return 'Safari';
					else if(/OPR/.test(UA))
						return 'Opera15+';
					else if(/Opera/.test(UA))
						return 'Opera12-';
					else if(/MSIE/.test(UA))
						return 'MSIE';
				};
				
				var checkSupport = function() {
					if (this.browserName === 'IOSsafari') {
						console.log('This App is not designed for Safari on IOS : Web Audio API support is missing');
						return false;
					}
					return true;
				};
				
				var getUID = function(uniqueID) {
					if (knownIDs.hasOwnProperty(options.UIDPrefix + uniqueID)) {
			//			console.log(options.UIDPrefix + uniqueID);
						return knownIDs[options.UIDPrefix + uniqueID];
					}
					else if (knownIDs.hasOwnProperty(uniqueID)) {
			//			console.log(uniqueID);
						return knownIDs[uniqueID];
					}
					else if (!knownIDs.hasOwnProperty(options.UIDPrefix + uniqueID) || !uniqueID || !uniqueID.length) {
						uniqueID = uniqueID ? (options.UIDPrefix + uniqueID) : (options.UIDPrefix + (Math.round(Math.random() * 10000)).toString());
						knownIDs[uniqueID] = uniqueID;
						return knownIDs[uniqueID];
					}
				};
				
				var isKnownUID = function(uniqueID) {
					return getUID(uniqueID);
				};
				
				var setUID = function(uniqueID, globalObj) {
					return (knownIDs[uniqueID] = globalObj);
				};
				
				return {
					debugMode : debugMode,
					resizeObserver : resizeObserver,
					textSizeGetter : textSizeGetter,
					TextSizeGetterCtor : TextSizeGetter,
					options : options,
					launch : launch,
					checkSupport : checkSupport,
			//		locks : locks,
			//		knownIDs : knownIDs,
					getUID : getUID,
					isKnownUID : isKnownUID,
					setUID : setUID,
					currentHostPath : currentHostPath,
					browserName : browserName
				}
			})();

			//classConstructor.__factory_name = 'appLauncher';
			//var factory = Factory.Maker.getSingletonFactory(classConstructor);
			//module.exports = factory;

			module.exports = classConstructor;

			},{"src/core/ResizeObserver":54,"src/core/TextSizeGetter":56,"src/extendedNative/array":62,"src/extendedNative/boolean":63,"src/extendedNative/object":64,"src/extendedNative/regexp":65,"src/extendedNative/string":66,"src/integrated_libs_&_forks/Hamster":67,"src/integrated_libs_&_forks/Validate":68}],7:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @injector DependancyInjector
			 */

			const App = _dereq_('src/core/App');
			const ReactiveDataset = _dereq_('src/core/ReactiveDataset');
			const ComponentSet = _dereq_('src/core/ComponentSet');



			/**
			 * Dependancy Injection
			 */
			App.coreComponents.IteratingComponent.prototype.rDataset = ReactiveDataset;
			App.coreComponents.LazySlottedCompoundComponent.prototype.rDataset = ReactiveDataset;
			App.coreComponents.AbstractAccordion.prototype.rDataset = ReactiveDataset;
			App.coreComponents.LazySlottedCompoundComponent.prototype.cSet = ComponentSet;


			App.componentTypes.RootViewComponent.prototype.render = function(DOMNodeId) {
				new App.DelayedDecoration(null, this);
			};
			App.coreComponents.LazySlottedCompoundComponent.prototype.render = function(DOMNodeId, previousListHostDef) {
				new App.DelayedDecoration(DOMNodeId, this, previousListHostDef);
			};
			App.coreComponents.AbstractTree.prototype.render = function(DOMNodeId) {
				new App.DelayedDecoration(DOMNodeId, this, this.listTemplate.getHostDef());
			};

			// Is meant as a reminder that the naiveDOM type is naive and should be cleaned in a further update
			const isLayoutEngineON = true;
			if (isLayoutEngineON) {
				var SpecialDependencyInjector = _dereq_('src/_LayoutEngine/SpecialDependencyInjector');
				// TODO: Object.assign is the ugliest and riskiest way to create a mixin.
				// 		=> if it's "injection", please inject via some "in framework" existing & tested decoration principle
				App.componentTypes.HierarchicalObject.prototype = Object.assign(App.componentTypes.HierarchicalObject.prototype, SpecialDependencyInjector.prototype);
			}


			module.exports = App;
			},{"src/_LayoutEngine/SpecialDependencyInjector":5,"src/core/App":38,"src/core/ComponentSet":43,"src/core/ReactiveDataset":52}],8:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor AppBoundaryComponent
			*/

			var TypeManager = _dereq_('src/core/TypeManager');
			var Components = _dereq_('src/core/Component');

			var createAppBoundaryComponentHostDef = _dereq_('src/coreComponents/AppBoundaryComponent/coreComponentDefs/AppBoundaryComponentHostDef');
			//var createAppBoundaryComponentSlotsDef = require('src/coreComponents/AppBoundaryComponent/coreComponentDefs/AppBoundaryComponentSlotsDef');

			var AppBoundaryComponent = function(definition, parentView, parent) {
				Components.CompositorComponent.call(this, definition, parentView, parent);
				this.objectType = 'AppBoundaryComponent';
			};
			AppBoundaryComponent.prototype = Object.create(Components.CompositorComponent.prototype);
			AppBoundaryComponent.prototype.objectType = 'AppBoundaryComponent';
			AppBoundaryComponent.prototype.extendsCore = 'CompoundComponent';

			AppBoundaryComponent.defaultDef = {
				nodeName : 'div',
				attributes : [],
				states : [],
				props : [],
				reactOnParent : [],
				reactOnSelf : []
			};

			AppBoundaryComponent.prototype.createDefaultDef = function() {
				return TypeManager.createComponentDef(
						createAppBoundaryComponentHostDef(),
						'AppBoundaryComponentDefaultDef',
						'rootOnly'
					);
			};

			AppBoundaryComponent.prototype.getFirstChild = function() {
				return this._children[0];
			};

			AppBoundaryComponent.prototype.getChild = function(Idx) {
				return this._children[Idx];
			};

			AppBoundaryComponent.prototype.getRow = function(rowIdx) {
				return this._children[rowIdx];
			};

			module.exports = AppBoundaryComponent;
			},{"src/core/Component":42,"src/core/TypeManager":57,"src/coreComponents/AppBoundaryComponent/coreComponentDefs/AppBoundaryComponentHostDef":9}],9:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def AppBoundaryComponent
			 * @isGroup true
			 * 
			 * @CSSify styleName : AppBoundaryComponentHost/true
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */
			var TypeManager = _dereq_('src/core/TypeManager');
			var CreateStyle = _dereq_('src/core/GenericStyleConstructor');


			var AppBoundaryComponentDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var hostStyles = [

				{
					"display": "flex",
					"flexFlow": "column",
					"flex": "1 1 0",
					"justifyContent": "space-evenly",
					"selector": ":host",
					"boxSizing": "border-box",
					"background": "0",
					"border": "1px outset #282828",
					"boxShadow": "none",
					"margin": "0",
					"outline": "0",
					"padding": "0",
					"verticalAlign": "baseline"
				}

				];
				var hostStylesUseCache = {
					use : true,
					nameInCache : 'AppBoundaryComponentHostStyles'
				};
				
				
					var moduleDef = TypeManager.createComponentDef({
						nodeName : 'app-boundary',
							sWrapper : CreateStyle(
									hostStylesUseCache.use ? hostStylesUseCache.nameInCache : null,
									hostStyles
								)
					});
				
				return moduleDef;
			};

			module.exports = AppBoundaryComponentDef;
			},{"src/core/GenericStyleConstructor":47,"src/core/TypeManager":57}],10:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor AppOverlayComponent
			*/

			var TypeManager = _dereq_('src/core/TypeManager');
			var Components = _dereq_('src/core/Component');

			var createAppOverlayComponentHostDef = _dereq_('src/coreComponents/AppOverlayComponent/coreComponentDefs/AppOverlayComponentHostDef');
			//var createAppOverlayComponentSlotsDef = require('src/coreComponents/AppOverlayComponent/coreComponentDefs/AppOverlayComponentSlotsDef');

			var AppOverlayComponent = function(definition, parentView, parent) {
				Components.CompositorComponent.call(this, definition, parentView, parent);
				this.objectType = 'AppOverlayComponent';
			};
			AppOverlayComponent.prototype = Object.create(Components.CompositorComponent.prototype);
			AppOverlayComponent.prototype.objectType = 'AppOverlayComponent';
			AppOverlayComponent.prototype.extendsCore = 'CompoundComponent';

			AppOverlayComponent.defaultDef = {
				nodeName : 'app-overlay',
				attributes : [],
				states : [],
				props : [],
				reactOnParent : [],
				reactOnSelf : []
			};

			AppOverlayComponent.prototype.createDefaultDef = function() {
				return createAppOverlayComponentHostDef();
			};

			module.exports = AppOverlayComponent;
			},{"src/core/Component":42,"src/core/TypeManager":57,"src/coreComponents/AppOverlayComponent/coreComponentDefs/AppOverlayComponentHostDef":11}],11:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def AppOverlayComponent
			 * @isGroup true
			 * 
			 * @CSSify styleName : AppOverlayComponentHost/true
			 * @CSSify styleName : AppOverlayComponentTemplate/false
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */
			var TypeManager = _dereq_('src/core/TypeManager');
			var CreateStyle = _dereq_('src/core/GenericStyleConstructor');


			var AppOverlayComponentDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var hostStyles = [

				{
					"display": "flex",
					"flexFlow": "row",
					"flex": "1 1 100%",
					"selector": ":host",
					"position": "absolute",
					"width": "100%",
					"height": "25%",
					"top": "74%",
					"padding": "38px",
					"boxSizing": "border-box"
				}

				];
				var hostStylesUseCache = {
					use : true,
					nameInCache : 'AppOverlayComponentHostStyles'
				};
				
				
				var moduleDef = TypeManager.createComponentDef({
					nodeName : 'app-overlay',
							sWrapper : CreateStyle(
									hostStylesUseCache.use ? hostStylesUseCache.nameInCache : null,
									hostStyles
								)
				});
				
				return moduleDef;
			};

			module.exports = AppOverlayComponentDef;
			},{"src/core/GenericStyleConstructor":47,"src/core/TypeManager":57}],12:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor ComponentPickingInput
			*/

			var TypeManager = _dereq_('src/core/TypeManager');
			var Components = _dereq_('src/core/Component');

			var createComponentPickingInputHostDef = _dereq_('src/coreComponents/ComponentPickingInput/coreComponentDefs/ComponentPickingInputHostDef');
			//var createComponentPickingInputSlotsDef = require('src/coreComponents/ComponentPickingInput/coreComponentDefs/ComponentPickingInputSlotsDef');

			var ComponentPickingInput = function(definition, parentView, parent) {
				if (!definition.getGroupHostDef() || !definition.getGroupHostDef().props.fastHasObjectByKey('inChannel'))
					definition = createComponentPickingInputHostDef();
			//	console.log(definition);
				Components.CompositorComponent.call(this, definition, parentView, parent);
				this.objectType = 'ComponentPickingInput';
			};
			ComponentPickingInput.prototype = Object.create(Components.CompositorComponent.prototype);
			ComponentPickingInput.prototype.objectType = 'ComponentPickingInput';
			ComponentPickingInput.prototype.extendsCore = 'CompoundComponent';

			//ComponentPickingInput.defaultDef = {
			//	nodeName : 'div',
			//	attributes : [],
			//	states : [],
			//	props : [],
			//	reactOnParent : [],
			//	reactOnSelf : []
			//}

			ComponentPickingInput.prototype.createDefaultDef = function() {
				return createComponentPickingInputHostDef().getHostDef();
			};

			module.exports = ComponentPickingInput;
			},{"src/core/Component":42,"src/core/TypeManager":57,"src/coreComponents/ComponentPickingInput/coreComponentDefs/ComponentPickingInputHostDef":13}],13:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def ComponentPickingInput
			 * @isGroup true
			 * 
			 * @CSSify styleName : ComponentPickingInputHost/false
			 * @CSSify styleName : ComponentPickingInputButton/false
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */
			var TypeManager = _dereq_('src/core/TypeManager');
			var CreateStyle = _dereq_('src/core/GenericStyleConstructor');


			var ComponentPickingInputDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var hostStyles = [

				{
					"selector": ":host, div",
					"boxSizing": "border-box",
					"background": "none",
					"border": "0",
					"boxShadow": "none",
					"margin": "0",
					"outline": "0",
					"padding": "0",
					"verticalAlign": "baseline"
				},
				{
					"selector": ":host",
					"display": "flex",
					"flex": "1 1 0",
					"alignItems": "center",
					"justifyContent": "space-between",
					"border": "1px solid #383838",
					"margin": "2px",
					"padding": "3px",
					"borderRadius": "2px"
				},
				{
					"selector": "label",
					"padding": "2px 7px"
				}

				];
				var hostStylesUseCache = {
					use : false,
					nameInCache : 'ComponentPickingInputHostStyles'
				};

				var buttonStyles = [

				{
					"selector": ":host, div",
					"boxSizing": "border-box",
					"background": "none",
					"border": "0",
					"boxShadow": "none",
					"margin": "0",
					"outline": "0",
					"padding": "0",
					"verticalAlign": "baseline"
				},
				{
					"selector": ":host",
					"backgroundColor": "#3F3F3F",
					"display": "flex",
					"alignItems": "center",
					"justifyContent": "center",
					"width": "38px",
					"height": "36px",
					"border": "1px outset #777",
					"borderRadius": "3px"
				},
				{
					"selector": ":host(:nth-child(3))",
					"width ": "31px",
					"height": "36px"
				}

				];
				var buttonStylesUseCache = {
					use : false,
					nameInCache : 'ComponentPickingInputButtonStyles'
				};
				
				
				var moduleDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
			//			type : 'ComponentPickingInput',
						nodeName : 'picking-input',
						props : [
							{accepts : undefined},
							{title : undefined},
							{inChannel : undefined},
							{outChannel : undefined}
						],
						states : [],
						subscribeOnChild : [
							{
								on : 'update',
								subscribe : function(e) {
									if (e.bubble)
										this.trigger('update', e.data, true);
								}
							}
						],
							sWrapper : CreateStyle(
									hostStylesUseCache.use ? hostStylesUseCache.nameInCache : null,
									hostStyles
								)
					}),
					members : [
						TypeManager.createComponentDef({
							type : 'SimpleText',
							nodeName : 'label',
							reactOnParent : [
								{
									from : 'title',
									to : 'content'
								}
							]
						}),
						TypeManager.createComponentDef({
							type : 'VisibleStateComponent',
							nodeName : 'pad-in',
							props : [
								
							],
							sWrapper : CreateStyle(
									buttonStylesUseCache.use ? buttonStylesUseCache.nameInCache : null,
									buttonStyles
								)
						}),
						TypeManager.createComponentDef({
							type : 'FontSwatchComponent',
							nodeName : 'swatch-section',
			//				props : [
			//					{accepts : undefined}
			//				],
							reactOnParent : [
			//					{
			//						from : 'accepts',
			//						to : 'accepts'
			//					},
								{
									from :  'inChannel',
									to : 'updateChannel',
									map : function(val) {return this.adaptDBTypedValue(val);}
								}
							]
						}),
			//			TypeManager.createComponentDef({
			//				host : TypeManager.createComponentDef({
			//					type : 'TypedListBuilderComponent',
			//					nodeName : 'section',
			//					props : [
			//						{accepts : undefined}
			//					],
			//					reactOnParent : [
			//						{
			//							from : 'accepts',
			//							to : 'accepts'
			//						},
			//						{
			//							from :  'inChannel',
			//							cbOnly : true,
			//							subscribe : function(value) {
			//								var self = this;
			//								this.streams.accepts.subscribe(function(val) {
			//									console.log(val, self.typedSlots[0].newItem(value), value, self);
			//									self.defineHostedComponentDef(val, 1);
			//									self.typedSlots[0].push(
			//										self.typedSlots[0].newItem(value)
			//									);
			//								})
			////								var type = this.streams.accepts.value;
			////								console.log(this.streams, type, value);
			////								
			////								this.defineHostedComponentDef(type, 1);
			//////								this.typedSlots[0].push(
			//////									this.typedSlots[0].newItem(value)
			//////								);
			//							}
			//						}
			//					]
			//				})
			//			}, null, 'rootOnly'),
						TypeManager.createComponentDef({
							type : 'VisibleStateComponent',
							nodeName : 'pad-out',
							props : [
								
							],
							sWrapper : CreateStyle(
									buttonStylesUseCache.use ? buttonStylesUseCache.nameInCache : null,
									buttonStyles
								)
						}),
					]
				}, null, 'rootOnly');
				
				
				return moduleDef;
			};

			module.exports = ComponentPickingInputDef;
			},{"src/core/GenericStyleConstructor":47,"src/core/TypeManager":57}],14:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor FlexColumnComponent
			*/

			var TypeManager = _dereq_('src/core/TypeManager');
			var Components = _dereq_('src/core/Component');

			var createFlexColumnComponentHostDef = _dereq_('src/coreComponents/FlexColumnComponent/coreComponentDefs/FlexColumnComponentHostDef');
			//var createFlexColumnComponentSlotsDef = require('src/coreComponents/FlexColumnComponent/coreComponentDefs/FlexColumnComponentSlotsDef');

			var FlexColumnComponent = function(definition, parentView, parent) {
				Components.CompositorComponent.call(this, definition, parentView, parent);
				this.objectType = 'FlexColumnComponent';
			};
			FlexColumnComponent.prototype = Object.create(Components.CompositorComponent.prototype);
			FlexColumnComponent.prototype.objectType = 'FlexColumnComponent';
			FlexColumnComponent.prototype.extendsCore = 'CompoundComponent';

			FlexColumnComponent.defaultDef = {
				nodeName : 'box-column',
				attributes : [],
				states : [],
				props : [],
				reactOnParent : [],
				reactOnSelf : []
			};

			FlexColumnComponent.prototype.createDefaultDef = function() {
				return TypeManager.createComponentDef(
						createFlexColumnComponentHostDef(),
						'FlexColumnComponentDefaultDef',
						'rootOnly'
					);
			};

			FlexColumnComponent.prototype.getRow = function(rowIdx) {
				return this._children[rowIdx];
			};

			module.exports = FlexColumnComponent;
			},{"src/core/Component":42,"src/core/TypeManager":57,"src/coreComponents/FlexColumnComponent/coreComponentDefs/FlexColumnComponentHostDef":15}],15:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def FlexColumnComponent
			 * @isGroup true
			 * 
			 * @CSSify styleName : FlexColumnComponentHost/true
			 * @CSSify styleName : FlexColumnComponentTemplate/false
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */
			var TypeManager = _dereq_('src/core/TypeManager');
			var CreateStyle = _dereq_('src/core/GenericStyleConstructor');


			var FlexColumnComponentDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var hostStyles = [

				{
					"display": "flex",
					"flexFlow": "column",
					"flex": "1 1 0",
					"selector": ":host",
					"boxSizing": "border-box",
					"background": "0",
					"border": "0",
					"boxShadow": "none",
					"margin": "0",
					"outline": "0",
					"padding": "0",
					"verticalAlign": "baseline"
				}

				];
				var hostStylesUseCache = {
					use : true,
					nameInCache : 'FlexColumnComponentHostStyles'
				};
				
				
				var moduleDef = TypeManager.createComponentDef({
					nodeName : 'box-column',
							sWrapper : CreateStyle(
									hostStylesUseCache.use ? hostStylesUseCache.nameInCache : null,
									hostStyles
								)
				});
				
				return moduleDef;
			};

			module.exports = FlexColumnComponentDef;
			},{"src/core/GenericStyleConstructor":47,"src/core/TypeManager":57}],16:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor FlexGridComponent
			*/

			var TypeManager = _dereq_('src/core/TypeManager');
			var Components = _dereq_('src/core/Component');

			//var createFlexGridComponentHostDef = require('src/coreComponents/FlexGridComponent/coreComponentDefs/FlexGridComponentHostDef');
			//var createFlexGridComponentSlotsDef = require('src/coreComponents/FlexGridComponent/coreComponentDefs/FlexGridComponentSlotsDef');

			var FlexGridComponent = function(definition, parentView, parent) {
				Components.CompositorComponent.call(this, definition, parentView, parent);
				this.objectType = 'FlexGridComponent';
			};
			FlexGridComponent.prototype = Object.create(Components.CompositorComponent.prototype);
			FlexGridComponent.prototype.objectType = 'FlexGridComponent';
			FlexGridComponent.prototype.extendsCore = 'CompoundComponent';

			FlexGridComponent.defaultDef = {
				nodeName : 'box-grid',
				attributes : [],
				states : [],
				props : [],
				reactOnParent : [],
				reactOnSelf : []
			};

			FlexGridComponent.prototype.createDefaultDef = function() {
				return TypeManager.createComponentDef(
						FlexGridComponent.defaultDef,
						'FlexGridComponentDefaultDef',
						'rootOnly'
					);
			};

			// RowOfColumn and ColumnOfRow are identical, cause FlexGrid may host a Row or a Column
			// 		=> let's use the method that is the most semantically convenient in our app 
			FlexGridComponent.prototype.getRowOfColumn = function(rowIdx, colIdx) {
				return this._children[colIdx]._children[rowIdx];
			};

			FlexGridComponent.prototype.getColumnOfRow = function(rowIdx, colIdx) {
				return this._children[colIdx]._children[rowIdx];
			};

			FlexGridComponent.prototype.getColumn = function(colIdx) {
				return this._children[colIdx];
			};


			module.exports = FlexGridComponent;
			},{"src/core/Component":42,"src/core/TypeManager":57}],17:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor FlexRowComponent
			*/

			var TypeManager = _dereq_('src/core/TypeManager');
			var Component = _dereq_('src/core/Component');

			var createFlexRowComponentHostDef = _dereq_('src/coreComponents/FlexRowComponent/coreComponentDefs/FlexRowComponentHostDef');
			//var createFlexRowComponentSlotsDef = require('src/coreComponents/FlexRowComponent/coreComponentDefs/FlexRowComponentSlotsDef');

			var FlexRowComponent = function(definition, parentView, parent) {
				Component.CompositorComponent.call(this, definition, parentView, parent);
				this.objectType = 'FlexRowComponent';
			};
			FlexRowComponent.prototype = Object.create(Component.CompositorComponent.prototype);
			FlexRowComponent.prototype.objectType = 'FlexRowComponent';
			FlexRowComponent.prototype.extendsCore = 'CompoundComponent';

			//FlexRowComponent.defaultDef = {
			//	nodeName : 'box-row',
			//	attributes : [],
			//	states : [],
			//	props : [],
			//	reactOnParent : [],
			//	reactOnSelf : []
			//}

			FlexRowComponent.prototype.createDefaultDef = function() {
				return TypeManager.createComponentDef(
						createFlexRowComponentHostDef(),
						'FlexRowComponentDefaultDef',
						'rootOnly'
					);
			};

			FlexRowComponent.prototype.getColumn = function(colIdx) {
				return this._children[colIdx];
			};

			module.exports = FlexRowComponent;
			},{"src/core/Component":42,"src/core/TypeManager":57,"src/coreComponents/FlexRowComponent/coreComponentDefs/FlexRowComponentHostDef":18}],18:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def FlexRowComponent
			 * @isGroup true
			 * 
			 * @CSSify styleName : FlexRowComponentHost/true
			 * @CSSify styleName : FlexRowComponentTemplate/false
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */
			var TypeManager = _dereq_('src/core/TypeManager');
			var CreateStyle = _dereq_('src/core/GenericStyleConstructor');


			var FlexRowComponentDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var hostStyles = [

				{
					"display": "flex",
					"flexFlow": "row",
					"flex": "1 1 0",
					"selector": ":host",
					"boxSizing": "border-box",
					"background": "0",
					"border": "0",
					"boxShadow": "none",
					"margin": "0",
					"outline": "0",
					"padding": "0",
					"verticalAlign": "baseline"
				}

				];
				var hostStylesUseCache = {
					use : true,
					nameInCache : 'FlexRowComponentHostStyles'
				};
				
				
				
				var moduleDef = TypeManager.createComponentDef({
						nodeName : 'box-row',
							sWrapper : CreateStyle(
									hostStylesUseCache.use ? hostStylesUseCache.nameInCache : null,
									hostStyles
								)
					});
				
				return moduleDef;
			};

			module.exports = FlexRowComponentDef;
			},{"src/core/GenericStyleConstructor":47,"src/core/TypeManager":57}],19:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor HToolbarComponent
			*/

			var TypeManager = _dereq_('src/core/TypeManager');
			var Components = _dereq_('src/core/Component');

			var createHToolbarComponentHostDef = _dereq_('src/coreComponents/HToolbarComponent/coreComponentDefs/HToolbarComponentHostDef');
			//var createHToolbarComponentSlotsDef = require('src/coreComponents/HToolbarComponent/coreComponentDefs/HToolbarComponentSlotsDef');

			var HToolbarComponent = function(definition, parentView, parent) {
				Components.CompositorComponent.call(this, definition, parentView, parent);
				this.objectType = 'HToolbarComponent';
			};
			HToolbarComponent.prototype = Object.create(Components.CompositorComponent.prototype);
			HToolbarComponent.prototype.objectType = 'HToolbarComponent';
			HToolbarComponent.prototype.extendsCore = 'CompoundComponent';

			//HToolbarComponent.defaultDef = {
			//	nodeName : 'h-toolbar',
			//	attributes : [],
			//	states : [],
			//	props : [],
			//	reactOnParent : [],
			//	reactOnSelf : []
			//}

			HToolbarComponent.prototype.createDefaultDef = function() {
				return TypeManager.createComponentDef(
						createHToolbarComponentHostDef(),
						'HToolbarComponentDefaultDef',
						'rootOnly'
					);
			};

			module.exports = HToolbarComponent;
			},{"src/core/Component":42,"src/core/TypeManager":57,"src/coreComponents/HToolbarComponent/coreComponentDefs/HToolbarComponentHostDef":20}],20:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def ToolbarComponent
			 * @isGroup true
			 * 
			 * @CSSify styleName : ToolbarComponentHost/true
			 * @CSSify styleName : ToolbarComponentTemplate/false
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */
			var TypeManager = _dereq_('src/core/TypeManager');
			var CreateStyle = _dereq_('src/core/GenericStyleConstructor');


			var ToolbarComponentDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */
				
				var moduleDef = TypeManager.createComponentDef({
					nodeName : 'h-toolbar'/**@CSSify Style componentStyle : ToolbarComponentHost */
				});
				
				return moduleDef;
			};

			module.exports = ToolbarComponentDef;
			},{"src/core/GenericStyleConstructor":47,"src/core/TypeManager":57}],21:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor IFrameComponent
			*/

			var TypeManager = _dereq_('src/core/TypeManager');
			var CoreTypes = _dereq_('src/core/CoreTypes');
			var Components = _dereq_('src/core/Component');

			var createIFrameComponentHostDef = _dereq_('src/coreComponents/IFrameComponent/coreComponentDefs/IFrameComponentHostDef');
			//var createIFrameComponentSlotsDef = require('src/coreComponents/IFrameComponent/coreComponentDefs/IFrameComponentSlotsDef');

			/**
			 * An IFrameComponent is responsible to instanciate a view
			 * which holds an IFrame DOM node.
			 * 
			 * This IFrame DOM node has a property called "contentWindow"
			 * which is a reference to the "window" object it holds.
			 * When instanciating and rendering the view, this remote window object is null at first.
			 * It's then populated by the browser with the real window object newly instanciated.
			 * 
			 * At instanciation, the IFrameComponent starts polling the existence of his own view
			 * and waits until the browser has populated the contentWindow.
			 * 
			 * It then sends a "ping" message, via the postMessage API, to the global window where it resides.
			 * (we could have simply used local events there, but this mechanism may be used cross-IFrames
			 * => see below in the code)
			 * 
			 * In the global window, we suppose it exists an ISocketListener,
			 * which is passed the instance of the IFrameComponent,
			 * and is simply a wrapper abstracting the handling of the IFrameComponent's pinging,
			 * and also abstracting the handling of RPC's.
			 * 
			 * The IFrameComponent shall instanciate a RPCStackComponent in its contentWindow
			 * (remote window) on the property called window._recitalRPCStack
			 * This stack is a holder to regroup the "locally scoped" functions in the remote scope.
			 * And so, via its closure, this locally scoped function may call a method on a component
			 * that only exists in what we see from here as the remote scope.
			 * 
			 * Nota: Every IFrameComponent must have a corresponding ISocketListener, 
			 * as the IFrameComponent shall instanciate a
			 * _RPCStackComponent with the status set to 'isInnerStack'.
			 * So this component shall start an interval loop that will never end
			 * unless the ISocketListener passes it a reference to its internal RPCStackComponent
			 * 
			 */
			var IFrameComponent = function(definition, parentView, parent) {
				this._connectionEstablished = false;
				
				Components.ComponentWithView.call(this, definition, parentView, parent);
				this.objectType = 'IFrameComponent';
				
				this._globalWindow = window; 	// other way of getting to the global window : ask the IFrame where it resides => self.view.getMasterNode().ownerDocument.defaultView;
				this._globalWindowURL = window.location.href;
				
				this._innerWindow;		// In the component's ctor, we don't have yet a complete view with a node element
				this._innerWindowURL;
				
				// Very temporary system to identify ping requests : we look after something which is the name of a Spip page...
				// => it won't work for every app...
				this._pingIdentifier = definition.getHostDef().attributes.getObjectValueByKey('src').match(/\?page=([a-zA-Z]+)/)[1];
				
				// An ISocketComponent shall handle the communication between the two windows
				// Its role is to store a reference to the innerWindow, in order to be able to call remote procedures
				// So it should reside in the global window :
				// 	=> the global window calls the inner window through RPC
				// 	=> and the inner windows "triggers" callbacks on the global window which shall be listening on an "update"" event
				
				// Who should we ping ? From where is the ISocketListerner listening ?
				// From inside the global window ? From inside the IFrame's window ?
				// As seen upfront, preferably from the global window.
				// But let's imagine here another scenario, and also prepare the code for this hypothesis.
				// => we'll poll both, stop on the first response and log the name of the first responding window
				
				this.listenforISocketResponse();
				
				var self = this, node;
				var connect = setInterval(function() {
					node = self.view.getMasterNode();
					
					// Do we have a view with a node ? AND the node has loaded some content and instanciated an window object ?
					// FIXME : we should not call self.pollWindows() before having reveived the DomContentReady event from the remote window.document
					if (node && node.contentWindow && node.contentWindow.document.location.href && node.contentWindow.document.location.href !== 'about:blank') {
						self._innerWindow = node.contentWindow;
						self._innerWindowURL = node.contentWindow.document.location.href;
			//			console.log('IFrameComponent', self._innerWindowURL);
					}
					else
						return;
					
			//		if (!self._connectionEstablished) {
						self._innerWindow.document.addEventListener('DOMContentLoaded', function() {
							// RPC first
							self._innerWindow._recitalRPCStack = new Components.RPCStackComponent('isInnerStack');
							
							console.log('ping/' + self._pingIdentifier + ' sent');
							self.pollWindows();
						});	
			//		}
			//		else {
						clearInterval(connect);
			//		}
				}, 512);
				

			};
			var proto_proto = Object.create(Components.ComponentWithHooks.prototype);
			Object.assign(proto_proto, CoreTypes.Worker.prototype);
			IFrameComponent.prototype = Object.create(proto_proto);
			IFrameComponent.prototype.objectType = 'IFrameComponent';
			IFrameComponent.prototype.constructor = IFrameComponent;

			IFrameComponent.prototype.createDefaultDef = function() {
				return createIFrameComponentHostDef();
			};

			IFrameComponent.prototype.createEvents = function() {
				this.createEvent('ready');
			};

			IFrameComponent.prototype.listenforISocketResponse = function() {
				// we're listening in the global window, waiting for a response
				// which should come from the global window
				// but may either come from the inner window
				var self = this;
				window.addEventListener("message", function(e) {
					if (e.data === 'pong') {
						// There seem to be a latency, IFrameComponent pinging to fast, so the ISocketListener responds multiple times
						// => test if we already received a pong
						if (self._connectionEstablished === false) {
							self._connectionEstablished = true;
							console.log('Connection between windows established');
							self.trigger('ready');
						}
					}
				});
			};

			IFrameComponent.prototype.pollWindows = function() {
				console.log('pollWindows', this._pingIdentifier, this._innerWindowURL);
				this._globalWindow.postMessage('ping/' + this._pingIdentifier, this._globalWindowURL);	// the second parameter is received oas the "origin" property on the event object
																								// a usefull "source" property shall also be passed, because of the "postMessage" specification
				this._innerWindow.postMessage('ping/' + this._pingIdentifier, this._innerWindowURL);
			};


			module.exports = IFrameComponent;
			},{"src/core/Component":42,"src/core/CoreTypes":45,"src/core/TypeManager":57,"src/coreComponents/IFrameComponent/coreComponentDefs/IFrameComponentHostDef":22}],22:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def IFrameComponent
			 * @isGroup false
			 * 
			 * @CSSify styleName : IFrameComponentHost/true
			 * @CSSify styleName : IFrameComponentTemplate/false
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */
			var TypeManager = _dereq_('src/core/TypeManager');
			var CreateStyle = _dereq_('src/core/GenericStyleConstructor');


			var IFrameComponentDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var hostStyles = [

				{
					"display": "flex",
					"flexFlow": "row",
					"flex": "1 1 100%",
					"selector": ":host",
					"position": "absolute",
					"width": "100%",
					"height": "100%",
					"boxSizing": "border-box"
				}

				];
				var hostStylesUseCache = {
					use : true,
					nameInCache : 'IFrameComponentHostStyles'
				};
				
				
				var moduleDef = TypeManager.createComponentDef({
						nodeName : 'iframe',
						attributes : [
							{title : ''}	// IFrames must have a title ()https://dequeuniversity.com/rules/axe/4.4/frame-title?utm_source=lighthouse&utm_medium=devtools)
						],
							sWrapper : CreateStyle(
									hostStylesUseCache.use ? hostStylesUseCache.nameInCache : null,
									hostStyles
								)
						
						// Local App-Root can't be child of the IFrame Component, as it's instanciation
						// occurs way later...
			//			subscribeOnChild : [
			//				{
			//					on : 'update',
			//					subscribe : function(e) {
			//						if (e.bubble)
			//							this.trigger('update', e.data);
			//					}
			//				}
			//			]
					});
				
				return moduleDef;
			};

			module.exports = IFrameComponentDef;
			},{"src/core/GenericStyleConstructor":47,"src/core/TypeManager":57}],23:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor RPCStackComponent
			*/

			var TypeManager = _dereq_('src/core/TypeManager');
			var CoreTypes = _dereq_('src/core/CoreTypes');

			/**
			 * Extract from the documentation of the IFrameComponent :
			 * 
			 * "The contentWindow (remote window) is supposed to reference an instance of a RPCStackComponent
			 * on the property called window._recitalRPCStack
			 * This stack is a holder to regroup the "locally scoped" functions in the remote scope.
			 * And so, via its closure, this locally scoped function may call a method on a component
			 * that only exists in the remote scope."
			 */
			var RPCStackComponent = function(isInnerStack) {
				CoreTypes.EventEmitter.call(this);
				this.objectType = 'RPCStackComponent';
				this._reverseScope;
				
				this.shallResolve;
				var self = this;
				this._asynchronousState = new Promise(function(resolve, reject) {
					self.shallResolve = resolve;
			//		if (isInnerStack === 'isInnerStack') {
			//			var interval = setInterval(function() {
			//				if (self._reverseScope) {
			//					resolve();
			//					clearInterval(interval);
			//				}
			//			}, 512);
			//		}
				});
				this.registeredCallbacks = {};
			};
			RPCStackComponent.prototype = Object.create(CoreTypes.EventEmitter.prototype);
			RPCStackComponent.prototype.objectType = 'RPCStackComponent';

			RPCStackComponent.prototype.acquireReverseScope = function(rpcStack) {
				this._reverseScope = rpcStack;
				this.shallResolve();
			};

			RPCStackComponent.prototype.registerProcedure = function(procedureName, closure, scope) {
				this.registeredCallbacks[procedureName] = {
					scope : scope || null,
					closure : closure
				};
			};

			RPCStackComponent.prototype.unRegisterProcedure = function(procedureName) {
				delete this.registeredCallbacks[procedureName];
			};

			RPCStackComponent.prototype.callProcedure = function(procedureName, ...args) {
				return this.registeredCallbacks[procedureName].closure.apply(
					this.registeredCallbacks[procedureName].scope,
					args
				);
			};

			/**
			 * This is an alternative to acquiring the -wrapping- IFrameComponent
			 * by traversing the DOM : it's much cleaner to access the external scope
			 * through the reference we've acquired in acquireReverseScope().
			 * this._reverseScope refers to an instance of a RPCStackComponent
			 * hosted by the ISocketListener which resides in the external scope,
			 * and which already handled the pinging between this inner scope and the outer scope.
			 */
			RPCStackComponent.prototype.callExternalProcedure = function(procedureName, ...args) {
				var self = this;
				return this._asynchronousState.then(function() {
					return self._reverseScope.callProcedure(procedureName, ...args);
				});
			};

			module.exports = RPCStackComponent;
			},{"src/core/CoreTypes":45,"src/core/TypeManager":57}],24:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor RootViewComponent
			*/

			var TypeManager = _dereq_('src/core/TypeManager');
			var Components = _dereq_('src/core/Component');

			//var createRootViewComponentHostDef = require('src/core/coreComponents/RootViewComponent/coreComponentDefs/RootViewComponentHostDef');
			//var createRootViewComponentSlotsDef = require('src/core/coreComponents/RootViewComponent/coreComponentDefs/RootViewComponentSlotsDef');

			var RootViewComponent = function(definition, parentView, parent) {
				Components.CompositorComponent.call(this, definition, parentView, parent);
				this.objectType = 'RootViewComponent';
				
			};
			RootViewComponent.prototype = Object.create(Components.CompositorComponent.prototype);
			RootViewComponent.prototype.objectType = 'RootViewComponent';
			RootViewComponent.prototype.extendsCore = 'CompoundComponent';
			RootViewComponent.prototype.render = function() {}; 							// pure virtual (injected as a dependancy by AppIgnition)



			RootViewComponent.prototype.createDefaultDef = function() {
				return TypeManager.createDef({
						host : TypeManager.createDef({
							nodeName : 'app-root'
						})
					});
			};

			RootViewComponent.prototype.getPanel = function(Idx) {
				return this._children[Idx];
			};

			RootViewComponent.prototype.getHeaderPanel = function() {
				return this._children[0];
			};

			RootViewComponent.prototype.getPagePanel = function() {
				return this._children[1];
			};

			RootViewComponent.prototype.getAfterPagePanel = function() {
				return this._children[2];
			};

			module.exports = RootViewComponent;
			},{"src/core/Component":42,"src/core/TypeManager":57}],25:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def RootViewComponent
			 * @isGroup true
			 * 
			 * @CSSify styleName : RootViewComponentHost/false
			 * @CSSify styleName : RootViewComponentHeader/false
			 * @CSSify styleName : RootViewComponentPage/false
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */
			var TypeManager = _dereq_('src/core/TypeManager');
			var CreateStyle = _dereq_('src/core/GenericStyleConstructor');


			var RootViewComponentDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must "stick" to the annotation (ie. be RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var pageStyles = [

				{
					"selector": ":host",
					"display": "flex",
					"width": "100%",
					"flex": "1 1 0",
					"flexFlow": "row",
					"boxSizing": "border-box",
					"background": "0",
					"border": "0",
					"boxShadow": "0",
					"margin": "0",
					"outline": "0",
					"padding": "0",
					"verticalAlign": "baseline"
				}

				];
				var pageStylesUseCache = {
					use : false,
					nameInCache : 'RootViewComponentPageStyles'
				};

				var hostStyles = [

				{
					"selector": ":host",
					"display": "flex",
					"width": "100%",
					"height": "100%",
					"flex": "1 1 100%",
					"flexFlow": "column",
					"top": "0px",
					"left": "0px",
					"overflow": "hidden",
					"boxSizing": "border-box",
					"background": "transparent",
					"border": "0",
					"boxShadow": "none",
					"margin": "0",
					"outline": "0",
					"padding": "0",
					"verticalAlign": "baseline"
				},
				{
					"selector": "iframe",
					"height": "75%",
					"border": "1px solid #444",
					"backgroundColor": "#333",
					"boxSizing": "border-box",
					"margin": "0"
				}

				];
				var hostStylesUseCache = {
					use : false,
					nameInCache : 'RootViewComponentHostStyles'
				};

				var headerStyles = [

				{
					"selector": ":host",
					"display": "flex",
					"width": "100%",
					"flex": "1 1 0",
					"flexFlow": "row",
					"boxSizing": "border-box",
					"background": "0",
					"border": "0",
					"boxShadow": "0",
					"margin": "0",
					"outline": "0",
					"padding": "0",
					"verticalAlign": "baseline"
				}

				];
				var headerStylesUseCache = {
					use : false,
					nameInCache : 'RootViewComponentHeaderStyles'
				};
				

				 

				var moduleDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
			//			type : 'ComposedCompnent', 				// this is implicit, as we call the CompoundComponent ctor in the ctor
						nodeName : 'app-root',
							sWrapper : CreateStyle(
									hostStylesUseCache.use ? hostStylesUseCache.nameInCache : null,
									hostStyles
								)
					}),
					members : [
						TypeManager.createComponentDef({
							type : 'ComponentWithView',
							nodeName : 'app-header',
							sWrapper : CreateStyle(
									headerStylesUseCache.use ? headerStylesUseCache.nameInCache : null,
									headerStyles
								)
						}),
						TypeManager.createComponentDef({
							type : 'ComponentWithView',
							nodeName : 'app-body',
							sWrapper : CreateStyle(
									pageStylesUseCache.use ? pageStylesUseCache.nameInCache : null,
									pageStyles
								)
						})
					]
				}, null, 'rootOnly');
				
				var minimalModuleDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
			//			type : 'ComposedCompnent', 				// this is implicit, as we call the CompoundComponent ctor in the ctor
						nodeName : 'app-root',
							sWrapper : CreateStyle(
									hostStylesUseCache.use ? hostStylesUseCache.nameInCache : null,
									hostStyles
								)
					})
				}, null, 'rootOnly');
				
			//	console.error(minimalModuleDef);
				
				return {
					moduleDef : moduleDef,
					minimalModuleDef : minimalModuleDef
				};
			};

			module.exports = RootViewComponentDef;
			},{"src/core/GenericStyleConstructor":47,"src/core/TypeManager":57}],26:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def AbstractAccordion
			 * @isGroup true
			 * 
			 * @CSSify styleName : AbstractAccordionHost/true
			 * @CSSify styleName : AbstractAccordionPseudoSlot/true
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */


			var TypeManager = _dereq_('src/core/TypeManager');


			var AbstractAccordionDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var hostStyles = [

				{
					"selector": ":host, *",
					"boxSizing": "border-box",
					"background": "0",
					"border": "0",
					"boxShadow": "none",
					"margin": "0",
					"outline": "0",
					"padding": "0",
					"verticalAlign": "baseline"
				},
				{
					"selector": ":host",
					"display": "flex",
					"flexFlow": "column",
					"flex": "1 1 0",
					"margin": "0px 0px 9px 0"
				}

				];
				var hostStylesUseCache = {
					use : true,
					nameInCache : 'AbstractAccordionHostStyles'
				};
				
				var template = TypeManager.createComponentDef({
						type : 'ComponentWithView',
						nodeName : 'accordion-set',
						states : [
							{"accordion-set" : undefined}
						]/**@CSSify Style componentStyle : AbstractAccordionPseudoSlot */
				});
				

				var moduleDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
			//			type : 'ComposedCompnent', 				// this is implicit, as we call the CompoundComponent ctor in the TabPanel ctor
						nodeName : 'reactive-accordion',
							sWrapper : CreateStyle(
									hostStylesUseCache.use ? hostStylesUseCache.nameInCache : null,
									hostStyles
								)
					}),
					lists : [
						TypeManager.createComponentDef({
								type : 'ComponentList',
								template : template
						})
					]
				}, null, 'rootOnly');
				
				return moduleDef;
			};

			module.exports = AbstractAccordionDef;
			},{"src/core/TypeManager":57}],27:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def AbstractAccordionSlot
			 * @isGroup true
			 * 
			 * @CSSify styleName : AbstractAccordionSlotTemplate/false
			 * @CSSifyTheme themeName : basic-light
			*/


			var TypeManager = _dereq_('src/core/TypeManager');
			var CreateStyle = _dereq_('src/core/GenericStyleConstructor');


			var AbstractAccordionSlotDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				
				return TypeManager.createComponentDef({
						host : TypeManager.createComponentDef({
							type : 'SomeMandatoryType',
							nodeName : 'accordion-panel'/**@CSSify Style componentStyle : AbstractAccordionSlotTemplate */
						})
					}, null, 'rootOnly');
			};


			module.exports = AbstractAccordionSlotDef;
			},{"src/core/GenericStyleConstructor":47,"src/core/TypeManager":57}],28:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def IteratingComponent
			 * @author : Kinegraphx
			 * @isGroup true
			 * 
			 * @CSSify styleName : IteratingComponentHost
			 * @CSSify styleName : IteratingComponentTemplate
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */
			var TemplateFactory = _dereq_('src/core/TemplateFactory');
			var CreateStyle = _dereq_('src/core/GenericStyleConstructor');


			var IteratingComponentDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// Remove the whitespace between @CSSify and the word DEBUG to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */
				
				return TemplateFactory.createHostDef({
					nodeName : 'ul',
				});
			};

			module.exports = IteratingComponentDef;
			},{"src/core/GenericStyleConstructor":47,"src/core/TemplateFactory":55}],29:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def IteratingComponentSlots
			 * @author : Kinegraphx
			 * @isGroup false
			 * 
			 * @CSSify styleName : IteratingComponentHeader
			 * @CSSify styleName : IteratingComponentSection
			 * @CSSifyTheme themeName : basic-light
			 */
			var TemplateFactory = _dereq_('src/core/TemplateFactory');
			var CreateStyle = _dereq_('src/core/GenericStyleConstructor');


			var IteratingComponentSlotsDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */ 	// Remove the whitespace between @CSSify and the word DEBUG to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */
				
				const slotDef = TemplateFactory.createDef({
					host : TemplateFactory.createDef({
						type : 'SimpleText',
						nodeName : 'li'
					})
				});
				
				
				
				return {
					slotDef : slotDef
				};
			};

			module.exports = IteratingComponentSlotsDef;
			},{"src/core/GenericStyleConstructor":47,"src/core/TemplateFactory":55}],30:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def BasicTable
			 * @isGroup true
			 * 
			 * @CSSify hostName : abstractTable
			 * @CSSifyRule rule : host flexBoxColumn/flexGrow
			 */

			// hostname abstractTable
			var TypeManager = _dereq_('src/core/TypeManager');

			var CreateStyle = _dereq_('src/core/GenericStyleConstructor');
			var pseudoSlotsStyles = _dereq_('src/coreDefs/abstractTablePseudoSlotsStyleDef');


			var basicTableDef = function(uniqueID, options, model) {
				
				// Some CSS stuff (styles are directly injected in the main def below)
				var styles = [
			/*@CSSifySlot*/
					];
				
				
				var slotDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
						type : 'ComponentWithView',
						nodeName : 'pseudo-slot',
						states : [
							{'slot-id' : undefined},
							{'is-embedded' : undefined},
							{'position' : undefined}
							
						],
						subscribeOnChild : [
							{
								on : 'update',
								subscribe : function(e) {
									if (e.bubble)
										this.trigger('update', e.data, true);
								}
							}
						],
						sWrapper : CreateStyle('shallBeOverriddenForSecondSlot', null, pseudoSlotsStyles()).sWrapper
					}, null, 'hostOnly')
				}, null, 'rootOnly');

				var moduleDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
			//			type : 'ComposedCompnent', 				// this is implicit, as we call the CompoundComponent ctor in the TabPanel ctor
						nodeName : 'extensible-table',
						props : [
							{updateChannel : undefined}
						],
						sWrapper : CreateStyle('abstractTable', null, styles).sWrapper
					}),
					lists : [
						TypeManager.createComponentDef({
							type : 'ComponentList',
							template : slotDef
						})
					]
				}, null, 'rootOnly');
				
				return moduleDef;
			};

			basicTableDef.__factory_name = 'basicTableDef';
			module.exports = basicTableDef;
			},{"src/core/GenericStyleConstructor":47,"src/core/TypeManager":57,"src/coreDefs/abstractTablePseudoSlotsStyleDef":31}],31:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * 
			 * @CSSify hostName : abstractTableSlots
			 * @CSSifyRule rule : host flexBoxRow
			 * @CSSifyRule rule : tdth inlineBlock/three_columns
			 * @CSSifyRule rule : tdthspecial special_table
			 */


			module.exports = function() {
				return [
			/*@CSSifySlot*/
						]
			};
			},{}],32:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def BasicTableSlots
			 * @isGroup false

			 * 
			 */


			var TypeManager = _dereq_('src/core/TypeManager');
			var Component = _dereq_('src/core/Component');

			var CreateStyle = _dereq_('src/core/GenericStyleConstructor');


			var basicTableSlotsDef = function(uniqueID, options, model) {
				
				// Some CSS stuff
				var styles = [
			/*@CSSifySlot*/
					];
				
				var headerDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
						type : 'VaritextButton',
						nodeName : 'th',
						// this is a big hack of shit (should be an attribute, but not... should be a "DOM" attribute... -> setAttribute(). TODO: fix after re-implementation of _arias&glyphs)
						states : [
							{role : "heading"},
							{sortedasc : undefined},
							{sorteddesc : undefined}
						],
						props : [
							{headerTitle : undefined}
						],
						reactOnSelf : [
							{
								from : 'headerTitle',
								to : 'content'
							}
						]
					}, null, 'hostOnly')
				}, null, 'rootOnly');
				
				var sectionDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
						type : 'ComponentWith_FastReactiveText',
						nodeName : 'tr',
						props : [
							{rowContentAsArray : undefined}
						],
						reactOnSelf : [
								{
									from : 'rowContentAsArray',
									cbOnly : true,
									subscribe : Component.ComponentWith_FastReactiveText.prototype.setContentFromArrayOnEachMemberView
								}
						]
					}, null, 'hostOnly')
				}, null, 'rootOnly');
				
				
				
				return {
					headerDef : headerDef,
					sectionDef : sectionDef
				};
			};

			basicTableSlotsDef.__factory_name = 'lazySlottedComponentDef';
			module.exports = basicTableSlotsDef;
			},{"src/core/Component":42,"src/core/GenericStyleConstructor":47,"src/core/TypeManager":57}],33:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def AbstractTree
			 * @isGroup true
			 * 
			 * @CSSify styleName : AbstractTreeHost/true
			 * @CSSify styleName : AbstractTreeHeader/true
			 */


			var TypeManager = _dereq_('src/core/TypeManager');



			var abstractTreeDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var hostStyles = [

				{
					"selector": ":host",
					"display": "flex",
					"flex": "1 1 0",
					"alignItems": "flex-start",
					"boxSizing": "border-box"
				},
				{
					"selector": "tree-branch:nth-child(3)",
					"marginLeft": "0"
				}

				];
				var hostStylesUseCache = {
					use : true,
					nameInCache : 'AbstractTreeHostStyles'
				};
				
				
				var moduleDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
						type : 'CompoundComponent',
						nodeName : 'folded-tree',
						props : [
							{selected : undefined},
							{expanded : true}
						],
							sWrapper : CreateStyle(
									hostStylesUseCache.use ? hostStylesUseCache.nameInCache : null,
									hostStyles
								)
					}),
					members : [
						TypeManager.createComponentDef({
							type : 'VaritextButtonWithPicto',
							nodeName : 'header',
							// this is a big hack of shit (should be an attribute, but not... should be a "DOM" attribute... -> setAttribute(). TODO: fix after re-implementation of _arias&glyphs)
							states : [
								{role : "heading"},
								{expanded : undefined} 
							],
							props : [
								{headerTitle : undefined}
							],
							reactOnSelf : [
								{
									from : 'headerTitle',
									to : 'content'
								}
							]/**@CSSify Style componentStyle : AbstractTreeHeader */
						})
					]
				}, null, 'rootOnly');
				
				return moduleDef;
			};

			abstractTreeDef.__factory_name = 'abstractTreeDef';
			module.exports = abstractTreeDef;
			},{"src/core/TypeManager":57}],34:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def treeBranch
			 * @isGroup true
			 * 
			 * @CSSify styleName : AbstractTreeBranch/true
			 * @CSSifyRule rule : host block
			 * @CSSifyRule rule : header hPadding
			 * 
			 */


			var TypeManager = _dereq_('src/core/TypeManager');

			var CreateStyle = _dereq_('src/core/GenericStyleConstructor');
			//var pseudoSlotsStyles = require('src/UI/defs/extraStyles/pseudoSlot');


			var treeBranchDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var branchStyles = [

				{
					"selector": "header, span",
					"display": "inline-block"
				},
				{
					"selector": "[hidden]",
					"visibility": "hidden"
				},
				{
					"selector": ":host",
					"display": "block",
					"marginLeft": "34px",
					"overflow": "hidden",
					"boxSizing": "border-box"
				},
				{
					"selector": ":host-context(folded-tree)",
					"marginLeft": "0"
				},
				{
					"selector": ":host(:not([expanded]))",
					"height": "24px"
				},
				{
					"selector": "header",
					"padding": "0 7px"
				},
				{
					"selector": "span.json-type, span.bracket",
					"fontSize": "12px",
					"padding": "0px 1px",
					"cursor": "pointer"
				},
				{
					"selector": "header:hover span.bracket"
				},
				{
					"selector": "header[selected] span.bracket"
				},
				{
					"selector": "header[selected], header[selected] span.json-type",
					"backgroundColor": "#EFEFEF"
				},
				{
					"selector": "header[selected], header[selected][role]",
					"margin": "0px 0px -2px 0px",
					"border": "1px dashed #999"
				},
				{
					"selector": "header[selected] .icofont-box:before",
					"color": "#777"
				},
				{
					"display": "inline-block",
					"minWidth": "18px",
					"maxWidth": "18px",
					"maxHeight": "24px",
					"fontFamily": "Glyphicons Halflings",
					"fontSize": "12px",
					"marginRight": "-5px",
					"padding": "3px",
					"cursor": "pointer",
					"selector": ".glyphicon"
				},
				{
					"selector": ".glyphicon:nth-child(2)",
					"marginLeft": "-18px"
				},
				{
					"selector": ".glyphicon-arrow-right:before",
					"content": "'\\e080'"
				},
				{
					"selector": ".glyphicon-arrow-down:before",
					"content": "'\\e114'",
					"color": "#ffa500"
				},
				{
					"selector": "span.icofont-box, span.icofont-listing-number",
					"fontFamily": "IcoFont",
					"fontSize": "12px",
					"maxWidth": "24px",
					"padding": "0px 4px 0 0px",
					"transform": "translateY(-4px)"
				},
				{
					"selector": "span.icofont-box[hidden], span.icofont-listing-number[hidden]",
					"display": "none"
				},
				{
					"selector": ".icofont-box:before",
					"content": "'\\eec1'"
				},
				{
					"selector": ".icofont-listing-number:before",
					"content": "'\\ef76'"
				},
				{
					"selector": "span.icofont-box:hover:before",
					"content": "'\\eec2'"
				},
				{
					"selector": "span.icofont-listing-number:hover:before",
					"content": "'\\eec2'"
				},
				{
					"selector": ":host(:not([expanded])) span.icofont-box:before",
					"content": "'\\eec2'"
				},
				{
					"selector": ":host(:not([expanded])) span.icofont-listing-number:before",
					"content": "'\\eec2'"
				}

				];
				var branchStylesUseCache = {
					use : true,
					nameInCache : 'AbstractTreeBranchStyles'
				};
				
				var moduleDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
						type : 'CompoundComponent',
						nodeName : 'tree-branch',
						states : [
							{expanded : undefined}
						],
						props : [
							{headerTitle : undefined},
							{displayedas : undefined},
							{selected : undefined},
							{branchintree : undefined},
							{nodeintree : undefined}
						],
						reactOnParent : [
							{
								from : 'selected',
								to : 'selected'
							}
						],
							sWrapper : CreateStyle(
									branchStylesUseCache.use ? branchStylesUseCache.nameInCache : null,
									branchStyles
								)
					}),
					members : [
						TypeManager.createComponentDef({
							type : 'VaritextButtonWithPictoFirst',
							nodeName : 'header',
							// this is a big hack of shit (should be an attribute, but not... should be a "DOM" attribute... -> setAttribute(). TODO: fix after re-implementation of _arias&glyphs)
							states : [
								{role : "heading"},
								{expanded : undefined},
								{displayedas : undefined},
								{selected : undefined},
								{branchintree : undefined},
								{nodeintree : undefined}
							],
							reactOnParent : [
								{
									from : 'headerTitle',
									to : 'content'
								},
								{
									from : 'selected',
									cbOnly : true,
									subscribe : function(value) {this.streams.selected.value = value === this._UID ? 'selected' : null;}
								},
								{
									from : 'expanded',
									to : 'expanded'
								},
								{
									from : 'displayedas',
									to : 'displayedas'
								},
								{
									from : 'branchintree',
									to : 'branchintree'
								},
								{
									from : 'nodeintree',
									to : 'nodeintree'
								}
							]
						})
					]
				}, null, 'rootOnly');
				
				return moduleDef;
			};

			treeBranchDef.__factory_name = 'treeBranchDef';
			module.exports = treeBranchDef;
			},{"src/core/GenericStyleConstructor":47,"src/core/TypeManager":57}],35:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def LazySlottedCompoundComponent
			 * @isGroup true
			 * 
			 * @CSSify styleName : LazySlottedCompoundComponentHost/true
			 * @CSSify styleName : LazySlottedCompoundComponentPseudoslot/false
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */


			var TypeManager = _dereq_('src/core/TypeManager');



			var lazySlottedComponentDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */
				
				
				var slotDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
						type : 'ComponentWithView',
						nodeName : 'pseudo-slot',
						states : [
							{'slot-id' : undefined},
							{'is-embedded' : undefined},
							{'position' : undefined}
							
						],
						subscribeOnChild : [
							{
								on : 'update',
								subscribe : function(e) {
									if (e.bubble)
										this.trigger('update', e.data, true);
								}
							}
						]/**@CSSify Style componentStyle : LazySlottedCompoundComponentPseudoslot */
					}, null, 'hostOnly')
				}, null, 'rootOnly');
				
				
				/*
				 * Build the schematic-def of the component: 
				 * 
				 * this one is pretty special...
				 * 
				 * This def is the base-def for any LazySlottedComponent instance
				 * But, CAUTION: In order to implement different -individual- defs for the slots (and/or being able to -reduce- the slots count, if needed, without breaking the execution)
				 * 		=> we have to take into account that there is a !second! def obj, which is injected via a closure directly into the LazySlottedComponent ctor
				 * 		=> so the LazySlottedComponent must then be extended through prototypal inheritance, and :
				 * 			-*- eventually, his slotsDef property overridden (pre-defined) in the derived ctor
				 * 			-*- eventually, his slotsCount property {number} also overridden (pre-defined) in the derived ctor
				 * 			-*- and if the type of the slots must be different than "Dataset", his affectSlots() method must be overridden
				 */
				var moduleDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
			//			type : 'ComposedCompnent', 				// this is implicit, as we call the CompoundComponent ctor in the TabPanel ctor
						nodeName : 'smart-tabs'/**@CSSifyStyle componentStyle : LazySlottedCompoundComponentHost */
					}),
					lists : [
						TypeManager.createComponentDef({
							type : 'ComponentList',
							template : slotDef
						})
					]
				}, null, 'rootOnly');
				
				return moduleDef;
			};

			lazySlottedComponentDef.__factory_name = 'lazySlottedComponentDef';
			module.exports = lazySlottedComponentDef;
			},{"src/core/TypeManager":57}],36:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def LazyHostComponentSlots
			 * @isGroup false
			 * 
			 * @CSSify styleName : LazySlottedCompoundComponentTabpanel/false
			 * @CSSifyTheme themeName : basic-light
			 */


			var TypeManager = _dereq_('src/core/TypeManager');

			var CreateStyle = _dereq_('src/core/GenericStyleConstructor');


			var lazySlottedComponentSlotsDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */
				
				var headerDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
						type : 'VaritextButton',
						nodeName : 'header',
						// this is a big hack of shit (should be an attribute, but not... should be a "DOM" attribute... -> setAttribute(). TODO: fix after re-implementation of _arias&glyphs)
						states : [
							{role : "heading"},
							{highlighted : undefined}
						],
						props : [
							{headerTitle : undefined}
						],
						reactOnSelf : [
							{
								from : 'headerTitle',
								to : 'content'
							}
						]
					}, null, 'hostOnly')
				}, null, 'rootOnly');
				
				var sectionDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
						type : 'ComponentWithView',
						nodeName : 'tab-panel'/**@CSSifyStyle componentStyle : LazySlottedCompoundComponentTabpanel */
					}, null, 'hostOnly')
				}, null, 'rootOnly');
				
				
				
				return {
					headerDef : headerDef,
					sectionDef : sectionDef
				};
			};

			lazySlottedComponentSlotsDef.__factory_name = 'lazySlottedComponentDef';
			module.exports = lazySlottedComponentSlotsDef;
			},{"src/core/GenericStyleConstructor":47,"src/core/TypeManager":57}],37:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def treeLeafTemplate
			 * @isGroup true
			 * 
			 * @CSSify styleName : AbstractTreeLeaf/true
			 * @CSSifyRule rule : host block
			 * @CSSifyRule rule : div_2ndChild pointer
			 */


			var TypeManager = _dereq_('src/core/TypeManager');

			var CreateStyle = _dereq_('src/core/GenericStyleConstructor');


			var treeLeafTemplateDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var leafStyles = [

				{
					"selector": "[hidden]",
					"visibility": "hidden"
				},
				{
					"selector": ":host",
					"marginLeft": "57px",
					"boxSizing": "border-box"
				},
				{
					"selector": "div:nth-child(3)"
				},
				{
					"selector": "div",
					"display": "inline-block"
				},
				{
					"selector": ":host(:hover) div:nth-child(3):before, :host(:hover) div:nth-child(3):after"
				},
				{
					"selector": ":host([selected]) div:nth-child(3)",
					"fontWeight": "bold"
				}

				];
				var leafStylesUseCache = {
					use : true,
					nameInCache : 'AbstractTreeLeafStyles'
				};
				
				var secondSlotDef = TypeManager.createComponentDef({
						type : 'KeyValuePairComponent',
						nodeName : 'key-value-pair',
						states : [
							{selected : undefined}
						],
						reactOnParent : [
							{
								from : 'selected',
								cbOnly : true,
								subscribe : function(value) {this.streams.selected.value = value === this._UID ? 'selected' : null;}
							}
						],
							sWrapper : CreateStyle(
									leafStylesUseCache.use ? leafStylesUseCache.nameInCache : null,
									leafStyles
								)
					}, 'KeyValuePair');
				
				
				return secondSlotDef;
			};

			treeLeafTemplateDef.__factory_name = 'treeLeafTemplateDef';
			module.exports = treeLeafTemplateDef;
			},{"src/core/GenericStyleConstructor":47,"src/core/TypeManager":57}],38:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @bootstraper AppIgniter
			 * @bootstraper ListInjector
			 */

			const appConstants = _dereq_('src/appLauncher/appLauncher');
			const ElementCreator = _dereq_('src/core/GenericElementConstructor');
			const TypeManager = _dereq_('src/core/TypeManager');
			const TemplateFactory = _dereq_('src/core/TemplateFactory');
			const Registries = _dereq_('src/core/Registries');
			const CoreTypes = _dereq_('src/core/CoreTypes');
			const Component = _dereq_('src/core/Component');
			const CompoundComponent = _dereq_('src/core/CompoundComponent');
			const componentTypes = CompoundComponent.componentTypes;
			const coreComponents = CompoundComponent.coreComponents;

			const elementDecorator_OffsetProp = _dereq_('src/core/elementDecorator_Offset');




			/**
			 * @constructor Ignition : this is the abstract class
			 */
			const Ignition = function(definition, containerIdOrContainerNode) {};
			Ignition.prototype = {};
			Ignition.prototype.objectType = 'Ignition'; 

			Ignition.prototype.decorateComponentsThroughDefinitionsCache = function(listDef) {
			//	console.log('decorateComponentsThroughDefinitionsCache');
				// instanciate DOM objects through cloning : DOM attributes are always static
				// 					=> iterate on the "views" register
				if (typeof document !== 'undefined' && typeof document.ownerDocument !== 'undefined')
					this.instanciateDOM();
				
				// instanciate streams
				this.instanciateStreams();
				
				// handle reactivity and event subscription : each component holds a "unique ID from the def" => retrieve queries from the "reactivity" register
				this.handleReactivityAndEvents();
				
				// decorate DOM Objects with :
				// * 						- streams
				// * 						- reflexive props
				// assign reflectedObj to streams
				this.lateEventBindingAndBidirectionalReflection(listDef);

				this.cleanRegisters();
			};



			/*
			 * INITIALIZATION CHAPTER : instanciate DOM
			 * 
			 */
			Ignition.prototype.instanciateDOM = function() {
				var rootNodeIfDOM,
					views = Registries.viewsRegistry,
					nodes = Registries.nodesRegistry.cache,
					attributesCache = Registries.caches.attributes.cache,
					attributes,
					alreadyCloned = false,
					cloneMother,
					effectiveViewAPI,
					masterNode;
				
				views.forEach(function(view, key) {
					attributes = attributesCache[view._defUID];
					effectiveViewAPI = view.currentViewAPI;
					
			//		console.log(view);
					if (nodes[view._defUID].cloneMother) {
						view.callCurrentViewAPI('setMasterNode', nodes[view._defUID].cloneMother.cloneNode(true));
						Object.assign(view.callCurrentViewAPI('getMasterNode'), elementDecorator_OffsetProp);
					}
					else {
						nodes[view._defUID].cloneMother = ElementCreator.createElement(nodes[view._defUID].nodeName, nodes[view._defUID].isCustomElem, Registries.caches.states.cache[view._defUID]);
						
						alreadyCloned = false;
						cloneMother = nodes[view._defUID].cloneMother;
						attributes.forEach(function(attrObject) {
							if (attrObject.getName().indexOf('aria') === 0)
								cloneMother.setAria(attrObject.getName(), attrObject.getValue());
							else {
								if (attrObject.getName() === 'textContent' && view.currentViewAPI.isShadowHost)
									console.warn('DOM rendering shall fail: textContent on a DOM custom-element shall be appended outside of the shadowRoot. nodeName is ' + view.currentViewAPI.nodeName + ' & _defUID is ' + view._defUID + '. Consider using a reactive prop instead. For example, the SimpleText Component can handle that case.');
								cloneMother[attrObject.getName()] = attrObject.getValue();
							}
						});
						view.callCurrentViewAPI('setMasterNode', cloneMother.cloneNode(true));
						Object.assign(view.callCurrentViewAPI('getMasterNode'), elementDecorator_OffsetProp);
					}
					
					
					if (view._parent)
						view.callCurrentViewAPI('getMasterNode')._component = view._parent;
					
					// Connect DOM objects 
					if (view._sWrapperUID) {
						if (Object.prototype.toString.call(appConstants.getUID(view._sWrapperUID)) === '[object Object]') {
							view.styleHook.s = appConstants.getUID(view._sWrapperUID).clone();
							
							if (view.sOverride) {
								view.styleHook.s.overrideStyles(view.sOverride);
							}
							view.styleHook.s.shouldSerializeAll();
							
							// For style overrides and custom def objects.
							// the iframe is -no- shadow root => get the first app-root encountered as parent node
							if (view.currentViewAPI.nodeName === 'iframe') {
								if (rootNodeIfDOM.shadowRoot)
									rootNodeIfDOM.shadowRoot.prepend(view.styleHook.s.getStyleNode());
								// FIXME: this should be of no use: crappy fallback
								else
									document.body.prepend(view.styleHook.s.getStyleNode());
							}
							else {
								view.callCurrentViewAPI('getWrappingNode').append(view.styleHook.s.getStyleNode());
							}
						}
					}
					
					if(view.parentView && typeof view.parentView.callCurrentViewAPI !== 'function')
						console.warn('unknown rendering error : view.parentView.callCurrentViewAPI is not a function', view.parentView);
				
					if (view.parentView && view.parentView.callCurrentViewAPI('getWrappingNode')) {
						view.parentView.callCurrentViewAPI('getWrappingNode').append(view.callCurrentViewAPI('getMasterNode'));
					}
					
					// This is quite risky, as for now rootView is instanciated first,
					// but do we have any guarantee this will always be the case ?
					if (!rootNodeIfDOM && view.currentViewAPI.nodeName === 'app-root')
						rootNodeIfDOM = view.callCurrentViewAPI('getMasterNode');
				});
			};





			/*
			 * INITIALIZATION CHAPTER : instanciate Streams
			 * 
			 */
			Ignition.prototype.instanciateStreams = function() {
				var typedComponentRegister = Registries.typedHostsRegistry.cache;
				var streams = Registries.caches.streams.cache;
				for (let defUID in typedComponentRegister) {
					typedComponentRegister[defUID].forEach(function(component) {
						streams[defUID].forEach(function(stateObj) {
			//				console.log(stateObj.getName(), component)
							component.streams[stateObj.getName()] = new CoreTypes.Stream(stateObj.getName(), stateObj.getValue(), null, null, null, component);
						});
					});
				}
			};





			/*
			 * INITIALIZATION CHAPTER : handle reactivity & events
			 * 
			 */
			Ignition.prototype.handleReactivityAndEvents = function() {
				var typedComponentRegister = Registries.typedHostsRegistry.cache;
				var reactivityQueries, eventQueries, bindingHandler, component;
				
				TemplateFactory.reactivityQueries.forEach(function(subscriptionType) {
					bindingHandler = subscriptionType + 'Binding';
					
					for (let defUID in typedComponentRegister) {
						reactivityQueries = Registries.caches[subscriptionType].cache[defUID];
						
						typedComponentRegister[defUID].forEach(function(component) {
							// DEBUG HACK: to stop the infinite recursion we had in the DesignSystemManager
			//				if (listDef && (component._children.length >= 3 || reactivityQueries.length > 3)) {	//typedComponentRegister[defUID].listItemMembersCount
			////					console.log(reactivityQueries, component);
			//					return;
			//				}
							
							if (!reactivityQueries.length)
								return;

							if (component._parent && subscriptionType === 'reactOnParent')
								component[bindingHandler](reactivityQueries, component._parent, subscriptionType);
							else if (subscriptionType === 'reactOnSelf') {
								component[bindingHandler](reactivityQueries, component._parent, subscriptionType);
							}
						});
					}
					
				});
				TemplateFactory.eventQueries.forEach(function(subscriptionType) {
					
					for (let defUID in typedComponentRegister) {
						eventQueries = Registries.caches[subscriptionType].cache[defUID];
						
						typedComponentRegister[defUID].forEach(function(component) {
							
							if (!eventQueries.length)
								return;
							switch(subscriptionType) {
								case 'subscribeOnParent' :
									if (component._parent)
										component.handleEventSubscriptions(subscriptionType, eventQueries, component._parent);
									break;
								case 'subscribeOnChild' :
									component.handleEventSubscriptions(subscriptionType, eventQueries);
									break;
								case 'subscribeOnSelf' :
									component.handleEventSubscriptions(subscriptionType, eventQueries);
									break;
							}	
						});
					}
					
				});
			};







			/*
			 * INITIALIZATION CHAPTER : lateEventBindingAndBidirectionalReflection
			 * 
			 */
			Ignition.prototype.lateEventBindingAndBidirectionalReflection = function(listDef) {
				if (!listDef)
					this.streamsBidirectionalReflectionBlank();
				else
					this.streamsBidirectionalReflectionFilled(listDef);
				
			};
			Ignition.prototype.streamsBidirectionalReflectionBlank = function() {
				var typedComponentRegister = Registries.typedHostsRegistry.cache;

				for (let defUID in typedComponentRegister) {

					typedComponentRegister[defUID].forEach(function(component) {
						if (!component.view)
							return;
						
						if (component instanceof Component.ComponentWithHooks)
							component.registerEvents();

						this.defineStreamsBidirectionalReflection(defUID, component);
					}, this);
				}
			};
			Ignition.prototype.streamsBidirectionalReflectionFilled = function(listDef) {
				var typedComponentRegister = Registries.typedHostsRegistry.cache;
				for (let defUID in typedComponentRegister) {
					typedComponentRegister[defUID].forEach(function(component) {
						if (!component.view)
							return;
						
						// TMP Hack: call artificial "hook" on LazySlottedCompoundComponent although it's not a "ComponentWithHooks"
						// (see LazySlottedCompoundComponent & ColorSamplerSetComponent)
						if (component instanceof Component.ComponentWithHooks || component instanceof coreComponents.LazySlottedCompoundComponent)
							component.registerEvents();

						this.defineStreamsBidirectionalReflection(defUID, component);
					}, this);
				}
				
				var dataStoreKey;
				for (let defUID in typedComponentRegister) {
					typedComponentRegister[defUID].forEach(function(component) {
						if (typeof (dataStoreKey = Registries.dataStoreRegistry.getItem(component._UID)) !== 'undefined')
							this.handleReflectionOnModel.call(component, listDef.reflectOnModel, listDef.augmentModel, listDef.each[dataStoreKey]);
					}, this);
				}
			};
			Ignition.prototype.defineStreamsBidirectionalReflection = function(defUID, component) {
				// DOM objects extension : we need 2 custom props to offer a rich "reactive" experience
				// The view's "hosts" gains access here to the streams of the component.
				// It's needed if we want to allow access to the reactivity mechanisms from outside of the framework :
				// 		-> any change to an attribute or a DOM prop shall trigger a full update of the component, following the defined reactivity path (by def obj)
				// And it may be usefull in some other "barely legal" cases... (for example in "hacky" implementations that attach listeners directly to the DOM)
				component.view.getMasterNode().streams = component.streams;
				
				// And we reflect the View on each State Stream : 
				// 		-> it's a nice & implicit way to declare in the def obj that the reactivity-chain targets an "exposed" state
				// And we define for each State a special prop on the view, that reflects the state of the component
				// 
				// -*- Regarding the word "implicit" : these "kind of" tricks are strongly motivated by the philosophy of the DOM custom elements :
				//			=> the global state of the component is held by an attribute on the node : styling uses then "state dependant" selectors (through CSS or anything you could use)
				//			=> this reflection mechanism is the second step needed to achieve the goal we've mentioned above,
				// 			   say that the reactivity-chain is exposed for anyone to have access to the component's magic, even from outside of the framework    
				Registries.caches.states.cache[defUID].forEach(function(stateObj) {
					this.reflectViewOnAStateStream(component, stateObj);
				}, this);
			};
			Ignition.prototype.reflectViewOnAStateStream = function(component, stateObj) {
				// assign reflectedObj to streams
				component.streams[stateObj.getName()].acquireHostedInterface(component.view.currentViewAPI.hostedInterface);
				
				// set default states
				if (!component.view.isCustomElem) {
					// define reflexive props on view
					ElementCreator.propGetterSetter.call(component.view.getMasterNode(), stateObj.getName());
			//		component.streams[stateObj.getName()].value = stateObj.getValue();
				}
			};
			Ignition.prototype.handleReflectionOnModel = function(reflectOnModel, augmentModel, item) {
				// states and props may be automatically reflected on the component and so here on the host of the (Composed)Component (depending on the fact they're declared on the def), but not on the model : define that here
				//		update the model (assigning a getter & setter) in order to get the component's props reflected on the model
				// else
				// 		update the component's reactive props without reflection on the model
				
				if (reflectOnModel) {
					if (augmentModel) {
						for (var s in this.streams) {
							item[this.streams[s].name] = this.streams[s].reflect(this.streams[s].name, item);
						}
					}
					else {
						for (var prop in item) {
							if (!this.streams[prop])
								continue;
							item[prop] = this.streams[prop].reflect(prop, item);
						}
					}
				}
				else {
					for (var prop in item) {
						if (!this.streams[prop])
							continue;
						this.streams[prop].value = item[prop];
					}
				}
			};


			Ignition.prototype.cleanRegisters = function() {
				Registries.viewsRegistry.length = 0;
				Registries.typedHostsRegistry.reset();	
			};


			/**
			 * @method Ignition.prototype.getUpperWrappingComponentOutsideAppScope
			 */

			Ignition.prototype.getWrappingComponentOutsideAppScope = function(selector) {
				if (typeof window.parent === 'undefined') {
					console.warn('AppIgnition.getWrappingComponentOutsideAppScope: can only be called from insed an IFrame (no parent window found). Returning...');
					return;
				}
				else if (window.parent.document.querySelector('app-root').shadowRoot === null) {
					console.log(window.parent.document.querySelector('app-root'));
					console.error('AppIgnition.getWrappingComponentOutsideAppScope: the DOMelem named app-root has no shadowRoot. Returning...');
					return;
				}
				
				var matchingFrameElement;
				if ((matchingFrameElement = window.parent.document.querySelector('app-root').shadowRoot.querySelector(selector))) {
					return matchingFrameElement._component;
				}
				else if (!selector){
					console.error('AppIgnition helper method for IFrames: getting a ref on a component outside of the app\'s scope requires passing a DOM selector');
				}
				else {
					console.error('AppIgnition helper method for IFrames: no matching IFrame element for the given selector');
				}
			};








			/**
			 * @constructor IgnitionFromDef
			 */
			const IgnitionFromDef = function(definition, parentView, parent) {
				
				var type = definition.getHostDef().getType() || (definition.getGroupHostDef() && definition.getGroupHostDef().getType());
				if (type in componentTypes) {
					var mainComponent = new componentTypes[type](definition, parentView, parent);
					this.decorateComponentsThroughDefinitionsCache();
					return mainComponent;
				}
				else
					console.error('IgnitionFromDef : unknown component type found in the definition : type is ' + type);
			};
			IgnitionFromDef.prototype = Object.create(Ignition.prototype);
			IgnitionFromDef.prototype.objectType = 'IgnitionFromDef'; 



			/**
			 * @constructor IgnitionToComposed
			 */
			const IgnitionToCompound = function(definition, parentView) {
				
				var mainComponent = new CompoundComponent(definition, parentView); 
				this.decorateComponentsThroughDefinitionsCache();
				return mainComponent;
			};
			IgnitionToCompound.prototype = Object.create(Ignition.prototype);
			IgnitionToCompound.prototype.objectType = 'IgnitionToCompound'; 



			/**
			 * @constructor IgnitionToExtensible
			 */
			const IgnitionToExtensible = function(definition, containerIdOrContainerNode) {
				
				var mainComponent = new componentTypes.SinglePassExtensibleCompoundComponent(definition, containerIdOrContainerNode); 
				this.decorateComponentsThroughDefinitionsCache();
				return mainComponent;
			};
			IgnitionToExtensible.prototype = Object.create(Ignition.prototype);
			IgnitionToExtensible.prototype.objectType = 'IgnitionToExtensible'; 


			/**
			 * @constructor DelayedInit
			 * @param {String} containerId : A DOM selector, can be body or an id selector without the #
			 * @param {Component} component : the root component to be injected in the DOM
			 * @param {HierarchicalDefinition} componentListHostDef : an optional definition for a list of components to be instanciaded /!\ RESEVERD for the Dataset Type
			 */
			const DelayedDecoration = function(containerId, component, componentListHostDef) {
				
				this.decorateComponentsThroughDefinitionsCache(componentListHostDef);
				
				if (componentListHostDef)
					componentListHostDef.each.length = 0;
				
				if (typeof containerId !== 'string')
					return;

				document.querySelector(containerId !== 'body' ? '#' + containerId : containerId).appendChild(component.view.getMasterNode());
			};
			DelayedDecoration.prototype = Object.create(Ignition.prototype);
			DelayedDecoration.prototype.objectType = 'DelayedDecoration';







			/**
			 * @utility renderDOM
			 * @param {String} containerSelector : A DOM selector, can be body or an id selector without the #
			 * @param {Component} component : the root component to be injected in the DOM
			 * @param {HierarchicalDefinition} componentListHostDef : an optional definition for a list of components to be instanciaded /!\ RESEVERD for the Dataset Type
			 */
			const renderDOM = function(containerSelector, component, componentListHostDef) {
				const app = new Ignition();
				app.decorateComponentsThroughDefinitionsCache(componentListHostDef);
				
				if (componentListHostDef)
					componentListHostDef.each.length = 0;
				
				if (typeof containerSelector !== 'string')
					return component;
				
				document.querySelector(containerSelector).appendChild(component.view.getMasterNode());
			};










			/**
			 * @constructor RootView
			 */
			const createRootViewComponentHostDef = _dereq_('src/coreComponents/RootViewComponent/coreComponentDefs/RootViewComponentHostDef');

			const RootView = function(igniterForChild, preparePage, noAppend) {
				var component;
				if (preparePage)
					component = new componentTypes.RootViewComponent(TypeManager.createComponentDef(createRootViewComponentHostDef().moduleDef));
				else
					component = new componentTypes.RootViewComponent(TypeManager.createComponentDef(createRootViewComponentHostDef().minimalModuleDef));
				
				if (igniterForChild && typeof igniterForChild.init === 'function') {
					igniterForChild.init(component.view, component);
				}
				
				// Render in all sitations as we may want a root view whithout children when beginning the creation of an app
				component.render();
				
				// HACK: before we generalize the API for style objects, there's only the DOM...
				//		=> don't try to append a node to the DOM if we're outside the browser
				if (typeof document === 'undefined' || typeof document.ownerDocument === 'undefined')
					return component;
				
				if (!noAppend)
					document.querySelector('body').appendChild(component.view.getMasterNode());
				return component;
			};
			RootView.prototype = Object.create(Ignition.prototype);
			RootView.prototype.objectType = 'RootView';













			/**
			 * @constructor List
			 * This ctor is the effector of the ReactiveDataset
			 * 	=> tight coupling = mandatory static inclusion in core (Dataset requires App).
			 */
			const List = function(definition, parent) {
				this.create(definition, parent);
			};
			List.prototype = Object.create(Ignition.prototype);
			List.prototype.objectType = 'List'; 

			List.prototype.create = function(definition, parent) {
				new coreComponents.ComponentList(definition, parent.view, parent);
				this.decorateComponentsThroughDefinitionsCache(definition.getHostDef());
				definition.getHostDef().each = [];
			};

			const App = {
					componentTypes : componentTypes,
					coreComponents : coreComponents,
					RootView : RootView,
					IgnitionToCompound : IgnitionToCompound,
					IgnitionFromDef : IgnitionFromDef,
					IgnitionToExtensible : IgnitionToExtensible,
					DelayedDecoration : DelayedDecoration,
					renderDOM : renderDOM,
					List : List,
					decorateComponentsThroughDefinitionsCache : IgnitionFromDef.prototype.decorateComponentsThroughDefinitionsCache
			};

			module.exports = App;
			},{"src/appLauncher/appLauncher":6,"src/core/Component":42,"src/core/CompoundComponent":44,"src/core/CoreTypes":45,"src/core/GenericElementConstructor":46,"src/core/Registries":53,"src/core/TemplateFactory":55,"src/core/TypeManager":57,"src/core/elementDecorator_Offset":61,"src/coreComponents/RootViewComponent/coreComponentDefs/RootViewComponentHostDef":25}],39:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * constructor BinarySchemaFactory
			 */

			var TypeManager = _dereq_('src/core/TypeManager');
			var BinarySlice = _dereq_('src/core/BinarySlice');






			var BinarySchemaFactory = function(name, propsList, sizes) {
				
				if (!BinarySchemaFactory.schemas[name]) {
					var objectSize = 0;
					propsList.forEach(function(propName, key) {
						objectSize += sizes[key];
					}, this);
						
					var schema = function(propertiesList, sizesFromSchema) {
						var size = 0;
						propertiesList.forEach(function(propName, key) {
							this[propName] = new BinarySlice(size, sizesFromSchema[key]);
							size += sizesFromSchema[key];
						}, this);
					};
					
					schema.prototype = {};
					Object.defineProperty(schema.prototype, 'objectType', {
						value : 'BinarySchema'
					});
					Object.defineProperty(schema.prototype, '_name', {
						value : name
					});
					Object.defineProperty(schema.prototype, 'size', {
						value : objectSize
					});
					
					BinarySchemaFactory.schemas[name] = schema;
			//		console.log(new schema(propsList, sizes));
					return new schema(propsList, sizes);
				}
				else
					return new BinarySchemaFactory.schemas[name](propsList, sizes);
			};

			BinarySchemaFactory.prototype = {};
			BinarySchemaFactory.prototype.objectType = 'BinarySchemaFactory';

			BinarySchemaFactory.schemas = {};



































			module.exports = BinarySchemaFactory;
			},{"src/core/BinarySlice":40,"src/core/TypeManager":57}],40:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @consructor BinarySlice
			 */





			var BinarySlice = function(start, length) {
				this.start = start;
				this.length= length;
			};
			BinarySlice.prototype = {};


















			module.exports = BinarySlice;
			},{}],41:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @factory CachedTypes
			 */








			/**
			 * Node TYPE for typedCache
			 */
			var CachedNode = function(nodeName, isCustomElem) {
				
				this.nodeName = nodeName;
				this.isCustomElem = isCustomElem;
				this.cloneMother = null;
			};
			CachedNode.prototype = {};
			Object.defineProperty(CachedNode.prototype, 'objectType', {
				value :  'CachedNode'
			});





			module.exports = {
				CachedNode : CachedNode
			};
			},{}],42:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor Component
			 */
			// @ts-nocheck
			const CoreTypes = _dereq_('src/core/CoreTypes');
			const TypeManager = _dereq_('src/core/TypeManager');
			const TemplateFactory = _dereq_('src/core/TemplateFactory');
			const Registries = _dereq_('src/core/Registries');
			const ElementDecorator = _dereq_('src/core/elementDecorator_HSD');

			var Logger = _dereq_('src/Error&Log/Logger');

			//var Geometry = require('src/tools/Geometry');


			/**
			 * @constructor LoggingEventEmmitter
			 */
			var LoggingEventEmmitter = function(definition, parentView, parent) {
				CoreTypes.EventEmitter.call(this);
				this.objectType = 'LoggingEventEmmitter';
				
				this.logger = new Logger();
				this.logger._currentlyCallingObjectType = Object.getPrototypeOf(this).objectType;
				this.log = this.logger.log.bind(this.logger);
			};
			LoggingEventEmmitter.prototype = Object.create(CoreTypes.EventEmitter.prototype);
			LoggingEventEmmitter.prototype.objectType = 'LoggingEventEmmitter';



			/**
			 * @constructor HierarchicalObject
			 */
			var HierarchicalObject = function(definition, parentView, parent) {
				LoggingEventEmmitter.call(this);
				this.objectType = 'HierarchicalObject';
				this._key;
				
				this._parent = (parent && parent instanceof HierarchicalObject) 
					? (parent.pushChild(this) && parent)
					: parentView instanceof CoreTypes.ComponentView && parentView._parent
						? (parentView._parent.pushChild(this) && parentView._parent) 
						: null;
				
				this._children = [];
				this._fastAccessToChildren = {};
			};
			HierarchicalObject.prototype = Object.create(LoggingEventEmmitter.prototype);
			HierarchicalObject.prototype.objectType = 'HierarchicalObject';
			/**
			 * @virtual
			 */
			HierarchicalObject.prototype.onAddChild = function(child, atIndex) {}; 			// virtual
			/**
			 * @virtual
			 */
			HierarchicalObject.prototype.onRemoveChild = function(child) {}; 				// virtual

			/**
			 * 
			 */
			HierarchicalObject.prototype.getFirstChild = function() {
				return this._children[0];
			};

			HierarchicalObject.prototype.getChildAt = function(Idx) {
				return this._children[Idx];
			};

			HierarchicalObject.prototype.getLastChild = function() {
				return this._children[this._children.length - 1];
			};

			/**
			 * 
			 */
			HierarchicalObject.prototype.storePathToChild = function(pathName, componentPath) {
				this._fastAccessToChildren[pathName] = componentPath;
			};

			HierarchicalObject.prototype.getChildFromStoredPath = function(pathName) {
				var pathToChild = this._fastAccessToChildren[pathName].slice(0);
				return this.getChildFromPath(pathToChild);
			};

			HierarchicalObject.prototype.getChildFromPath = function(pathAsArray) {
				var result = {
						child : null
					};
				this.traverseChildrenAlongPath(pathAsArray, result);
				return result.child;
			};

			HierarchicalObject.prototype.traverseChildrenAlongPath = function(path, result) {
				if (path.length > 1) {
					this._children[path.shift().childKey].traverseChildrenAlongPath(path, result);
				}
				else
					result.child = this._children[path.shift().childKey];
			};

			/**
			 * A method accepting not having created the view
			 * (used mainly by the present type)
			 * @param {object} child : an instance of another object of the same type
			 */
			HierarchicalObject.prototype.pushChild = function(child) {
				child._parent = this;
				child._key = this._children.length;
				this._children.push(child);
				this.onAddChild(child);
				return true;
			};

			/**
			 * A method to be used on the context of a component
			 * (requires having created a view)
			 * @param {object} child : an instance of another object of the same type
			 */
			HierarchicalObject.prototype.addChild = function(child) {
				child._parent = this;
				// Assign twice:
				// The first time we define the view of the parent
				// The second time, depending ont he view of the parent, we switch to a subView if appropriate
				child.view.parentView = this.view;
				child.view.parentView = child.view.getEffectiveParentView();
				child._key = this._children.length;
				// onAddChild is an ultra-standard approach wich doesn't support appending to subviews
				// TODO: See if we can make it smarter
			//	this.onAddChild(child);
				return true;
			};

			/**
			 * @param {object} child : an instance of another object
			 * @param {number} atIndex : the required index to splice at
			 */
			HierarchicalObject.prototype.addChildAt = function(child, atIndex) {
				if (atIndex >= this._children.length)
					return;
					
				child._parent = this;
				child._key = atIndex;
				this._children.splice(atIndex, 0, child);
				this.generateKeys(atIndex);
				this.onAddChild(child, atIndex);
			};

			/**
			 * @param {string} moduleName
			 */
			HierarchicalObject.prototype.removeChild = function(childKey) {
				if (childKey >= this._children.length)
					return;
					
				var removedChild;

				this._children[childKey].isAttached = false;
				if (this._children[childKey].view.getMasterNode())
					this._children[childKey].view.getMasterNode().remove();
				removedChild = this._children.splice(childKey, 1)[0];
			//	this.onRemoveChild(removedChild);
				(childKey < this._children.length && this.generateKeys(childKey));
				return removedChild;
			};

			/**
			 * @param {number} atIndex : the required index to clear at
			 */
			HierarchicalObject.prototype.removeChildAt = function(atIndex) {
				if (atIndex >= this._children.length)
					return;
				var removedChild = this._children.splice(atIndex, 1);
				this.generateKeys(atIndex);
				this.onRemoveChild(removedChild[0]);
			};

			/**
			 * 
			 */
			HierarchicalObject.prototype.removeAllChildren = function() {
				this._children.forEach(function(child) {
					this.onRemoveChild(child);
				}, this);
				this._children.length = 0;
				return true;
			};

			/**
			 * 
			 */
			HierarchicalObject.prototype.remove = function() {
				if (this._parent)
					return this._parent.removeChild(this._key);
				else
					return this.view.getMasterNode().remove();
			};

			/**
			 * @param {number} atIndex : the first _key we need to invalidate
			 */
			HierarchicalObject.prototype.generateKeys = function(atIndex) {
				for (let i = atIndex || 0, l = this._children.length; i < l; i++) {
					this._children[i]._key = i;
				}
			};

			/**
			 * @param {number} atIndex : the first _key we need to invalidate
			 */
			HierarchicalObject.prototype.getSelfDepth = function() {
				var depth = 0, currentLevel = this;
				while (currentLevel._parent) {
					currentLevel = currentLevel._parent;
					depth++;
				}
				return depth;
			};

			/**
			 * @param {array} subscriptionType : the type among the TypeManager.eventQueries helper-array
			 * @param {array} eventQueries : the queries of the type "subscriptionType" that the component has recevied from the def
			 * @param {Component} parentComponent : the parent of the component (optional : used only when subscribeOnParent)
			 */
			HierarchicalObject.prototype.handleEventSubscriptions = function(subscriptionType, eventQueries, parentComponent) {
				if (subscriptionType === 'subscribeOnParent')
					eventQueries.forEach(function(subscription, key) {
						subscription.subscribeToEvent(this, parentComponent);
					}, this);
				else if (subscriptionType === 'subscribeOnChild') {
					this._children.forEach(function(child) {
						eventQueries.forEach(function(subscription, key) {
							subscription.subscribeToEvent(child, this);
						}, this);
					}, this);
				}
				else if (subscriptionType === 'subscribeOnSelf')
					eventQueries.forEach(function(subscription, key) {
						subscription.subscribeToEvent(this, this);
					}, this);
			};

			/**
			 * Specialization on the previous one
			 * @param {array} eventQueries : the queries of the type "subscribeOnChild" that the sync-ed Dataset passes from the def of its trackedComponent
			 */
			HierarchicalObject.prototype.handleEventSubsOnChildrenAt = function(eventQueries, atIndex) {
				this._children.forEach(function(child, key) {
					if (key >= atIndex) {
						eventQueries.forEach(function(subscription, key) {
							subscription.subscribeToEvent(child, this);
						}, this);
					}
				}, this);
			};


			HierarchicalObject.prototype.getPathToSelfFromRoot = function () {
				function getNode(component) {
					return {
						childKey : component._key
					};
				}
				var ret = [];
				this.traverseAscendants(this, ret, getNode);
				return ret.reverse();
			};

			HierarchicalObject.prototype.traverseAscendants = function (component, componentPath, getNode) {
				
				if (component._parent) {
					componentPath.push(getNode(component));
					this.traverseAscendants(component._parent, componentPath, getNode);
				}
			};


			HierarchicalObject.prototype.getDescendantsAsNameTree = function (maxStrLen) {
				function getNode(component) {
					return {
						name : Object.getPrototypeOf(component).objectType.slice(0, maxStrLen),
						children : []
					};
				}
				var ret = getNode(this);
				this.traverseDescendants(this, ret, getNode);
				return ret;
			};

			HierarchicalObject.prototype.getDescendantsAsKeyValueTree = function () {
				function getNode(component) {
					var node = {};
					node[Object.getPrototypeOf(component).objectType] = [];
					return node;
				}
				var ret = getNode(this);
				this.traverseDescendantsRaw(this, ret, getNode);
				return ret;
			};

			HierarchicalObject.prototype.traverseDescendants = function (component, componentTree, getNode) {
				var node;
				component._children.forEach(function(child) {
					node = getNode(child);
					if (Array.isArray(child._children) && child._children.length) {
						componentTree.children.push(this.traverseDescendants(child, node, getNode));
					}
					else {
						componentTree.children.push(node);
					}
				}, this);

				return componentTree;
			};

			HierarchicalObject.prototype.traverseDescendantsRaw = function (component, componentTree, getNode) {
				var node;
				
				component._children.forEach(function(child) {
					node = getNode(child);
					if (Array.isArray(child._children) && child._children.length) {
						componentTree[Object.getPrototypeOf(component).objectType].push(this.traverseDescendantsRaw(child, node, getNode));
					}
					else {
						componentTree[Object.getPrototypeOf(component).objectType].push(node);
					}
				}, this);

				return componentTree;
			};




			HierarchicalObject.prototype.overrideParent = function (Idx) {
				if (!this._parent || !this._parent._parent) {
					console.warn('Attempt to override the upmost level in the component\'s hierarchy. Returning.');
					return;
				}
				Idx = Idx || 0;
				
				if (this._parent.view) {
					this._parent.view.getMasterNode().remove();
				}
				if (this._parent._subscriptions && this._parent._subscriptions.length) {
					this._parent._subscriptions.forEach(function(sub) {
						sub.unsubscribe();
					});
				}
				this._parent.clearEventListeners();
				// TODO: selectively remove the right 'onUpdate' listener
			//	this.clearEventListeners();
				
				this._parent = this._parent._parent;
				this._parent._children[Idx] = this;
				
				this.addEventListener('update', function(e) {
					if (e.bubble)
						this.trigger('update', e.data, true);
				}.bind(this._parent));
				if (this._parent.streams.selected && this.streams.selected)
					this._parent.streams.selected.subscribe(this.streams.selected, 'value');
				
				if (this._parent.view) {
					this.view.parentView = this._parent.view;
					this._parent.view.getRoot().appendChild(this.view.getMasterNode());
				}
				
				this.generateKeys();
			};








			/**
			 * @constructor ExtensibleObject
			 */
			var ExtensibleObject = function(definition, parentView, parent) {
				HierarchicalObject.call(this, definition, parentView, parent);
				this.objectType = 'ExtensibleObject';
			};
			ExtensibleObject.prototype = Object.create(HierarchicalObject.prototype);
			ExtensibleObject.prototype.objectType = 'ExtensibleObject';
			/**
			 * @virtual
			 */
			ExtensibleObject.prototype.onExtend = function(extension) {}; 				// pure virtual implemented below, as a try
			//ExtensibleObject.prototype._asyncInitTasks = [];					// pure virtual
			//ExtensibleObject.prototype._asyncRegisterTasks = [];				// pure virtual
			/**
			 * @abstract
			 */
			ExtensibleObject.prototype.getCleanDefAfterExtension = function(Constructor) {
				var objectType = Constructor.prototype.objectType;
				var defaultDef = Constructor.prototype.createDefaultDef();
				Constructor.prototype.createDefaultDef = function() {
					return TypeManager.createComponentDef(defaultDef, objectType);
				};
			};

			/**
			 * @param {constructor:ExtensibleObject} base
			 * @param {constructor:ExtensibleObject} extension
			 */
			ExtensibleObject.prototype.addInterface = function(base, extension) {
				// namingObj was just an attemp... to "name" the ctor. Doesn't work, though...
				var namingObj = {}, objectType = base.prototype.objectType || '';
				
				namingObj[objectType] = function() {
					base.apply(this, arguments);
					extension.apply(this, arguments);
					
					base.prototype.onExtend.call(this, extension);
					this.objectType = 'Extended' + objectType;
					this._implements.push();
				};

				namingObj[objectType].prototype = this.mergeOwnProperties(base.prototype, extension.prototype);
				namingObj[objectType].prototype.constructor = namingObj[objectType];
				namingObj[objectType].prototype.objectType = objectType.indexOf('Extended') === 0 ? objectType : 'Extended' + objectType;
				(namingObj[objectType].prototype._implements
					? namingObj[objectType].prototype._implements.push(extension.prototype.objectType)
					: namingObj[objectType].prototype._implements = [extension.prototype.objectType]);
				
				base.prototype.onExtend(namingObj[objectType]);
				
				if (extension.prototype.queueAsync) {
					var taskDef = extension.prototype.queueAsync(objectType);
					(namingObj[objectType].prototype._asyncInitTasks
							? namingObj[objectType].prototype._asyncInitTasks.splice(
									(taskDef.index !== null 
											? taskDef.index 
											: namingObj[objectType].prototype._asyncInitTasks.length),
									0,
									taskDef)
							: namingObj[objectType].prototype._asyncInitTasks = [taskDef]);
				}
				if (extension.prototype.queueAsyncRegister) {
					var taskDef = extension.prototype.queueAsyncRegister(objectType);
					(namingObj[objectType].prototype._asyncRegisterTasks
							? namingObj[objectType].prototype._asyncRegisterTasks.splice(
									(taskDef.index !== null 
											? taskDef.index 
											: namingObj[objectType].prototype._asyncRegisterTasks.length),
									0,
									taskDef)
							: namingObj[objectType].prototype._asyncRegisterTasks = [taskDef]);
				}
				
				return namingObj[objectType];
			};

			/**
			 * mergeOwnProperties
			 * 
			 * This function has multiple signatures,
			 * the first parameter is optional
			 * 
			 * @param {Boolean|Object}: keepNonStdProtosOrProto
			 * @param {Object} proto
			 * @illimitedParams {Object} proto
			 */
			ExtensibleObject.prototype.mergeOwnProperties = function(keepNonStdProtosOrProto, proto) {
				var self = this, keepNonStdProtos = false, obj, desc, targetDesc, isArray, isObj, len, testedProto,
					// allow not passing the "keepNonStdProtosOrProto" parameter
					// => in that case, the first argument is the target object
					target = (typeof arguments[0] === 'boolean'
								&& arguments[0]
								&& (keepNonStdProtos = true))
									? arguments[1]
									: arguments[0] || {},
					i = keepNonStdProtos ? 2 : 1,
					length = arguments.length,
					testObj;
					
				if (target.prototype === Object.prototype) {
					console.error('you\'re not allowed to extend the native "Object" constructor');
					return;
				}
				
				// We may want to merge more than 2 objects : loop on the arguments
				for ( ; i < length; i++ ) {
					// Avoid erroneous calls where this function is called with a "null" or undefined argument
					if ((obj = arguments[ i ])) {
						// As we may be "mixing" a constructor, which has its own prototype AND an inherited prototype
						// Prepare the case for keepNonStdProtosOrProto :
						// We'll set the prototype of the constructor AND the inherited prototype as "own" props
						// Thus, we shall have sort of a "doubled" prototype chain.
						// (in reality, the chain will end after the first level, on the inheriting type, for now,
						// and we don't need more, as in most cases
						// it inherits from the CompositorComponent)
						testObj = Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertyNames(Object.getPrototypeOf(obj)));

						// Extend the target object
						// (it is frequently an empty object,
						// with its <prototype> key set to the baseClass's protoype we're inheriting from,
						// as we have this need for late extensions,
						// eg. extension of core Components in the framework)
						testObj.forEach(function(name) {
							// When keepNonStdProtos is set (as first argument of the function),
							// this function aims at retrieving the prototype of an instance
							// by setting its properties at the "own property" level
							// of the target => avoid if not explicitely called
							if (!keepNonStdProtos && !obj.hasOwnProperty(name))
								return;
							// don't merge properties from the prototype of extended natives
							// even if asked
							else if (!obj.hasOwnProperty(name) && (target instanceof Array || target instanceof String || target instanceof Object || target instanceof Boolean))
									return;
							
							desc = Object.getOwnPropertyDescriptor(obj, name);
							// Case of "described"" properties is handled at the end
							if (typeof desc === 'undefined') {
								if ((isArray = Array.isArray(obj[name])) || (isObj = (Object.prototype.toString.call(obj[name]) === '[object Object]'))) {
									len = obj[name].length || Object.keys(obj[name]).length;
									if (len) {
										// don't merge object instances that are deeper than the first level : 
										// we don't have a mechanism here to cleanly retrieve their <prototype> key
										// (Our mechanism would cause object instances from the framework
										// hosted as a prop on an instance, to have its props from the prototype
										// as "own" properties)
										if ((testedProto = Object.getPrototypeOf(obj[name])) === Object.prototype || testedProto === Array.prototype)
											target[name] = self.mergeOwnProperties(target[name] || (isArray ? [] : {}), obj[name]);
										// just copy object instances and don't recurse
										else
											target[name] = obj[name];
									}
									else
										target[name] = isArray ? [] : {};
								}
								else if (obj[name] || obj[name] === null) 	// copy null values : null is sometimes explicitly tested
									target[name] = obj[name];
								// Scalars that resolve to "falsy", which are not undefined and not null
								else if (typeof obj[name] !== 'function' && typeof obj[name] !== 'undefined' && obj[name] !== null)
									target[name] = typeof obj[name] === 'string' ? '' : 0;
							}
							else {
								targetDesc = Object.getOwnPropertyDescriptor(target, name);
								// Edge case ? Maybe there are some...
								if (typeof targetDesc !== 'undefined' && (!targetDesc.writable || !targetDesc.configurable))
									return;
								
								// Getters can't have a value
								if (!desc.get)
									Object.defineProperty(target, name, {
										value : obj[name],
										writable : desc.writable,
										enumerable : desc.enumerable,
										configurable : desc.configurable
									});
								else
									Object.defineProperty(target, name, {
										writable : desc.writable,
										enumerable : desc.enumerable,
										configurable : desc.configurable,
										get : desc.get,
										set : desc.set
									});
							}
						});
					}
				}
				return target;
			};

			/**
			 * @abstract_implementation {interface_name_masking_lock:must_be_first} {pure_virtual_on_abstract_type}
			 */
			ExtensibleObject.prototype.onExtend = function(namespace) {
				if (!(namespace.prototype.hasOwnProperty('_asyncInitTasks')))
					namespace.prototype._asyncInitTasks = [];
				if (!(namespace.prototype.hasOwnProperty('_asyncRegisterTasks')))
					namespace.prototype._asyncRegisterTasks = [];
			};








			/**
			 * @constructor AsyncActivableObject
			 */
			var AsyncActivableObject = function(definition, parentView, parent) {
				ExtensibleObject.call(this, definition, parentView, parent);
				this.objectType = 'AsyncActivableObject';
			};
			AsyncActivableObject.prototype = Object.create(ExtensibleObject.prototype);
			AsyncActivableObject.prototype.objectType = 'AsyncActivableObject';

			/**
			 * @reminder
			 * Asynchronous tasks are inherited through the prototype during the mixin, but should not be referenced by "any" component
			 */
			//AsyncActivableObject.prototype._asyncInitTasks = [];
			//AsyncActivableObject.prototype._asyncRegisterTasks = []

			/**
			 * @virtual
			 */
			AsyncActivableObject.prototype.asyncInit = function() {
				
				this._asyncInitTasks.forEach(function(asyncFunc, key) {
					asyncFunc.call(this);
				});
			};

			/**
			 * @pure_signature not to be implemented : interfaces must not inherit from a Component type, but may implement a method with this signature
			 */
			AsyncActivableObject.prototype.queueAsync = function() {
				return new TypeManager.TaskDefinition({
					type : '',
					task : function() {}
				});
			};









			/**
			 * @constructor AbstractComponent
			 */
			var AbstractComponent = function(definition, parentView, parent) {
				AsyncActivableObject.call(this, definition, parentView, parent);
				this.objectType = 'AbstractComponent';
				
				this._UID = TypeManager.UIDGenerator.newUID().toString();
				
				this._defUID = definition.getHostDef().UID;
				this._defComposedUID = '';
				
			//	console.log(definition);
				if (typeof this._defUID === 'undefined') {
					console.warn('No UID found in definition: the hierarchical structure of the def might be wrong. eg: a group def has been defined and its type is not "CompoundComponent", etc. Returning...', definition);
					return;
				}
				
			//	console.log(definition);
				if (!Registries.hostsDefinitionsCacheRegistry.getItem(this._defUID))
					this.populateStores(definition);
				this.createEvent('update');
				
			//	console.log(definition.getHostDef().UID, definition.getHostDef().nodeName, definition)
				Registries.typedHostsRegistry.getItem(this._defUID).push(this);
			};
			AbstractComponent.prototype = Object.create(AsyncActivableObject.prototype);
			AbstractComponent.prototype.objectType = 'AbstractComponent';
			/**
			 * @virtual
			 */
			AbstractComponent.prototype.createDefaultDef = function() {};			// virtual

			/**
			 * @param {ComponentDefinition}
			 */
			AbstractComponent.prototype.mergeDefaultDefinition = function(definition) {
				var defaultDef, defaultHostDef;
			//	console.log(this.createDefaultDef());
				if ((defaultDef = this.createDefaultDef(definition))) {
					defaultHostDef = defaultDef.getGroupHostDef() ? defaultDef.getGroupHostDef() : defaultDef.getHostDef();
					this._defComposedUID = defaultHostDef.UID;
			//		if (Registries.hostsDefinitionsCacheRegistry.getItem(this._defUID, this._defComposedUID))
			//			return;
				}
				else
					this._defComposedUID = this._defUID;
				
				var hostDef = definition.getHostDef();	// the CompoundComponent's ctor passes here only the received hostDef
				
			//	console.log(definition.getHostDef().UID, definition.getHostDef().nodeName, defaultDef)
			//	if (hostDef.type === 'TextInput')		
			//		console.error('TextInput', defaultHostDef, hostDef);
					
			//	console.log(hostDef.sWrapper === null, Object.getPrototypeOf(this).objectType, defaultHostDef);
				if (defaultDef) {
					TypeManager.propsAreArray.forEach(function(prop) {
			//			if(!defaultHostDef[prop])
			//				console.log(prop, defaultHostDef);
			//			if(defaultHostDef[prop].length)
							Array.prototype.push.apply(hostDef[prop], defaultHostDef[prop]);
					});
					TypeManager.propsArePrimitives.forEach(function(prop) {
						if (hostDef[prop] === null)
							hostDef[prop] = defaultHostDef[prop];
					});
					// TODO: At first, we weren't allowing override,
					// => Is it really the right way to do it ?
					if (hostDef.sWrapper === null)
						hostDef.sWrapper = defaultHostDef.sWrapper;
					// Overrides should not be defined in the  defaultDef:
					// but we met a case were we were wrongly defining it there,
					// and that showed us that users may want to do that and expect it to work
					// => so it's a worst case situation: the default override won't work 
					// if there's an explicit override. But users should understand
					// that we won't support fusionning the override and the override. That makes no sense...
					if (hostDef.sOverride === null)
						hostDef.sOverride = defaultHostDef.sOverride;
					if (hostDef.command === null)
						hostDef.command = defaultHostDef.command;
					
					
					var defaultDefContainedSubSectionsViews = defaultDef.getGroupHostDef() ? defaultDef.getHostDef().subSections : defaultDef.subSections;
					var defaultDefContainedMemberViews = defaultDef.getGroupHostDef() ? defaultDef.getHostDef().members : defaultDef.members;
					// Brutal subSections & members override:
					// => descendant views are easier to define in the Component's class
					// 		and should not be different in the runtime immplementation
					if (defaultDefContainedSubSectionsViews.length)
						Array.prototype.push.apply(definition.subSections, defaultDefContainedSubSectionsViews);
					
					if (defaultDefContainedMemberViews.length)
						Array.prototype.push.apply(definition.members, defaultDefContainedMemberViews);
				}
				
			//	if (hostDef.type === 'TextInput')
			//		console.log(definition);
			};

			/**
			 * @param {ComponentDefinition}
			 */
			AbstractComponent.prototype.populateStores = function(definition) {
				this.mergeDefaultDefinition(definition);
				var hostDefinition = definition.getHostDef();
			//	console.log('populateStores')
			//	console.log(hostDefinition);
				
				var title;
				if ((title = hostDefinition.attributes.getObjectValueByKey('title')) && title.slice(0, 1) === '-')
					ElementDecorator['Hyphen-Star-Dash'].decorateAttributes(hostDefinition.nodeName, hostDefinition.attributes);
				
				for (let prop in Registries.caches) {
					Registries.caches[prop].setItem(this._defUID, hostDefinition[prop]);
				}
				Registries.hostsDefinitionsCacheRegistry.setItem(this._defUID, definition);
				Registries.typedHostsRegistry.setItem(this._defUID, []);
				
				// HACK
			//	((hostDefinition.sOverride && hostDefinition.sWrapper) && hostDefinition.sWrapper.overrideStyles(hostDefinition.sOverride));
			};











			/**
			 * @constructor ComponentWithObservables
			 */
			var ComponentWithObservables = function(definition, parentView, parent) {
				AbstractComponent.call(this, definition, parentView, parent);
				this.objectType = 'ComponentWithObservables';
				
				this.streams = {};
				this._subscriptions = [];
			};
			ComponentWithObservables.prototype = Object.create(AbstractComponent.prototype);
			ComponentWithObservables.prototype.objectType = 'ComponentWithObservables';

			ComponentWithObservables.prototype.reactOnParentBinding = function(reactOnParent, parentComponent, subscriptionType) {
			//	if (this.objectType === 'MultisetAccordionComponent')
			//		console.log(reactOnParent, this);
				var subscribtion;
				reactOnParent.forEach(function(query, key) {
					subscribtion = query.subscribeToStream(parentComponent.streams[query.from], this);
					if (subscribtion)
						subscribtion.unAnonymize(this.UID, this.objectType);
				}, this);
			};

			ComponentWithObservables.prototype.reactOnSelfBinding = function(reactOnSelf, parentComponent, subscriptionType) {
			//	if (this.objectType === 'MultisetAccordionComponent')
			//		console.log(reactOnSelf, this);
				
				var subscribtion;
				reactOnSelf.forEach(function(query, key) {
					subscribtion = query.subscribeToStream(this.streams[query.from || query.to], this);
					if (subscribtion)
						subscribtion.unAnonymize(this.UID, this.objectType);
				}, this);

			};















			/**
			 * @constructor ComponentWithView
			 */
			var ComponentWithView = function(definition, parentView, parent, isChildOfRoot) {
			//	console.log('ComponentWithView', parentView);
			//	console.log('isChildOfRoot', isChildOfRoot);
				// Let's allow not passing a definition.
				// This is a common pattern we've used in the documentation
				// (although we had chosen until now to excplicitely mock the def
				//  before calling the specialized constructor)
				if (definition === null) {
					definition = TypeManager.mockDef();
			//		definition.getHostDef().nodeName = 'dummy';
				}
				else if (!definition) {
					console.warn('A Component received an undefined definition, maybe you wanted to explicitely pass a null definition ? '
						+ 'The type is ' + Object.getPrototypeOf(this).objectType + ' '
						+ '(this check is here to enforce good practices)');
					return;
				}
				
			//	console.log(definition);
				ComponentWithObservables.call(this, definition, parentView, parent);
				
				this.objectType = 'ComponentWithView';
				
				this.command = definition.getHostDef().command;
				this.view;
			//	console.log(definition);
				
				if (definition.getHostDef().nodeName) {
					this.instanciateView(definition, parentView, this, isChildOfRoot);
					this.styleHook = this.view.styleHook;
				}
				else
					console.warn('A ComponentWithView failed to instanciate a view.', 'The _defUID is ', definition.getHostDef().UID, 'The nodeName is ', definition.getHostDef().nodeName);
			//	console.log('ComponentWithView', this.view);
			};
			ComponentWithView.prototype = Object.create(ComponentWithObservables.prototype);
			ComponentWithView.prototype.objectType = 'ComponentWithView';

			/**
			 * @param {ComponentDefinition} definition
			 * @param {ComponentView} parentView
			 */
			ComponentWithView.prototype.pushChildWithView = function(child) {
				this.pushChild(child);
				child.view.parentView = this.view;
				this.view.subViewsHolder.addMemberView(child.view);
			};

			/**
			 * @param {ComponentDefinition} definition
			 * @param {ComponentView} parentView
			 */
			ComponentWithView.prototype.instanciateView = function(definition, parentView, parent, isChildOfRoot) {
			//	console.log(parentView);
				this.view = new CoreTypes.ComponentView(definition, parentView, parent, isChildOfRoot);
			};

			/**
			 * @abstract
			 */
			ComponentWithView.prototype.setContentFromValueOnView = function(value) {
				if (typeof value !== 'string' && isNaN(parseInt(value)))
					return;
			//	if (this.view.getWrappingNode().childNodes.length)
			//		console.warn('setContentFromValueOnView : replacing the content of a node that already has content. Value is :', value)
				this.view.value = value.toString();		// this.view.value is a "special" setter: it sets textContent OR value, based on the effective node
			};

			/**
			 * @abstract
			 */
			ComponentWithView.prototype.setContentFromValueOnMemberView = function(value, memberViewIdx) {
			//	if (this.view.subViewsHolder.memberAt(memberViewIdx).getWrappingNode().childNodes.length)
			//		console.warn('setContentFromValueOnView : replacing the content of a node that already has content. Value is :', value)
				this.view.subViewsHolder.memberAt(memberViewIdx).setContentNoFail(value.toString());		// this.view.value is a "special" setter: it sets textContent OR value, based on the effective node
			};

			/**
			 * @abstract
			 * @needsRefactoring Here only for ascendant compatibility
			 */
			ComponentWithView.prototype.appendContentFromValueOnView = function(value) {
				this.appendTextFromValueOnView(value);
			};

			/**
			 * @abstract
			 */
			ComponentWithView.prototype.appendTextFromValueOnView = function(value) {
				if (typeof value !== 'string' && isNaN(parseInt(value)))
					return;
				this.view.appendText(value.toString());		// this.view.value is a "special" setter: it sets textContent OR value, based on the effective node
			};

			ComponentWithView.prototype.emptyTargetSubView = function() {
				return this.view.emptyTargetSubView();
			};

			ComponentWithView.prototype.resetTargetSubViewContent = function() {
				this.targetSubViewContentCache.length = 0;
				this.emptyTargetSubView();
				return true;
			};










			/**
			 * @param {Component} child
			 */
			ComponentWithView.prototype.onRemoveChild = function(child) {
				if (typeof child === 'undefined') {
			//		console.log(this.view.subViewsHolder.subViews[1].getMasterNode());
					if (this.view.subViewsHolder.subViews.length) {
						this.view.subViewsHolder.subViews.forEach(function(subView, key) {
							while (subView.getMasterNode().firstChild) {
								subView.getMasterNode().removeChild(subView.getMasterNode().lastChild);
							}
						}, this);
					}
					this._children.forEach(function(child, key) {
						child.view.getMasterNode().remove();
					}, this);
					if (this.view.subViewsHolder.memberViews.length) {
						this.view.subViewsHolder.memberViews.forEach(function(member, key) {
							member.getMasterNode().remove();
						}, this);
					}
			//		this.view.subViewsHolder.subViews[1].getMasterNode().length = 0;
			//		this.view.getMasterNode().remove();
				}
				else if (child && child.view.getMasterNode()) {		// check presence of masterNode, as we may be removing a childComponent before the view has been rendered
					if (child.view.subViewsHolder.subViews.length) {
						child.view.subViewsHolder.subViews.forEach(function(subView, key) {
							while (subView.getMasterNode().firstChild) {
								subView.getMasterNode().removeChild(subView.getMasterNode().lastChild);
							}
						}, child);
					}
					child._children.forEach(function(childOfChild, key) {
						childOfChild.view.getMasterNode().remove();
					}, child);
					if (child.view.subViewsHolder.memberViews.length) {
						child.view.subViewsHolder.memberViews.forEach(function(member, key) {
							member.getMasterNode().remove();
						}, child);
					}
					child.view.getMasterNode().remove();
				}
				else if (child instanceof ComponentWithObservables){
					// remove a child
					// TODO: should call super(), as the ComponentWithView should neither handle streams, nor subscriptions 
					child._subscriptions.forEach(function(subscription) {
						subscription.unsubscribe();
					});
				}
			};

			/**
			 * @param {Component} child
			 * @param {number} atIndex
			 */
			ComponentWithView.prototype.onAddChild = function(child, atIndex) {
				
				if (typeof atIndex !== 'undefined') {
					if (child.view.parentView)		// try to respect an eventually specifically assigned parentView
						child.view.parentView.addChildAt(child.view, atIndex);
					else							// else consider the parent view is the main view of the parent
						child._parent.view.addChildAt(child.view, atIndex);
				}
			};

			/**
			 * @param {number} y
			 */
			ComponentWithView.prototype.getViewOfChildBasedOnYpos = function(y) {
				var self = this;
				this.styleHook.getBoundingBox().then(function(boundingBox) {
					self._children.forEach(function(child) {
						// boundingBox.offsetX, y, boundingBox.offsetX, boundingBox.offsetY + boundingBox.h
			//			Geometry.ComponentHitTest(child._key > 1 ? this._children[child._key - 1] : null, child, this._children[child._key + 1]);
					}, self);
				});
			};


			ComponentWithView.prototype.childButtonsHighlightLoop = function(targetIdx) {
				if (this._children.length === 1)
					this._children[0].streams.highlighted.value = null;
				else {
					this._children.forEach(function(child) {
						if (child._key === targetIdx)
							child.streams.highlighted.value = 'highlighted';
						else
							child.streams.highlighted.value = null;
					});
				}
			};

			ComponentWithView.prototype.childButtonsSortedLoop = function(targetIdx, order) {
				this._children.forEach(function(child) {
					if (child._key === targetIdx) {
						child.streams['sorted' + order].value = 'sorted';
						child.streams['sorted' + (order === 'asc' ? 'desc' : 'asc')].value = null;
					}
					else {
						child.streams.sortedasc.value = null;
						child.streams.sorteddesc.value = null;
					}
				});
			};











			/**
			 * @constructor ComponentWithHooks
			 */
			var ComponentWithHooks = function(definition, parentView, parent, isChildOfRoot) {
				ComponentWithView.call(this, definition, parentView, parent, isChildOfRoot);
				this.objectType = 'ComponentWithHooks';

				this.viewExtend(definition);
			};
			/**
			 * HOOKS
			 */
			ComponentWithHooks.prototype = Object.assign(Object.create(ComponentWithView.prototype), {
				basicEarlyViewExtend : function() {},					// virtual
				asyncViewExtend : function() {},						// virtual
				basicLateViewExtend : function() {},					// virtual
				lastAddChildren : function() {},						// virtual
				beforeRegisterEvents : function() {},			// virtual
				registerClickEvents : function() {},			// virtual
				registerLearnEvents : function() {},			// virtual
				registerKeyboardEvents : function() {},			// virtual
				afterRegisterEvents : function() {},			// virtual
			//	registerValidators : function() {},				// virtual
				execBindingQueue : function() {}				// virtual
			});
			ComponentWithHooks.prototype.objectType = 'ComponentWithHooks';

			ComponentWithHooks.prototype.viewExtend = function(definition) {
				this.basicEarlyViewExtend(definition);
				if (this._asyncInitTasks)
					this.asyncViewExtend(definition);
				this.basicLateViewExtend(definition);
				if (this._asyncInitTasks)
					this.lateAddChildren(definition);
				
			//	if (definition.getHostDef().targetSlotIndex !== null)
			//		console.log(this);
				// Retry after having added more views
				if (definition.getHostDef().targetSlotIndex !== null && this.view.targetSubView === null) {
					this.view.getTargetSubView(definition.getHostDef());
				}
			};

			ComponentWithHooks.prototype.registerEvents = function() {
				this.beforeRegisterEvents();
				this.registerClickEvents();
				this.registerKeyboardEvents();
				this.registerLearnEvents();
				if (this._asyncRegisterTasks)
					this.asyncRegister();
				this.afterRegisterEvents();
			};

			/**
			 * @hook
			 */
			ComponentWithHooks.prototype.asyncViewExtend = function(definition) {
			//	console.log('viewExtend', this.view, this._asyncInitTasks);
				var asyncTask;
				for (let i = 0, l = this._asyncInitTasks.length; i < l; i++) {
					asyncTask = this._asyncInitTasks[i];
					if(asyncTask.type === 'viewExtend') {
						asyncTask.execute(this, definition);
					}
				}
			};

			/**
			 * @hook
			 */
			ComponentWithHooks.prototype.lateAddChildren = function(definition) {
			//	console.log('lateAddChildren', this.view, this._asyncInitTasks);
				var asyncTask;
				for (let i = 0, l = this._asyncInitTasks.length; i < l; i++) {
					asyncTask = this._asyncInitTasks[i];
					if(asyncTask.type === 'lateAddChild' || asyncTask.type === 'lateInit') {
						if (typeof asyncTask.execute !== 'function')
							console.log(asyncTask);
						asyncTask.execute(this, definition);
					}
				}
			};

			/**
			 * @hook
			 */
			ComponentWithHooks.prototype.asyncRegister = function() {
				var asyncTask;
				for (let i = 0, l = this._asyncRegisterTasks.length; i < l; i++) {
					asyncTask = this._asyncRegisterTasks[i];
					if(asyncTask.type === 'lateBinding') {
						asyncTask.execute(this);
					}
				}
			};


			/**
			 * @param {ComponentDefinition} componentDefinition
			 * @param {ComponentDefinition} nodeDefinition
			 * @param {string} state
			 */
			ComponentWithHooks.prototype.addReactiveMemberViewFromFreshDef = function(componentDefinition, nodeDefinition, state) {
				var newDef = state ? this.extendDefToStatefull(componentDefinition, nodeDefinition, state) : nodeDefinition;
				
				var view;
				if (newDef.getHostDef().nodeName) {
					this.view.subViewsHolder.addMemberViewFromDef(newDef.getHostDef());
					// HACK: the renderer expects a view to cache its "attributes" prop
					// NOT WORKING?: caches items are inndexed on the defUID of the component
					// FINAL HYPOTHESIS: not needed...
			//		Registries.caches['attributes'].setItem(newDef.getHostDef().UID, newDef.getHostDef()['attributes']);
				}
				
				if (newDef.members.length) {
					newDef.members.forEach(function(memberDef) {
						this.view.subViewsHolder.addMemberViewFromDef(memberDef);
						// HACK: the renderer expects a view to cache its "attributes" prop
						// NOT WORKING?: caches items are inndexed on the defUID of the component
						// FINAL HYPOTHESIS: not needed...
			//			Registries.caches['attributes'].setItem(memberDef.UID, memberDef['attributes']);
					}, this);
				}
			};

			/**
			 * @param {ComponentDefinition} componentDefinition
			 * @param {ComponentDefinition} nodeDefinition
			 * @param {string} state
			 */
			ComponentWithHooks.prototype.unshiftReactiveMemberViewFromFreshDef = function(componentDefinition, nodeDefinition, state) {

				var newDef = state ? this.extendDefToStatefull(componentDefinition, nodeDefinition, state) : nodeDefinition;
				this.view.subViewsHolder.immediateUnshiftMemberView(newDef.getHostDef());
			};

			/**
			 * @param {ComponentDefinition} componentDefinition
			 * @param {ComponentDefinition} nodeDefinition
			 * @param {string} state
			 */
			ComponentWithHooks.prototype.extendDefToStatefull = function(componentDefinition, nodeDefinition, state) {
				// This is an illustrative method, a hint for others on the path to catching the "spirit" of the extension mechanism of the framework
				// 		=> This is to be implemented as a method on the ComponentWithView.prototype : addReactiveMemberViewFromFreshDef
				// Delete the UID of the definition and Register a renewed one with fresh UID (unless exists, so register both the original and the fresh one : if the original exists, we already went here)
				// Define a reactOnSelf on the definition of the HOST with a callback : it shall be bound to the host
				//		=> maintain a -counter- on the added pictos
				// 		=> the callback shall call the component -> the main view -> the subViewsHost -> the memberViews[ -counter- ].getMasterNode().hidden
				// Instanciate a view with the host's view as parent view (the view references the UID of the definition)
				// Add that view to the subViewsHost->memberViews of the main view
				
				var statefullExtendedDef;
				if (!(statefullExtendedDef = Registries.hostsDefinitionsCacheRegistry.getItem(componentDefinition.host.UID + nodeDefinition.host.attributes.getObjectValueByKey('className')))) {
					// This also is tricky, as we keep all along the call stack that ComponentDef which should be a hostDef.
					// The only reason being that we discriminate the "grouped" append in the second test-case above as the one having "members" and "no nodeName on host"
					// TODO: THAT MUST CHANGE.
					statefullExtendedDef = TypeManager.createComponentDef(nodeDefinition);
					statefullExtendedDef.host.UID = componentDefinition.host.UID + nodeDefinition.host.attributes.getObjectValueByKey('className');
					
					Registries.hostsDefinitionsCacheRegistry.setItem(statefullExtendedDef.host.UID, statefullExtendedDef);
					
					// This approach is realy tricky: everything is crucial and the context is totally blurred:
					// memberViewIdx anticipate on the next member view (the one we are currently building) to be appended ont the component's view: 
					// 		could it happen that this idx change suddenly ? no clear sight on that, observed from here
					// state.replace(/Not/i, '') is of a crucial mean, as just below state.indexOf('Not') === -1 means we're defining the conditions (registration form implementation)
					// 		for the picto -NOT- notifying an error (then the green check), to be "hidden" (not to show up) when the "valid" state is falsy.
					// Ouch...
					var memberViewIdx = this.view.subViewsHolder.memberViews.length;
					componentDefinition.getHostDef().reactOnSelf.push(new TypeManager.ReactivityQueryModel({
						cbOnly : true,
						from : state.replace(/Not/i, ''),
						subscribe : function(value) {
			//					console.log();
								this.view.subViewsHolder.memberViews[memberViewIdx].getMasterNode().hidden = (state.indexOf('Not') === -1 ? !value : value) ? 'hidden' : null;
							}
						})
					);
				}
				return statefullExtendedDef;
			};









			/**
			 * @constructor ComponentWithReactiveText
			 */
			var ComponentWithReactiveText = function(definition, parentView, parent, isChildOfRoot) {
			//	console.log('ComponentWithReactiveText', parentView);
				ComponentWithHooks.call(this, definition, parentView, parent, isChildOfRoot);
			//	console.log('ComponentWithReactiveText', this.view);
				this.objectType = 'ComponentWithReactiveText';
				this.eachMemberContentCache = [];
				this.targetSubViewContentCache = [];
			};
			ComponentWithReactiveText.prototype = Object.create(ComponentWithHooks.prototype);
			ComponentWithReactiveText.prototype.objectType = 'ComponentWithReactiveText';

			/**
			 * @abstract
			 */
			ComponentWithReactiveText.prototype.setContentFromArrayOnEachMemberView = function(values) {
			//	console.log(values);
				if (!Array.isArray(values) || !values.length) {
					if (typeof value === 'string')
						values = [values];
					else
						return;
				}
			//	console.log(this);
				this.view.subViewsHolder.setEachMemberContent(values);
			};

			/**
			 * @abstract
			 */
			ComponentWithReactiveText.prototype.setContentFromCacheOnTargetSubview = function() {
				if (!Array.isArray(this.targetSubViewContentCache) || !this.targetSubViewContentCache.length)
					return '';
				return this.view.setContentFromArrayOnTargetSubview(this.targetSubViewContentCache);
			};
















			/**
			 * @constructor ComponentWithReactiveText_Fast
			 */
			var ComponentWith_FastReactiveText = function(definition, parentView, parent, isChildOfRoot) {
				ComponentWithReactiveText.call(this, definition, parentView, parent, isChildOfRoot);
				this.objectType = 'ComponentWith_FastReactiveText';
			};
			ComponentWith_FastReactiveText.prototype = Object.create(ComponentWithReactiveText.prototype);
			ComponentWith_FastReactiveText.prototype.objectType = 'ComponentWith_FastReactiveText';

			/**
			 * @abstract
			 */
			ComponentWith_FastReactiveText.prototype.setContentFromArrayOnEachMemberView = function(values) {
				this.view.subViewsHolder.setEachMemberContent_Fast(values);
			};



















			/**
			 * @constructor ComponentStrokeAware
			 */
			var ComponentStrokeAware = function(definition, parentView, parent, isChildOfRoot) {
				ComponentWithHooks.call(this, definition, parentView, parent, isChildOfRoot);
			//	this.objectType = 'ComponentStrokeAware';

			};
			ComponentStrokeAware.prototype = Object.create(ComponentWithHooks.prototype);
			ComponentStrokeAware.prototype.objectType = 'ComponentStrokeAware';

			ComponentStrokeAware.prototype.createEvents = function() {
				this.createEvent('stroke');
			};

			/**
			 * @abstract
			 */
			ComponentStrokeAware.prototype.registerKeyboardEvents = function(e) {
				var self = this, input = this.view.subViewsHolder.memberViews[1] || this.view;
			//	console.warn('ComponentStrokeAware :', 'where is "input"');
				
				// Stroke event listener 
				input.getMasterNode().addEventListener('keyup', function(e) {
					e.stopPropagation();
			//		var allowed = [189, 190, 191]; // corresponds to **. , -**
			//		allowed.indexOf(e.keyCode) >= 0 && 
			 
				    if (e.keyCode === 13 || e.keyCode === 27  || (e.keyCode >= 32 && (e.keyCode < 48 || e.keyCode > 57) && e.keyCode <= 191))
				        self.trigger('stroke', e);
				});
			};










			/**
			 * @constructor ComponentWithViewAbstractingAFeed
			 */
			var ComponentWithViewAbstractingAFeed = function(definition, parentView, parent, isChildOfRoot) {
				ComponentWithHooks.call(this, definition);
				this.objectType = 'ComponentWithViewAbstractingAFeed';
				this.createEvent('exportdata');
			};

			ComponentWithViewAbstractingAFeed.prototype = Object.create(ComponentWithHooks.prototype);
			ComponentWithViewAbstractingAFeed.prototype.objectType = 'ComponentWithViewAbstractingAFeed';

			ComponentWithViewAbstractingAFeed.prototype.exportData = function(data) {
				this.trigger('exportdata', data);
			};

















			/**
			 * @constructor ComponentWithCanvas
			 */
			var ComponentWithCanvas = function(definition, parentView, parent, isChildOfRoot) {
				ComponentWithHooks.call(this, definition, parentView, parent, isChildOfRoot);
				this.objectType = 'ComponentWithCanvas';
				
				this.view.getDimensions();
				
			//	this.view.h = parseInt(definition.getHostDef().sWrapper.rules.canvas.rule.attributes.height);
			//	this.view.w = parseInt(definition.getHostDef().sWrapper.rules.canvas.rule.attributes.minWidth);
			//	console.log(this.view.w, this.view.h);
			};

			ComponentWithCanvas.prototype = Object.create(ComponentWithHooks.prototype);
			ComponentWithCanvas.prototype.objectType = 'ComponentWithCanvas';

			/**
			 * @param {ComponentDefinition} definition
			 * @param {ComponentView} parentView
			 */
			ComponentWithCanvas.prototype.instanciateView = function(definition, parentView, parent, isChildOfRoot) {
				this.view = new CoreTypes.CanvasView(definition, parentView, parent, isChildOfRoot);
			};


















			/**
			 * @constructor CompositorComponent
			 */
			var CompositorComponent = function(definition, parentView, parent) {//, argx, argy, arg...
				if (!this.Compositor)
					console.warn('Invalid inheritance through CompositorComponent: it seems you\'ve tried to extend a non-core component. Were you inheriting from an abstract type through the simple "extends" property ? (CompositorComponent is not needed then)');
				this.Compositor.apply(this, arguments);
				this.objectType = 'CompositorComponent';
			};
			CompositorComponent.prototype = Object.create(ComponentWithView.prototype);
			CompositorComponent.prototype.objectType = 'CompositorComponent';
			CompositorComponent.prototype.extendsCore = '';							// virtual
			CompositorComponent.prototype.extends = '';								// virtual

			//CompositorComponent.prototype.Compositor = function() {};				// virtual (decorated type property)

			CompositorComponent.prototype.acquireCompositor = function() {};		// virtual

			CompositorComponent.prototype.extendFromCompositor = function(inheritingType, inheritedType) {
			//	console.log(inheritingType.prototype, inheritedType);
				var proto_proto = Object.create(inheritedType.prototype);
			//	console.log(Object.hasOwn(inheritingType.prototype, '_asyncRegisterTasks'));
				Object.assign(proto_proto, inheritingType.prototype);
				inheritingType.prototype = proto_proto;
			//	console.log(proto_proto, inheritingType.prototype);
			};



















			module.exports = {
				ExtensibleObject : ExtensibleObject,
				AbstractComponent : AbstractComponent,
				HierarchicalObject : HierarchicalObject,
				ComponentWithView : ComponentWithView,
				ComponentWithObservables : ComponentWithObservables,
				CompositorComponent : CompositorComponent,
				ComponentWithHooks : ComponentWithHooks,
				ComponentWithReactiveText : ComponentWithReactiveText,
				ComponentWith_FastReactiveText : ComponentWith_FastReactiveText,
				ComponentStrokeAware : ComponentStrokeAware,
				ComponentWithViewAbstractingAFeed : ComponentWithViewAbstractingAFeed,
				ComponentWithCanvas : ComponentWithCanvas
			};
			},{"src/Error&Log/Logger":2,"src/core/CoreTypes":45,"src/core/Registries":53,"src/core/TemplateFactory":55,"src/core/TypeManager":57,"src/core/elementDecorator_HSD":60}],43:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor ComponentSet
			 * This type is a re-implementation of the ReactiveDataset type.
			 * (it follows the same structure and logic, but hasn't the same purpose)
			 * Instead of being passed a template to instanciate components,
			 * it's passed a complete "launcher"" script
			 */

			var TemplateFactory = _dereq_('src/core/TemplateFactory');
			var App = _dereq_('src/core/App');
			var Component = _dereq_('src/core/Component');


			var ComponentSet = function(rootComponent, slotTemplate) {
				if (!rootComponent)
					return;
				this.init(rootComponent, slotTemplate);
			};
			ComponentSet.prototype = Object.create(Array.prototype);
			ComponentSet.prototype.objectType = 'ComponentSet';
			Object.defineProperty(ComponentSet.prototype, 'init', {
				value : function(rootComponent, slotTemplate, keywordHandler) {
					Object.defineProperty(this, 'rootComponent', {
						value : rootComponent
					});
					Object.defineProperty(this, 'Item', {
						value : this.setItemFactory(),
						writable : true
					});
					Object.defineProperty(this, 'slotTemplate', {
						value : slotTemplate
					});
				}
			});

			/**
			 * this is a virtual method which overrides the setSchema method of the ReactiveDataset: 
			 * a handy way to let the LazySlottedComponent ctor execute till the end,
			 * even if an inheriting class has messed up the typedSlots... for example, the tabPanel defines the typedSlot[1] as a ComponentSet...
			 * And that's why we are here : to let the LazySlottedComponent execute a loop 
			 * that is based on the hypothesis there are as much ReactiveDatasets as there are slotsDef... (and none hase been replaced by a dumb other unknown type, like a ComponentSet...)
			 */
			Object.defineProperty(ComponentSet.prototype, 'setSchema', {
				value : function(factoryPropsArray) {}
			});

			/**
			 * An override for the setItemFactory method of the ReactiveDataset
			 * It adds the itemLauncher and itemKeyword properties
			 * as well as references to its env and the _ignited flag
			 */
			Object.defineProperty(ComponentSet.prototype, 'setItemFactory', {
				value : function() {

					var factory = function(itemAsArray) {
						this.itemLauncher = itemAsArray[0];
						this.itemKeyword = itemAsArray[1];
					};
					factory.prototype = Object.create(Object.prototype);
					factory.prototype.itemLauncher = null;
					factory.prototype.itemKeyword = null;
					factory.prototype._parent = null;
					factory.prototype._key = null;
					factory.prototype._ignited = null;
					
					return factory;
				}
			});

			/**
			 * Not needed : same as the implementatoin of the ReactiveDataset
			 */
			Object.defineProperty(ComponentSet.prototype, 'newItem', {
				value : function() {
					return (new this.Item(arguments));
				}
			});

			Object.defineProperty(ComponentSet.prototype, 'ignite', {
				value : function(idx) {
					var injectedComponent;
					this.forEach(function(item, key) {
						if (key === idx) {
							if (item._ignited !== true) {
			//					console.log(item);
								injectedComponent = item.itemLauncher(item.itemKeyword, item._parent.view).init.call(item.itemLauncher.init);	// , item._parent.view, item._parent
			//					console.log(injectedComponent);
								
								// The source-code viewer doesn't return a component
								if (injectedComponent instanceof Component.ComponentWithView)
									this.rootComponent._children[key].view.getWrappingNode().appendChild(injectedComponent.view.getMasterNode());

								item._ignited = true;
							}
							this.rootComponent._children[key].view.getMasterNode().style.display = 'flex';
						}
						else {
							this.rootComponent._children[key].view.getMasterNode().style.display = 'none';
						}
					}, this);
				}
			});

			Object.defineProperty(ComponentSet.prototype, 'ignition', {
				value : function() {
					var keywordHandler;
					this.forEach(function(componentLauncherItem, idx) {
						keywordHandler = componentLauncherItem.itemLauncher.init.call(componentLauncherItem.itemLauncher.init, componentLauncherItem._parent.view);
						if (typeof keywordHandler === 'function')
							keywordHandler(componentLauncherItem.itemKeyword, componentLauncherItem._parent.view);
						componentLauncherItem._ignited = true;
					}, this);
				}
			});

			Object.defineProperty(ComponentSet.prototype, 'push', {
				value : function(componentLauncherItem) {
					Array.prototype.push.call(this, componentLauncherItem);
			//		console.log(componentLauncherItem);
			//		console.log(this.rootComponent.view);
					new Component.ComponentWithView(this.slotTemplate, this.rootComponent.view);
					componentLauncherItem._parent = this.rootComponent._children[this.rootComponent._children.length - 1];
			//		console.log(this.rootComponent);
			//		this.rootComponent._children[this.rootComponent._children.length - 1].pushChild(componentLauncherItem);
					App.renderDOM();
				}
			});

			// TODO: each member of the array IS a memberLauncherTupple (so we can't default to Array())
			Object.defineProperty(ComponentSet.prototype, 'pushApply', {
				value : function(memberLauncherArray) {
					if (!Array.isArray(memberLauncherArray))
						memberLauncherArray = [memberLauncherArray];
					
					memberLauncherArray.forEach(function(memberLauncher) {
						Array.prototype.push.call(this, memberLauncher);
						this.rootComponent.pushChild(memberLauncher);
					}, this);
				}
			});

			Object.defineProperty(ComponentSet.prototype, 'splice',  {
				value : function(index, length, replacedBy) {
					var c1, c2, mBackup;

					if (typeof replacedBy === 'number') {
						if (replacedBy > index) {
							c2 = this.rootComponent._children[replacedBy].remove();
							c1 = this.rootComponent._children[index].remove();
							this.rootComponent.addChildAt(c2, index);
						}
						else {
							c1 = this.rootComponent._children[index].remove();
							c2 = this.rootComponent._children[replacedBy].remove();
							this.rootComponent.addChildAt(c2, index - 1);
						}
						mBackup = Array.prototype.splice.call(this, index, 1, this[replacedBy])[0];
						return [mBackup, c1];
					}
					else if (typeof replacedBy === 'undefined' || replacedBy === null) {
						c1 = this.rootComponent._children[index].remove();
						mBackup = Array.prototype.splice.call(this, index, 1)[0];
						return [mBackup, c1];
					}
					else if (Array.isArray(replacedBy)) {
						this.rootComponent.addChildAt(replacedBy[1], index);
						Array.prototype.splice.call(this, index, 1, replacedBy[0]);
						return true;
					}
				}
			});


			Object.defineProperty(ComponentSet.prototype, 'resetLength',  {
				value : function() {
					if (this.rootComponent.removeAllChildren())
						Array.prototype.splice.call(this, 0, this.length);
				}
			});












			module.exports = ComponentSet;
			},{"src/core/App":38,"src/core/Component":42,"src/core/TemplateFactory":55}],44:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor CompoundComponent
			 * 
			 * This ctor is the main effector of the AppIgnition super-class
			 * 	=> tight coupling = mandatory static inclusion in core (AppIgnition requires CompoundComponent).
			 */


			const TypeManager = _dereq_('src/core/TypeManager');
			const TemplateFactory = _dereq_('src/core/TemplateFactory');
			const Registries = _dereq_('src/core/Registries');
			const CoreTypes = _dereq_('src/core/CoreTypes');
			const Components = _dereq_('src/core/Component');

			//const componentTypes = require('src/_buildTools/_UIpackages')(null, { UIpackage: 'all' }).packageList;

			const componentTypes = {};
			const coreComponents = {};

			Components.RootViewComponent = _dereq_('src/coreComponents/RootViewComponent/RootViewComponent');
			Components.AppOverlayComponent = _dereq_('src/coreComponents/AppOverlayComponent/AppOverlayComponent');
			Components.AppBoundaryComponent = _dereq_('src/coreComponents/AppBoundaryComponent/AppBoundaryComponent');
			Components.IFrameComponent = _dereq_('src/coreComponents/IFrameComponent/IFrameComponent');
			Components.HToolbarComponent = _dereq_('src/coreComponents/HToolbarComponent/HToolbarComponent');
			Components.FlexColumnComponent = _dereq_('src/coreComponents/FlexColumnComponent/FlexColumnComponent');
			Components.FlexRowComponent = _dereq_('src/coreComponents/FlexRowComponent/FlexRowComponent');
			Components.FlexGridComponent = _dereq_('src/coreComponents/FlexGridComponent/FlexGridComponent');
			Components.ComponentPickingInput = _dereq_('src/coreComponents/ComponentPickingInput/ComponentPickingInput');
			Components.RPCStackComponent = _dereq_('src/coreComponents/RPCStackComponent/RPCStackComponent');
			//var ChildBoxComponent = require('src/coreComponents/ChildBoxComponent/ChildBoxComponent');

			Components.SWrapperInViewManipulator = _dereq_('src/_DesignSystemManager/SWrapperInViewManipulator');

			//Components.VisibleStateComponent = require('src/UI/categories/basics/VisibleStateComponent/VisibleStateComponent');
			//Components.TypedListComponent = require('src/UI/categories/basics/TypedListComponent/TypedListComponent');
			//Components.KeyValuePairComponent = require('src/UI/categories/basics/KeyValuePairComponent/KeyValuePairComponent');
			//Components.ExtensibleTable = require('src/UI/categories/basics/ExtensibleTable/ExtensibleTable');
			//Components.SpecializedTypedListComponent = require('src/UI/categories/basics/SpecializedTypedListComponent/SpecializedTypedListComponent');
			//Components.MultisetAccordionComponent = require('src/UI/categories/basics/MultisetAccordionComponent/MultisetAccordionComponent');
			//Components.GenericTitledPanelComponent = require('src/UI/categories/basics/GenericTitledPanelComponent/GenericTitledPanelComponent');
			//var ColorSamplerSetComponent = require('src/UI/packages/setsForPanels/ColorSamplerSetComponent/ColorSamplerSetComponent');

			//Components.VaritextButtonComponent = require('src/UI/categories/forms/NamedButton/NamedButton');
			//Components.VisualSetComponent = require('src/UI/Generics/VisualSetComponent/VisualSetComponent');
			//Components.VariablyStatefullComponent = require('src/UI/Generics/VariablyStatefullComponent/VariablyStatefullComponent');
			//Components.VisualSetHostComponent = require('src/UI/Generics/VisualSetHostComponent/VisualSetHostComponent');

			// Abstract types & abstract implementations re-injection

			//Components.RootViewComponent = RootViewComponent;
			//Components.AppOverlayComponent = AppOverlayComponent;
			//Components.AppBoundaryComponent = AppBoundaryComponent;
			//Components.HToolbarComponent = HToolbarComponent;
			//Components.FlexColumnComponent = FlexColumnComponent;
			//Components.FlexRowComponent = FlexRowComponent;
			//Components.FlexGridComponent = FlexGridComponent;
			//Components.ComponentPickingInput = ComponentPickingInput;
			//Components.ChildBoxComponent = ChildBoxComponent;

			//Components.SWrapperInViewManipulator = SWrapperInViewManipulator;

			//Components.VisibleStateComponent = VisibleStateComponent;
			//Components.TypedListComponent = TypedListComponent;
			//Components.KeyValuePairComponent = KeyValuePairComponent;
			//Components.ExtensibleTable = ExtensibleTable;
			//Components.SpecializedTypedListComponent = SpecializedTypedListComponent;
			//Components.GenericTitledPanelComponent = GenericTitledPanelComponent;
			//Components.ColorSamplerSetComponent = ColorSamplerSetComponent;

			//Components.VisualSetComponent = VisualSetComponent;
			//Components.VariablyStatefullComponent = VariablyStatefullComponent;
			//Components.VaritextButtonComponent = VaritextButtonComponent;
			//Components.VisualSetHostComponent = VisualSetHostComponent;

			//Object.assign(Components, require(componentTypes.misc));
			//delete componentTypes.misc;

			//for (let type in componentTypes) {
			//	
			//	if (typeof componentTypes[type] === 'string')
			//		Components[type] = require(componentTypes[type]);
			//}

















			/**
			 * @constructor CompoundComponent
			 */
			const CompoundComponent = function(definition, parentView, parent, isChildOfRoot) {
			//	console.log(definition);
				this._firstListUIDSeen = null;
				var shouldExtend = false;
				
				
				
				if (!definition.getGroupHostDef())
					console.error('Definition given to CompoundComponent isn\'t a nested HierachicalDefinition.', definition, 'Type is:', definition.getHostDef().type, this);
					
				if (definition.getGroupHostDef().type)
					console.warn('A type was given to a template instanciated by the CompoundComponent ctor: it\'ll be ignored. If the component isn\'t part of a list, it may not be what you meant. Type is', definition.getGroupHostDef().type);
				
				// Any custom element must be befined when calling the Def Factory, unless there's no shadow DOM
			//	if (!definition.getGroupHostDef().nodeName) {
			//		definition.getGroupHostDef().nodeName = 'compound-view';
			//		console.log(definition.getGroupHostDef());
			//	}

				// Let's use an elementary and perf efficient hack right here, at the beginning, and abuse the ascendant component with a symbolic def,
				// for the view to be instanciated with the correct context (knowing how many subSections we have is crucial when connecting children)
				// This prevents us from instanciating a Component with subViews as the "host" of a composedComponent : No matter at all, cause that case wouldn't make much sense, though.
				// (It's hard to implement that in the Type factory, as the "composed" definition, with its 2 levels of depth on the "host", is an exception)
				// (That shouldn't be a too big issue, seen that building the hierarchy comes before the intensive processing : 
				// 	the def may be mutated here, given the fact that we pay a strong attention on it not being changed later)
				definition.subSections.forEach(function(section) {
					definition.getHostDef().subSections.push(null);
				});

			//	if (definition.getGroupHostDef().type === 'FileSelector')
			//		console.error(def);

				if (!TypeManager.hostsDefinitionsCacheRegistry.getItem(definition.getGroupHostDef().UID)) // this shall always fail after having called "once for all" the superior ctor (although def is "explicit+default", and "special" is added afterwards: see extendDefinition())
					shouldExtend = true;

				// Another elementary Hack to integrate parts of the "host" of the def in that "composedComponent" (which is pretty "unfruity", not having any "applicative" behavior) :
				// assuming we don't want to instanciate "in da space" (i.e. "in that present ctor") a whole Component, and have to reflect all of its props on "self",
				// we call the "superior" ComponentWithView ctor on the def of solely the host (5 lines below)
				// BUT beforehand, we reflect on "self" the "createDefaultDef" method defined on the prototype of the host, then it shall be called by the AbstractComponent ctor
				// (from which we inherit).
				// Exception, obviously : if there is -no- createDefaultDef method on that Component which whant to be "host" on the throne of the "host"...
				//
				var type = definition.getGroupHostDef().getType();
				if (type && type !== 'CompoundComponent' && Components[type].prototype.createDefaultDef) {
			//		console.error('Definition overridden', type,  Components[type]);
					this.createDefaultDef = Components[type].prototype.createDefaultDef;
				}
			//	console.error(parent);
			//	console.log(definition);
			//	console.log(this.createEvents);
				Components.ComponentWithView.call(this, definition.getHostDef(), parentView, parent, isChildOfRoot);  // feed with host def
				this.objectType = 'CompoundComponent';

				// extend last, so the event bubbling occurs always after the "explicitly defined in the host's def" callbacks
				if (shouldExtend)
					this.extendDefinition(definition);
				
				var defaultDef = this.createDefaultDef(definition.getHostDef());
				
				// When instanciating a CompoundComponent directly from its ctor,  there is no defaultDef : don't try to merge
				if (defaultDef) {
					if (defaultDef.subSections.length)
						Array.prototype.push.apply(definition.subSections, defaultDef.subSections);
					if (defaultDef.members.length)
						Array.prototype.push.apply(definition.members, defaultDef.members);
				}
						
				this.instanciateSubSections(definition);
				this.instanciateMembers(definition);
				this.instanciateLists(definition);

			};
			CompoundComponent.prototype = Object.create(Components.ComponentWithView.prototype);
			CompoundComponent.prototype.objectType = 'CompoundComponent';
			coreComponents.CompoundComponent = CompoundComponent;

			//CompoundComponent.prototype.createDefaultDef = function() {
			//	return TypeManager.mockDef();
			//}

			CompoundComponent.prototype.extendDefinition = function(definition) {
				// Special case : events of type "update" shall have the ability to bubble from CompoundComponent to CompoundComponent
				definition.getGroupHostDef().subscribeOnChild.push(
					(new TypeManager.EventSubscriptionModel({
						on: 'update',
						subscribe: function(e) {
							if (e.bubble)
								this.trigger('update', e.data, true);
						}
					})
					)
				);
				//	TypeManager.caches['subscribeOnChild'].setItem(this._defUID, definition.getGroupHostDef().subscribeOnChild);
			};

			CompoundComponent.prototype.instanciateSubSections = function(definition) {
				var type, component;
				definition.subSections.forEach(function(subSectionDef) {
					if (!subSectionDef.getHostDef() && (subSectionDef.nodeName || subSectionDef.type)) {
						console.warn('subSection "' + (subSectionDef.type || subSectionDef.nodeName) + '" of a CompoundComponent : Definition given is the definition of a view. It should be wrapped in a HierarchicalComponentDef');
						return;
					}
					type = subSectionDef.getHostDef().getType() || (subSectionDef.getGroupHostDef() && subSectionDef.getGroupHostDef().getType());
					//		console.log(type, type in Components);
					if (type in Components && type !== 'CompoundComponent' && type !== 'FlexColumnComponent' && type !== 'FlexRowComponent' && type !== 'FlexGridComponent' && type !== 'HToolbarComponent') {
						component = new Components[type](subSectionDef, this.view, null, 'isChildOfRoot');
						// mandatory, as we need to append memberViews on subViews without accessing the component's scope
						this.view.subViewsHolder.subViews.push(component.view);
					}
					else if (subSectionDef.getGroupHostDef()) {
						component = new CompoundComponent(subSectionDef, this.view, null, 'isChildOfRoot');
						this.view.subViewsHolder.subViews.push(component.view);
					}
					else if (subSectionDef.getHostDef().nodeName)
						this.view.subViewsHolder.subViews.push(new CoreTypes.ComponentView(subSectionDef, this.view, this, 'isChildOfRoot'));
				}, this);
			};

			CompoundComponent.prototype.instanciateMembers = function(definition) {
			//	console.log(definition.members);
			//	console.log(this.view);
				var type;
				definition.members.forEach(function(memberDef) {
					if (!memberDef.getHostDef && (memberDef.nodeName || memberDef.type)) {
						console.warn('Member "' + (memberDef.type || memberDef.nodeName) + '" of a CompoundComponent : Definition given is the definition of a view. It should be wrapped in a HierarchicalComponentDef');
						return;
					}
					type = (memberDef.getGroupHostDef() && memberDef.getGroupHostDef().getType()) || memberDef.getHostDef().getType();
					// console.log('identified when looping on members', type)

			//		console.log(type);
					if (type in Components && type !== 'CompoundComponent') {
						// console.log('identified as component')
						new Components[type](memberDef, this.view, this);
					}
					else if (memberDef.getGroupHostDef()) {
						// console.log('identified as Compound', type);
						if (Components[type])
							new Components[type](memberDef, this.view, this);
						else
							new CompoundComponent(memberDef, this.view, this);
					}
					else if (memberDef.getHostDef().nodeName)
						this.view.subViewsHolder.memberViews.push(new CoreTypes.ComponentView(memberDef, this.view, this));
				}, this);
			};

			CompoundComponent.prototype.instanciateLists = function(definition) {
				definition.lists.forEach(function(listDef) {
					new ComponentList(listDef, this.view, this);
				}, this);
			};

			/**
			 * retrieveListDefinition
			 * Not used in Core: probably meant to help build very complex apps
			 */
			CompoundComponent.prototype.retrieveListDefinition = function() {
				return this._firstListUIDSeen ? TypeManager.listsDefinitionsCacheRegistry.getItem(this._firstListUIDSeen) : false;
			};









			/**
			 * @constructor ComponentList
			 */
			const ComponentList = function(definition, parentView, parent) {
				Components.HierarchicalObject.call(this);	// don't register the list as a child ... ', definition, parentView, parent);
				this.objectType = 'ComponentList';
				this._parent = parent;

				this.iterateOnModel(definition, parentView, parent);
			};
			ComponentList.prototype = Object.create(Components.HierarchicalObject.prototype);
			ComponentList.prototype.objectType = 'ComponentList';
			coreComponents.ComponentList = ComponentList;		// used in AppIgnition.List (as a "life-saving" tool : pretty abstract, but very useful)

			ComponentList.prototype.iterateOnModel = function(definition, parentView) {
				if (definition.getHostDef().each.length) {
					// Debug notice: preventing a frequent case of error,
					// when a def hosting a list is instanciated once and re-used many times.
					// In most cases, the "each" property isn't resetted, so we get empty nodes from past iterations
					if (!definition.getHostDef().isInternal && TypeManager.listsDefinitionsCacheRegistry.getItem(definition.getHostDef().UID)) { //  && this._parent._firstListUIDSeen !== null && this._parent._firstListUIDSeen === definition.getHostDef().UID
						console.warn('ComponentList :', 'Constructing a list from a not-empty definition we\'ve already seen : There is a possibility that this is unintentional ans may cause unwanted empty nodes to be appended in the DOM.', 'The nodeName is', definition.getHostDef().template.getHostDef().nodeName, 'The "each" property is', definition.getHostDef().each);
					}
					// Not used in Core elsewhere than here: probably meant to help build very complex apps
					// (but here, useful to catch the above "notice" log)
					TypeManager.listsDefinitionsCacheRegistry.setItem(definition.getHostDef().UID, definition.getHostDef());
					this._parent._firstListUIDSeen = definition.getHostDef().UID;
				}
				else
					return;

				var templateDef = definition.getHostDef().template,
					composedComponent,
					type;

				//	console.log(templateDef);
				definition.getHostDef().each.forEach(function(item, key) {

					if ((type = templateDef.getHostDef().type)) {
						composedComponent = new Components[type](templateDef, this._parent.view, this._parent);
						Registries.dataStoreRegistry.setItem(composedComponent._UID, key);
					}
					else if (templateDef.getGroupHostDef()) {
						if ((type = templateDef.getGroupHostDef().getType()) && Components[type]) {
							composedComponent = new Components[type](templateDef, this._parent.view, this._parent);
						}
						else
							composedComponent = new CompoundComponent(templateDef, this._parent.view, this._parent);
						Registries.dataStoreRegistry.setItem(composedComponent._UID, key);
					}
					else
						this._parent.view.subViewsHolder.memberViews.push(new CoreTypes.ComponentView(templateDef, this._parent.view, this._parent));
				}, this);
			};












			/**
			 * @constructor CompoundComponentWithHooks
			 */
			const CompoundComponentWithHooks = function(definition, parentView, parent, isChildOfRoot) {
				CompoundComponent.call(this, definition, parentView, parent, isChildOfRoot);
				this.objectType = 'CompoundComponentWithHooks';
				this.viewExtend(definition);
			};
			const CompoundComponentWithHooksProto_proto = Object.create(Components.ComponentWithHooks.prototype);
			Object.assign(CompoundComponentWithHooksProto_proto, CompoundComponent.prototype);
			CompoundComponentWithHooks.prototype = Object.create(CompoundComponentWithHooksProto_proto);
			CompoundComponentWithHooks.prototype.objectType = 'CompoundComponentWithHooks';
			coreComponents.CompoundComponentWithHooks = CompoundComponentWithHooks;


			/**
			 * @constructor CompoundComponentWithReactiveText
			 */
			const CompoundComponentWithReactiveText = function(definition, parentView, parent, isChildOfRoot) {
				CompoundComponent.call(this, definition, parentView, parent, isChildOfRoot);
				this.objectType = 'CompoundComponentWithReactiveText';
				this.viewExtend(definition);
			};
			const CompoundComponentWithReactiveTextProto_proto = Object.create(Components.ComponentWithReactiveText.prototype);
			Object.assign(CompoundComponentWithReactiveTextProto_proto, CompoundComponent.prototype);
			CompoundComponentWithReactiveText.prototype = Object.create(CompoundComponentWithReactiveTextProto_proto);
			CompoundComponentWithReactiveText.prototype.objectType = 'CompoundComponentWithReactiveText';
			coreComponents.CompoundComponentWithReactiveText = CompoundComponentWithReactiveText;










			const createIteratingComponentHostDef = _dereq_('src/coreDefs/IteratingComponentHostDef');
			const createIteratingComponentSlotsDef = _dereq_('src/coreDefs/IteratingComponentSlotsDef');

			const IteratingComponent = function(definition, parentView, parent, slotDef) {
				this.slotDef = slotDef || createIteratingComponentSlotsDef().slotDef;
				// Let's allow neither passing a parentView nor a parent.
				// This is a common pattern we've used in the documentation
				// (although the standard signature for Components has 3 parameters,
				// and is useful in more complex cases)
				if (parentView instanceof TemplateFactory.HierarchicalComponentDefModel)
					this.slotDef = parentView;
				else if (parent instanceof TemplateFactory.HierarchicalComponentDefModel)
					this.slotDef = parent;
				// Not passing a parentView of type "ComponentView"
				// should fail smoothly in the abstract components
				// but it's not heavily tested
				Components.ComponentWithView.apply(this, arguments);
				this.objectType = 'IteratingComponent';
				
				this.typedSlot = new this.rDataset(
					null,										// wrapping component
					this,										// host component
					this.slotDef,									// list-item template
					['text']									// schema of data for reactivity
				);
			};
			IteratingComponent.prototype = Object.create(Components.ComponentWithView.prototype);
			IteratingComponent.prototype.objectType = 'IteratingComponent';
			coreComponents.IteratingComponent = IteratingComponent;

			IteratingComponent.prototype.createDefaultDef = function() {
				return createIteratingComponentHostDef();
			};

			IteratingComponent.prototype.acquireData = function(listContentAsArray) {
				const conformedList = listContentAsArray.map(
					(item) => this.typedSlot.newItem(item)
				);
				this.typedSlot.pushApply(conformedList);
			};

			module.exports = IteratingComponent;















			/**
			 * @constructor LazySlottedCompoundComponent
			*/
			const createLazySlottedComponentDef = _dereq_('src/coreDefs/lazySlottedComponentDef');
			const createLazySlottedComponentSlotstDef = _dereq_('src/coreDefs/lazySlottedComponentSlotsDef');
			const LazySlottedCompoundComponent = function(definition, parentView, parent, slotsCount, slotsDef) {
				var stdDefinition = definition || createLazySlottedComponentDef();
				this.typedSlots = [];
				this.slotsCount = slotsCount || this.slotsCount || 2;
				//	console.log(this.slotsDef);
				this.slotsDef = slotsDef || this.slotsDef || createLazySlottedComponentSlotstDef();

				// Proceeding that way (i.e. not using the complete mixin mechanism : "addInterface") allows us to choose in which order the ctors are called
				// When the base ctor is called, it calls the extension's ctor, and then, and only then, the superClasse's ctor
				// (which would have been called before the extension's one if we had used the "addInterface" mechanism)
				// Full motivation : as we don't want to define a view twice (the two mixed ctor's both call their superClasse's ctor : ComponentWithView),
				// we bypassed the call to super() in the LazySlottedCompoundComponent ctor
				//
				// We could choose not to call the CompoundComponent ctor, but then we wouldn't be able to define subSections or members (ou would have to explicitly call the methods then)
				// Other issue : the CompoundComponent ctor would be called with the arguments received by the mergedConstructor(), and they do not include a definition object
				// Keeping that here makes the code base cleaner

				// Get a definition :
				// Here, the initial def allows an undefined number of tabs
				this.updateDefinitionBasedOnSlotsCount(stdDefinition);

				CompoundComponentWithHooks.call(this, stdDefinition, parentView, parent);

				//	console.log('LazySlottedCompoundComponent - Ctor Rendering \n\n\n');
				//	this.render(null, stdDefinition.lists[0].host);

				this.objectType = 'LazySlottedCompoundComponent';

				this.affectSlots();

				// This is an abstract Class
				// For a "straight" TabPanel Class, we would have assumed this.slotsCount is 2
				// And for an imaginary other implementation of the LazySlottedCompoundComponent class, we should have handled the slotsCount case : it may be defined anteriorly, or fixed, or...
				for (let i = 0, l = this.slotsCount; i < l; i++) {
					this.typedSlots[i].setSchema(['slotTitle']);
				}

				this.createEvent('header_clicked');

				this.slotsCache = new TypeManager.PropertyCache('LazySlottedCompoundComponentSlotsCache' + this._UID);
				
				// Exception : we want to call an async task, but the prototype of an abstract type CAN'T have a _asyncInitTasks property
				// ONLY a concrete type may declare it on its prototype, cause if the property already exists,
				// the prototype of the abstract type will be overridden with an asyncTasks-array coming from a concrete type.
				// So : => We need to define the _asyncInitTasks in the constructor of the abstract type
				// in a manner so it won't override the property defined on the prototype of the concrete type,
				// and the prototype of the concrete type won't override a prop that doen't exist yet on the abstract type
				// when defining the prototype.
				if (!Array.isArray(this._asyncInitTasks))
					this._asyncInitTasks = [];
				this._asyncInitTasks.push(new TypeManager.TaskDefinition({
					type : 'viewExtend',
					task : function(definition) {
						this.hackDOMAttributes();
					}
				}));
			};
			LazySlottedCompoundComponent.prototype = Object.create(CompoundComponentWithHooks.prototype);
			LazySlottedCompoundComponent.prototype.objectType = 'LazySlottedCompoundComponent';
			coreComponents.LazySlottedCompoundComponent = LazySlottedCompoundComponent;


			// TMP Hack: assign DOM attributes on pseudo-slots (though we should do that through reactivity, see "ColorSamplerSetComponent")
			LazySlottedCompoundComponent.prototype.hackDOMAttributes = function() {
				console.log('hackDOMAttributes');
				this._children.forEach(function(child, key) {
					child.view.getMasterNode().streams = child.streams;
					child.view.getMasterNode().setAttribute('slot-id', 'slot' + key.toString());
				}, this);
			};

			/**
			 * updateDefinitionBasedOnSlotsCount
			 * This method initializes the current definition with as much pseudo-slots as in slotCount
			 */
			LazySlottedCompoundComponent.prototype.updateDefinitionBasedOnSlotsCount = function(definition) {
			//	if (definition.lists[0] && definition.lists[0].host.each.length)
			//		console.warn(this.objectType, ': Initializing a ReactiveDataset with an inital value. Please ensure this is intentional. (it may result from using the same instance of a definition multiple times)');
				
				for (let i = 0, l = this.slotsCount; i < l; i++) {
					definition.lists[0].host.each.push({ 'slot-id': 'slot' + i });
				}
			};

			LazySlottedCompoundComponent.prototype.affectSlots = function() {
				let slotsDefs  = Object.values(this.slotsDef);
				for (let i = 0, l = this.slotsCount; i < l; i++) {
					this.typedSlots.push(new this.rDataset(
						null,
						this._children[i],
						slotsDefs[i],
						[])
					);
				}
				// This method used to return "true". As it was obviously a dirty hack, we've deteted that instruction.
			};

			LazySlottedCompoundComponent.prototype.setSchema = function() {
				if (arguments.length !== this.slotsCount) {
					console.warn('globally setting schema failed : not the right number of args');
				}

				for (let i = 0, l = this.slotsCount; i < l; i++) {
					this.typedSlots[i].setSchema([arguments[i]]);
				}
			};

			LazySlottedCompoundComponent.prototype.getSlot = function(Idx) {
				return this._children[Idx];
			};

			LazySlottedCompoundComponent.prototype.getFirstSlot = function() {
				return this._children[0];
			};

			LazySlottedCompoundComponent.prototype.getFirstSlotChildren = function() {
				return this._children[0]._children;
			};

			LazySlottedCompoundComponent.prototype.pushToSlotFromText = function(slotNbr, content) {
				// Here, newItem() depends on the type given in the ctor... or afterwards with setSchema()
				this.typedSlots[slotNbr].push(this.typedSlots[slotNbr].newItem(content));
			};

			LazySlottedCompoundComponent.prototype.pushApplyToSlot = function(slotNbr, contentAsArray) {
				// Here, newItem() depends on the type given in the ctor... or afterwards with setSchema()
				var cAsArray = contentAsArray.map(function(value, key) {
					if (typeof value !== 'object' || !(value instanceof this.typedSlots[slotNbr].Item))
						return this.typedSlots[slotNbr].newItem(value);
					else
						return value;
				}, this);
				//	console.log(cAsArray.slice(0));
				this.typedSlots[slotNbr].pushApply(cAsArray);
				//	return contentAsArray;
			};

			LazySlottedCompoundComponent.prototype.pushDefaultToSlot = function(slotNbr) {
				// Here, newItem() depends on the type given in the ctor... or afterwards with setSchema()
				this.typedSlots[slotNbr].push(this.typedSlots[slotNbr].newItem(''));
			};

			LazySlottedCompoundComponent.prototype.pushMultipleDefaultToSlot = function(slotNbrArray) {
				slotNbrArray.forEach(function(slotNbr) {
					this.pushDefaultToSlot(slotNbr);
				}, this);
			};

			LazySlottedCompoundComponent.prototype.addPairedItems = function(slotTextContent) {
				for (let i = 0, l = arguments.length; i < l; i++) {
					this.pushToSlotFromText(0, arguments[i]);
					this.pushToSlotFromText(1, '');
				}
			};

			LazySlottedCompoundComponent.prototype.emptySlots = function() {
				for (let i = 0, l = this.slotsCount; i < l; i++) {
					this.typedSlots[i].resetLength();
				}
			};

			LazySlottedCompoundComponent.prototype.cacheSlots = function(userlandUID) {
				for (let i = 0, l = this.slotsCount; i < l; i++) {
					if (!this.slotsCache.getItem(userlandUID + i.toString())) {
						var savedSlot = {
							content: this.typedSlots[i].slice(0),
							children: this.typedSlots[i].rootComponent._children.slice(0)
						};
						this.slotsCache.setItem(userlandUID + i.toString(), savedSlot);
					}
					//		this.typedSlots[i].resetLength();
				}
			};

			LazySlottedCompoundComponent.prototype.retrieveSlots = function(userlandUID) {
				var slot;
				for (let i = 0, l = this.slotsCount; i < l; i++) {
					slot = this.slotsCache.getItem(userlandUID + i.toString());
					if (slot) {
						Array.prototype.splice.call(this.typedSlots[i], 0, slot.content.length, ...slot.content);
						slot.children.forEach(function(child, key) {
							this.typedSlots[i].rootComponent.pushChild(child);
							if (child.view) // this.slotsCache.getItem(userlandUID1) is a pseudo component (an object with an init() method)
								this.typedSlots[i].rootComponent.view.addChildAt(child.view, slot.children.length); //  (- 1  & slot.children.length) cause 0 would cause an append (see view.addChildAt())
						}, this);
					}
				}
			};














			const createAbstractTreeDef = _dereq_('src/coreDefs/abstractTreeDef');
			const createBranchTemplateDef = _dereq_('src/coreDefs/branchTemplateDef');
			const createLeafTemplateDef = _dereq_('src/coreDefs/leafTemplateDef');

			const AbstractTree = function(definition, parentView, parent, jsonData, nodeFilterFunction) {
				//	console.log(definition, parentView, parent, jsonData);
				var stdDefinition = createAbstractTreeDef();
				// HACK: no solution for now to override the default def : there is no createDefaultDef method on a compound component
				if  (definition.getGroupHostDef().sOverride)
					stdDefinition.getGroupHostDef().sOverride = definition.getGroupHostDef().sOverride;
				
				/**
				 * Standard Implementation :
				 * (this requirements may be overridden through extension. see affectClickEvents())
				 */
				// Banch Component MUST implement the 'clicked_ok' event (and though inherit from ComponentWithHooks)
				this.branchTemplate = this.branchTemplate || createBranchTemplateDef();
				// Leaf Component MUST at least inherit from ComponentWithHooks
				this.leafTemplate = this.leafTemplate || createLeafTemplateDef();
				this.pseudoModel = [];
				this.listTemplate = TypeManager.createComponentDef({ type: 'ComponentList' });
				this.listTemplate.getHostDef().each = this.pseudoModel;

				this.expanded = this.expanded || 'expanded';

				CompoundComponent.call(this, stdDefinition, parentView, parent);
				this.objectType = 'AbstractTree';

				this.addEventListener('update', function(e) {
					//		console.log('abstractTree receives update and sets "selected"', e.data);
					this.streams.selected.value = e.data.self_UID;
				}.bind(this));
				this.createEvent('exportdata');
				
				if (jsonData && Object.prototype.toString.call(jsonData) === '[object Object]')
					this.renderJSON(jsonData, nodeFilterFunction);
			};
			AbstractTree.prototype = Object.create(CompoundComponentWithHooks.prototype);
			AbstractTree.prototype.objectType = 'AbstractTree';
			coreComponents.AbstractTree = AbstractTree;

			AbstractTree.prototype.createMember = function(memberSpec, parent) {
				var type = memberSpec.type, componentDef, component;
			//	console.log(memberSpec);
				//	console.log(memberSpec);
				if (memberSpec.children.length) {
					// When a def isn't already cached, isKnownUID() returns a string : the definitionsCache creates an emty entry and returns the newly added cacheID
					if (typeof (componentDef = TypeManager.definitionsCache.isKnownUID('branchTemplate_' + type)) === 'string') {
						componentDef = TypeManager.createComponentDef(this.branchTemplate);
						//			componentDef.getGroupHostDef().attributes.push(TypeManager.PropsFactory({textContent : this.getHeaderTitle(type)}));
					}

					component = new CompoundComponent(componentDef, parent.view, parent);
					Registries.dataStoreRegistry.setItem(component._UID, this.pseudoModel.length);
					this.pseudoModel.push(this.getHeaderTitle(memberSpec));
				}
				else {
					component = new Components[this.leafTemplate.getHostDef().type](this.leafTemplate, parent.view, parent);
					Registries.dataStoreRegistry.setItem(component._UID, this.pseudoModel.length);
					this.pseudoModel.push(this.getKeyValueObj(memberSpec));
				}
				return component;
			};

			AbstractTree.prototype.getHeaderTitle = function(memberSpec) {
				var len = memberSpec.children.length;
				if (memberSpec.type === 'array')
					return {
						headerTitle: "[".concat(len, "]"),
						displayedas: memberSpec.type,
						expanded: this.expanded
					};
				else if (memberSpec.type === 'object')
					return {
						headerTitle: "{".concat(len, "}"),
						displayedas: memberSpec.type,
						expanded: this.expanded
					};
			};

			AbstractTree.prototype.getKeyValueObj = function(memberSpec) {
				return {
					keyValuePair: ['', memberSpec.key + (memberSpec.children.length ? '&nbsp;:&nbsp;' : ''), (memberSpec.type === 'string' ? ' "' + memberSpec.value.toString() + '"' : memberSpec.value.toString())],
					displayedas: memberSpec.type
				};
			};

			AbstractTree.prototype._typeof = function(obj) {
				var _typeof;
				if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
					_typeof = function(obj) {
						return typeof obj;
					};
				} else {
					_typeof = function(obj) {
						return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
					};
				}

				return _typeof(obj);
			};

			AbstractTree.prototype.getDataType = function(obj) {

				var type = this._typeof(obj);

				if (Array.isArray(obj))
					type = 'array';
				if (obj === null)
					type = 'null';

				return type;
			};

			AbstractTree.prototype.createNode = function() {
				var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				return {
					key: opt.key || null,
					parent: opt.parent || null,
					value: opt.hasOwnProperty('value') ? opt.value : null,
					isExpanded: opt.isExpanded || false,
					type: opt.type || null,
					children: opt.children || [],
					el: opt.el || null,
					depth: opt.depth || 0
				};
			};

			AbstractTree.prototype.createSubnodes = function(data, node) {
				if (this._typeof(data) === 'object') {
					for (var key in data) {
						var child = this.createNode({
							value: data[key],
							key: key,
							depth: node.depth + 1,
							type: this.getDataType(data[key]),
							parent: node
						});
						node.children.push(child);
						this.createSubnodes(data[key], child);
					}
				}
			};

			AbstractTree.prototype.createTree = function(jsonData) {
				var data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
				var rootNode = this.createNode({
					value: data,
					key: 'root',
					type: this.getDataType(data)
				});
				this.createSubnodes(data, rootNode);
				return rootNode;
			};

			AbstractTree.prototype.traverseTree = function(memberDesc, parentComponent, callback) {
				//console.log(node);
				var component = callback(memberDesc, parentComponent);
				//console.log(node);

				if (memberDesc.children.length > 0) {
					memberDesc.children.forEach(function(child) {
						this.traverseTree(child, component, callback);
					}, this);
				}
			};

			AbstractTree.prototype.instanciateTreeMembers = function(tree, nodeFilterFunction) {
				var self = this;
				this.traverseTree(tree, this, function(memberDesc, parentComponent) {
					var component;
					if (typeof nodeFilterFunction !== 'function') {
						component = self.createMember(memberDesc, parentComponent);
					}
					else {
						memberDesc = nodeFilterFunction(memberDesc);
						component = self.createMember(memberDesc, parentComponent);
					}
					self.affectClickEvents(memberDesc, component);
					return component;
				});
			};

			AbstractTree.prototype.renderJSON = function(jsonData, nodeFilterFunction) {
				//	console.log(jsonData);
				var parsedData = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
				var tree = this.createTree(parsedData);
				//	console.log(parsedData, tree);
				this.instanciateTreeMembers(tree, nodeFilterFunction);

				var DOMNodeId;
				this.render(DOMNodeId);
				return tree;
			};

			AbstractTree.prototype.reset = function() {
				this.removeAllChildren();
				this.clearEventListeners('exportdata');
			};

			AbstractTree.prototype.render = function() { }; 									// pure virtual (injected as a dependancy by AppIgnition)
			AbstractTree.prototype.affectClickEvents = function(memberDesc, component) { 	// virtual with default (implemented through override on extension)
				this.affectClickEvents_Base(memberDesc, component);
			};

			AbstractTree.prototype.affectClickEvents_Base = function(memberDesc, component) {
				var self = this;

				if (memberDesc.children.length) {
					// Say we have a header node, containing 2 pictos (arrows), and an appended span, key: value
					component._children[0].addEventListener('clicked_ok', function(e) {
						// When artificially clicked from outside of the component, there is no e.data.target
						if ((!e.data || !e.data.target) || e.data.target === this.view.getWrappingNode().children[2])
							self.trigger('exportdata', memberDesc.projectedData); // the component shall trigger update and receive the "selected" attribute: not needed here
						else
							component.streams.expanded.value = !component.streams.expanded.value ? 'expanded' : null;
					}.bind(component._children[0]));
				}
				else {
					// Leaf Component MUST inherit from ComponentWithHooks
					component.registerClickEvents = function() {
						if (!component._eventHandlers.clicked_ok)
							component.createEvent('clicked_ok');
						
						Object.getPrototypeOf(this).registerClickEvents.call(this);

						// Say we have 2 divs with key : value
						this.view.subViewsHolder.memberViews[1].getWrappingNode().addEventListener('click', function(e) {
							this.trigger('clicked_ok', e);
						}.bind(component));
						component.addEventListener('clicked_ok', function(e) {
							this.streams.selected.value = 'selected';
							this.trigger('update', { self_UID: component._UID }, true);
							self.trigger('exportdata', memberDesc.projectedData);
						}.bind(component));
					};
				}
			};

















			const createAbstractTableDef = _dereq_('src/coreDefs/abstractTableDef');
			const createAbstractTableSlotsDef = _dereq_('src/coreDefs/abstractTableSlotsDef');


			const AbstractTable = function(def, parentView, parent) {
				this.slotsCount = 2;

				var stdDef = def || createAbstractTableDef();
				this.slotsDef = this.slotsDef || createAbstractTableSlotsDef();
				this.columnsCount = this.columnsCount || 2;
				this.rowsCount = 0;

				LazySlottedCompoundComponent.call(this, stdDef, parentView, parent);
				this.typedSlots[0].setSchema(['headerTitle']);
				// The schema for rows depends 
				this.typedSlots[1].setSchema(['rowContentAsArray']);

				// This concern is left to the implementation discretion
				//	this.setcolumnsCount(this.columnsCount);
			};

			/**
			 * @chained_inheritance AbstractTable <= LazySlottedCompoundComponent <= ComponentWithReactiveText
			 */
			const AbstractTableProto_proto = Object.create(LazySlottedCompoundComponent.prototype);
			Object.assign(AbstractTableProto_proto, Components.ComponentWithReactiveText.prototype);
			AbstractTable.prototype = Object.create(AbstractTableProto_proto);
			AbstractTable.prototype.objectType = 'AbstractTable';
			coreComponents.AbstractTable = AbstractTable;


			AbstractTable.prototype.setColumnsCount = function(columnsCount, headerTitles) {
				this.columnsCount = columnsCount;
				this.typedSlots[0].resetLength();
				//	console.log(this.typedSlots[0]);
			//	if (!Array.isArray(headerTitles)) {
			//		headerTitles = ['idx'];
			//		for (let i = 1; i < columnsCount; i++) {
			//			headerTitles.push('Column ' + i.toString());
			//		}
			//	}
			//	else if (headerTitles[0] !== 'idx')
			//		headerTitles.unshift('idx');
					
				const {rowDef, tdDef} = this.slotsDef;
				let uniqueTdDef;
				for (let i = 0; i < columnsCount; i++) {
					uniqueTdDef = TemplateFactory.createDef(tdDef);
					rowDef.members.push(uniqueTdDef);
				};
				return this.pushApplyToSlot(0, headerTitles);
			};


			AbstractTable.prototype.pushToSlotFromText = function(slotNbr, content) {
				// Here, newItem() depends on the type given in the ctor... or afterwards with setSchema()
				this.typedSlots[slotNbr].push(this.typedSlots[slotNbr].newItem(content));

				if (slotNbr === 0) {
					var lastChild = this._children[0].getLastChild();
					lastChild.view.getMasterNode().addEventListener('mousedown', function(e) {
						this.trigger('header_clicked', { self_key: lastChild._key });
						this._children[0].childButtonsSortedLoop(lastChild._key);
					}.bind(this));
				}
			};

			AbstractTable.prototype.pushApplyToSlot = function(slotNbr, contentAsArray) {
				var lastChildIndex = this._children[0]._children.length;
				// Here, newItem() depends on the type given in the ctor... or afterwards with setSchema()
				var cAsArray = contentAsArray.map(function(value, key) {
					if (typeof value !== 'object' || !(value instanceof this.typedSlots[slotNbr].Item))
						return this.typedSlots[slotNbr].newItem(value);
					else
						return value;
				}, this);
				
			//	console.log(cAsArray);
				this.typedSlots[slotNbr].pushApply(cAsArray);

				if (slotNbr === 0) {
					for (let i = lastChildIndex; i < this._children[0]._children.length; i++) {
						this._children[0]._children[i].view.getMasterNode().addEventListener('mousedown', function(e) {
							this.trigger('header_clicked', { self_key: this._children[0]._children[i]._key });
							this._children[0].childButtonsSortedLoop(this._children[0]._children[i]._key);
						}.bind(this));
					}
				}
			};

			AbstractTable.prototype.getRows = function() {
				return this._children[1];
			};

			AbstractTable.prototype.getRow = function(idx) {
				return this._children[1]._children[idx];
			};













			/**
			 * @constructor AbstractAccordion
			 * 
			 * @similarTo TypedListComponent : a restricted form of LazySlottedCompoundComponent
			 * 				where slots are appended to self.
			*/
			const createAbstractAccordionDef = _dereq_('src/coreDefs/AbstractAccordionDef');
			const createAbstractAccordionSlotDef = _dereq_('src/coreDefs/AbstractAccordionSlotsDef');

			const AbstractAccordion = function(definition, parentView, parent, hostedTypes) {
				if (!definition.getGroupHostDef().nodeName)
					definition = createAbstractAccordionDef();

				this.slotsCount = 0;

				this.typedSlots = [];
				this.slotsAssociation = {};
				this.slotsDefFactory = this.slotsDefFactory || createAbstractAccordionSlotDef;

				if (Array.isArray(hostedTypes) && hostedTypes.length) {
					this.slotsCount = hostedTypes.length;
					this.updateDefinitionBasedOnSlotsCouunt(definition, hostedTypes);
				}
				else {
					console.warn('AbstractAccordion', 'a "hostedTypes" arg should be provided, unless the component shall have no child');
				}

				CompoundComponent.call(this, definition || createAbstractAccordionDef(), parentView, parent);

				this.objectType = 'AbstractAccordion';
				this.affectSlots(hostedTypes);

			};
			AbstractAccordion.prototype = Object.create(CompoundComponent.prototype);
			AbstractAccordion.prototype.objectType = 'AbstractAccordion';
			coreComponents.AbstractAccordion = AbstractAccordion;

			AbstractAccordion.prototype.updateDefinitionBasedOnSlotsCouunt = function(definition, hostedTypes) {
				hostedTypes.forEach(function(hostSpec, key) {
					definition.lists[0].getHostDef().each.push(
						{ "accordion-set": 'set_1' }
					);
					this.slotsAssociation[hostSpec.endPointName] = key;
				}, this);
			};

			/**
			 * @same_as TypedListComponent
			 */
			AbstractAccordion.prototype.affectSlots = function(hostedTypes) {
				//	console.log(this._children.length);
				for (var i = 0; i < this.slotsCount; i++) {
					this.typedSlots.push(new this.rDataset(
						this._children[i],
						this._children[i],
						this.slotsDefFactory(),
						['updateChannel'])
					);
					this.typedSlots[i].defaultListDef.getHostDef().template.getGroupHostDef().type = hostedTypes[i].componentType;
					//		console.log(this.typedSlots[i].defaultListDef.getHostDef());
				}

				return true;
			};

			AbstractAccordion.prototype.stylePanelToFront = function(Idx) {

			};























			//componentTypes.ComponentWithView = Components.ComponentWithView;
			//componentTypes.ComponentWithHooks = Components.ComponentWithHooks;
			// Extension continues in ReactiveDataset, ComponentSet
			//componentTypes.LazySlottedCompoundComponent = LazySlottedCompoundComponent;
			//componentTypes.AbstractTable = AbstractTable;
			//componentTypes.AbstractTree = AbstractTree;

			Components.CompoundComponent = CompoundComponent;	// CompoundComponent may be called as a type







			// Some formal implementations rely on Dependancy Injection
			Components.CompositorComponent.prototype.acquireCompositor = function(inheritingType, inheritedType) {	// special helper
				if (inheritedType in Components || inheritedType in coreComponents) {
					var objectType = inheritingType.prototype.objectType;
					inheritingType.prototype.Compositor = coreComponents[inheritedType];
			//		console.log(inheritingType.prototype.Compositor);
					//		console.log(Object.create(coreComponents[inheritedType].prototype));
					//		console.log(Components.ExtensibleObject.prototype.mergeOwnProperties(true, Object.create(coreComponents[inheritedType].prototype), inheritingType.prototype));
					inheritingType.prototype = Components.ExtensibleObject.prototype.mergeOwnProperties(true, Object.create(coreComponents[inheritedType].prototype), inheritingType.prototype);
					inheritingType.prototype.objectType = objectType;
					if (!inheritingType.prototype._implements || !inheritingType.prototype._implements.length)
						inheritingType.prototype._implements = [inheritedType];
					else
						inheritingType.prototype._implements.push(inheritedType);
				}
			};

			Components.CompositorComponent.createAppLevelExtendedComponent = function() {
				var extension2ndPass = {};
			//	console.error(typeof Components.GradientGenerator);
				for (var componentType in Components) {
					if (Components[componentType].hasOwnProperty('dependancyInjectionDone'))
						continue;
					// An automatically included component may not really be a component : we have a "special" category that we also include
					if (typeof Components[componentType].prototype === 'undefined')
						continue;
						
			//		console.log(componentType, typeof Components[componentType].prototype, Components[componentType].prototype.hasOwnProperty('extendsCore'));
			//		if (!Components[componentType].prototype.hasOwnProperty('extendsCore'))
			//			console.log(Components[componentType].prototype);
			//		console.log(Components[componentType].prototype.hasOwnProperty('extendsCore'), componentType, Components[componentType]);
							 
					if (Components[componentType].prototype.hasOwnProperty('extendsCore')) {
			//			console.log(Components[componentType]);
						Components.CompositorComponent.prototype.acquireCompositor(Components[componentType], Components[componentType].prototype.extendsCore);
						Components[componentType].dependancyInjectionDone = true;
					}
					else if (Components[componentType].prototype.hasOwnProperty('extends')) {
						extension2ndPass[componentType] = Components[componentType];
					}
						
					
				}
				for (var componentType in extension2ndPass) {
					if (Components[componentType].hasOwnProperty('dependancyInjectionDone'))
						continue;
					Components.CompositorComponent.prototype.extendFromCompositor(Components[componentType], Components[Components[componentType].prototype.extends]);
					Components[componentType].dependancyInjectionDone = true;
				}
			};


			CompoundComponent.componentTypes = Components;
			CompoundComponent.coreComponents = coreComponents;
			module.exports = CompoundComponent;
			},{"src/_DesignSystemManager/SWrapperInViewManipulator":3,"src/core/Component":42,"src/core/CoreTypes":45,"src/core/Registries":53,"src/core/TemplateFactory":55,"src/core/TypeManager":57,"src/coreComponents/AppBoundaryComponent/AppBoundaryComponent":8,"src/coreComponents/AppOverlayComponent/AppOverlayComponent":10,"src/coreComponents/ComponentPickingInput/ComponentPickingInput":12,"src/coreComponents/FlexColumnComponent/FlexColumnComponent":14,"src/coreComponents/FlexGridComponent/FlexGridComponent":16,"src/coreComponents/FlexRowComponent/FlexRowComponent":17,"src/coreComponents/HToolbarComponent/HToolbarComponent":19,"src/coreComponents/IFrameComponent/IFrameComponent":21,"src/coreComponents/RPCStackComponent/RPCStackComponent":23,"src/coreComponents/RootViewComponent/RootViewComponent":24,"src/coreDefs/AbstractAccordionDef":26,"src/coreDefs/AbstractAccordionSlotsDef":27,"src/coreDefs/IteratingComponentHostDef":28,"src/coreDefs/IteratingComponentSlotsDef":29,"src/coreDefs/abstractTableDef":30,"src/coreDefs/abstractTableSlotsDef":32,"src/coreDefs/abstractTreeDef":33,"src/coreDefs/branchTemplateDef":34,"src/coreDefs/lazySlottedComponentDef":35,"src/coreDefs/lazySlottedComponentSlotsDef":36,"src/coreDefs/leafTemplateDef":37}],45:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * 
			 */



			const appConstants = _dereq_('src/appLauncher/appLauncher');
			//const TypeManager = require('src/core/TypeManager');
			const TemplateFactory = _dereq_('src/core/TemplateFactory');
			const Registries = _dereq_('src/core/Registries');
			const SWrapperInViewManipulator = _dereq_('src/_DesignSystemManager/SWrapperInViewManipulator');


			const UIDGenerator = _dereq_('src/core/UIDGenerator');
			const PropertyCache = _dereq_('src/core/PropertyCache');
			const CachedTypes = _dereq_('src/core/CachedTypes');
			//const idGenerator = TemplateFactory.UIDGenerator;
			const nodesRegistry = Registries.nodesRegistry;
			const viewsRegistry = Registries.viewsRegistry;

			//const JSkeyboardMap = require('src/events/JSKeyboardMap');






			//console.log(nodesRegistry);
			//console.log(viewsRegistry);














			/**
			 * @constructor Pair
			 * 
			 * @param String name
			 * @param String value
			 */
			var Pair = function(name, value) {
				this.name = name;
				this.value = value;
			};
			Pair.prototype = {};





			var ListOfPairs = function(pseudoNameValuePairsList) {
				if (Array.isArray(pseudoNameValuePairsList)) {
					for (let i = 0, l = pseudoNameValuePairsList.length; i < l; i++) {
						this.push(
							new Pair(
								pseudoNameValuePairsList[i].name,
								pseudoNameValuePairsList[i].value
							)
						);
					}
				}
			};
			ListOfPairs.prototype = Object.create(Array.prototype);
			Object.defineProperty(ListOfPairs.prototype, 'objectType', {
				value : 'ListOfPairs'
			});














			var DimensionsPair = function(initialValues) {
				this.inline = initialValues ? initialValues[0] : 0;
				this.block = initialValues ? initialValues[1] : 0;
			};
			DimensionsPair.prototype = {};
			DimensionsPair.prototype.objectType = 'DimensionsPair';

			DimensionsPair.prototype.set = function(valuesPair) {
				this.inline = valuesPair[0];
				this.block = valuesPair[1];
				return this;
			};
			DimensionsPair.prototype.add = function(valuesPair) {
				this.inline += valuesPair[0];
				this.block += valuesPair[1];
				return this;
			};
			DimensionsPair.prototype.substract = function(valuesPair) {
				this.inline -= valuesPair[0];
				this.block -= valuesPair[1];
				return this;
			};
			//dimensionsPair.prototype.getInlineValue = function() {
			//	return this.inline;
			//}
			//dimensionsPair.prototype.getBlockValue = function() {
			//	return this.block;
			//}
			//dimensionsPair.prototype.setInlineValue = function(inline) {
			//	this.inline = inline;
			//}
			//dimensionsPair.prototype.setBlockValue = function(block) {
			//	this.block = block;
			//}














			/**
			 * @constructor EventEmitter
			 */
			var EventEmitter = function() {
				this.objectType = 'EventEmitter';
				this._eventHandlers = {};
				this._one_eventHandlers = {};
				this._identified_eventHandlers = {};
				
				this.createEvents();
			};
			EventEmitter.prototype = {};
			EventEmitter.prototype.objectType = 'EventEmitter';

			/**
			 * @virtual
			 */
			EventEmitter.prototype.createEvents = function() {};				// virtual

			/**
			 * Creates a listenable event : generic event creation (onready, etc.)
			 * 
			 * @param {string} eventType
			 */
			EventEmitter.prototype.createEvent = function(eventType) {
				var self = this;
				this._eventHandlers[eventType] = [];
				if (!Object.getOwnPropertyDescriptor(this, 'on' + eventType)) {
					var propDescriptor = {};
					propDescriptor['on' + eventType] = {
						set : function(callback) {
							self.addEventListener(eventType, callback);
						}
					};
					Object.defineProperties(this, propDescriptor);
				}
				else {
					console.warn(this.objectType, ': this.createEvent has been called twice with the same eventType =>', eventType);
				}
				
				this._one_eventHandlers[eventType] = [];
				// identified event handlers are meant to be disposable
				this._identified_eventHandlers[eventType] = [];
			};
			/**
			 * Deletes... an event
			 * 
			 * @param {string} eventType
			 */
			EventEmitter.prototype.deleteEvent = function(eventType) {
				delete this['on' + eventType];
			};

			EventEmitter.prototype.hasStdEvent = function(eventType) {
				
				return (typeof this._eventHandlers[eventType] !== 'undefined');
			};

			/**
			 * @param {string} eventType
			 * @param {function} handler : the handler to remove (the associated event stays available) 
			 */
			EventEmitter.prototype.removeEventListener = function(eventType, handler) {
				if (typeof this._eventHandlers[eventType] === 'undefined')
					return;
				for(var i = 0, l = this._eventHandlers[eventType].length; i < l; i++) {
					if (this._eventHandlers[eventType][i] === handler) {
						this._eventHandlers[eventType].splice(i, 1);
					}
				}
				for(var i = 0, l = this._one_eventHandlers[eventType].length; i < l; i++) {
					if (this._one_eventHandlers[eventType][i] === handler) {
						this._one_eventHandlers[eventType].splice(i, 1);
					}
				}
				for(var i = 0, l = this._identified_eventHandlers[eventType].length; i < l; i++) {
					if (this._identified_eventHandlers[eventType][i] === handler) {
						this._identified_eventHandlers[even-tType].splice(i, 1);
					}
				}
			};

			/**
			 * These methods are only able to add "permanent" handlers : "one-shot" handlers must be added by another mean 
			 * @param {string} eventType
			 * @param {function} handler : the handler to add 
			 * @param {number} index : where to add
			 */
			EventEmitter.prototype.addEventListener = function(eventType, handler) {
				if (typeof this._eventHandlers[eventType] === 'undefined')
					return;
				this._eventHandlers[eventType].push(handler);
			};

			EventEmitter.prototype.addEventListenerAt = function(eventType, handler, index) {
				if (typeof this._eventHandlers[eventType] === 'undefined')
					return;
				this._eventHandlers[eventType].splice(index, 0, handler);
			};

			EventEmitter.prototype.removeEventListenerAt = function(eventType, index) {
				if (typeof this._eventHandlers[eventType] === 'undefined')
					return;
				if (typeof index === 'number' && index < this._eventHandlers[eventType].length) {
					this._eventHandlers[eventType].splice(index, 1);
				}
			};

			EventEmitter.prototype.clearEventListeners = function(eventType) {
				if (typeof this._eventHandlers[eventType] === 'undefined')
					return;
				this._eventHandlers[eventType].length = 0;
				this._one_eventHandlers[eventType].length = 0;
			};

			/**
			 * Generic Alias for this['on' + eventType].eventCall : this alias can be called rather than the eventCall property
			 * @param {string} eventType
			 * @param {any} payload 
			 */ 
			EventEmitter.prototype.trigger = function(eventType, payload, eventIdOrBubble, eventID) {
				if (!this._eventHandlers[eventType] && !this._one_eventHandlers[eventType] && !this._identified_eventHandlers[eventType]) {
					console.warn(this.objectType, 'Event : ' + eventType + ' triggered although it doesn\'t exist. Returning...');
					return;
				}
				
				var bubble = false;
				if (typeof eventIdOrBubble === 'boolean')
					bubble = eventIdOrBubble;
				else
					eventID = eventIdOrBubble;
				
				for(var i = 0, l = this._eventHandlers[eventType].length; i < l; i++) {
					if (typeof this._eventHandlers[eventType][i] === 'function')
						this._eventHandlers[eventType][i]({type : eventType, data : payload, bubble : bubble});
				}

				for(var i = this._one_eventHandlers[eventType].length - 1; i >= 0; i--) {
					if (typeof this._one_eventHandlers[eventType][i] === 'function') {
						this._one_eventHandlers[eventType][i]({type : eventType, data : payload, bubble : bubble});
						delete this._one_eventHandlers[eventType][i];
					}
				}
				
				var deleted = 0;
				if (typeof eventID !== 'undefined' && eventID !== 0) {
					for(var i = this._identified_eventHandlers[eventType].length - 1; i >= 0; i--) {
						if (typeof this._identified_eventHandlers[eventType][i] === 'undefined')
							deleted++;
						else if (eventID === this._identified_eventHandlers[eventType][i]['id']) {
							if (typeof this._identified_eventHandlers[eventType][i] === 'object') {
								this._identified_eventHandlers[eventType][i].f({type : eventType, data : payload, bubble : bubble});
								delete this._identified_eventHandlers[eventType][i];
							}
						}
					}
				}

				this._one_eventHandlers[eventType] = [];
				if (deleted === this._identified_eventHandlers[eventType].length)
					this._identified_eventHandlers[eventType] = [];
			};





















			/**
			 * An abstract class based on a pattern similar to the Command pattern
			 * 
			 * new Command(
					function() {					// action
						// code here //
						this.trigger('action');
					},
					function() {					// canAct
						
					},
					function() {					// undo
						
					}
				)
			 * 
			 */

			var Command = function(action, canAct, undo) {

				this.objectType = 'Command ' + action.name;
				this.canActQuery = false;
				this.action = action;
				this.canAct = canAct || null;
				this.undo = undo;
			};

			Command.prototype.objectType = 'Command';
			Command.prototype.constructor = Command;

			Command.prototype.act = function() {
				var self = this, canActResult, args = Array.prototype.slice.call(arguments);
				
				if (this.canAct === null) {
					this.action.apply(null, args);
					this.canActQuery = Promise.resolve();
				}
				else {
					this.canActQuery = this.canAct.apply(null, args); 
					if (typeof this.canActQuery === 'object' && this.canActQuery instanceof Promise) {
						this.canActQuery.then(
								function(queryResult) {
									args.push(queryResult);
									self.action.apply(null, args);
									return queryResult;
								},
								function(queryResult) {
									return queryResult;
								}
						);
					}
					else if (this.canActQuery) {
						this.canActQuery = Promise.resolve(this.canActQuery);
						this.action.apply(null, args);
					}
					else {
						this.canActQuery = Promise.reject(this.canActQuery);
					}
				}
				return this.canActQuery;
			};


			Command.__factory_name = 'Command';






			/**
			 * A constructor for STREAMS : streams may be instanciated by the implementation at "component" level (observableComponent automates the stream creation),
			 * 					or as standalones when a view needs a simple "internal" reference to a stream (may also be totally elsewhere)
			 */

			var Stream = function(name, value, hostedInterface, transform, lazy, component) {
				this._hostComponent = component;
				this.forward = true;
				this.name = name;
				this.lazy = lazy || false;
				this.hostedInterface = hostedInterface;
				this.transform = transform || (value => value);
				this.inverseTransform;
				this.subscriptions = [];
				
				this._value;
				this.dirty;
				if (typeof value !== 'undefined')
					this.value = (hostedInterface && typeof hostedInterface.getProp === 'function') ? hostedInterface.getProp(name) : value;
			};
			Stream.prototype = {};
			Stream.prototype.objectType = 'Stream';
			Stream.prototype.constructor = Stream;
			Object.defineProperty(Stream.prototype, 'value', {
				get : function() {
			//		console.log(this.lazy, this.dirty, this.transform);
					if (this.lazy && this.dirty) {
						this.lazyUpdate();
					}
					
					return this.get();
				},
				
				set : function(value) {
			//		console.log(value);
			//		console.log(this.hostedInterface);
					var val = this.transform(value);
			//		console.log(this.name, val);
					this.setAndUpdateConditional(val);
					this.set(val);
				}
			});

			Stream.prototype.acquireHostedInterface = function(hostedInterface) {
				hostedInterface.setProp(this.name, this._value);
				this.hostedInterface = hostedInterface;
			};

			Stream.prototype.get = function() {
				return this._value;
			};

			Stream.prototype.set = function(value) {
			//	if (this.name === 'className')
			//		console.log(this.forward, this.hostedInterface, value);
				if (this.forward && this.hostedInterface) {
					this.forward = false;
					this.hostedInterface.setProp(this.name, value);
					this.forward = true;
				}
				else
					this.forward = true;
			};

			/**
			 * @method setAndUpdateConditional
			 * 		Avoid infinite recursion when setting a prop on a custom element : 
			 * 			- when set from outside : update and set the prop on the custom element
			 *			- after updating a prop on a custom element : update only
			 * 			- don't update when set from downward (reflected stream shall only call "set")
			 */
			Stream.prototype.setAndUpdateConditional = function(value) {
				this._value = value;
				if (!this.lazy) {
					if (this.forward) {
						if (!this.transform)
							this.update();
						else if (typeof this.transform === 'function') {
							try {
								// try/catch as the transform function is likely to always be outside of our scope
								this._value = this.transform(this._value);
							}
							catch(e) {
								console.log('Exception thrown while the transform function was executing on self data: ', e, this._value);
								return;
							}
							this.update();
						}
					}
				}
				else {
					this.dirty = true;
				}
			};

			Stream.prototype.update = function() {
				this.subscriptions.forEach(function(subscription) {
					subscription.execute(this._value);
				}, this);
			};

			Stream.prototype.lazyUpdate = function() {
				if (typeof this.transform === 'function') {
					try {
						// try/catch as the transform function is likely to always be outside of our scope
						this._value = this.transform(this._value);
					}
					catch(e) {
						console.log('Exception thrown while the transform function was executing on self data: ', e, this._value);
						return;
					}
				}
				this.update();
				this.dirty = false;
			};

			Stream.prototype.react = function(prop, reflectedHost) {
				this.get = function() {
					return reflectedHost[prop];
				};
				this.subscribe(prop, reflectedHost);
			};

			/**
			 * reflect method  :
			 *	triggers the local update loop when the reflectedHost updates
			 *	AND
			 *		simply sets a reflection mecanism if the reflectedHost[prop] was a literal
			 *		OR
			 *		lazy "sets" the reflectedHost (no infinite recursion, but no change propagation neither on the host) and triggers the given event when the local stream updates
			 */ 
			Stream.prototype.reflect = function(prop, reflectedHost, transform, inverseTransform, event) {
				this._value = reflectedHost[prop];// ? reflectedHost[prop] : this._value;
				
				if (transform && this.transform)
					console.warn('Bad transform assignment : this.transform already exists');
				else if (!this.transform)
					this.transform = transform;
				
				var desc = Object.getOwnPropertyDescriptor(reflectedHost, prop);
				var stdDesc = Object.getOwnPropertyDescriptor(Stream.prototype, 'value');
				var propertyDescriptor = {
						get : stdDesc.get.bind(this),
						set : stdDesc.set.bind(this)
				};
				
				if (!desc || (!desc.get && desc.writable))
					Object.defineProperty(reflectedHost, prop, propertyDescriptor);
				
				else if (reflectedHost.streams && reflectedHost.streams[prop]) {
					this._value = reflectedHost.streams[prop].get(); // we need transformed value if lazy
					
					reflectedHost.streams[prop].subscribe(this);
					
			//		if (typeof reflectedHost.trigger === 'function')
			//			this.subscribe(reflectedHost.trigger.bind(reflectedHost, event));
					
					return this.subscribe(reflectedHost.streams[prop].set, null, inverseTransform);
				}
				return this._value;
			};

			/**
			 * subscribe method  :
			 *	instanciates and registers a new subscription, and returns it for the caller to define the refinement functions (filter & map)
			 */ 
			Stream.prototype.subscribe = function(handlerOrHost, prop, transform, inverseTransform) {
				if (!handlerOrHost || (typeof handlerOrHost !== 'function' && typeof handlerOrHost !== 'object')) {
					console.warn('Bad observable handlerOrHost assigned : handler type is ' + typeof handler + ' instead of "function or getter/setter"', 'StreamName ' + this.name);
					return;
				}
				else {
					if (typeof transform === 'function')
						this.transform = transform;
					return this.addSubscription(handlerOrHost, prop, inverseTransform);//.subscribe();
				}
			};

			/**
			 * filter method (syntactic sugar) :
			 *	instanciates and registers a new subscription, and returns it for the caller to define the refinement functions (map) and the effective subscribtion
			 */ 
			Stream.prototype.filter = function(handlerOrHost, prop, filterFunc) {
				return this.addSubscription(handlerOrHost, prop).filter(filterFunc);
			};

			/**
			 * map method (syntactic sugar) :
			 *	instanciates and registers a new subscription, and returns it for the caller to define the refinement functions (filter) and the effective subscribtion
			 */ 
			Stream.prototype.map = function(handlerOrHost, prop, mapFunc) {
				return this.addSubscription(handlerOrHost, prop).map(mapFunc);
			};

			Stream.prototype.addSubscription = function(handlerOrHost, prop, inverseTransform, subscribingComponent) {
				this.subscriptions.push(new Subscription(handlerOrHost, prop, this, inverseTransform));
				return this.subscriptions[this.subscriptions.length - 1];
			};

			Stream.prototype.unsubscribe = function(subscriptionOrStream) {

				for(let i = this.subscriptions.length - 1; i >= 0; i--) {
					if (this.subscriptions[i] === subscriptionOrStream || this.subscriptions[i].obj === subscriptionOrStream) {
						this.subscriptions.splice(i, 1);
					}
				}
			};







			/**
			 * An Abstract Class to be used by the Stream Ctor
			 * 
			 * returns chainable callback assignment functions on subscription
			 * e.g. : childModules make use of this mecanism when automatically subscribing to streams on their parent :
			 * 		this.streams[parentState].subscribe(candidate.hostElem, childState).filter(desc.filter).map(desc.map);
			 */
			var Subscription = function(subscriberObjOrHandler, subscriberProp, parent, inverseTransform) {
				this.subscriber = {
						prop : subscriberProp || null,
						obj : typeof subscriberObjOrHandler === 'object' ? subscriberObjOrHandler : null,
						cb : typeof subscriberObjOrHandler === 'function' ? subscriberObjOrHandler : function defaultCb() {return this._stream._value},
						inverseTransform : inverseTransform || function(value) {return value;},
						_subscription : this,
						_stream : parent,
						_parentHost : parent._hostComponent,
						host : null
				};
			//	typeof subscriberProp === 'string' ?
				this._stream = parent;
				this._subscriberUID = '';
				this._subscriberType = '';
				
				this._firstPass = true;
			};
			//
			//Subscription.prototype.subscribe = function(subscriberObjOrHandler, subscriberProp, inverseTransform) {
			////	if (typeof subscriberObjOrHandler !== 'function' && typeof subscriberObjOrHandler !== 'object' && !this.subscriber.obj && !this.subscriber.cb) {
			////		console.warn('Bad observableHandler given : handler type is ' + typeof subscriberObjOrHandler + ' instead of "function or object"', 'StreamName ' + this._parent.name);
			////		return;
			////	}
			//	if (typeof subscriberObjOrHandler === 'object')
			//		this.subscriber.obj = subscriberObjOrHandler;
			//	else if (typeof subscriberObjOrHandler === 'function')
			//		this.subscriber.cb = subscriberObjOrHandler;
			//	
			//	if (subscriberProp)
			//		this.subscriber.prop = subscriberProp;
			//	
			//	return this;
			//}

			Subscription.prototype.unsubscribe = function() {
				this._stream.unsubscribe(this);
			};

			Subscription.prototype.filter = function(filterFunc, hostComponent) {
				if (!filterFunc)
					return this;
					
				// when cbOnly, we bind the cb on the component
				// but when reacting from a streamon a stream
				// we only have a ref on the parent stream
				// => we need to acquire a ref on the component somehow
				if (!this.subscriber.host)
					this.subscriber.host = hostComponent;

				// Optimize by breaking the reference : not sure it shall be faster (at least there is only one closure, which is internal to "this" : benchmark shows a slight improvement, as timings are identical although there is an overhaed with defineProperty)
				var f = new Function('value', 'return (' + filterFunc.toString() + ').call(this.subscriber.host, value) === true ? true : false;');
				Object.defineProperty(this, 'filter', {
					value : f,
					enumerable : true
				});
			//	this.filter = filterFunc;
				return this;
			};

			Subscription.prototype.map = function(mapFunc, hostComponent) {
				if (!mapFunc)
					return this;
					
				// when cbOnly, we bind the cb on the component
				// but when reacting from a streamon a stream
				// we only have a ref on the parent stream
				// => we need to acquire a ref on the component somehow
				if (!this.subscriber.host)
					this.subscriber.host = hostComponent;

				// Optimize by breaking the reference : not sure it shall be faster (at least there is only one closure, which is internal to "this" : benchmark shows a slight improvement, as timings are identical although there is an overhaed with defineProperty)
				var f = new Function('value', 'return (' + mapFunc.toString() + ').call(this.subscriber.host, value);');
				Object.defineProperty(this, 'map', {
					value : f,
					enumerable : true
				});
			//	this.map = mapFunc;
				return this;
			};

			Subscription.prototype.reverse = function(inverseTransform) {
				if(typeof inverseTransform !== 'function')
					return this;

				// Optimize by breaking the reference : not sure it shall be faster (at least there is only one closure, which is internal to "this" : benchmark needed)
				this.subscriber.inverseTransform = new Function('return (' + inverseTransform.toString() + ').apply(null, arguments);');
			//	this.subscriber.inverseTransform = inverseTransform;
				return this;
			};

			Object.defineProperty(Subscription.prototype, 'execute', {
				value : function(value) {
			//		console.log('%c %s %c %s', 'color:coral', 'Subscription "execute"', 'color:firebrick', 'Stream : ' + this._stream.name, 'value', value);
					var flag = true, val, desc;
					if (value !== undefined) {
						if (this.hasOwnProperty('filter'))
							flag = this.filter(value);
						if (flag && this.hasOwnProperty('map'))
							val = this.map(value);
						else if (flag)
							val = value;
						else
							return;
			//			console.log('val', this._stream.name, val);
						
						if (this.subscriber.obj !== null && this.subscriber.prop !== null)
							this.subscriber.obj[this.subscriber.prop] = val;
						// second case shall only be reached if no prop is given : on a "reflected" subscription by a child component
						else if (this.subscriber.obj && (desc = Object.getOwnPropertyDescriptor(this.subscriber.obj, 'value')) && typeof desc.set === 'function')
							this.subscriber.obj.value = val;
						else if (this.subscriber.obj === null)
							this.subscriber.cb(this.subscriber.inverseTransform(val)); // inverseTransform may be a transparent function (is not when reflecting : we must not reflect the child state "as is" : the parent value may be "mapped requested" by the child)   
					}
					this._firstPass = false;
				},
				enumerable : true
			});

			Subscription.prototype.unAnonymize = function(subscriberUID, subscriberType) {
				this._subscriberUID = subscriberUID;
				this._subscriberType = subscriberType;
				
				return this;
			};

			Subscription.prototype.registerTransition = function(parent_UID) {
				Registries.stateMachineCache.registerTransition(
					this._subscriberUID,
					this._subscriberType,
					{
						from : this._stream.name,
						to : this.subscriber.prop,
						map : this.map,
						filter : this.filter,
						subscribe : this.subscriber.cb
					},
					parent_UID
				);
			};











			/**
			 * A constructor for STREAMS more specifically used by providers objects
			 */

			var LazyResettableColdStream = function(name, transform, value) {

				this.forward = true;
				this.name = name;
				this.transform = transform || (value => value);
				this.inverseTransform;
				this.subscriptions = [];
				
				this._value;
				this._previousValues = [];
				this.lazy = true;
				this.dirty;
				this.lastIndexProvided = -1;
				if (typeof value !== 'undefined')
					this.value = value;
			};
			LazyResettableColdStream.prototype = Object.create(Stream.prototype);
			LazyResettableColdStream.prototype.objectType = 'LazyResettableColdStream';
			LazyResettableColdStream.prototype.constructor = LazyResettableColdStream;
			Object.defineProperty(LazyResettableColdStream.prototype, 'value', {
				get : function() {
					
					if (this.lazy && this.dirty) {
						this.lazyUpdate();
					}
					
					return this.get();
				},
				
				set : function(value) {
					var val = this.transform(value);
					this.setAndUpdateConditional(val);
					this.forward = true;
				}
			});

			/**
			 * @method setAndUpdateConditional
			 * 		Avoid infinite recursion when setting a prop on a custom element : 
			 * 			- when set from outside : update and set the prop on the custom element
			 *			- after updating a prop on a custom element : update only
			 * 			- don't update when set from downward (reflected stream shall only call "set")
			 */
			LazyResettableColdStream.prototype.setAndUpdateConditional = function(value) {
			//	console.trace(value);
				this._value = value;
				this._previousValues.push(value);
				
				if (this.forward && !this.lazy) {
					if (!this.transform) {
						this.update();
					}
					else if (typeof this.transform === 'function') {
						try {
							// try/catch as the transform function is likely to always be outside of our scope
							this._value = this.transform(this._value);
							this._previousValues.splice(this._previousValues.length - 1, 1, this._value);
						}
						catch(e) {
							console.log('Exception thrown while the transform function was executing on self data: ', e, this._value);
							return;
						}
						this.update();
					}
				}
				else {
					this.dirty = true;
				}
			};

			LazyResettableColdStream.prototype.update = function() {
				
				this.subscriptions.forEach(function(subscription) {
					subscription.execute(this._previousValues);
			//		console.log(this._previousValues[0]);
				}, this);
				this.lastIndexProvided = this._previousValues.length - 1;
			};

			LazyResettableColdStream.prototype.lazyUpdate = function() {
			//	if (typeof this.transform === 'function') {
			//		try {
			//			// try/catch as the transform function is likely to always be outside of our scope
			//			this._value = this.transform(this._value);
			//			this._previousValues.splice(this._previousValues.length - 1, 1, this._value);
			//		}
			//		catch(e) {
			//			console.log('Exception thrown while the transform function was executing on self data: ', e, this._value);
			//			return;
			//		}
			//	}
				this.update();
				this.dirty = false;
			};

			LazyResettableColdStream.prototype.addSubscription = function(handlerOrHost, prop, inverseTransform) {
			//	console.log(handlerOrHost, prop);
				this.subscriptions.push(new ColdSubscription(handlerOrHost, prop, this, inverseTransform));
				return this.subscriptions[this.subscriptions.length - 1];
			};














			/**
			 * An Abstract Class to be used by the Stream Ctor
			 * 
			 * returns chainable callback assignment functions on subscription
			 * e.g. : childModules make use of this mecanism when automatically subscribing to streams on their parent :
			 * 		this.streams[parentState].subscribe(candidate.hostElem, childState).filter(desc.filter).map(desc.map);
			 */
			var ColdSubscription = function(subscriberObjOrHandler, subscriberProp, parent, inverseTransform) {
			//	console.log(parent.lastIndexProvided);
				this.subscriber = {
					currentIndex : parent.lastIndexProvided,
					prop : subscriberProp || null,
					obj : typeof subscriberObjOrHandler === 'object' ? subscriberObjOrHandler : null,
					cb : typeof subscriberObjOrHandler === 'function' ? subscriberObjOrHandler : function defaultCb(val) {return val},
					inverseTransform : inverseTransform || function(value) {return value;},
					_subscription : this,
					_stream : parent
				};
			//	typeof subscriberProp === 'string' ?
				this._stream = parent;
				this._firstPass = true;
			};
			ColdSubscription.prototype = Object.create(Subscription.prototype);
			ColdSubscription.prototype.objectType = 'ColdSubscription';

			Object.defineProperty(ColdSubscription.prototype, 'execute', {
				value : function(valuesFromStack) {
			//		console.log(valuesFromStack);
					valuesFromStack.forEach(function(val, key) {
						if (key > this.subscriber.currentIndex) {
							this.executeSingle(val);
							this.subscriber.currentIndex++;
			//				console.log(this.subscriber.currentIndex);
						}
					}, this);
				}
			});

			Object.defineProperty(ColdSubscription.prototype, 'executeSingle', {
				value : function(value) {
			//		console.log('%c %s %c %s', 'color:coral', 'Subscription "execute"', 'color:firebrick', 'Stream : ' + this._stream.name, 'value:', value);
					var flag = true, val, desc;
					if (value !== undefined) {
						if (this.hasOwnProperty('filter'))
							flag = this.filter(value);
						if (flag && this.hasOwnProperty('map'))
							val = this.map(value);
						else if (flag)
							val = value;
						else
							return;
			//			console.log('val', this._stream.name, val);
						
			//			console.log(this.subscriber.obj !== null && this.subscriber.prop !== null);
						if (this.subscriber.obj !== null && this.subscriber.prop !== null)
							this.subscriber.obj[this.subscriber.prop] = val;
						// second case shall only be reached if no prop is given : on a "reflected" subscription by a child component
						else if (this.subscriber.obj && (desc = Object.getOwnPropertyDescriptor(this.subscriber.obj, 'value')) && typeof desc.set === 'function')
							this.subscriber.obj.value = val;
						else if (this.subscriber.obj === null)
							this.subscriber.cb(this.subscriber.inverseTransform(val)); // inverseTransform may be a transparent function (is not when reflecting : we must not reflect the child state "as is" : the parent value may be "mapped requested" by the child)   
					}
					this._firstPass = false;
				},
				enumerable : true
			});

			Object.defineProperty(ColdSubscription.prototype, 'setPointerToStart', {
				value : function() {
					this.subscriber.currentIndex = 0;
				}
			});

























			/**
			 * A constructor for NUMBERED STREAMS : numbered streams should be part of a StreamPool
			 */

			var NumberedStream = function(key, component, name, value) {
				this._key = key;
				this._parent = component;
				Stream.call(this, name, value);
			};
			NumberedStream.prototype = Object.create(Stream.prototype);
			NumberedStream.prototype.objectType = 'NumberedStream';
			NumberedStream.prototype.constructor = NumberedStream;

			Object.defineProperty(NumberedStream.prototype, 'value', {
				get : function() {
					if (this.lazy) {
						this.dirty = false;
					}
					
					return this.get();
				},
				
				set : function(value) {
					this.setAndUpdateConditional(value);
					this.set(value);
				}
			});

			NumberedStream.prototype.get = function() {
				return this._value;
			};

			NumberedStream.prototype.set = function(value) {
				if (this.forward && this.hostedInterface) {
					this.forward = false;
			//		this.hostedInterface.setProp(this.name, value);
					this.forward = true;
				}
				else
					this.forward = true;
			};

			/**
			 * @method setAndUpdateConditional
			 * 		Avoid infinite recursion when setting a prop on a custom element : 
			 * 			- when set from outside : update and set the prop on the custom element
			 *			- after updating a prop on a custom element : update only
			 * 			- don't update when set from downward (reflected stream shall only call "set")
			 */
			NumberedStream.prototype.setAndUpdateConditional = function(value) {
				this._value = value;
				if (!this.lazy) {
					if (this.forward) {
						this.update();
					}
				}
				else {
					this.dirty = true;
				}
			};

			/**
			 * 
			 */
			NumberedStream.prototype.remove = function() {
				if (this._parent)
					return this._parent.removeChild(this._key);
			};













			/**
			 * A constructor for STREAMS POOL : numbered streams should be part of a StreamPool
			 */

			var StreamPool = function(component) {
				this._parent = component;
				this._streamsArray  = [];
			};
			StreamPool.prototype = Object.create(EventEmitter.prototype);
			StreamPool.prototype.objectType = 'StreamPool';
			StreamPool.prototype.constructor = StreamPool;

			/**
			 * @param {number} idx : the _key of the member Stream
			 */
			StreamPool.prototype.getFirst = function() {
				return this._streamsArray[0];
			};

			/**
			 * @param {number} idx : the _key of the member Stream
			 */
			StreamPool.prototype.getStreamAt = function(idx) {
				return this._streamsArray[idx];
			};

			/**
			 * @param {number} idx : the _key of the member Stream
			 */
			StreamPool.prototype.getLast = function() {
				return this._streamsArray[this._streamsArray.length - 1];
			};

			/**
			 * @param {object} child : an instance of another object
			 */
			StreamPool.prototype.pushChild = function(child) {
				child._parent = this;
				child._key = this._streamsArray.length;
				this._streamsArray.push(child);
			};

			/**
			 * @param {object} child : an instance of another object
			 * @param {number} atIndex : the required index to splice at
			 */
			StreamPool.prototype.addChildAt = function(child, atIndex) {
				child._parent = this;
				child._key = atIndex;
				this._streamsArray.splice(atIndex, 0, child);
				this.generateKeys(atIndex);
			};

			/**
			 * 
			 */
			StreamPool.prototype.removeChild = function(childKey) {
				var removed = this._streamsArray.splice(childKey, 1);
				(childKey < this._streamsArray.length && this.generateKeys(childKey));
				return removed;
			};

			/**
			 * 
			 */
			StreamPool.prototype.removeLastChild = function() {
				var removed = this._streamsArray.pop();
				return removed;
			};

			/**
			 * @param {number} atIndex : the required index to clear at
			 */
			StreamPool.prototype.removeChildAt = function(atIndex) {
				var removedChild = this._streamsArray.splice(atIndex, 1);
				this.generateKeys(atIndex);
			};

			/**
			 * 
			 */
			StreamPool.prototype.removeAllChildren = function() {
				this._streamsArray.length = 0;
				return true;
			};

			/**
			 * @param {number} atIndex : the first _key we need to invalidate
			 */
			StreamPool.prototype.generateKeys = function(atIndex) {
				for (let i = atIndex || 0, l = this._streamsArray.length; i < l; i++) {
					this._streamsArray[i]._key = i;
				}
			};
















			/**
			 * @constructor SavableStore
			 * @param {Function} onUpdateCallback
			 * @param {Array<String>} valueNamesList
			 */
			var SavableStore = function(onUpdateCallback, valueNamesList = []) {
				this.onUpdateCallback = onUpdateCallback;
				this.valueNames = Array();
				this.values = Array();
				if (valueNamesList && valueNamesList.length) {
					valueNamesList.forEach(function(valueName) {
						this.addValue(valueName);
					}, this);
				}
			};

			/**
			 * @method addValue
			 * @param {String} valueName
			 */
			SavableStore.prototype.addValue = function(valueName) {
				this.valueNames.push(valueName);
				this.values.push(new TemplateFactory.PropModel({[valueName] : undefined}));
			};

			/**
			 * @method removeValue
			 * @param {String} valueName
			 */
			SavableStore.prototype.removeValue = function(valueName) {
				// FIXME: we should make use of the valueNames index
				var valuePos = this.valueNames.indexOf(valueName);
				this.values.splice(valuePos, 1);
				this.valueNames.splice(valuePos, 1);
			};

			SavableStore.prototype.clearValues = function() {
				this.values.length = 0;
			};

			/**
			 * @method update
			 * @param {String} valueName
			 * @param {String|Boolean} value
			 */
			SavableStore.prototype.update = function(valueName, value) {
				// FIXME: we should make use of the valueNames index
				var valueObj = this.values[this.valueNames.indexOf(valueName)];
				valueObj[valueName] = value;
				
				/** @type {{[key : String] : String|Boolean}} */
				let returnValue = {};
				this.valueNames.forEach(function(name, key) {
					returnValue[name] = this.values[key][name];
				}, this);
				this.onUpdateCallback(JSON.stringify(returnValue));
			};

			SavableStore.prototype.empty = function() {
				this.valueNames.forEach(function(valueName, key) {
					this.values[key][valueName] = undefined;
				}, this);
			};


























			/**
			 * An interface to be implemented by a module based on a worker
			 */
			var WorkerInterface = function(workerName, stringifiedWorker, url) {
				EventEmitter.call(this);
				this.objectType = workerName || 'WorkerInterface';
				this._responseHandler = {};
				this.createEvent('message');
				this.name = workerName;
				
				var blob = new Blob([stringifiedWorker /*https://www.npmjs.com/package/stringify*/], {type: 'application/javascript'});
				var blobURL = window.URL.createObjectURL(blob);
				url = typeof blobURL === 'string' ? blobURL : url;
				this.worker = new Worker(url);
				this.worker.onmessage = this.handleResponse.bind(this); 
			};
			WorkerInterface.prototype = Object.create(EventEmitter.prototype);
			WorkerInterface.prototype.objectType = 'WorkerInterface';
			WorkerInterface.prototype.constructor = WorkerInterface;

			WorkerInterface.prototype.postMessage = function(action, e) { 	// e.data = File Object (blob)
				// syntax [(messageContent:any)arg0, (transferableObjectsArray:[transferable, transferable, etc.])arg1]

				if (typeof e === 'undefined')
					this.worker.postMessage.call(this.worker, [action]);
				else if (e.data instanceof ArrayBuffer)
					this.worker.postMessage.call(this.worker, [action, e.data], [e.data]);
				else
					this.worker.postMessage.call(this.worker, [action, e.data]);
			};

			WorkerInterface.prototype.addResponseHandler = function(handlerName, handler) {
				if (typeof handler === 'function')
					this._responseHandler[handlerName] = handler;
			};

			WorkerInterface.prototype.handleResponse = function(response) {
			//	console.log(response);
				
				if (!this.handleError(response))
					return;
				
				if (typeof this._responseHandler[response.data[0]] === 'function') {
					if (response.data.length > 1) {
						var args = Array.prototype.slice.call(response.data, 1);
						this._responseHandler[response.data[0]].apply(this, args);
						this.trigger('message', response.data, ['string', 'number'].indexOf(typeof args[0]) !== -1 ? args[0] : ''); // only pass strings or numbers as eventID
					}
					else {
						this._responseHandler[response.data[0]]();
						this.trigger('message', response.data);
					}
				}
				
			};

			WorkerInterface.prototype.handleError = function(response) {
				if (response.data.constructor !== Array) {
					console.log([this.name + ' error generic', '']);
					return;
				}

				switch (response.data[0]) {
					case 'error' :
					case 'warning' :
						console.log(this.name + ' ' + response.data[0], response.data[1]);
						return;
				}
				
				return true;
			};

			WorkerInterface.__factory_name = 'WorkerInterface';


























			/**
			 * @singleton PixiStage
			 */
			var PixiStage = {
				 
			};

			PixiStage.renderer = null;
			PixiStage.stage = null;

			PixiStage.createRenderer = function() {
				this.renderer = new PIXI.CanvasRenderer(window.innerWidth, window.innerHeight, {transparent:true, antialias : true, autoResize : true});
			};

			PixiStage.createStage = function() {
				this.stage = new PIXI.Container();
				
				TweenMax.ticker.addEventListener("tick", function() {
					renderer.render(stage);
				});
			};

			PixiStage.getStage = function() {
				return this.stage;
			};

			PixiStage.addChild = function(shape) {
				this.stage.addChild(shape);
			};




			/*
			layerwidth = paddingLeft + marginLeft + nodeWidth
			layerHeight = paddingTop + marginTop + nodeHeigth

			position = {
				x : this.getParentView.currentAPI.getOffset().x + layerWidth,
				y : this.getParentView.currentAPI.getOffset().y + layerHeigth * this._parent._key
			}

					=> extrapolate radial pos from domain = xMax - xMin, alpha = (x - xMin) * 2PI / domain, x = cos(alpha), y = sin(alpha)
					
			getHandlePos is a pure function(entering||exiting, nodeSize, _Key)

				=> could we use some lib to have complete DOM -> xy conversion ?
					=> gl-html.js
			*/







			/**
			 * @constructor PixiView
			 */
			var PixiViewAPI = function(def) {
				
				this.nodeName = def.nodeName;
				this.templateNodeName = def.templateNodeName;
				
				this.hostElem;
				this.rootElem;
				this.hostedInterface = {
					setProp : PixiViewAPI.hostedInterface.setProp.bind(this),
					getProp : PixiViewAPI.hostedInterface.getProp.bind(this)
				};
				this.presenceAsAProp = 'flex';
				
				this.objectType = 'PixiViewAPI';
			};
			PixiViewAPI.prototype = Object.create(EventEmitter.prototype);
			PixiViewAPI.prototype.objectType = 'PixiViewAPI';
			PixiViewAPI.prototype.constructor = PixiViewAPI;

			PixiViewAPI.hostedInterface = {
				setProp : function(propName, value) {
			//		this.hostElem[propName] = value;
				},
				getProp : function(propName, value) {
			//		return this.hostElem[propName];
				}
			};


			PixiViewAPI.prototype.setPresence = function(bool) {
				this.hostElem.style.display = bool ? this.presenceAsAProp : 'none';
			};

			PixiViewAPI.prototype.addEventListener = function(eventName, handler) {
				this.hostElem.addEventListener(eventName, handler);
			};

			/**
			 * 
			 */
			PixiViewAPI.prototype.setMasterNode = function(node) {
				this.hostElem = node;
				this.rootElem = node.shadowRoot;
			};

			/**
			 * 
			 */
			PixiViewAPI.prototype.getMasterNode = function() {
				return this.hostElem;
			};

			/**
			 * 
			 */
			PixiViewAPI.prototype.getWrappingNode = function() {
				return this.rootElem || this.hostElem;
			};

			/**
			 * 
			 */
			PixiViewAPI.prototype.isTextInput = function() {
				return this.nodeName.toUpperCase() === 'INPUT';
			};

			/**
			 * 
			 */
			PixiViewAPI.prototype.getLowerIndexChildNode = function() {
				try {
					return this.getWrappingNode().children[atIndex - 1];
				}
				catch(e) {
					return false;
				}
			};

			/**
			 * 
			 */
			PixiViewAPI.prototype.setContentNoFail = function(value) {
				if (this.isTextInput())
					this.hostElem.value = value;
				else
					this.setNodeContent(value);
			};

			/**
			 * 
			 */
			PixiViewAPI.prototype.setTextContent = function(text) {
				this.getWrappingNode().textContent = text;
			};

			/**
			 * 
			 */
			PixiViewAPI.prototype.setNodeContent = function(contentAsString) {
				this.getWrappingNode().innerHTML = contentAsString;
			};

			/**
			 * 
			 */
			PixiViewAPI.prototype.appendTextNode = function(text) {
				var elem = document.createElement('span');
				elem.innerHTML = text;
				this.getWrappingNode().appendChild(elem);
			};

			/**
			 * @param {Component} childNode
			 * @param {number} atIndex
			 */
			PixiViewAPI.prototype.addChildNodeAt = function(childNode, atIndex) {
				var lowerIndexChild;
				if (lowerIndexChild = this.getLowerIndexChildNode(atIndex))
					lowerIndexChild.insertAdjacentElement('afterend', childNode);
				else
					this.getWrappingNode().appendChild(childNode);
			};

			/**
			 * @abstract
			 */
			PixiViewAPI.prototype.empty = function() {
				this.getWrappingNode().innerHTML = null;
				return true;
			};

			/**
			 * @param {array[string]} contentAsArray
			 * @param {string} templateNodeName
			 */
			PixiViewAPI.prototype.getMultilineContent = function(contentAsArray) {
				return this.getFragmentFromContent(contentAsArray, this.templateNodeName);
			};

			/**
			 * @param {array[string]} contentAsArray
			 * @param {string} templateNodeName
			 */
			PixiViewAPI.prototype.getFragmentFromContent = function(contentAsArray, templateNodeName) {

				var fragment = document.createDocumentFragment(), elem;
				contentAsArray.forEach(function(val) {
					var elem = document.createElement(templateNodeName);
					elem.id = 'targetSubViewElem-' + TemplateFactory.UIDGenerator.newUID();
					if (val instanceof HTMLElement) {
						elem.appendChild(val);
						fragment.appendChild(elem);
						return;
					}
					
					elem.innerHTML = val;
					fragment.appendChild(elem);
				}, this);
				return fragment;
			};

			PixiViewAPI.prototype.setContentFromArray = function(contentAsArray) {
				this.empty();
				this.getWrappingNode().appendChild(this.getMultilineContent(contentAsArray));
			};






















			/**
			 * @constructor DOMView
			 */
			var DOMViewAPI = function(def) {
				this.isShadowHost = def.isCustomElem;
				this.nodeName = def.nodeName;
				this.templateNodeName = def.templateNodeName;
				
				this.hostElem;
				this.rootElem;
				this.hostedInterface = {
					setProp : DOMViewAPI.hostedInterface.setProp.bind(this),
					getProp : DOMViewAPI.hostedInterface.getProp.bind(this)
				};
				this.presenceAsAProp = 'flex';
				
				this.objectType = 'DOMViewAPI';
			};
			DOMViewAPI.prototype = Object.create(EventEmitter.prototype);
			DOMViewAPI.prototype.objectType = 'DOMViewAPI';
			DOMViewAPI.prototype.constructor = DOMViewAPI;

			DOMViewAPI.hostedInterface = {
				setProp : function(propName, value) {
					this.hostElem[propName] = value;
			//		console.log(this.hostElem[propName]);
				},
				getProp : function(propName, value) {
					return this.hostElem[propName];
				}
			};


			DOMViewAPI.prototype.setPresence = function(bool) {
				this.hostElem.style.display = bool ? this.presenceAsAProp : 'none';
			};

			DOMViewAPI.prototype.addEventListener = function(eventName, handler) {
				this.hostElem.addEventListener(eventName, handler);
			};

			/**
			 * 
			 */
			DOMViewAPI.prototype.setMasterNode = function(node) {
				this.hostElem = node;
				this.rootElem = node.shadowRoot;
			};

			/**
			 * 
			 */
			DOMViewAPI.prototype.getMasterNode = function() {
				return this.hostElem;
			};

			/**
			 * 
			 */
			DOMViewAPI.prototype.getWrappingNode = function() {
				return this.rootElem || this.hostElem;
			};

			/**
			 * 
			 */
			DOMViewAPI.prototype.isTextInput = function() {
				return this.nodeName.toUpperCase() === 'INPUT' || this.nodeName.toUpperCase() === 'TEXTAREA';
			};

			/**
			 * 
			 */
			DOMViewAPI.prototype.getTextInputValue = function() {
				return this.getMasterNode().value;
			};

			/**
			 * 
			 */
			DOMViewAPI.prototype.getLowerIndexChildNode = function(atIndex) {
				try {
					return this.getWrappingNode().children[atIndex - 1];
				}
				catch(e) {
					return false;
				}
			};

			/**
			 * 
			 */
			DOMViewAPI.prototype.getTextContent = function() {
				// It may seem weird to return all the texts ignoring the real HTMLElements
				// Let'st try this for now...
				
				var realTextContent = '';
				this.getWrappingNode().childNodes.forEach(function(elem) {
					if (elem instanceof Text)
						realTextContent += elem.wholeText;
				});
				return realTextContent;
			};

			/**
			 * 
			 */
			DOMViewAPI.prototype.setContentNoFail = function(value) {
				if (this.isTextInput())
					this.hostElem.value = value;
				else
					this.setNodeContent(value);
			};

			/**
			 * 
			 */
			DOMViewAPI.prototype.getContentNoFail = function(value) {
				if (this.isTextInput())
					return this.hostElem.value;
				else
					return this.getTextContent(); 
			};

			/**
			 * 
			 */
			DOMViewAPI.prototype.setTextContent = function(text) {
				this.getWrappingNode().textContent = text;
			};

			/**
			 * 
			 */
			DOMViewAPI.prototype.setNodeContent = function(contentAsString) {
				this.getWrappingNode().innerHTML = contentAsString;
			};

			/**
			 * 
			 */
			DOMViewAPI.prototype.appendTextNode = function(text) {
				var elem = document.createTextNode(text);
				this.getWrappingNode().appendChild(elem);
			};

			/**
			 * @param {Component} childNode
			 * @param {number} atIndex
			 */
			DOMViewAPI.prototype.addChildNodeAt = function(childNode, atIndex) {
				var lowerIndexChild;
				if ((lowerIndexChild = this.getLowerIndexChildNode(atIndex)))
					lowerIndexChild.insertAdjacentElement('afterend', childNode);
				else
					this.getWrappingNode().appendChild(childNode);
			};

			/**
			 * @abstract
			 */
			DOMViewAPI.prototype.empty = function() {
				this.getWrappingNode().innerHTML = null;
				return true;
			};

			/**
			 * @param {array[string]} contentAsArray
			 * @param {string} templateNodeName
			 */
			DOMViewAPI.prototype.getMultilineContent = function(contentAsArray) {
				return this.getFragmentFromContent(contentAsArray, this.templateNodeName);
			};

			/**
			 * @param {array[string]} contentAsArray
			 * @param {string} templateNodeName
			 */
			DOMViewAPI.prototype.getFragmentFromContent = function(contentAsArray, templateNodeName) {

				var fragment = document.createDocumentFragment(), elem;
				contentAsArray.forEach(function(val) {
					var elem = document.createElement(templateNodeName);
					elem.id = 'targetSubViewElem-' + TemplateFactory.UIDGenerator.newUID();
					if (val instanceof HTMLElement) {
						elem.appendChild(val);
						fragment.appendChild(elem);
						return;
					}
					
					elem.innerHTML = val;
					fragment.appendChild(elem);
				}, this);
				return fragment;
			};

			DOMViewAPI.prototype.setContentFromArray = function(contentAsArray) {
				this.empty();
				this.getWrappingNode().appendChild(this.getMultilineContent(contentAsArray));
			};

			DOMViewAPI.prototype.updateBGColor = function(color) {
				this.getMasterNode().style.backgroundColor = color;
			};

			/**
			 * These methods are implemented as a reminder and a potentially needed fallback,
			 * but in most cases of hiding/showing, we should prefer the reactive states-based mechanism:
			 * states : [{hidden : 'hidden'}} will be automagically reflected on the DOM node
			 */
			DOMViewAPI.prototype.hide = function() {
				this.getMasterNode().hidden = 'hidden';	
			};

			DOMViewAPI.prototype.show = function() {
				this.getMasterNode().hidden = null;	
			};























			/**
			 * @constructor ComponentView
			 */
			var ComponentView = function(definition, parentView, parent, isChildOfRoot) {
			//	console.error(definition);
				var def = (definition.getHostDef && definition.getHostDef()) || definition;
			//	if (definition.getHostDef() && definition.getHostDef().nodeName === 'smart-select')
			//		console.log(def);
				this._defUID = def.UID;
				this.isCustomElem = def.isCustomElem;
				this._sWrapperUID = def.sWrapper ? def.sWrapper.getName() : null;
				// TODO: styleHook.s refers to the AbstractStylesheet => change that, it's not at all explicit
				this.styleHook;
			//	console.log(def);
				this.sOverride = def.sOverride;
				
				this.objectType = 'ComponentView';
				if (!def.nodeName) {
					console.error('no nodeName given to a componentView : returning...', def);
					return;
				}
				else if (!(parentView instanceof ComponentView) && def.nodeName !== 'app-root') {
			//		console.log(parentView, ComponentView);
					console.warn('no parentView given to a componentView : nodeName is', def.nodeName, '& type is', def.type);
				}
					
				this.API = this.currentViewAPI = new DOMViewAPI(def);
				this.section = def.section;
				
				if (!nodesRegistry.getItem(this._defUID))
					nodesRegistry.setItem(this._defUID, (new CachedTypes.CachedNode(def.nodeName, def.isCustomElem)));
				
				if (!Registries.caches.attributes.getItem(this._defUID))
					Registries.caches.attributes.setItem(this._defUID, def.attributes);
					
				viewsRegistry.push(this);

				if (def !== definition) {
					this._parent = parent;
					this.targetSubView = null;
			//		if (def.sOverride) {
			//			
			//		}
					this.styleHook = new SWrapperInViewManipulator(this);
					
			//		if (definition.getHostDef() && definition.getHostDef().type === 'Fieldset')
			//			console.log(definition);
					this.subViewsHolder;
					// console.log('componentView', definition.members.length)
					if ((definition.subSections.length && definition.subSections[0] !== null) || definition.members.length) {
						this.subViewsHolder = new ComponentSubViewsHolder(definition, this);
						// this shall be retried after calling the hooks, as the interfaces may have added subViews
						this.getTargetSubView(def);
					}
					else
						this.subViewsHolder = new ComponentSubViewsHolder(null, this);
				}
				
				var hadParentView = this.parentView = parentView instanceof ComponentView ? parentView : null;
				if (this.parentView && !isChildOfRoot) {
					this.parentView = this.getEffectiveParentView();
			//		console.log('hadParentView', parentView, this.parentView);
				}
					
				if (hadParentView && !this.parentView)
					console.warn('Lost parentView => probable section number missing in definition obj :', def.nodeName);
			};
			ComponentView.prototype = {};
			ComponentView.prototype.objectType = 'ComponentView';
			ComponentView.prototype.constructor = ComponentView;

			/**
			 * Main helper to access the effective implementation of the View
			 */
			ComponentView.prototype.callCurrentViewAPI = function(methodName, ...args) {
				return this.currentViewAPI[methodName](...args);
			};

			/**
			 * @abstract
			 * HELPER : => when appending a child, should we append to rootNode or to a subSection ?
			 * 
			 */
			ComponentView.prototype.getEffectiveParentView = function() {
				return (this.parentView.subViewsHolder && this.parentView.subViewsHolder.subViews.length) 
								? this.parentView.subViewsHolder.subViews[this.section]
								: this.parentView;
			};

			ComponentView.prototype.getTargetSubView = function(def) {
				this.targetSubView = (def.targetSlotIndex !== null && this.subViewsHolder.memberViews.length > def.targetSlotIndex)
					? this.subViewsHolder.memberAt(def.targetSlotIndex)
					: null;	
			};

			/**
			 * 
			 * TODO: remove the this alias after having checked the historical code
			 * (this method has become "getWrappingNode")
			 */
			ComponentView.prototype.getRoot = function() {
				return this.getWrappingNode();
			};

			/**
			 * Shorthand method on the currentViewAPI
			 */
			ComponentView.prototype.getMasterNode = function() {
				return this.callCurrentViewAPI('getMasterNode');
			};

			/**
			 * Shorthand method on the currentViewAPI
			 */
			ComponentView.prototype.getWrappingNode = function() {
				return this.callCurrentViewAPI('getWrappingNode');
			};

			/**
			 * These shorthands methods are only useful when we explicitly need
			 * to update the -stylesheet- associated with a (shadowed, obviously) web-component
			 */
			ComponentView.prototype.hide = function() {
				if (this.view.styleHook.s)
					this.styleHook.s.updateRule({visibility : 'hidden'}, ':host');
				else
					this.currentViewAPI.hide();
			};
			ComponentView.prototype.show = function() {
				if (this.view.styleHook.s)
					this.styleHook.s.updateRule({visibility : 'visible'}, ':host');
				else
					this.currentViewAPI.show();
			};


			/**
			 * @param {boolean | innerEvent} boolOrEvent
			 * might be direclty passed an event obj (a "framework event-type")
			 */
			ComponentView.prototype.setPresence = function(boolOrEvent) {
				var bool;
				if (typeof boolOrEvent === 'object' && typeof boolOrEvent.data !== 'undefined')
					bool = boolOrEvent.data;
				else
					bool = boolOrEvent;
				this.callCurrentViewAPI('setPresence', bool);
			};

			/**
			 * @param {string} eventName
			 * @param {function} handler
			 * 
			 * TODO: remove the addEventListener alias after having checked the historical code
			 */
			ComponentView.prototype.addEventListenerOnNode = ComponentView.prototype.addEventListener = function(eventName, handler) {
				this.callCurrentViewAPI('addEventListener', eventName, handler);
			};

			/**
			 * 
			 */
			ComponentView.prototype.getTextContent = function() {
				return this.callCurrentViewAPI('getTextContent');
			};

			/**
			 * @abstract
			 * 
			 * @needsGlobalRefactoring
			 */
			Object.defineProperty(ComponentView.prototype, 'value', { 		// ComponentWithReactiveText.prototype.populateSelf makes good use of that
				get : function() {
					return this.callCurrentViewAPI('getContentNoFail');
				},
				set : function(value) {
					this.callCurrentViewAPI('setContentNoFail', value);
				}
			});

			/**
			 * 
			 */
			ComponentView.prototype.setTextContent = function(text) {
				this.callCurrentViewAPI('setTextContent', text);
			};

			/**
			 * 
			 */
			ComponentView.prototype.setContentNoFail = function(text) {
				this.callCurrentViewAPI('setContentNoFail', text);
			};

			/**
			 * 
			 */
			ComponentView.prototype.setNodeContent = function(contentAsString) {
				this.callCurrentViewAPI('setNodeContent', contentAsString);
			};

			/**
			 * 
			 * 
			 * @needsGlobalRefactoring (becomes appendAsTextNode)
			 */
			ComponentView.prototype.appendText = function(textContent) {
				this.appendAsTextNode(textContent);
			};

			/**
			 * 
			 */
			ComponentView.prototype.appendAsTextNode = function(textContent) {
				this.callCurrentViewAPI('appendTextNode', textContent);
			};

			/**
			 * @param {Component} childView
			 * @param {number} atIndex
			 * 
			 * @needsGlobalRefactoring
			 */
			ComponentView.prototype.addChildAt = function(childView, atIndex) {
				this.subViewsHolder.addMemberView(childView);
				childView.parentView = this;
				this.addChildNodeFromViewAt(childView, atIndex);
			};

			/**
			 * @param {Component} childView
			 * @param {number} atIndex
			 */
			ComponentView.prototype.addChildNodeFromViewAt = function(childView, atIndex) {
				if (!childView.getMasterNode())		// check presence of masterNode, as we may be adding a childComponent before the view has been rendered
					return;
				this.callCurrentViewAPI('addChildNodeAt', childView.getMasterNode(), atIndex);
			};

			/**
			 * @abstract
			 */
			ComponentView.prototype.empty = function() {
				return this.callCurrentViewAPI('empty');
			};

			/**
			 * @abstract
			 */
			ComponentView.prototype.emptyTargetSubView = function() {
				return this.targetSubView.empty();
			};

			ComponentView.prototype.setContentFromArray = function(contentAsArray) {
				this.callCurrentViewAPI('empty');
				this.callCurrentViewAPI('setContentFromArray', contentAsArray);
			};

			/**
			 * @param {array[string]} contentAsArray
			 */
			ComponentView.prototype.setContentFromArrayOnTargetSubview = function(contentAsArray) {
			//	console.log(this._parent.objectType);
				return this.targetSubView.setContentFromArray(contentAsArray);
			};











			/**
			 * @constructor ComponentSubView
			 */
			var ComponentSubView = function(definition, parentView) {
				ComponentView.call(this, definition, parentView);
				
				this.objectType = 'ComponentSubView';
				
			};
			ComponentSubView.prototype = Object.create(ComponentView.prototype);
			ComponentSubView.prototype.objectType = 'ComponentSubView';
			ComponentSubView.prototype.constructor = ComponentSubView;








			/**
			 * @constructor ComponentSubViewsHolder
			 */
			var ComponentSubViewsHolder = function(definition, parentView) {
				// console.log('componentSubViewsHolder', definition)
				this.parentView = parentView || null;
				this.subViews = [];
				this.memberViews = [];
				
				// subViewsHolder exists even if there is no subViews (and we pass a definition as null if there is neither memberViews nor subViews)
				if (definition)
					this.instanciateSubViews(definition);
			};
			ComponentSubViewsHolder.prototype = {};
			ComponentSubViewsHolder.prototype.objectType = 'ComponentSubViewsHolder';
			ComponentSubViewsHolder.prototype.constructor = ComponentSubViewsHolder;

			ComponentSubViewsHolder.prototype.instanciateSubViews = function(definition) {
				definition.subSections.forEach(function(def) {
					this.subViews.push((new ComponentSubView(def, this.parentView)));
				}, this);
				definition.members.forEach(function(def) {
					if(typeof def.section === 'undefined') {
						if (typeof def.host !== 'undefined')
							console.warn('A component\'s definition contains "members" which seem to be Components (they have a "host" property), but have no "type" property (so they\'re being instanciated as views, and it failed). If you menat to define a view, you must define a template without hierarchy (the nodeName & section properties must be defined at the first level). nodeName is ' + def.host.nodeName + ' & defUID is ' + def.host.UID);
						else
							console.warn('A member view\'s definition doesn\'t contain a "section" prop at first level, you may have defined it wrongly. You must define a template without hierarchy (the nodeName & section properties must be defined at the first level). nodeName is ' + def.nodeName + ' & defUID is ' + def.UID);
					}
					// console.log(def)
					this.memberViews.push((new ComponentSubView(def, def.section !== null ? this.subViews[def.section] : this.parentView)));
				}, this);
			};

			ComponentSubViewsHolder.prototype.firstMember = function() {
				return this.memberViews[0];
			};

			ComponentSubViewsHolder.prototype.lastMember = function() {
				return this.memberViews[this.memberViews.length - 1];
			};

			ComponentSubViewsHolder.prototype.memberAt = function(idx) {
				return this.memberViews[idx];
			};

			ComponentSubViewsHolder.prototype.immediateAddMemberAt = function(idx, memberView) {
				var backToTheFutureAmount = this.memberViews.length - idx;
				Registries.viewsRegistry.splice(Registries.viewsRegistry.length - backToTheFutureAmount, 0, memberView);
				this.memberViews.splice(idx, 1, memberView);
			};

			// Should not be used: 
			// We need the mecanism defined in ComponentView 
			// to define the correct parentView
			ComponentSubViewsHolder.prototype.addMemberView = function(view) {
				this.memberViews.push(view);
			};

			ComponentSubViewsHolder.prototype.addMemberViewFromDef = function(definition) {
				var view = new ComponentSubView(definition, this.parentView);
				this.memberViews.push(view);
				return view;
			};

			ComponentSubViewsHolder.prototype.moveMemberViewFromTo = function(from, to, viewsRegistryIdx, offset) {
				this.memberViews.splice(to, 0, this.memberViews.splice(from, 1)[0]);
				if (offset && typeof viewsRegistryIdx === 'number')
					this.immediateAscendViewAFewStepsHelper(offset, viewsRegistryIdx);
			};

			ComponentSubViewsHolder.prototype.moveLastMemberViewTo = function(to, offset, viewsRegistryIdx) {
				var from = this.memberViews.length - 1;
				if (offset && viewsRegistryIdx)
					this.moveMemberViewFromTo(from, to, offset, viewsRegistryIdx);
			};

			ComponentSubViewsHolder.prototype.immediateUnshiftMemberView = function(definition) {
				var lastView = Registries.viewsRegistry.pop();
				var view = new ComponentSubView(definition, this.parentView);
				this.memberViews.unshift(view);
				
				Registries.viewsRegistry.push(lastView);
				return view;
			};

			ComponentSubViewsHolder.prototype.immediateAscendViewAFewStepsHelper = function(stepsCount, effectiveViewIdx) {
				var ourLatelyAppendedView = Registries.viewsRegistry.splice(effectiveViewIdx, 1)[0];
			//	console.log(Registries.viewsRegistry.length, stepsCount, Registries.viewsRegistry[Registries.viewsRegistry.length - 1 - stepsCount]);
				Registries.viewsRegistry.splice(effectiveViewIdx - stepsCount, 0, ourLatelyAppendedView);
			};

			ComponentSubViewsHolder.prototype.resetMemberContent = function(idx, textContent) {
				this.memberViews[idx].reset();
			};

			ComponentSubViewsHolder.prototype.setMemberContent = function(idx, textContent) {
				this.memberViews[idx].setContentNoFail(textContent);
			};

			ComponentSubViewsHolder.prototype.setMemberContent_Fast = function(idx, textContent) {
				this.memberViews[idx].setTextContent(textContent);
			};

			ComponentSubViewsHolder.prototype.appendContentToMember = function(idx, textContent) {
				this.memberViews[idx].appendAsTextNode(textContent);
			};

			ComponentSubViewsHolder.prototype.appendAsMemberContent = function(idx, textContent) {
				this.memberViews[idx].empty();
				this.memberViews[idx].appendAsTextNode(textContent);
			};

			ComponentSubViewsHolder.prototype.setEachMemberContent = function(contentAsArray) {
				contentAsArray.forEach(function(val, key) {
					if (typeof val !== 'string')
						return;
					this.setMemberContent(key, val);
				}, this);
			};

			ComponentSubViewsHolder.prototype.setEachMemberContent_Fast = function(contentAsArray) {
				contentAsArray.forEach(function(val, key) {
					if (typeof val !== 'string')
						return;
					this.setMemberContent_Fast(key, val);
				}, this);
			};
















			var DOMCanvasAccessor = function(definition, view) {
				DOMViewAPI.call(this, definition);
				this.objectType = 'DOMCanvasAccessor';
			//	console.log(definition.members);
				this.view = view;
				this.ctx;
				
			//	var found = false;
			//	definition.members.forEach(function(member, idx) {
			//		if (!found && ((member.getHostDef() && member.getHostDef().nodeName === 'canvas') || member.nodeName === 'canvas')) {
			//			this.canvasLocation = view.subViewsHolder.memberAt(idx);
			//			found = true;
			//		}
			//	}, this);
			};
			DOMCanvasAccessor.prototype = Object.create(DOMViewAPI.prototype);
			DOMCanvasAccessor.prototype.objectType = 'DOMCanvasAccessor';

			DOMCanvasAccessor.prototype.setMasterNode = function(node) {
				var self = this, canvas;
				DOMViewAPI.prototype.setMasterNode.call(this, node);
				
				this.view.nodeAsAPromise.then(function(boundingBox) {
			//		console.log(boundingBox);
					canvas = self.view.subViewsHolder.memberAt(0).getMasterNode();
					canvas.width = boundingBox.w;
					canvas.height = boundingBox.h;
					self.ctx = canvas.getContext('2d');	
					return boundingBox;
				});
			};

			DOMCanvasAccessor.prototype.setFillColor = function(color) {
				var self = this;
			//	this.view.nodeAsAPromise.then(function() {
					self.ctx.fillStyle = color;
			//	});
			};

			DOMCanvasAccessor.prototype.drawPoint = function(x, y) {
				var self = this;
			//	this.view.nodeAsAPromise.then(function() {
					self.ctx.fillRect(x, y, 1, 1);
			//	});
			};


























			var CanvasView = function(definition, parentView) {
				ComponentView.call(this, definition, parentView);
				
				this.objectType = 'CanvasView';
				this.currentViewAPI = new DOMCanvasAccessor(definition, this);
				
				this.w = 0;
				this.h = 0;
				this.nodeAsAPromise;
			};

			CanvasView.prototype = Object.create(ComponentView.prototype);
			CanvasView.prototype.objectType = 'CanvasView';

			CanvasView.prototype.getDimensions = function() {
				var self = this;
				this.nodeAsAPromise = new Promise(function(resolve, reject) {
					var inter = setInterval(function() {
						if (self.subViewsHolder.memberAt(0).getMasterNode()) {
							clearInterval(inter);				
							appConstants.resizeObserver.observe(self.subViewsHolder.memberAt(0).getMasterNode(), self.storeDimensions.bind(self, resolve));
						}
					}, 512);
				});
				return this.nodeAsAPromise;
			};

			CanvasView.prototype.storeDimensions = function(resolve, e) {

				this.w = e.data.boundingBox.w;
				this.h = e.data.boundingBox.h;
				resolve(e.data.boundingBox);
				appConstants.resizeObserver.unobserve(this.subViewsHolder.memberAt(0).getMasterNode());
			};

			CanvasView.prototype.gradientFill = function(colorScale) {
				var length = colorScale.max();
				this.callCurrentViewAPI('gradientFill', colorScale[0], colorScale[length], 0, 0, this.w, this.h);
			};

			CanvasView.prototype.partialGradientFill = function(boundaries, colorScale) {
				var length = colorScale.max();
				this.callCurrentViewAPI('gradientFill', colorScale[0], colorScale[length], boundaries.x, boundaries.y, boundaries.w, boundaries.h);
			};

			CanvasView.prototype.manualGradientFill = function(colorScale, boundaries) {
				var self = this;
				var length = 1; //colorScale.max();
				
				
				this.nodeAsAPromise.then(function(boundingBox) {
			//		console.log(boundingBox);
					if (typeof boundaries === 'undefined') {
						boundaries = {
							w : boundingBox ? boundingBox.w : self.w,
							h  : boundingBox ? boundingBox.h : self.h,
							x : 0,
							y : 0
						};
					}
			//		console.log(boundingBox);
			//		console.log('canvas promise');
					for (let x = boundaries.x, l = boundaries.w + boundaries.x; x < l; x++) {
						for (let y = boundaries.y, L = boundaries.h + boundaries.y; y < L; y++) {
							self.callCurrentViewAPI('setFillColor', colorScale((x - boundaries.x) * length / boundaries.w).hex());
							self.callCurrentViewAPI('drawPoint', x, y);	
						}
					}
				});
			};
















			/**
			 * A static definition of some DOM attributes :
			 * 		reminded here as useful for storing a component's "persistent state" (although it's only "persisted" through the Stream interface)
			 * 		used by the visibleStateComponent to map glyphs on states
			 */
			var commonStates = {
					hidden : false,
					disabled : false,
					checked : false,
					focused : false,
					selected : false,
					highlighted : false,
					blurred : false,
					valid : false,
					recent : false, 	// boolean otherwise handled by specific mecanism (component should be referenced in a list, etc.)
					branchintree : '',	// replaces CSS classes : enum ('root', 'branch', 'leaf')
					leafintree : '',
					nodeintree : false,
					expanded : false,
					sortable : false,
					sortedasc : false,
					sorteddesc :false,
					position : 0,		// position as a state : degrees, 'min', 'man', nbr of pixels from start, etc. 
					size : 0,			// size as a state : length, height, radius
					tabIndex : 0,
					'delete' : false,		// isn't a -persistent- state (cause it removes the node, hm) but deserves a glyph
					shallreceivefile : true,
					handlesvideo : true
			};













			module.exports = {
				Pair : Pair,
				ListOfPairs : ListOfPairs,
				DimensionsPair : DimensionsPair,
				EventEmitter : EventEmitter,
				Command : Command,
				Worker : WorkerInterface,
				Stream : Stream,
				LazyResettableColdStream : LazyResettableColdStream,
				NumberedStream : NumberedStream,
				StreamPool : StreamPool,
				SavableStore : SavableStore,
				ComponentView : ComponentView,
				ComponentSubView : ComponentSubView,
				ComponentSubViewsHolder : ComponentSubViewsHolder,
				CanvasView : CanvasView,
				commonStates : commonStates
			};
			},{"src/_DesignSystemManager/SWrapperInViewManipulator":3,"src/appLauncher/appLauncher":6,"src/core/CachedTypes":41,"src/core/PropertyCache":51,"src/core/Registries":53,"src/core/TemplateFactory":55,"src/core/UIDGenerator":58}],46:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @factory ElementFactory
			 * 
			 */


			//var AGDef = require('src/UI/categories/_configurationFiles/_arias&glyphsDef');

			var elementConstructorDecorator_HSD = _dereq_('src/core/elementDecorator_HSD');
			//var elementDecorator_Offset = require('src/core/elementDecorator_Offset');


			var customElems;
				
				function ElementFactory () {
					this.implements = [];
			//		this.defaultNodesDecorator = 'Hyphen-Star-Dash';
				}
				ElementFactory.prototype.objectType = 'ElementFactory';
				ElementFactory.prototype['Hyphen-Star-Dash'] = elementConstructorDecorator_HSD['Hyphen-Star-Dash'];
				
				ElementFactory.prototype.createElement = function (nodeName, isCustomElem, states) {
			//		console.log(nodeName, isCustomElem);
					if (isCustomElem)
						return this.registerAndCreateElement(nodeName, states);
					else {
						var elem = document.createElement(nodeName);
						elem.setAria = ElementFactory.prototype.setAria;
						return elem;
					}
				};
				
				ElementFactory.prototype.createCollection = function (def, states) {
					var collection = document.createDocumentFragment();
					def.fragment.forEach(function(nodeDef, key) {
						nodeDef = nodeDef.getHostDef() || nodeDef;
						
						if (nodeDef.isCustomElem)
							elem = this.registerAndCreateElement(nodeDef, states);
						else
							elem = document.createElement(nodeDef.nodeName); 
			//			elem = this.setAttributes(nodeDef.attributes, elem);
						collection.appendChild(elem);
					}, this);
					return collection
				};
				
				ElementFactory.prototype.registerAndCreateElement = function (nodeName, states) {
					if (!customElements.get(nodeName)) {
			//			console.log('CustomElement ' + nodeName + ' shall be defined');
						this.defineCustomElem(nodeName, states);
					}
					return document.createElement(nodeName);
				};
				
				ElementFactory.prototype.defineCustomElem = function(nodeName, componentStates) {
					var values = [], states = componentStates ? componentStates.map(function(stateObject, key) {
						values[key] = stateObject.getValue();
						return stateObject.getName();
					}) : [];
					
					class HTMLExtendedElement extends HTMLElement {
						constructor() {
							super();
							this.attachShadow({mode : 'open'});
							states.forEach(function(stateName) {
								ElementFactory.prototype.propGetterSetter.call(this, stateName);
							}, this);
							this.setAria = ElementFactory.prototype.setAria;
						}
						
						// declare observables
						static get observedAttributes() {
							return states;
						}
						
						connectedCallback() {
			//				states.forEach(function(stateName, key) {
			//					// Init on forced state by the states obj (this allows to have no propagation on first prop setting)
			//					// connectedCallback doesn't call attributeChangeCallback
			//					if (this.streams[stateName]) {
			//						this.streams[stateName].reflectedObj = this;
			//						this[stateName] = values[key] === 'undefined' ? undefined : values[key];
			//					}
			//				}, this);
						}
						
						// mutation observer
						attributeChangedCallback(attrName, oldVal, newVal) {
							if (oldVal === newVal)
								return;
			//				var arias = AGDef.getArias(this.componentType);
			//				for(var aria in arias) {
			//					if (aria.indexOf(attrName) !== -1)
			//						(function(a) {this.setAttribute(a, newVal);})(aria);
			//				}
							if (this.streams[attrName] && this.streams[attrName].get() !== newVal)
								this.streams[attrName].value = this.getTypedValue(newVal);
								
							//Hack hidden behavior not inherited by custom elements (may be related to the presence of an explicit "diplay" in the CSS)
							if (attrName === 'hidden') {
								if (this.getTypedValue(newVal) === true)
									this.style.visibility = 'hidden';
								else
									this.style.visibility = 'visible';
							}
						}
						
						
						// helper methods
						getTypedValue(attrValue) {
							return ElementFactory.prototype.getTypedValue(attrValue);
						}
					}
			//		console.log('CustomElement ' + nodeName + ' has been defined');
					customElements.define(nodeName, HTMLExtendedElement);
				};
				
				ElementFactory.prototype.setAria = function(ariaName, ariaValue) {
					this.setAttribute(ariaName.dromedarToHyphens(), ariaValue);
				};
				
				ElementFactory.prototype.setAttributes = function(attributes, node) {
					attributes.forEach(function(attrObject) {
						node[attrObject.getName()] = attrObject.getValue();
					});
				};
				
				ElementFactory.prototype.propGetterSetter = function(prop) {
					
					// FIXME: Big code duplication. Multi-test the override of native DOM getter-setters, and refactor
					var desc = (Object.getOwnPropertyDescriptor(this, prop) || Object.getPropertyDescriptor(this, prop));
					
			//		console.log(prop, desc)
					if (typeof desc !== 'undefined' && desc.configurable && desc.get) {
						desc.get = function() {
								return this.hasAttribute(prop) ? (this.getTypedValue ? this.getTypedValue(this.getAttribute(prop)) : ElementFactory.prototype.getTypedValue.call(this, this.getAttribute(prop))) : null;
							};
						desc.set = function(value) {
							// We're setting an attribute:  don't if the propName is camelCase 
							if (prop.toLowerCase() !== prop)
								console.warn('Reflected streams must have a lowercase name :', prop);
							
							// For litteral values, Updating the Stream is handled by onAttributeChangeCallback
							if (prop !== 'content' && prop.toLowerCase() === prop && typeof value !== 'undefined' && typeof value !== 'object' && !Array.isArray(value)) {
								if (this.streams[prop].value !== value && this.nodeName.indexOf('-') === -1) {
									// special case for non-custom elements : attributeChange doesn't trigger the stream update
									this.streams[prop].value = value;
								}
								// case of double update on the attr can't be avoided when :
								// 		- we're reflecting the attr on the prop through the stream (marginal case of someone absolutely wanting to mutate the obj targetting the attr)
								// the stream won't update twice though : forward is set to false
								this.setAttribute(prop, value);
							}
							else {
								if (this.streams[prop].value !== value)
									this.streams[prop].value = value;
								((value === null || value === undefined) && this.removeAttribute(prop));
							}
						};
					}
					else {
						Object.defineProperty(this, prop, {
							get : function() {
								return this.hasAttribute(prop) ? (this.getTypedValue ? this.getTypedValue(this.getAttribute(prop)) : ElementFactory.prototype.getTypedValue.call(this, this.getAttribute(prop))) : null;
							},
							set : function(value) {
								// We're setting an attribute:  don't if the propName is camelCase
								if (prop.toLowerCase() !== prop)
									console.warn('Reflected streams must have a lowercase name :', prop);
								
								// For litteral values, Updating the Stream is handled by onAttributeChangeCallback
								if (prop !== 'content' && prop.toLowerCase() === prop && typeof value !== 'undefined' && typeof value !== 'object' && !Array.isArray(value)) {
									if (this.streams[prop].value !== value && this.nodeName.indexOf('-') === -1) {
										// special case for non-custom elements : attributeChange doesn't trigger the stream update
										this.streams[prop].value = value;
									}
									// case of double update on the attr can't be avoided when :
									// 		- we're reflecting the attr on the prop through the stream (marginal case of someone absolutely wanting to mutate the obj targetting the attr)
									// the stream won't update twice though : forward is set to false
									this.setAttribute(prop, value);
									
								}
								else {
									if (this.streams[prop].value !== value)
										this.streams[prop].value = value;
									((value === null || value === undefined) && this.removeAttribute(prop));
								}
							}
						});
					}
				};
				
				ElementFactory.prototype.getTypedValue = function(attrValue) {
					var ret;
					if (typeof attrValue === 'string')
						return Boolean.prototype.tryParse(attrValue);
					else if (!isNaN((ret = parseInt(attrValue))))
						return ret;
					else
						return attrValue;
				};
				


			module.exports = (new ElementFactory());
			},{"src/core/elementDecorator_HSD":60}],47:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @programmatic_style Generics
			 */


			var TypeManager = _dereq_('src/core/TypeManager');
			var appConstants = _dereq_('src/appLauncher/appLauncher');
			var StylesheetWrapper = _dereq_('src/editing/AbstractStylesheet');

			var styleDef = function(uniqueID, styles) {
			//	if (styles === null)
			//		console.trace(styles);
			//		
				if (Array.isArray(uniqueID) && uniqueID[0].selector) {
					styles = uniqueID;
					uniqueID = undefined;
				}
				
				var obj,
					cachedStylesheet,
					name = (uniqueID || 'Automatic_CSS_ID_' + TypeManager.UIDGenerator.newUID()),
					debug;
				
				if (uniqueID) {
			//		console.log(uniqueID);
					cachedStylesheet = appConstants.isKnownUID(uniqueID);
				}

				if (Object.prototype.toString.call(cachedStylesheet) === '[object Object]')
					return cachedStylesheet;
				else if (typeof cachedStylesheet === 'string') {
					obj = new StylesheetWrapper(styles, cachedStylesheet); // cachedStylesheet may be a string (the future key of the object in the cache)
					appConstants.setUID(cachedStylesheet, obj);
				}
				else {
					obj = new StylesheetWrapper(styles, name);
					debug = appConstants.setUID(obj.getName(), obj);
			//		console.log(name, debug);
				}

				return obj;
			};

			module.exports = styleDef;
			},{"src/appLauncher/appLauncher":6,"src/core/TypeManager":57,"src/editing/AbstractStylesheet":72}],48:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * constructor MemoryBufferStack
			 */

			//var TypeManager = require('src/core/TypeManager');
			//var CSSSelectorsList = require('src/editing/CSSSelectorsList');
			var _functionalStyleHelpers = _dereq_('src/core/_functionalStyleHelpers');


			var MemoryBufferStack = function(itemSize, itemCount, isAbsoluteSize) {
				this.objectType = 'MemoryBufferStack';
				
				this.itemSize = itemSize;
				this._byteLength = 0;
				this._buffer = new Uint8Array(itemSize * itemCount);
				this.occupancy = new Uint8Array(itemCount / 8);
				
				this.traverseAndJumpFunction = this.setLogicForTraverseAndJump();
				this.branchlessLoop = this.getBranchlessLoop();
				
			//	this.bytePointer = 0;
			};

			MemoryBufferStack.prototype = Object.create(Uint8Array.prototype);
			MemoryBufferStack.prototype.objectType = 'MemoryBufferStack';

			MemoryBufferStack.eightBitsMasks = [
				0x01,
				0x02,
				0x04,
				0x08,
				0x10,
				0x20,
				0x40,
				0x80
			];

			MemoryBufferStack.prototype.setLogicForTraverseAndJump = function() {
				var self = this;
				var getBuffer = this.getBuffer;
				var bufferCount = this._byteLength / this.itemSize;
				var jumperHost = new this.JumperHost();
				var occupancySolver = new this.OccupancySolver(this.occupancy, this.itemSize);
				
				var doArrayMin = new this.DoArrayMinFunction();
				var shouldJump = function(bufferIdx) {
			//		console.log((jumperHost.jumper + bufferIdx) < bufferCount);
					return (jumperHost.jumper + bufferIdx) < bufferCount
						&& !doArrayMin.do(jumperHost.jumper, occupancySolver.getOccupancyFromBufferIdx(bufferIdx))
						&& !!++jumperHost.jumper;
				};
				
				var shouldRecurse = function(bufferIdx) {
					return jumpDecisionBranches[+(shouldJump(bufferIdx))];
				};
				
				var jumpDecisionBranches = new this.BranchesAsArray(shouldRecurse);
				
				return function(bufferIdx) {
					jumperHost.reset();
					shouldRecurse(bufferIdx)(bufferIdx);
					
					return jumperHost.jumper;
				};
			};

			MemoryBufferStack.prototype.getBranchlessLoop = function() {

				var branchlessLoop = function(callback, startBufferIdx, endBufferIdx) {
			//		console.log(startBufferIdx, endBufferIdx, this.itemSize);
					if (startBufferIdx >= endBufferIdx)
						return;
					
					callback(this._buffer, startBufferIdx * this.itemSize);
					startBufferIdx += this.traverseAndJumpFunction(startBufferIdx);
					branchlessLoop(callback, startBufferIdx, endBufferIdx);
			//		console.log(startBufferIdx);
				}.bind(this);
				
				return branchlessLoop;
			};

			MemoryBufferStack.prototype.getOffsetForBuffer = function(bufferIndex) {

				return bufferIndex * this.itemSize;
			};

			MemoryBufferStack.prototype.getBuffer = function(bufferIndex) {
			//	return this._buffer;
				return new Uint8Array(this._buffer.buffer, bufferIndex * this.itemSize, this.itemSize);
			};

			MemoryBufferStack.prototype.set = function(val, offset) {
				// offsets for occupancy map
				var onAlignementOffset = offset % 8;
				var startOffset = offset - onAlignementOffset;
				
				if (this._buffer.byteLength >= offset) {
					console.warn('MemoryBufferStack', 'Setting a value at an offset longer than the buffer.', val, idx, ' Returning...');
					return;
				}
				else if (this._buffer.byteLength <= offset)
					this._buffer.buffer.append(new ArrayBuffer(this.itemSize));
				
				this._byteLength = this._buffer.byteLength;
				this._buffer.set(val, offset);
				this.occupancy.set(this.occupancy[Math.floor(startOffset / 8)] | MemoryBufferStack.eightBitsMasks[onAlignementOffset]);
			};

			MemoryBufferStack.prototype.setFromIndex = function(val, idx) {
				// offsets for occupancy map
				var offset = this.itemSize * idx;
				var onAlignementOffset = offset % 8;
				var startOffset = offset - onAlignementOffset;
				
				if (this._buffer.byteLength >= offset) {
					console.warn('MemoryBufferStack', 'Setting a value at an offset longer than the buffer.', val, idx, ' Returning...');
					return;
				}
				else if (this._buffer.byteLength === offset)
					this._buffer.buffer.append(new ArrayBuffer(this.itemSize));
				
				this._byteLength = this._buffer.byteLength;
				this._buffer.set(val, offset);
				this.occupancy.set(this.occupancy[Math.floor(startOffset / 8)] | MemoryBufferStack.eightBitsMasks[onAlignementOffset]);
			};

			MemoryBufferStack.prototype.invalidate = function(offset) {
				// offsets for occupancy map
				var onAlignementOffset = offset % 8;
				var startOffset = offset - onAlignementOffset;
				
				this.occupancy.set(this.occupancy[Math.floor(startOffset / 8)] & ~MemoryBufferStack.eightBitsMasks[onAlignementOffset]);
			};

			MemoryBufferStack.prototype.invalidateFromIndex = function(idx) {
				// offsets for occupancy map
				var offset = this.itemSize * idx;
				var onAlignementOffset = offset % 8;
				var startOffset = offset - onAlignementOffset;
				
				this.occupancy.set(this.occupancy[Math.floor(startOffset / 8)] & ~MemoryBufferStack.eightBitsMasks[onAlignementOffset]);
			};

			/**
			 * @function MemoryBufferStack.prototype.append
			 * 
			 * @param editing val
			 */
			MemoryBufferStack.prototype.append = function(val) {

				if  (!val._byteLength)
					return;
				
				// offsets for occupancy map
				var offset = this._byteLength;
				
				if (this._byteLength + val._byteLength > this._buffer.byteLength) {
					this._buffer = new Uint8Array(this._buffer.buffer.append(new ArrayBuffer(val._byteLength)));
					this.occupancy = new Uint8Array(this.occupancy.buffer.append(new ArrayBuffer(Math.ceil((val._byteLength) / (this.itemSize * 8)))));
				}
				
				// update data buffer
				this._buffer.set(val._buffer, this._byteLength);	
				this._byteLength += val._byteLength;
				
				// Update occupancy buffer
				var occupancyValues = [], initialBufferIdx = offset / this.itemSize, occupancyPointer, currentOccupancyPointer;
				for (let bufferIdx = offset / this.itemSize, max = this._byteLength / this.itemSize; bufferIdx < max; bufferIdx++) {
			//		console.log(bufferIdx, bufferIdx % 8, Math.floor((bufferIdx - initialBufferIdx) / 8));
					occupancyPointer = Math.floor((bufferIdx - initialBufferIdx) / 8);
					currentOccupancyPointer = Math.floor(bufferIdx / 8);
					occupancyValues[occupancyPointer] = this.occupancy[currentOccupancyPointer] | MemoryBufferStack.eightBitsMasks[ bufferIdx % 8 ];
				}
				
			//	console.log(occupancyValues, Math.floor((offset / this.itemSize) / 8));
				this.occupancy.set(occupancyValues, Math.floor((offset / this.itemSize) / 8));
				
			};

			//MemoryBufferStack.prototype.getExpAsFunc = function(exp) {
			//	console.log("exp : ' + exp + '", ' + 'curriedFunction, inParam' + ', ' + exp + '); 
			//	return new Function('doRecurseFunction', 'inParam', 'return ' + exp + ';');
			//}












			MemoryBufferStack.prototype.BranchesAsArray = function(ifCallClause) {
				return [
					_functionalStyleHelpers.noOp,
					ifCallClause
				];
			};
			MemoryBufferStack.prototype.BranchesAsArray.prototype = {};






			MemoryBufferStack.prototype.JumperHost = function() {
				this.jumper = 1;
				
			};
			MemoryBufferStack.prototype.JumperHost.prototype.reset = function() {
				this.jumper = 1;
			};



			MemoryBufferStack.prototype.OccupancySolver = function(occupancyBuffer, itemSize) {
				this._buffer = occupancyBuffer;
				this._itemSize = itemSize;
			};
			MemoryBufferStack.prototype.OccupancySolver.prototype.getOccupancyFromBufferIdx = function(bufferIdx) {
				var bitFieldOffset = bufferIdx % 8;
			// 	console.log((this._buffer[Math.floor(bufferIdx / 8)] & MemoryBufferStack.eightBitsMasks[bitFieldOffset]) >> bitFieldOffset);
				return (this._buffer[Math.floor(bufferIdx / 8)] & MemoryBufferStack.eightBitsMasks[bitFieldOffset]) >> bitFieldOffset;
			};
			MemoryBufferStack.prototype.OccupancySolver.prototype.getOccupancyFromAbsoluteIdx = function(absoluteIdx) {
				var bitFieldOffset = (absoluteIdx / this.itemSize) % 8;
				return (this._buffer[Math.floor((absoluteIdx / this.itemSize) / 8)] & MemoryBufferStack.eightBitsMasks[bitFieldOffset]) >> bitFieldOffset;
			};




			MemoryBufferStack.prototype.arrayMin = function(arr) {
				return Math.min.apply(arr);
			};

			MemoryBufferStack.prototype.DoArrayMinFunction = function() {
				// Let's see that as a hint for the optimizer: capture a unique instance of the arrayMin func in the closure
				this.arrMin = MemoryBufferStack.prototype.arrayMin.bind(null);
				this.cachedArr = [];
			};
			MemoryBufferStack.prototype.DoArrayMinFunction.prototype.do = function(val0, val1) {
				this.cachedArr[0] = val0;
				this.cachedArr[1] = val1;
				return this.arrMin(this.cachedArr);
			};






			module.exports = MemoryBufferStack;
			},{"src/core/_functionalStyleHelpers":59}],49:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor MemoryMapBuffer
			 */

			var TypeManager = _dereq_('src/core/TypeManager');
			var MemoryBufferStack= _dereq_('src/core/MemoryBufferStack');

			var MemoryMapBuffer = function(itemSize, initialContent) {
				this.objectType = 'MemoryMapBuffer';
				
				var propsCount = this.propertiesStaticArray.length;
				this.propAddresses = (new Uint8Array(propsCount)).fill(255);
				this.itemSize = itemSize;
				this._buffer = new Uint8Array(propsCount * itemSize);
				
				this.traverseAndJumpFunction = this.setLogicForTraverseAndJump();
				this.branchlessLoop = this.getBranchlessLoop();
				
			};
			MemoryMapBuffer.prototype = {};
			MemoryMapBuffer.prototype.objectType = 'MemoryMapBuffer';

			MemoryMapBuffer.prototype.propertiesStaticArray= [];				// virtual
			MemoryMapBuffer.prototype.propertiesAccessGroupsBoudaries = {};		// virtual

			MemoryMapBuffer.prototype.setLogicForTraverseAndJump = MemoryBufferStack.prototype.setLogicForTraverseAndJump;
			MemoryMapBuffer.prototype.getBranchlessLoop = MemoryBufferStack.prototype.getBranchlessLoop;
			MemoryMapBuffer.prototype.BranchesAsArray = MemoryBufferStack.prototype.BranchesAsArray ;
			MemoryMapBuffer.prototype.JumperHost = MemoryBufferStack.prototype.JumperHost;
			MemoryMapBuffer.prototype.OccupancySolver = MemoryBufferStack.prototype.OccupancySolver;
			MemoryMapBuffer.prototype.arrayMin = MemoryBufferStack.prototype.arrayMin;
			MemoryMapBuffer.prototype.DoArrayMinFunction = MemoryBufferStack.prototype.DoArrayMinFunction;

			//MemoryMapBuffer.prototype.get = function(propertyIdx) {
			//	
			//}
			//
			//MemoryMapBuffer.prototype.set = function(propertyIdx, propertyValue) {
			//	
			//}

			MemoryMapBuffer.prototype.getProperty = function(propertyName) {
				
				if (typeof this.propertiesStaticMap[propertyName] === 'undefined') {
					console.warn('MemoryMapBuffer:get', 'The requested property ' + propertyName + 'is not implemented', 'Returning...');
					return;	
				}
					
				return this.occupancySolver(propertyName)
					&& this._buffer[this.propAddresses[this.propertiesStaticMap[propertyName]] * this.itemSize];
			};

			MemoryMapBuffer.prototype.setProperty = function(propertyName, propertyValue) {
				if (typeof this.propertiesStaticMap[propertyName] === 'undefined') {
					console.warn('MemoryMapBuffer:set', 'The requested property ' + propertyName + 'is not implemented', 'Returning...');
					return;	
				}
				
				if (this._byteLength >= 254) {
					console.error('CSSPropertyIdx in the MapBuffer would have been out of bounds.', 'Operation Cancelled...');
					return;
				}
				this.occupancySetter(propertyName, true);
				this._buffer[this.propAddresses[this.propertiesStaticMap[propertyName]] * this.itemSize] = propertyValue;
				
				this._byteLength += this.itemSize;
			};

			MemoryMapBuffer.prototype.occupancySolver = function(propertyName) {
				return this.propAddresses[this.propertiesStaticMap[propertyName]] !== 255;
			};

			MemoryMapBuffer.prototype.occupancySetter = function(propertyName, isSet) {
				this.propAddresses[this.propertiesStaticMap[propertyName]] = isSet ? this._byteLength : (this.unfragmentBuffer(1) && 255);
			};

			MemoryMapBuffer.prototype.unfragmentBuffer = function(removedCount) {
				// Loop over occupancy and collect all props that have an address smaller than (this._byteCount - removedCOunt)
				return true;	
			};



			 






			module.exports = MemoryMapBuffer;
			},{"src/core/MemoryBufferStack":48,"src/core/TypeManager":57}],50:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * constructor BufferFromSchema
			 */

			var TypeManager = _dereq_('src/core/TypeManager');
			var BinarySlice = _dereq_('src/core/BinarySlice');






			var BufferFromSchema = function(binarySchema, initialLoad) {
				this.objectType = 'BufferFromSchema';
				
				this.binarySchema = {};
				var offset = 0;
				for (var prop in binarySchema) {
					if (!binarySchema.hasOwnProperty(prop))
						return;
					this.binarySchema[prop] = new BinarySlice(
						binarySchema[prop].start,
						binarySchema[prop].length
					);
					offset += binarySchema[prop].length;
				}
			//	console.log(binarySchema.size);
				this._buffer = new Uint8Array(binarySchema.size);
				this.occupancy = new Uint8Array(binarySchema.size / 8);
				this._byteLength = 0;
				
				if (initialLoad)
					this.set(initialLoad, 0);
				
			//	console.log(this.binarySchema);
			};

			BufferFromSchema.prototype = Object.create(Uint8Array.prototype);
			BufferFromSchema.prototype.objectType = 'BufferFromSchema';

			BufferFromSchema.eightBitsMasks = [
				0x01,
				0x02,
				0x04,
				0x08,
				0x10,
				0x20,
				0x40,
				0x80
			];

			// TODO: retrieve the binary length from the BinarySchema
			// TODO: benchmark resolving integers that are longer than 8bits
			// using a DataView or another TypedArray
			BufferFromSchema.prototype.get = function(idx, binaryLength) {
				if (!binaryLength)
					return this._buffer[idx];
				else {
					// we unpack 16 and 32 bits integers here
					var ret = 0, bitwiseOffset = 0;
					for (let i = idx, l = idx + binaryLength; i < l; i++) {
						ret = ret | (this._buffer[i] << bitwiseOffset * 8);
						bitwiseOffset++;
					}
					return ret;
				}
			};

			BufferFromSchema.prototype.getOffsetForProp = function(propName) {
				var offset = 0;
				this.propRef.forEach(function(propAsArray) {
					if (propAsArray[0] === propName)
						offset = propAsArray[1]; 
				});
				return offset;
			};

			BufferFromSchema.prototype.set = function(val, offset) {
				val = (Array.isArray(val) || Object.getPrototypeOf(val) === Uint8Array.prototype) ? val : [val];
				// offsets for occupancy map
				offset = typeof offset !== 'number' ? this._byteLength : offset;
				var onAlignementOffset = offset % 8;
				var startOffset = offset - onAlignementOffset;
				
				this._buffer.set(val, offset);
				this.occupancy.set([this.occupancy[startOffset] | BufferFromSchema.eightBitsMasks[onAlignementOffset]]);
				this._byteLength = (offset && Math.max(offset + val.length, this._byteLength)) || val.length;
			//	console.log(this._byteLength);
			};

			BufferFromSchema.prototype.invalidate = function(offset) {
				// offsets for occupancy map
				var onAlignementOffset = offset % 8;
				var startOffset = offset - onAlignementOffset;
				
				this.occupancy.set(this.occupancy[startOffset] & ~BufferFromSchema.eightBitsMasks[onAlignementOffset]);
			};






			module.exports = BufferFromSchema;
			},{"src/core/BinarySlice":40,"src/core/TypeManager":57}],51:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * store propertyCache
			 * 
			 */

			var unkownTypesCount = 0;

			/**
			 * @constructor ObjectCache
			 * 
			 */
			var ObjectCache = function(name) {
				this.name = name;
				this.cache = {};
				this.firstID = null;
			};

			ObjectCache.prototype.hasItem = function(mainID, composedWithID) {
				if (!composedWithID)
					return (typeof this.cache[mainID.toString()] !== 'undefined');
				else
					return (typeof this.cache[mainID.toString() + '-' + composedWithID.toString()] !== 'undefined');
			};

			ObjectCache.prototype.getItem = function(mainID, composedWithID) {
				if (!composedWithID)
					return this.cache[mainID.toString()];
				else
					return this.cache[mainID.toString() + '-' + composedWithID.toString()];
			};

			ObjectCache.prototype.setItem = function(mainID, mainValue, composedWithID) {
				if (!composedWithID)
					return this.newItem(mainID.toString(), mainValue);
				else
					return this.newItem(mainID.toString() + '-' + composedWithID.toString(), mainValue);
			};

			ObjectCache.prototype.deleteItem = function(mainID, composedWithID) {
				if (!composedWithID)
					delete this.cache[mainID.toString()];
				else
					delete this.cache[mainID.toString() + '-' + composedWithID.toString()];
			};

			ObjectCache.prototype.newItem = function(UID, value) {
				this.cache[UID] = value;
				if (this.firstID === null)
					this.firstID = UID;
				return value;
			};

			ObjectCache.prototype.reset = function() {
				for (let UID in this.cache) {
					if (Array.isArray(this.cache[UID]))
						this.cache[UID].length = 0;
				}
			};












			var RequestCache = function(name) {
				
				ObjectCache.call(this, name);
				this.currentlyLiveRequests = [];
			};
			RequestCache.prototype = Object.create(ObjectCache.prototype);

			RequestCache.prototype.setItem = function(UID, requestObj, addToLiveSet) {
				var req;
				
				if (addToLiveSet && (typeof this.getItem(UID) === 'undefined' || req.idxInChache === null)) {
					req =  this.newItem(UID.toString(), requestObj);
					req.idxInCache = this.currentlyLiveRequests.length;
					this.currentlyLiveRequests.push(this.getPromiseFromRequest(req));
					return Promise.all(this.currentlyLiveRequests.map(function(liveRequest) {
							return liveRequest.promise;
						}, this));
				}
				else if (addToLiveSet && typeof this.getItem(UID) !== 'undefined') {
					req =  this.newItem(UID.toString(), requestObj);
					this.currentlyLiveRequests.splice(req.idxInChache, 1, this.getPromiseFromRequest(req));
					return Promise.all(this.currentlyLiveRequests.map(function(liveRequest) {
							return liveRequest.promise;
						}, this));
				}
				req =  this.newItem(UID.toString(), requestObj);
				return req;
			};

			RequestCache.prototype.getPromiseFromRequest = function(req) {
			//	var self = this;
				return {
							request : req,
							promise : new Promise(function(resolve, reject) {
								req.subscribe(function cachedSubDeletedAfterCachedPromiseResolve() {
			//						console.log('subscription executed');
									resolve();	// req.getResult()
									
									// TODO: Find a way to unsubscribe
			//						this.subscriptions[this.subscriptions.length - 1].unsubscribe();
								});
							})
						};
			};

			RequestCache.prototype.getLiveRequests = function(endPointNamesArray) {
				return Promise.all(
					this.currentlyLiveRequests
						.filter(function(liveRequest) {
							return endPointNamesArray.indexOf(liveRequest.request.name) !== -1;
						}).map(function(liveRequest) {
							return this.getPromiseFromRequest(liveRequest.request).promise
						}, this)
				);	
			};

			RequestCache.prototype.filterLiveRequests = function(endPointNamesArray) {
			//	return Promise.all(this.currentlyLiveRequests);	
			};













			var StateMachineCache = function(name) {
				
				ObjectCache.call(this, name);
				this.objectType = 'StateMachineCache';
				
				this.cache = [];
				this._orthogonalRegistry = {};
			};
			StateMachineCache.prototype = Object.create(ObjectCache.prototype);

			StateMachineCache.prototype.stateDefExists = function(UID) {
				return this._orthogonalRegistry[UID];
			};

			StateMachineCache.prototype.newStateDef = function(UID, componentType, bindingDef, parentUID) {
				return [
					{
						sourceEvent : (bindingDef.from || bindingDef.to),
						onSelf : ((!bindingDef.from 
									|| !bindingDef.to 
									|| bindingDef.from === bindingDef.to) && true),
						componentType : componentType || ('undeclaredType_' + unkownTypesCount++),
						componentUID : UID,
						targetState : (bindingDef.to || bindingDef.from),
						hasConstraints : ('[' + (bindingDef.map && 'map') + ',' + (bindingDef.filter && 'filter') + ']'),
						hasSideEffects : (bindingDef.subscribe === null && true),
						bindingsCount : 0,
						bindingIsInError : false,
						parentUID : parentUID
					},
					[]
				]
			};

			StateMachineCache.prototype.newItem = function(UID, value, parentUID) {
				if (value[0].onSelf) {
					if (!this._orthogonalRegistry[value[0].componentUID]) {
						this.cache.push(value);
						this._orthogonalRegistry[value[0].componentUID] = value;	
					}
					else {
						this._orthogonalRegistry[value[0].componentUID][1].push(value);
						this._orthogonalRegistry[value[0].componentUID][0].bindingsCount++;
					}
				}
				else {
					if (!this._orthogonalRegistry[parentUID]) {
						var parentStateCache = this.newStateDef(
							parentUID,
							'_InitialStateSource',
							{
								from : '',
								to : '',
								map : null,
								filter : null,
								subscribe : null
							},
							null
						);
						this.cache.push(parentStateCache);
						this._orthogonalRegistry[parentUID] = parentStateCache;
					}
					
					if  (!this._orthogonalRegistry[value[0].componentUID])
						this._orthogonalRegistry[value[0].componentUID] = value;	
					
					this._orthogonalRegistry[parentUID][1].push(value);
					this._orthogonalRegistry[value[0].componentUID][0].bindingsCount++;
				}
				
				

			//		this._orthogonalRegistry[value[0].componentUID] = value;
			//		console.warn(this.objectType, 'Property binding for component [', value[0].componentUID, '] happened twice. Binding State toggled to "Error"');

					
			//		this._orthogonalRegistry[value[0].componentUID].bindingIsInError = true;
					
				if (this.firstID === null)
					this.firstID = UID;
				return value;
			};

			StateMachineCache.prototype.registerTransition = function(UID, componentType, bindingDef, parentUID) {
				return this.newItem(UID, this.newStateDef(UID, componentType, bindingDef, parentUID), parentUID);
			};


























			module.exports = {
				ObjectCache : ObjectCache,
				RequestCache : RequestCache,
				StateMachineCache : StateMachineCache
			};
			},{}],52:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor RecitalDataset
			 * 
			 * => tight coupling with AppIgnition = mandatory static inclusion in core (Dataset requires App).
			 * 		App.List is coupled with [Dataset.push(), pushApply(), splice(), & more]
			 */

			const TemplateFactory = _dereq_('src/core/TemplateFactory');
			const Registries = _dereq_('src/core/Registries');
			const App = _dereq_('src/core/App');



			var RecitalDataset = function(rootComponent, trackedComponent, template, factoryPropsArray, arrayFunctions) {
				if (typeof rootComponent === 'undefined' || !trackedComponent || !template || !factoryPropsArray) {
					console.error('ReactiveDataset initialization failed: Missing parameters. Returning...', rootComponent, trackedComponent, template, factoryPropsArray);
					return;
				}
				this.init(rootComponent, trackedComponent, template, factoryPropsArray);
				if (typeof arrayFunctions !== 'undefined') {
					if (Array.isArray(arrayFunctions))
						this.getFunctionList(arrayFunctions);
					else if (Object.keys(arrayFunctions || {}).length)		// allows
																			// passing null
																			// instead of an
																			// object
						this.setArrayFunctions(arrayFunctions);
				}
			};
			RecitalDataset.prototype = Object.create(Array.prototype);
			RecitalDataset.prototype.objectType = 'ReactiveDataset'; 
			Object.defineProperty(RecitalDataset.prototype, 'arrayFunc', {
				value : {
					trackedProp : 'active',
					every : function(item) {return item[this.trackedProp];},
					none : function(item) {return !item[this.trackedProp];},
					some : function(item) {return item[this.trackedProp];},
					someNot : function(item) {return !item[this.trackedProp];},
					filter : function(item) {return item[this.trackedProp];},
					filterNot : function(item) {return !item[this.trackedProp];}
				}
			});
			Object.defineProperty(RecitalDataset.prototype, 'getDefaultListDef', {
				value : function() {
							return TemplateFactory.createDef({
								type : 'ComponentList',
								each : [],
								item : null,
								template : null,
								isInternal : true
							});
						}
			});
			Object.defineProperty(RecitalDataset.prototype, 'init', {
				value : function(rootComponent, trackedComponent, template, factoryPropsArray) {
					Object.defineProperty(this, 'rootComponent', {
						value : rootComponent
					});
					Object.defineProperty(this, 'trackedComponent', {
						value : trackedComponent
					});
					Object.defineProperty(this, 'defaultListDef', {
						value : this.getDefaultListDef()
					});
					this.defaultListDef.host.template = template;
					Object.defineProperty(this, 'funcList', {
						value : []
					});
					Object.defineProperty(this, 'Item', {
						value : this.setItemFactory(factoryPropsArray),
						writable : true
					});
				}
			});

			Object.defineProperty(RecitalDataset.prototype, 'getFunctionList', {
				value : function(arrayFunc) {
					Array.prototype.push.apply(this.funcList, arrayFunc);
				}
			});
			Object.defineProperty(RecitalDataset.prototype, 'setArrayFunctions', {
				value : function(arrayFunctions) {
					this.getFunctionList(Object.keys(arrayFunctions));
					Object.defineProperty(this, 'arrayFunc', {
						value : arrayFunctions
					});
				}
			});
			Object.defineProperty(RecitalDataset.prototype, 'setItemFactory', {
				value : function(factoryPropsArray) {
					if (!factoryPropsArray) {
						console.warn('factoryPropsArray is ' + (typeof factoryPropsArray) + ' : This changes the "newItem()" method\'s signature (arg0 is now Object). Nevertheless, that shouldn\'t have any other repercussion.');
						return function() {return arguments[0][0];};
					}
					var factory = function() {
						[...arguments[0]].forEach(function(arg, key) {
							this[factoryPropsArray[key]] = arg;
						}, this);
					};
					factory.prototype = Object.create(Object.prototype);
					factoryPropsArray.forEach(function(propName) {
						factory.prototype[propName] = null; 
					});
					Object.defineProperty(factory.prototype, 'keys', {value : factoryPropsArray.slice(0)});
					return factory;
				}
			});
			Object.defineProperty(RecitalDataset.prototype, 'setSchema', {
				value : function(factoryPropsArray) {
					this.Item = this.setItemFactory(factoryPropsArray);
				}
			});

			Object.defineProperty(RecitalDataset.prototype, 'newItem', {
				value : function() {
					return (new this.Item(arguments));
				}
			});


			Object.defineProperty(RecitalDataset.prototype, 'updateDatasetState', {
				value : function() {
					if (!this.rootComponent)
						return;
						
					this.funcList.forEach(function(prop) {
						if (prop === 'filter' || prop === 'filterNot')
							this.rootComponent.streams[prop].value = Array.prototype.filter.call(this, this.arrayFunc[prop], this.arrayFunc).length;
						else {
							this.rootComponent.streams[prop].value = Array.prototype[prop] 
								? Array.prototype[prop].call(this, this.arrayFunc[prop], this.arrayFunc)
									: (prop === 'none' 
										? Array.prototype.every.call(this, this.arrayFunc[prop], this.arrayFunc)
											: Array.prototype.some.call(this, this.arrayFunc[prop], this.arrayFunc));
						}
					}, this);
					if (this.rootComponent.streams['length'])
						this.rootComponent.streams['length'].value = this.length;
				}
			});

			Object.defineProperty(RecitalDataset.prototype, 'setDatasetState', {
				value : function(stateName, value, setSingle) {
					this.rootComponent.streams[stateName].value = value;
					if (!setSingle)
						this.updateDatasetState();
				}
			});

			Object.defineProperty(RecitalDataset.prototype, 'getDatasetState', {
				value : function(stateName) {
					return this.rootComponent.streams[stateName].value;
				}
			});

			Object.defineProperty(RecitalDataset.prototype, 'push',  {
				value : function(item) {
					var souldForceEventSubscriptions = false,
						lastIndex = this.trackedComponent._children.length;
					// There is a case where we add children -before- the appIgnition has been done
					// so the trackedCompenent, already has children, and shall already have subscribed to its children,
					// so handling event subs on children shall subscribe a seconde time starting at child index 0
					// => test if the tracked component has a master node, and only force subscriptions if it has been rendered
					if (this.trackedComponent.view.getMasterNode())
						souldForceEventSubscriptions = true;
						
					this.defaultListDef.host.each = [item];
					new App.List(this.defaultListDef, this.trackedComponent);
					
					if (souldForceEventSubscriptions)
						this.trackedComponent.handleEventSubsOnChildrenAt(Registries.caches['subscribeOnChild'].cache[this.trackedComponent._defUID], lastIndex);
			// this.trackedComponent.addModules(this.defaultListDef,
			// this.trackedComponent._children.length);
					Array.prototype.push.call(this, item);
					this.updateDatasetState();
				}
			});

			Object.defineProperty(RecitalDataset.prototype, 'pushApply',  {
				value : function(itemArray) {
					if (!itemArray.length)
						return;
						
					var souldForceEventSubscriptions = false,
						lastIndex = this.trackedComponent._children.length;
					// There is a case where we add children -before- the appIgnition has been done
					// so the trackedCompenent, already has children, and shall already have subscribed to its children,
					// so handling event subs on children shall subscribe a second time starting at child index 0
					// => test if the tracked component has a master node, and only force subscriptions if it has been rendered
					if (this.trackedComponent.view.getMasterNode())
						souldForceEventSubscriptions = true;
						
					this.defaultListDef.host.each = itemArray;
					new App.List(this.defaultListDef, this.trackedComponent);
					
					if (souldForceEventSubscriptions)
						this.trackedComponent.handleEventSubsOnChildrenAt(Registries.caches['subscribeOnChild'].cache[this.trackedComponent._defUID], lastIndex);
			// this.trackedComponent.addModules(this.defaultListDef,
			// this.trackedComponent._children.length);
					Array.prototype.push.apply(this, itemArray);
					this.updateDatasetState();
				}
			});

			Object.defineProperty(RecitalDataset.prototype, 'flush',  {
				value : function() {
					new App.DelayedDecoration(null, this.trackedComponent, this.defaultListDef.getHostDef());
				}
			});

			Object.defineProperty(RecitalDataset.prototype, 'splice',  {
				value : function(index, length, replacedBy) {
					var c1, c2, mBackup;

					if (typeof replacedBy === 'number') {
						if (replacedBy > index) {
							c2 = this.trackedComponent._children[replacedBy].remove();
							c1 = this.trackedComponent._children[index].remove();
							this.trackedComponent.addChildAt(c2, index);
						}
						else {
							c1 = this.trackedComponent._children[index].remove();
							c2 = this.trackedComponent._children[replacedBy].remove();
							this.trackedComponent.addChildAt(c2, index - 1);
						}

						mBackup = Array.prototype.splice.call(this, index, 1, this[replacedBy])[0];
						this.updateDatasetState();
						return [mBackup, c1];
					}
					else if (typeof replacedBy === 'undefined' || replacedBy === null) {
						c1 = this.trackedComponent._children[index].remove();
						mBackup = Array.prototype.splice.call(this, index, 1)[0];
						this.updateDatasetState();
						return [mBackup, c1];
					}
					else if (Array.isArray(replacedBy)) {
						this.trackedComponent.addChildAt(replacedBy[1], index);
						Array.prototype.splice.call(this, index, 1, replacedBy[0]);
						this.updateDatasetState();
						return true;
					}
				}
			});

			Object.defineProperty(RecitalDataset.prototype, 'spliceOnProp',  {
				value : function(prop, value) {
					if (this.trackedComponent._children.length) {
						var module;
						for (let i = this.trackedComponent._children.length - 1; i >= 0; i--) {
							module = this.trackedComponent._children[i];
							if (module.streams[prop] && module.streams[prop].value === value) {
								module.remove();
								Array.prototype.splice.call(this, i, 1);
							}
						}
						this.updateDatasetState();
					}
					else
						return false;
				}	
			});

			Object.defineProperty(RecitalDataset.prototype, 'spliceOnPropInverse',  {
				value : function(prop, value) {
					if (this.trackedComponent._children.length) {
						var module;
						for (let i = this.trackedComponent._children.length - 1; i >= 0; i--) {
							module = this.trackedComponent._children[i];
							if (module.streams[prop] && module.streams[prop].value !== value) {
								module.remove();
								Array.prototype.splice.call(this, i, 1);
							}
						}
						this.updateDatasetState();
					}
					else
						return false;
				}	
			});

			Object.defineProperty(RecitalDataset.prototype, 'resetLength',  {
				value : function() {
					// console.log(this.trackedComponent._children.length)
					for (var i = this.length - 1; i >= 0; i--) {
						this.trackedComponent.removeChildAt(this.trackedComponent._children.length - 1);
					};
			//		if (this.trackedComponent.removeAllChildren())
					Array.prototype.splice.call(this, 0, this.length);
				}
			});

			Object.defineProperty(RecitalDataset.prototype, 'serialize', {
				value : function() {
					return JSON.stringify(Array.from(this));
				}
			});

			Object.defineProperty(RecitalDataset.prototype, 'childToFront', {
				value : function(idx) {
					this.forEach(function(item, key) {
						if (key === idx)
							this.trackedComponent._children[key].view.setPresence(true);
						else
							this.trackedComponent._children[key].view.setPresence(false);
					}, this);
				}
			});

			Object.defineProperty(RecitalDataset.prototype, 'parentToFront', {
				value : function(bool) {
					this.trackedComponent.view.setPresence(bool);
				}
			});

			Object.defineProperty(RecitalDataset.prototype, 'targetContainerDeploy', {
				value : function(idx) {
					this.forEach(function(item, key) {
			//			console.log(key === idx);
						if (key === idx) {
							this.trackedComponent._children[key].view.styleHook.setFlex(':host', '1 1 0');
			//				this.trackedComponent._children[key].streams.unfolded.value = 'unfolded';
			//				this.trackedComponent._children[key].view.styleHook.setMaxHeight('ul', 'max-content');
						}
						else {
							this.trackedComponent._children[key].view.styleHook.setFlex(':host', 'none');
			//				this.trackedComponent._children[key].streams.unfolded.value = null;
			//				this.trackedComponent._children[key].view.styleHook.setMaxHeight('ul', '0px');
						}
						
			//			console.log(this.trackedComponent._children[key].view.getWrappingNode().firstChild, this.trackedComponent._children[key].view.sWrapper.styleElem);
			//			if (this.trackedComponent._children[key].view.getWrappingNode().firstChild !== this.trackedComponent._children[key].view.sWrapper.styleElem) {
			//				if (key === 0)
			//					this.trackedComponent._children[key].view.getWrappingNode().firstChild.replaceWith(this.trackedComponent._children[key].view.sWrapper.styleElem);
			//				else
			//					this.trackedComponent._children[key].view.getWrappingNode().firstChild.replaceWith(this.trackedComponent._children[key].view.sWrapper.styleElem.cloneNode(true));
			//			}
					}, this);
				}
			});


			Object.defineProperty(RecitalDataset.prototype, 'sortForPropHostingArrayOnArrayIdx',  {
				value : function(prop, idx, invert) {
					var tmpThis = [];
					for (let i = 0, l = this.length; i < l; i++) {
						tmpThis.push(this[i][prop].slice(0));
					}
					
					if (invert)
						tmpThis.sort(Array.prototype.inverseSortOnObjectProp.bind(null, idx));
					else
						tmpThis.sort(Array.prototype.sortOnObjectProp.bind(null, idx));
					
					for (let i = 0, l = this.length; i < l; i++) {
						this[i][prop] = tmpThis[i];
					}
				}
			});

			Object.defineProperty(RecitalDataset.prototype, 'clone', {
				value : function() {
					var clone = new RecitalDataset(
						this.rootComponent,
						this.trackedComponent,
						this.defaultListDef.host.template,
						[]
					);
					Array.prototype.push.apply(clone, this);
			//		console.log(clone);
					return clone;
				}
			});

			Object.defineProperty(RecitalDataset.prototype, 'reNewComponents',  {
				value : function() {
					var lastIndex = this.trackedComponent._children.length;
					this.defaultListDef.host.each = this;
					new App.List(this.defaultListDef, this.trackedComponent);
					this.trackedComponent.handleEventSubsOnChildrenAt(Registries.caches['subscribeOnChild'].cache[this.trackedComponent._defUID], lastIndex);
					this.updateDatasetState();
				}
			});

			//Object.defineProperty(RecitalDataset.prototype, 'sortStringsAsNumbers',  {
			//	value : function(a, b) {
			//		return (parseInt(a, 10) > parseInt(b, 10)
			//					? 1 
			//					: (parseInt(a, 10) === parseInt(b, 10)
			//						? 0
			//						: -1));
			//	}
			//});
			//
			//Object.defineProperty(RecitalDataset.prototype, 'invertSortStringsAsNumbers',  {
			//	value : function(a, b) {
			//		return (parseInt(a, 10) < parseInt(b, 10)
			//					? 1 
			//					: (parseInt(a, 10) === parseInt(b, 10)
			//						? 0
			//						: -1));
			//	}
			//});









			module.exports = RecitalDataset;
			},{"src/core/App":38,"src/core/Registries":53,"src/core/TemplateFactory":55}],53:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @Singletons : Registries to cache useful objects in the global scope
			 */

			const PropertyCache = _dereq_('src/core/PropertyCache').ObjectCache;
			const RequestCache = _dereq_('src/core/PropertyCache').RequestCache;
			const StateMachineCache = _dereq_('src/core/PropertyCache').StateMachineCache;
			const stateMachineCache = new StateMachineCache('stateMachineCache');

			var exportedObjects = {};

			/**
			 * PROPS CACHES : for performance concerns, allows retrieving a prop on the def from anywhere
			 * 		Usefull when instanciating components from a list, as reactivity doesn't change through iterations.
			 * 
			 * 		Internal workflow of the framework :
			 * 			- first ensure the def is complete, and store constants : 
			 * 				- the "reactivity" register stores reactivity queries
			 * 				- the "nodes" register stores DOM attributes : relation are uniques, each ID from the def is bound to an attributes-list 
			 * 						=> fill the "nodes" register ( {ID : {nodeName : nodeName, attributes : attributes, cloneMother : DOMNode -but not yet-} )
			 * 			- then compose components, creating streams and views
			 * 				- create static views without instanciating the DOM objects : parentView of the view is either a "View" or a "ChildView"
			 * 						=> assign parentView
			 * 						=> fill the "views" register ( {ID : [view] } )
			 * 					- instanciate streams : if it has streams, it's a host
			 * 						=> fill the "hosts" register ( {ref : Component} ) // alternatively, the "definitionRegister" already holds all "Components"
			 * 				- on composition :
			 * 					- handle reactivity and event subscription : each component as a "unique ID from the def" => retrieve queries from the "reactivity" register
			 * 			- then instanciate DOM objects through cloning : DOM attributes are always static
			 * 					=> iterate on the "views" register
			 * 			- then get back to hosts elem : they're in the "hosts" register
			 * 					- accessing to the component's view, decorate DOM Objects with :
			 * 						- streams
			 * 						- reflexive props
			 * 					- assign reflectedObj to streams
			 * 			- finally reflect streams on the model
			 */

			/**
			 * @constructor ComponentDefCache
			 * 
			 */
			var ComponentDefCache = function() {
				this.knownIDs = {};
				this.randomUID = 0;
			};
			ComponentDefCache.prototype = {};
			ComponentDefCache.prototype.getUID = function(uniqueID) {
				if (uniqueID in this.knownIDs)
					return this.knownIDs[uniqueID];
				else if (!(uniqueID in this.knownIDs) || !uniqueID || !uniqueID.length) {
					uniqueID = uniqueID ? uniqueID : (this.randomUID++).toString();
					this.knownIDs[uniqueID] = uniqueID;
					return this.knownIDs[uniqueID];
				}
			};

			ComponentDefCache.prototype.isKnownUID = function(uniqueID) {
				return this.getUID(uniqueID);
			};

			ComponentDefCache.prototype.setUID = function(uniqueID, globalObj) {
				return (this.knownIDs[uniqueID] = globalObj);
			};

			/**
			 * CORE CACHES
			 */
			/** Duplicated code from Template Factory (otherwise we would cause an include loop) */
			var propsAreArray = [
				'attributes',
				'states',
				'props',
				'streams',
				'reactOnParent',
				'reactOnSelf',
				'subscribeOnParent',
				'subscribeOnChild',
				'subscribeOnSelf'//,
			//	'keyboardSettings',			// TODO: FIX that bypass : implement keyboard handling in the context of the v0.2
			//	'keyboardEvents'
			];
			var caches = {};
			(function initCaches() {
				propsAreArray.forEach(function(prop) {
					caches[prop] = new PropertyCache(prop);
				});
			})();

			var hostsDefinitionsCacheRegistry = new PropertyCache('hostsDefinitionsCacheRegistry');
			var listsDefinitionsCacheRegistry = new PropertyCache('listsDefinitionsCacheRegistry');
			var permanentProvidersRegistry = new RequestCache('permanentProvidersRegistry');
			var boundingBoxesCache = new PropertyCache('boundingBoxesCache');

			// MAYBE TODO: this cache is used by the RichComponenentInternalsPicker, 
			// to resolve the sWrapper associated with a component out of its UID (? to be confirmed/precised), but
			// we also need a MasterStyleCache, to store each CSS rule at global level,
			// and resolve the binding between a matched rules and a (pseudo-)DOM node, from any outer scope.
			// 		=> could we enhance this cache so it would allow to retrieve a whole sWrapper
			//		al well as a single CSS rule, in order -not- to duplicate the caches used for CSS ?
			// 	=> think of that deeply, and validate any choice regarding performances.
			var sWrappersCache = new PropertyCache('sWrappersCache');

			var typedHostsRegistry = new PropertyCache('typedHostsRegistry');

			/**
			 * @typedCache {CachedNode} {UID : {nodeName : nodeName, isCustomElem : isCustomElem, cloneMother : DOMNode -but not yet-}}
			 */
			var nodesRegistry = new PropertyCache('nodesRegistry');

			/**
			 * @typedStore {StoredView} {UID : view}
			 */
			var viewsRegistry = [];

			/**
			 * @typedStore {StoredAssocWithModel} {UID : keyOnModel}
			 */
			var dataStoreRegistry = new PropertyCache('dataStoreRegistry');

			/**
			 * @typedStore {StoredStyleIFace} {UID : UID_OfTheOpitimizedSelectorBuffer}
			 */
			var masterStyleRegistry = new PropertyCache('masterStyleRegistry');

			/**
			 * @typedStore {StoredStyleIFace} {UID : UID_OfTheViewIdentifiedAsNeedingUpdate}
			 */
			var pendingStyleRegistry = new PropertyCache('pendingStyleRegistry');

			/**
			 * @typedStore {StoredStyleIFace} {UID : UID_OfTheViewIdentifiedAsNeedingUpdate}
			 */
			var UApendingStyleRegistry = new PropertyCache('UApendingStyleRegistry');

			/**
			 * @typedStore {StoredNodeFromNaiveDOM} {UID : nodeUID}
			 */
			var naiveDOMRegistry = new PropertyCache('naiveDOMRegistry');

			/**
			 * @typedStore {StoredLayoutNode} {UID : nodeUID}
			 */
			var layoutNodesRegistry = new PropertyCache('layoutNodesRegistry');

			/**
			 * @typedStore {StoredTextNode} {UID : nodeUID}
			 */
			var textNodesRegistry = new PropertyCache('textNodesRegistry');

			/**
			 * @typedStore {StoredRasterShape} {UID : nodeUID}
			 */
			var rasterShapesRegistry = new PropertyCache('rasterShapesRegistry');

			/**
			 * @typedStore {StoredFlexCtx} {UID : nodeUID}
			 */
			var flexCtxRegistry = new PropertyCache('flexCtxRegistry');

			/**
			 * @typedStore {StoredLayoutCallback} {UID : nodeUID}
			 */
			var layoutCallbacksRegistry = new PropertyCache('layoutCallbacksRegistry');

			/**
			 * @typedStore {FontSizeCache} {UID : nodeUID}
			 */
			var fontSizeBuffersCache = new PropertyCache('fontSizeBuffersCache');





			/**
			 * @aliases
			 */
			Object.assign(exportedObjects, {
				PropertyCache : PropertyCache,
				hostsDefinitionsCacheRegistry : hostsDefinitionsCacheRegistry,	// Object PropertyCache
				listsDefinitionsCacheRegistry : listsDefinitionsCacheRegistry,	// Object PropertyCache
				permanentProvidersRegistry : permanentProvidersRegistry,		// Object RequestCache
				boundingBoxesCache : boundingBoxesCache,						// Object PropertyCache
				stateMachineCache : stateMachineCache,							// Object PropertyCache
				sWrappersCache : sWrappersCache,								// Object PropertyCache
				typedHostsRegistry : typedHostsRegistry,						// Object PropertyCache {defUID : [Components]}
				naiveDOMRegistry : naiveDOMRegistry,							// Object PropertyCache
				masterStyleRegistry : masterStyleRegistry,						// Object PropertyCache
				UApendingStyleRegistry : UApendingStyleRegistry,				// Object PropertyCache
				pendingStyleRegistry : pendingStyleRegistry,					// Object PropertyCache
				rasterShapesRegistry : rasterShapesRegistry,					// Object PropertyCache
				layoutNodesRegistry :layoutNodesRegistry,						// Object PropertyCache
				textNodesRegistry : textNodesRegistry,							// Object PropertyCache
				flexCtxRegistry : flexCtxRegistry,								// Object PropertyCache
				layoutCallbacksRegistry : layoutCallbacksRegistry,				// Object PropertyCache
				fontSizeBuffersCache : fontSizeBuffersCache,					// Object PropertyCache
				caches : caches,												// Object {prop : PropertyCache}
				nodesRegistry : nodesRegistry,									// Object PropertyCache
				viewsRegistry : viewsRegistry,									// Object PropertyCache
				dataStoreRegistry : dataStoreRegistry,							// Object PropertyCache
				definitionsCache : new ComponentDefCache(),						// Object ComponentDefCache
			});
				
				
				
				
				
				
				
				
			module.exports = exportedObjects;
			},{"src/core/PropertyCache":51}],54:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor NodeResizeObserver
			 * 
			 */

			var TypeManager = _dereq_('src/core/TypeManager');
			/**
			 * @constructor EventEmitter
			 */
			var EventEmitter = function() {
				this.objectType = 'EventEmitter';
				this._eventHandlers = {};
				this._one_eventHandlers = {};
				this._identified_eventHandlers = {};
				
				this.createEvents();
			};
			EventEmitter.prototype = {};
			EventEmitter.prototype.objectType = 'EventEmitter';
			// complete proto follows at end of page
			// REPLACES CoreTypes = require('src/core/CoreTypes');












				
			var NodeResizeObserver = function() {
				EventEmitter.call(this);
				this.objectType = 'NodeResizeObserver';
					
				this.resizeObserver;
				if (typeof ResizeObserver !== 'undefined')
					this.resizeObserver = new ResizeObserver(this.getSize.bind(this));
			};

			NodeResizeObserver.prototype = Object.create(EventEmitter.prototype);
			NodeResizeObserver.prototype.objectType = 'NodeResizeObserver';

			NodeResizeObserver.prototype.observe = function(node, cb, forceObserve) {
				
				if (!this.resizeObserver)
					return;

				if (!node.id || this._eventHandlers[node.id]) {
					node.id = node.id + '-asStyleSource-' + TypeManager.UIDGenerator.newUID();
			//		console.warn('resizeObserver: ambiguous observed node : ' + node.id + '. Please give it a unique DOM id to disambiguate the event callback.' + (!node.id ? '  Given node is: ' : ''), (!node.id ? node : ''));
			//		return;
				}
				this.createEvent(node.id);
				this.addEventListener(node.id, cb);
				
				// Due to some race condition the "resize" event may not be fired for already connected nodes...
				// 		=> emulate it...
				// TODO: study that more carefully... (related to the layout being already resolved in the browser, etc.)
				if (node.ownerDocument && !forceObserve) {
			//		console.log(node);
					var bBox = node.getBoundingClientRect();
			//		console.log(bBox);
					var boundingBox = {
						h : bBox.height,
						w : bBox.width
					};
					this.trigger(node.id, {boundingBox : boundingBox});
				}
				
				this.resizeObserver.observe(node, {box : 'border-box'});
			};

			NodeResizeObserver.prototype.unobserve = function(node) {
				if (!this.resizeObserver)
					return;
					
				this.deleteEvent(node.id);
				this.clearEventListeners(node.id);
				this.resizeObserver.unobserve(node);
				
				node.id = node.id.replace(/-asStyleSource-\d+/, '');
				if (!node.id)
					node.removeAttribute('id');
			};

			NodeResizeObserver.prototype.getSize = function(observerEntries) {
				var boundingBox = {};
				
				
				observerEntries.forEach(function(entry) {
					if (!this.hasStdEvent(entry.target.id))
						return;
					if(entry.contentBoxSize) {
						// Checking for chrome as using a non-standard array
						if (entry.contentBoxSize[0]) {
							boundingBox.h = entry.contentBoxSize[0].blockSize; 
							boundingBox.w = entry.contentBoxSize[0].inlineSize;
						} else {
							boundingBox.h = entry.contentBoxSize.blockSize; 
							boundingBox.w = entry.contentBoxSize.inlineSize;
						}          
					} else {
						boundingBox.h = entry.contentRect.height; 
						boundingBox.w = entry.contentRect.width;
					}
			//		console.log('boundingBox', boundingBox);
					this.trigger(entry.target.id, {boundingBox : boundingBox});
					
				}, this);
			};

















			/**
			 * @virtual
			 */
			EventEmitter.prototype.createEvents = function() {};				// virtual

			/**
			 * Creates a listenable event : generic event creation (onready, etc.)
			 * 
			 * @param {string} eventType
			 */
			EventEmitter.prototype.createEvent = function(eventType) {
				this._eventHandlers[eventType] = [];
				this._one_eventHandlers[eventType] = [];
				// identified event handlers are meant to be disposable
				this._identified_eventHandlers[eventType] = [];
			};
			/**
			 * Deletes... an event
			 * 
			 * @param {string} eventType
			 */
			EventEmitter.prototype.deleteEvent = function(eventType) {
				delete this['on' + eventType];
			};

			EventEmitter.prototype.hasStdEvent = function(eventType) {
				
				return (typeof this._eventHandlers[eventType] !== 'undefined');
			};

			/**
			 * @param {string} eventType
			 * @param {function} handler : the handler to remove (the associated event stays available) 
			 */
			EventEmitter.prototype.removeEventListener = function(eventType, handler) {
				if (typeof this._eventHandlers[eventType] === 'undefined')
					return;
				for(var i = 0, l = this._eventHandlers[eventType].length; i < l; i++) {
					if (this._eventHandlers[eventType][i] === handler) {
						this._eventHandlers[eventType].splice(i, 1);
					}
				}
				for(var i = 0, l = this._one_eventHandlers[eventType].length; i < l; i++) {
					if (this._one_eventHandlers[eventType][i] === handler) {
						this._one_eventHandlers[eventType].splice(i, 1);
					}
				}
				for(var i = 0, l = this._identified_eventHandlers[eventType].length; i < l; i++) {
					if (this._identified_eventHandlers[eventType][i] === handler) {
						this._identified_eventHandlers[even-tType].splice(i, 1);
					}
				}
			};

			/**
			 * These methods are only able to add "permanent" handlers : "one-shot" handlers must be added by another mean 
			 * @param {string} eventType
			 * @param {function} handler : the handler to add 
			 * @param {number} index : where to add
			 */
			EventEmitter.prototype.addEventListener = function(eventType, handler) {
				if (typeof this._eventHandlers[eventType] === 'undefined')
					return;
				this._eventHandlers[eventType].push(handler);
			};

			EventEmitter.prototype.addEventListenerAt = function(eventType, handler, index) {
				if (typeof this._eventHandlers[eventType] === 'undefined')
					return;
				this._eventHandlers[eventType].splice(index, 0, handler);
			};

			EventEmitter.prototype.removeEventListenerAt = function(eventType, index) {
				if (typeof this._eventHandlers[eventType] === 'undefined')
					return;
				if (typeof index === 'number' && index < this._eventHandlers[eventType].length) {
					this._eventHandlers[eventType].splice(index, 1);
				}
			};

			EventEmitter.prototype.clearEventListeners = function(eventType) {
				if (typeof this._eventHandlers[eventType] === 'undefined')
					return;
				this._eventHandlers[eventType].length = 0;
				this._one_eventHandlers[eventType].length = 0;
			};

			/**
			 * Generic Alias for this['on' + eventType].eventCall : this alias can be called rather than the eventCall property
			 * @param {string} eventType
			 * @param {any} payload 
			 */ 
			EventEmitter.prototype.trigger = function(eventType, payload, eventIdOrBubble, eventID) {
				if (!this._eventHandlers[eventType] && this._one_eventHandlers[eventType] && this._identified_eventHandlers[eventType])
					return;
				
				var bubble = false;
				if (typeof eventIdOrBubble === 'boolean')
					bubble = eventIdOrBubble;
				else
					eventID = eventIdOrBubble;
				
				for(var i = 0, l = this._eventHandlers[eventType].length; i < l; i++) {
					if (typeof this._eventHandlers[eventType][i] === 'function')
						this._eventHandlers[eventType][i]({type : eventType, data : payload, bubble : bubble});
				}

				for(var i = this._one_eventHandlers[eventType].length - 1; i >= 0; i--) {
					if (typeof this._one_eventHandlers[eventType][i] === 'function') {
						this._one_eventHandlers[eventType][i]({type : eventType, data : payload, bubble : bubble});
						delete this._one_eventHandlers[eventType][i];
					}
				}
				
				var deleted = 0;
				if (typeof eventID !== 'undefined' && eventID !== 0) {
					for(var i = this._identified_eventHandlers[eventType].length - 1; i >= 0; i--) {
						if (typeof this._identified_eventHandlers[eventType][i] === 'undefined')
							deleted++;
						else if (eventID === this._identified_eventHandlers[eventType][i]['id']) {
							if (typeof this._identified_eventHandlers[eventType][i] === 'object') {
								this._identified_eventHandlers[eventType][i].f({type : eventType, data : payload, bubble : bubble});
								delete this._identified_eventHandlers[eventType][i];
							}
						}
					}
				}

				this._one_eventHandlers[eventType] = [];
				if (deleted === this._identified_eventHandlers[eventType].length)
					this._identified_eventHandlers[eventType] = [];
			};

























				

			module.exports = NodeResizeObserver;
			},{"src/core/TypeManager":57}],55:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @Singletons & @Factories : Core Template Ctor
			 */

			var UIDGenerator = _dereq_('src/core/UIDGenerator');
			var exportedObjects = {};



			/**
			 * @typedef {import("src/core/CoreTypes").Stream} Stream
			 * @typedef {import("src/core/CoreTypes").EventEmitter} EventEmitter
			 * @typedef {import("src/core/CoreTypes").Command} Command
			 * @typedef {import("src/core/Component").HierarchicalObject} HierarchicalObject
			 * @typedef {import("src/core/Component").ComponentWithObservables} ComponentWithObservables
			 * @typedef {import("src/editing/AbstractStylesheet")} AbstractStylesheet
			 * @typedef {import("src/events/JSKeyboardMap")} KeyboardMap
			 */


			/**
			 * @constructor ValueObject
			 * @param {ViewTemplate|HierarchicalTemplate} defObj
			 * @param {String} isSpecial
			 */
			var ValueObject = function(defObj, isSpecial) {
				// @ts-ignore : "Expression not callable: {} has no signature" => seems calling a function defined as "described property" isn't supported
				this.set(defObj, isSpecial);
			};
			ValueObject.prototype.objectType = 'ValueObject';
			exportedObjects.ValueObject = ValueObject;
			Object.defineProperty(ValueObject.prototype, 'model', {value : null});			// virtual
			Object.defineProperty(ValueObject.prototype, 'get',{
				value : function() {}
			});
			Object.defineProperty(ValueObject.prototype, 'isEmpty', {
				/**
				 * @param {Object} obj
				 */
				value : function(obj) {
					for(var prop in obj) {
						return false;
					};
					return true;
				}
			});
			Object.defineProperty(ValueObject.prototype, 'set', {
				/**
				 * @param {ViewTemplate|HierarchicalTemplate} def
				 * @param {String} isSpecial
				 */
				value : function(def, isSpecial) {
					const keys = Object.keys(def);
					keys.forEach((/** @type {keyof (ViewTemplate|HierarchicalTemplate)} */p) => {
						if (isSpecial === 'rootOnly' && def[p])
							this[p] = def[p];
						else {
							const n = p + 'Model';
							if (n in exportedObjects) {
								if (Array.isArray(def[p])) {
									// @ts-ignore : "string cannot index {typeof exportedObjects}" : 
									// => but we already tested "n in exportedObjects" 2 lines above
									if (exportedObjects[n] === PropFactory) {
										// @ts-ignore : "property length does not exist on type never" : 
										// => but we already tested "Array.isArray(def[p])" 2 lines above
										for(let i = 0, l = def[p].length; i < l; i++) {
											// @ts-ignore : "property push does not exist on type never" : 
											// => but attributes, props & states are initialized as array in the child-ctor
											this[p].push(PropFactory(def[p][i]));
										}
									}
									else {
										// @ts-ignore : "property length does not exist on type never" : 
										// => but we already tested "Array.isArray(def[p])" a few lines above
										for(let i = 0, l = def[p].length; i < l; i++) {
											// @ts-ignore : "property push does not exist on type never" : 
											// => we can rely here on the fact that the object passed by the user is already type-checked
											// so a prop passed as array DO correspond to an array initialized in the child-ctor
											this[p].push(
												// @ts-ignore : "string cannot index {typeof exportedObjects}" : 
												// => but we already tested "n in exportedObjects" a few lines above
												new exportedObjects[n](def[p][i], isSpecial)
											);
										}
									}
								}
								// @ts-ignore : "property host does not exist on type never" : 
								// => but we're indeed testing if it exists
								else if (def[p] && def[p].host)
									//@ts-ignore : "type HierarchicalComponentDefModel is not assignable to type never" : 
									// Here, we recurse depending on what the user gave us: if the user wants it, we must do it
									this[p] = new HierarchicalComponentDefModel(def[p], isSpecial);
								// @ts-ignore : "property type does not exist on type never" : 
								// => but we're indeed testing if it exists						
								else if (def[p] && def[p].type === 'ComponentList')
									//@ts-ignore : "type ComponentListDefModel is not assignable to type never" : 
									// Here, we recurse depending on what the user gave us: if the user wants it, we must do it
									this[p] = new ComponentListDefModel(def[p], isSpecial);
								else if (def[p] !== null)
									// @ts-ignore : "string cannot index {typeof exportedObjects}" & "type exportedObjects[p] is not assignable to type never" : 
									// => but we already tested "n in exportedObjects" a few lines above
									this[p] = new exportedObjects[n](def[p], isSpecial);
							}
							else
								this[p] = def[p];
						}
					});
				}
			});



			/**
			 * @constructor 
			 * @param {Object} obj
			 * @param {String} isSpecial
			 */
			var OptionsModel = function(obj, isSpecial) {
				ValueObject.call(this, obj, isSpecial);
			};
			OptionsModel.prototype = Object.create(ValueObject.prototype);
			Object.defineProperty(OptionsModel.prototype, 'objectType', {value :  'AttributesList'});
			exportedObjects.OptionsModel = OptionsModel;


			/**
			 * @constructor KeyboardHotkeysModel
			 * @param {Object} obj					// KeyboardHotkeysTemplate
			 * @param {String} isSpecial
			 */
			var KeyboardHotkeysModel = function(obj, isSpecial) {
				this.ctrlKey = false;						// Boolean
				this.shiftKey = false;						// Boolean
				this.altKey = false;						// Boolean
				this.keyCode = 0;							// Number
				ValueObject.call(this, obj, isSpecial);
			};
			KeyboardHotkeysModel.prototype = Object.create(ValueObject.prototype);
			exportedObjects.KeyboardHotkeysModel = KeyboardHotkeysModel;
			Object.defineProperty(KeyboardHotkeysModel.prototype, 'objectType', {value : 'KeyboardHotkeys'});



















			/**
			 * @constructor PropFactory
			 * @param {Object} obj
			 */
			var PropFactory = function(obj) {
				
				var key = typeof obj === 'string' 
					? obj
					// @ts-ignore : "property getName does not exist on type Object" : 
					// we're indeed allowing to pass already typed object or native objects
					: (obj.getName 
						// @ts-ignore : "property getName does not exist on type Object" : idem
						? obj.getName() 
						: AbstractProp.prototype.getName.call(obj));
				
				if (!(key in PropFactory.props)) {
					// @ts-ignore : "Expression of type any can't be used to index type {}" :
					//  => accessing an object defined as a "described property" isn't supported
					PropFactory.props[key] = new Function('obj', 'this["' + key + '"] = obj["' + key + '"];');
					// @ts-ignore : "Expression of type any can't be used to index type {}" : idem
					PropFactory.props[key].prototype = {};
					// @ts-ignore : "Expression of type any can't be used to index type {}" : idem
					Object.defineProperty(PropFactory.props[key].prototype, 'getName', {
						value :  new Function('return "' + key + '";')
					});
					// @ts-ignore : "Expression of type any can't be used to index type {}" : idem
					Object.defineProperty(PropFactory.props[key].prototype, 'getValue', {
						value :  new Function('return this["' + key + '"];')
					});
					// @ts-ignore : "Expression of type any can't be used to index type {}" : idem
					Object.defineProperty(PropFactory.props[key].prototype, 'key', {
						value :  key
					});
					// @ts-ignore : "Expression of type any can't be used to index type {}" : idem
					Object.defineProperty(PropFactory.props[key].prototype, 'objectType', {
						value :  'AbstractProp'
					});
					// @ts-ignore : "Expression of type any can't be used to index type {}" : idem
					return (new PropFactory.props[key](obj));
				}
				else {
					// @ts-ignore : "Expression of type any can't be used to index type {}" : idem
					return (new PropFactory.props[key](obj));
				}
					
			};
			PropFactory.prototype = Object.create(ValueObject.prototype);
			PropFactory.props = {};
			exportedObjects.PropFactory = PropFactory;



			/**
			 * @constructor AbstractProp
			 * @param {Object} obj
			 */
			var AbstractProp = function(obj){
				var key = typeof obj === 'string' 
					? obj
					// @ts-ignore : "property getName does not exist on type Object" : 
					// we're indeed allowing to pass a native object or just a string representing the name of the prop
					: this.getName.call(obj);
				// @ts-ignore : "Expression of type any can't be used to index type AbstractProp" : 
				// naming the propos is indeed at discretion of the user
				this[key] = obj[key];
			};
			AbstractProp.prototype = Object.create(ValueObject.prototype);
			Object.defineProperty(AbstractProp.prototype, 'getName', {
				value :  function() {
					for(let name in this)
						return name; 
			}});
			Object.defineProperty(AbstractProp.prototype, 'getValue', {
				value :  function() {
					for(let name in this)
						 return this[name]; 
			}});


			/**
			 * @constructor AttributeModel
			 * @param {Object} obj
			 */
			var AttributeModel = function(obj) {
				AbstractProp.call(this, obj);
			};
			AttributeModel.prototype = Object.create(AbstractProp.prototype);
			exportedObjects.AttributeModel = AttributeModel;
			Object.defineProperty(AttributeModel.prototype, 'objectType', {value :  'Attribute'});


			/**
			 * @constructor StateModel
			 * @param {Object} obj
			 */
			var StateModel = function(obj) {
				AbstractProp.call(this, obj);
			};
			StateModel.prototype = Object.create(AbstractProp.prototype);
			exportedObjects.StateModel = StateModel;
			Object.defineProperty(StateModel.prototype, 'objectType', {value : 'States'});


			/**
			 * @constructor PropModel
			 * @param {Object} obj
			 */
			var PropModel = function(obj) {
				AbstractProp.call(this, obj);
			};
			PropModel.prototype = Object.create(AbstractProp.prototype);
			exportedObjects.PropModel = PropModel;
			Object.defineProperty(PropModel.prototype, 'objectType', {value : 'Props'});


			/**
			 * @typedef {Object} ReactivityQueryTemplate
			 * @prperty {Boolean} cbOnly
			 * @prperty {String} from 
			 * @prperty {String} to
			 * @prperty {HTMLElement|Stream} obj
			 * @prperty {Function} filter
			 * @prperty {Function} map
			 * @prperty {Function} subscribe
			 * @prperty {Function} inverseTransform
			 */

			/**
			 * @constructor ReactivityQuery
			 * @param {ReactivityQueryTemplate} obj
			 * @param {String} isSpecial
			 */
			var ReactivityQueryModel = function(obj, isSpecial) {
				this.cbOnly = false;						// Boolean
				this.from = null;							// String
				this.to = null;								// String
				this.obj = null,							// Object [HTMLElement; Stream]
				this.filter = null;							// function (Glorified Pure Function)
				this.map = null;							// function (Glorified Pure Function)
				this.subscribe = null;						// function CallBack
				this.inverseTransform = null;				// function CallBack
				
				ValueObject.call(this, obj, isSpecial);
			};
			ReactivityQueryModel.prototype = Object.create(ValueObject.prototype);
			exportedObjects.ReactivityQueryModel = ReactivityQueryModel;
			Object.defineProperty(ReactivityQueryModel.prototype, 'objectType', {value : 'ReactivityQuery'});
			Object.defineProperty(ReactivityQueryModel.prototype, 'subscribeToStream', {
				/**
				 * @param {Stream} stream
				 * @param {ComponentWithObservables} queriedOrQueryingObj
				 */
				value : function(stream, queriedOrQueryingObj) {
					if (!this.cbOnly
						// @ts-ignore : "expression of type any can't be used to type {}"
						// queriedOrQueryingObj.streams isn't typed cause naming the streams is at the discretion of the user
						// => We're indeed testing if that name exists
						&& !queriedOrQueryingObj.streams[this.to] 
						&& !this.subscribe) {
						console.warn('missing stream or subscription callback on child subscribing from ' + stream.name + ' to ' + this.to);
						return;
					}
					else if (typeof stream === 'undefined') {
						console.error('no stream object passed for subscription', queriedOrQueryingObj, this.from, this.to);
						return;
					}
					if (this.cbOnly) {
						queriedOrQueryingObj._subscriptions.push(
							stream.subscribe(this.subscribe.bind(queriedOrQueryingObj))
								.filter(this.filter, queriedOrQueryingObj)
								.map(this.map, queriedOrQueryingObj)
								.reverse(this.inverseTransform)
						);
					}
					else {
						queriedOrQueryingObj._subscriptions.push(
							// @ts-ignore : "expression of type any can't be used to type {}"
							// queriedOrQueryingObj.streams isn't typed cause naming the streams is at the discretion of the user
							// => We've indeed already tested if that name exists
							stream.subscribe(queriedOrQueryingObj.streams[this.to], 'value')
								.filter(this.filter, queriedOrQueryingObj)
								.map(this.map, queriedOrQueryingObj)
								.reverse(this.inverseTransform)
						);
					}

					var subscription = queriedOrQueryingObj._subscriptions[queriedOrQueryingObj._subscriptions.length - 1];
					
					if (stream._value)
						stream.subscriptions[stream.subscriptions.length - 1].execute(stream._value);
						
					return subscription;
			}});




			/**
			 * @typedef {Object} EventSubscriptionTemplate
			 * @prperty {String} on 
			 * @prperty {Function} subscribe
			 */

			/**
			 * @constructor EventSubscription
			 * @param {EventSubscriptionTemplate} obj
			 * @param {String} isSpecial
			 */
			var EventSubscriptionModel = function(obj, isSpecial) {

				this.on = null;								// String
				this.subscribe = null;						// function CallBack
				ValueObject.call(this, obj, isSpecial);
			};
			EventSubscriptionModel.prototype = Object.create(ValueObject.prototype);
			exportedObjects.EventSubscriptionModel = EventSubscriptionModel;
			Object.defineProperty(EventSubscriptionModel.prototype, 'objectType', {value : 'EventSubscription'});
			Object.defineProperty(EventSubscriptionModel.prototype, 'subscribeToEvent', {
				/**
				 * @param {EventEmitter} targetComponent
				 * @param {EventEmitter} requestingComponent
				 */
				value : function(targetComponent, requestingComponent) {
					targetComponent.addEventListener(this.on, this.subscribe.bind(requestingComponent));
			}});



			/**
			 * @typedef {Object} TaskDefinitionTemplate
			 * @prperty {String} type
			 * @prperty {Function} task 
			 * @prperty {Number} index
			 */

			/**
			 * @constructor TaskDefinition
			 * @param {TaskDefinitionTemplate} obj
			 * @param {String} isSpecial
			 */
			var TaskDefinitionModel = function(obj, isSpecial) {

				this.type = null;						// String
				this.task = null;						// function CallBack
				this.index = null;						// number
				ValueObject.call(this, obj, isSpecial);
			};
			TaskDefinitionModel.prototype = Object.create(ValueObject.prototype);
			exportedObjects.TaskDefinitionModel = TaskDefinitionModel;
			Object.defineProperty(TaskDefinitionModel.prototype, 'objectType', {value : 'asyncTaskSubscription'});
			Object.defineProperty(TaskDefinitionModel.prototype, 'execute', {
				/**
				 * @param {HierarchicalObject} thisArg
				 * @param {HierarchicalComponentDefModel} definition
				 */
				value : function(thisArg, definition) {
					this.task.call(thisArg, definition);
			}});



			/**
			 * @typedef {Object} PublisherDefinitionTemplate
			 * @prperty {String} _name
			 * @property {Array<>} exportedTypes
			 * @prperty {Stream} stream 
			 * @prperty {String} _publisherUID
			 */

			/**
			 * @constructor PublisherDefinitionModel (GlobalyReacheableStream)
			 * @param {PublisherDefinitionTemplate} obj
			 * @param {String} isSpecial
			 */
			var PublisherDefinitionModel = function(obj, isSpecial) {
				
				this._name = null;						// String
				this.exportedTypes = null;				// Array
				this.stream = null;						// Stream
				this._publisherUID = null;				// String
				ValueObject.call(this, obj, isSpecial);
			};
			PublisherDefinitionModel.prototype = Object.create(ValueObject.prototype);
			exportedObjects.PublisherDefinitionModel = PublisherDefinitionModel;
			Object.defineProperty(PublisherDefinitionModel.prototype, 'objectType', {value : 'GlobalyReacheableStream'});

			/*
			 * I don't know what was the purpose of this
			 * It seems completely fake
			 */
			//Object.defineProperty(PublisherDefinitionModel.prototype, 'tryReceiveConnection', {
			//	value : function(subscriber) {
			//			this.exportedTypes.forEach(function(type, sub) {
			//				if (sub.acceptedTypes.indexOf(type) !== -1) {
			//					this.stream.subscribe(sub.streams.updateChannel, 'value');
			//				}
			//			}.bind(this, subscriber));
			//}});
			//// Should not be used in the context of "single-provider" subscribers (the same DefinitionModel may be used in various types of registers)
			//Object.defineProperty(PublisherDefinitionModel.prototype, 'tryLateReceiveConnection', {
			//	value : function(publisherList) {
			//		var publisher;
			//		for(let publisherName in publisherList) {
			//			publisher = publisherList[publisherName];
			//			this.exportedTypes.forEach(function(type, pub) {
			//				if (pub.exportedTypes.indexOf(type) !== -1) {
			//					pub.stream.subscriptions.forEach(function(sub) {
			//						this.stream.subscribe(sub.subscriber.obj, sub.subscriber.prop);
			//					}, this);
			//				}
			//			}.bind(this, publisher));
			//		}
			//}});
			// TODO (we must evaluate this use case in real world, first): 
			// => should also be able to lateDisconnect:
			// when queried, answers true if it already holds a subscription
			// for the currently handled type and for the currently handled subscriber
			// (the register is responsible of passing those as args).
			// 	=> case of a subscriber which should only have -one- provider for a given type (color, font, padding, etc.) 








			/**
			 * @typedef {Object} ViewTemplate
			 * @property {String|null} [UID]
			 * @property {String|null} [type]
			 * @property {Boolean} [isCompound]
			 * @property {String|null} [nodeName]
			 * @property {String|null} [n]
			 * @property {Boolean|null} [isCustomElem]
			 * @property {String} [templateNodeName]
			 * @property {Array<AttributeModel>} [attributes]
			 * @property {Number} [section]
			 * @property {Array<PropModel>} [props]
			 * @property {Array<StateModel>} [states]
			 * @property {Array<PropModel|StateModel>} [streams]
			 * @property {Number|null} [targetSlotIndex]
			 * @property {AbstractStylesheet|null} [sWrapper]
			 * @property {AbstractStylesheet|null} [sOverride]
			 * @property {Command|null} [command]
			 * @property {Array<ReactivityQueryModel>} [reactOnParent]
			 * @property {Array<ReactivityQueryModel>} [reactOnSelf]
			 * @property {Array<EventSubscriptionModel>} [subscribeOnParent]
			 * @property {Array<EventSubscriptionModel>} [subscribeOnChild]
			 * @property {Array<EventSubscriptionModel>} [subscribeOnSelf]
			 * @property {Array<KeyboardMap>} [keyboardSettings] 	<-- this is wrong, but not used until now
			 * @property {Array<KeyboardHotkeysModel>} [keyboardEvents]
			 * @property {Boolean} [isDummy]
			 */


			/**
			 * @constructor SingleLevelComponentDefModel
			 * @param {ViewTemplate | SingleLevelComponentDefModel | 'bare'} obj
			 * @param {String} isSpecial
			 * @param {ViewTemplate|null} givenDef
			 */
			var SingleLevelComponentDefModel = function(obj, isSpecial = '', givenDef = null) {
				if (givenDef)
					Object.assign(this, givenDef);
				else {
					this.UID = null;								// String (overridden at function end)
					this.type = null,							// String
					this.isCompound = false;					// Boolean
					this.nodeName = null;						// String
					this.n = null;								// String
					this.isCustomElem = null;					// Boolean
					this.templateNodeName = null;				// String
					this.attributes = Array();					// Array [AttributeDesc]
					this.section = null;						// Number
					this.props = Array();						// Array [Prop]
					this.states = Array();						// Array [State]
					this.streams = Array();						// Array [Prop, States]
					this.targetSlotIndex = null;				// Number
					this.sWrapper = null;						// Object StylesheetWrapper
					this.sOverride = null;						// Object StylesheetWrapper
					this.command = null;						// Object Command
					this.reactOnParent = Array();				// Array [ReactivityQuery]
					this.reactOnSelf = Array();					// Array [ReactivityQuery]
					this.subscribeOnParent = Array();			// Array [EventSubscription]
					this.subscribeOnChild = Array();			// Array [EventSubscription]
					this.subscribeOnSelf = Array();				// Array [EventSubscription]
					this.keyboardSettings = Array();			// Array [KeyboardHotkeys]
					this.keyboardEvents = Array();				// Array [KeyboardListeners]
					this.isDummy = false;						// Boolean
				}

				if (obj !== 'bare')
					ValueObject.call(this, obj, isSpecial);
				
				this.UID = UIDGenerator.DefUIDGenerator.newUID().toString();
				
				// Fast-access props
				this.streams = this.props.concat(this.states);
				this.isCustomElem = this.nodeName !== null
					// @ts-ignore: "object is possibly null" : we just tested it isn't null
					? this.nodeName.indexOf('-') !== -1
					: null;
			};
			SingleLevelComponentDefModel.prototype = Object.create(ValueObject.prototype);
			exportedObjects.SingleLevelComponentDefModel = SingleLevelComponentDefModel;
			SingleLevelComponentDefModel.prototype.objectType = 'SComponentDef';
			SingleLevelComponentDefModel.prototype.getType = function() {return this.type;};



			/**
			 * @typedef {Object} HierarchicalTemplate
			 * @property {ViewTemplate|SingleLevelComponentDefModel|HierarchicalTemplate|HierarchicalComponentDefModel|ComponentListDefModel} host
			 * @property {ViewTemplate[]|HierarchicalTemplate[]} [subSections]
			 * @property {ViewTemplate[]|HierarchicalTemplate[]} [members]
			 * @property {ListTemplate[]} [lists]
			 * @property {OptionsModel} [options]
			 */


			/**
			 * @constructor HierarchicalComponentDefModel
			 * @param {HierarchicalTemplate|HierarchicalComponentDefModel|SingleLevelComponentDefModel} obj
			 * @param {String} isSpecial
			 */
			var HierarchicalComponentDefModel = function(obj, isSpecial) {

				this.host = null;								// Object SingleLevelComponentDef
				this.subSections = Array();						// Array [SingleLevelComponentDef]
				this.members = Array();							// Array [SingleLevelComponentDef]
				this.lists = Array();							// Array [ComponentListDef]
				this.options = null;							// Object : plain

				ValueObject.call(this, obj, isSpecial);
			};
			HierarchicalComponentDefModel.prototype = Object.create(ValueObject.prototype);
			exportedObjects.HierarchicalComponentDefModel = HierarchicalComponentDefModel;
			Object.defineProperty(HierarchicalComponentDefModel.prototype, 'objectType', {value : 'MComponentDef'});

			HierarchicalComponentDefModel.prototype.getGroupHostDef = function() {
				return (this.host && this.host.host);
			};
			HierarchicalComponentDefModel.prototype.getHostDef = function() {
				return this.host;
			};
			HierarchicalComponentDefModel.prototype.getSection = function() {
				// @ts-ignore : "Expression not callable: {} has no signature" => seems calling a function defined as "described property" isn't supported
				return this.getHostDef().section !== null
					// @ts-ignore : "Expression not callable: {} has no signature" => seems calling a function defined as "described property" isn't supported
					? this.getHostDef().section
					: (
						// @ts-ignore : "Expression not callable: {} has no signature" => seems calling a function defined as "described property" isn't supported
						(this.getGroupHostDef() && this.getGroupHostDef().section)
						|| -1
					);
			};



			/**
			 * @typedef {Object} ListTemplate
			 * @property {String} UID
			 * @property {String} type
			 * @property {Boolean} reflectOnModel
			 * @property {Boolean} augmentModel
			 * @property {Array<any>} each
			 * @prperty {Object} item
			 * @prperty {HierarchicalComponentDefModel} template
			 * @prperty {Number} section
			 * @prperty {Boolean} isInternal
			 */

			/**
			 * @constructor ComponentListDef
			 * @param {ListTemplate} obj
			 * @param {String} isSpecial
			 */
			var ComponentListDefModel = function(obj, isSpecial = '') {

				this.UID = typeof obj.UID === 'string' ? obj.UID : UIDGenerator.DefUIDGenerator.newUID().toString();
				this.type = 'ComponentList';				// String
				this.reflectOnModel = true;					// Boolean
				this.augmentModel = false;					// Boolean
				this.each = Array();								// Array [unknown_type] (model to iterate on)
				this.item = null;							// Object (an item of the model)
				this.template = null;						// Object HierarchicalComponentDef
				this.section = null;						// Number
				this.isInternal = false;					// Boolean

				ValueObject.call(this, obj, isSpecial);
			};
			ComponentListDefModel.prototype = Object.create(ValueObject.prototype);
			exportedObjects.ComponentListDefModel = ComponentListDefModel;
			Object.defineProperty(ComponentListDefModel.prototype, 'objectType', {value : 'ComponentListDef'});











			/**
			 * @factory MockedDefModel
			 * @param {ViewTemplate} obj
			 */
			var mockDef = function(obj) {
				var dummyObj = {UID : 'dummy'};
				return new HierarchicalComponentDefModel(
					{
						host : new SingleLevelComponentDefModel(
							(obj && Object.prototype.toString.call(obj) === '[object Object]')
								? Object.assign(dummyObj, obj)
								: dummyObj)
					},
					'rootOnly');
			};
			exportedObjects.mockDef = mockDef;

			/**
			 * @factory MockedGroupDefModel
			 */
			var mockGroupDef = function() {
				/** @type {ViewTemplate} */
				const dummyTemplate =  {};
				return new HierarchicalComponentDefModel(
					{
						host : new HierarchicalComponentDefModel({
							host : new SingleLevelComponentDefModel(dummyTemplate)
						}, 'rootOnly')
				}, 'rootOnly');
			};
			exportedObjects.mockGroupDef = mockGroupDef;










			/**
			 * @helper setAcceptsProp
			 * @param {HierarchicalComponentDefModel} definition
			 * @param {String} accepts
			 * @param {String} title
			 * @param {Number} onMember
			 */
			var setAcceptsProp = function(definition, accepts, title, onMember) {
				var acceptsObj = {accepts : accepts};
				var titleObj = {title : title};
				if (definition.getGroupHostDef()) {
					if (title) {
						if (typeof onMember === 'number') {
							definition.members[onMember].getHostDef().attributes.push(
								new PropFactory(titleObj)
							);
						}
						else
							definition.getGroupHostDef().props.push(
								new PropFactory(titleObj)
							);
					}
					definition.getGroupHostDef().props.push(
						new PropFactory(
							acceptsObj
						)
					);
				}
				else if (definition.getHostDef()) {
					if (title) {
						if (typeof onMember === 'number')
							definition.members[onMember].getHostDef().attributes.push(
								new PropFactory(titleObj)
							);
						else
							definition.getHostDef().props.push(
								new PropFactory(titleObj)
						);
					}
					
					definition.getHostDef().props.push(
						new PropFactory(acceptsObj)
					);
				}
			};







			/**
			 * @factory HierarchicalComponentDefModel
			 * @param {ViewTemplate & SingleLevelComponentDefModel & HierarchicalTemplate & HierarchicalComponentDefModel & ComponentListDefModel} defObj
			 */
			var createDef = function(defObj) {
				// MASTER VIEW OF A COMPOUND COMPONENT
				if ((defObj.type && defObj.type === 'CompoundComponent') || defObj.isCompound) {
					return (new HierarchicalComponentDefModel({host : new SingleLevelComponentDefModel(defObj, 'hostOnly')}, 'rootOnly'));
				}
				// COMPONENT LIST
				else if (!defObj.host && defObj.type === 'ComponentList')
					return (new HierarchicalComponentDefModel({host : new ComponentListDefModel(defObj)}, 'rootOnly'));
				// VIEW DEF || HOST or VIEW OF A SIMPLE COMPONENT
				else if (!defObj.host) {
					// nodeName may be aliased as "n""
					if (defObj.n && !defObj.type) {
						defObj.nodeName = defObj.n;
						delete defObj.n;
						return (new SingleLevelComponentDefModel(defObj));
					}
					else if ((defObj.nodeName && !defObj.type) || !defObj.isCompound) {
						return (new SingleLevelComponentDefModel(defObj));
					}
				}
				// COMPLETE COMPONENT
				else if (defObj.host) {
					return (new HierarchicalComponentDefModel(defObj, 'rootOnly'));
				}
			};
			exportedObjects.createDef = createDef;

			/**
			 * @helper creates a hierarchical def even without a "host" prop
			 * @param {ViewTemplate & SingleLevelComponentDefModel & HierarchicalTemplate & HierarchicalComponentDefModel & ComponentListDefModel} defObj
			 */
			var createHostDef = function(defObj) {
				return (new HierarchicalComponentDefModel({host : new SingleLevelComponentDefModel(defObj, 'hostOnly')}, 'rootOnly'));
			};
			exportedObjects.createHostDef = createHostDef;





			/**
			 * PRECIOUS HELPERS : for performance concerns, allows looping only on props that are arrays
			 */
			var propsAreArray = [
				'attributes',
				'states',
				'props',
				'streams',
				'reactOnParent',
				'reactOnSelf',
				'subscribeOnParent',
				'subscribeOnChild',
				'subscribeOnSelf'//,
			//	'keyboardSettings',			// TODO: FIX that bypass : implement keyboard handling in the context of the v0.2
			//	'keyboardEvents'
			];
			var reactivityQueries = [
				'reactOnParent',
				'reactOnSelf'
			];
			var eventQueries = [
				'subscribeOnParent',
				'subscribeOnChild',
				'subscribeOnSelf'
			];
			var propsArePrimitives = [
				'type',
				'nodeName',
				'isCustomElem',
				'templateNodeName',
				'targetSlotIndex',
				'section'
			];











			/**
			 * @aliases
			 */
			Object.assign(exportedObjects, {
				attributesModel : PropFactory,									// Object AbstractProp
				statesModel : PropFactory,										// Object AbstractProp
				propsModel : PropFactory,										// Object AbstractProp
				streamsModel : PropFactory,										// Object AbstractProp
				TaskDefinition : TaskDefinitionModel,							// Object TaskDefinition
				PublisherDefinition : PublisherDefinitionModel,					// Object PublisherDefinition
				optionsModel : OptionsModel,									// Object OptionsModel
				list : ComponentListDefModel,	
				reactOnParentModel : ReactivityQueryModel,						// Object ReactivityQueryList
				reactOnSelfModel : ReactivityQueryModel,						// Object ReactivityQueryList
				subscribeOnParentModel : EventSubscriptionModel,				// Object EventSubscriptionsList
				subscribeOnChildModel : EventSubscriptionModel,					// Object EventSubscriptionsList
				subscribeOnSelfModel : EventSubscriptionModel,					// Object EventSubscriptionsList
				createSimpleComponentDef : HierarchicalComponentDefModel,		// Object HierarchicalComponentDef
				setAcceptsProp : setAcceptsProp,								// function : Helper
				
				UIDGenerator : UIDGenerator.UIDGenerator,
				StyleUIDGenerator : UIDGenerator.StyleUIDGenerator,
				DefUIDGenerator : UIDGenerator.DefUIDGenerator,
				
				propsAreArray : propsAreArray,									// Array
				reactivityQueries : reactivityQueries,							// Array
				eventQueries : eventQueries,									// Array
				propsArePrimitives : propsArePrimitives,						// Array
				HierarchicalTemplate : HierarchicalComponentDefModel,
				ViewTemplate : SingleLevelComponentDefModel
			});








			module.exports = exportedObjects;
			},{"src/core/UIDGenerator":58}],56:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor TextSizeGetter
			 * 
			*/

			var TypeManager = _dereq_('src/core/TypeManager');
			var NodeResizeObserver = _dereq_('src/core/ResizeObserver');
			//var appConstants = require('src/appLauncher/appLauncher');


			var TextSizeGetter = function(fontStyle) {
				
				if (typeof document === 'undefined' || typeof document.ownerDocument === 'undefined')
					return;
					
				// width calculation
				this.initCb;
				this.textWidthCanvas = document.createElement("canvas");
				this.textWidthCanvasCtx = this.textWidthCanvas.getContext('2d');
				this.fontStyle = fontStyle;
				this.textWidthCanvasCtx.font = this.fontStyle;
				this.lineHeight = 0;

				this.objectType = 'TextSizeGetter';
				this.resizeObserver = new NodeResizeObserver();
			};
			TextSizeGetter.prototype = {};
			TextSizeGetter.prototype.objectType = 'TextSizeGetter';

			TextSizeGetter.prototype.init = function(sampleNode, cb) {
				this.sampleNode = sampleNode;
				this.initCb = cb;
				this.resizeObserver.observe(sampleNode, this.initWidthCompute.bind(this));
			};

			TextSizeGetter.prototype.oneShot = function(sampleNode, cb) {
				sampleNode.id = sampleNode.id + '-asStyleSource-' + TypeManager.UIDGenerator.newUID();
				this.resizeObserver.observe(sampleNode, this.onOneShot.bind(this, sampleNode, cb));
			};

			TextSizeGetter.prototype.onOneShot = function(sampleNode, cb) {
				var style = window.getComputedStyle(sampleNode);
				sampleNode.id = sampleNode.id.replace(/-asStyleSource-\d+/, '');
				if (!sampleNode.id)
					sampleNode.removeAttribute('id');
				if (cb)
					cb(style);
			};

			TextSizeGetter.prototype.initWidthCompute = function(e) {
				var self = this;

				var style = window.getComputedStyle(this.sampleNode);
				this.fontStyle = style.fontSize + ' ' + style.fontFamily;
				
				this.lineHeight = Number(style.lineHeight.slice(0, -2));
				
				this.textWidthCanvasCtx.font = this.fontStyle;
				
				if (e.data.boundingBox.h > 0) {
					if (this.initCb)
						this.initCb(this.fontStyle);
					this.resizeObserver.unobserve(this.sampleNode);
					this.initCb = undefined;
				} 
			};

			TextSizeGetter.prototype.getTextWidth = function(string) {
				if (typeof string === 'undefined')
					return;
			    return this.textWidthCanvasCtx.measureText(string).width;
			};

			TextSizeGetter.prototype.getTextSizeDependingOnStyle = function(string, fontStyle) {
				if (typeof string === 'undefined')
					return;
				if (fontStyle)
					this.textWidthCanvasCtx.font = fontStyle;
					
				var textSize = this.textWidthCanvasCtx.measureText(string);
				
			    return [
						textSize.width,
						textSize.actualBoundingBoxAscent + textSize.actualBoundingBoxDescent
						];
			};

			module.exports = TextSizeGetter;
			},{"src/core/ResizeObserver":54,"src/core/TypeManager":57}],57:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @Singleton : Core Definitions Ctor
			 * KEPT FOR HISTORICAL COMPATIBILITY : SHOULD NOT BE INCLUDED ANYMORE
			 */
			//var appConstants = require('src/appLauncher/appLauncher');
			var UIDGenerator = _dereq_('src/core/UIDGenerator');
			var PropertyCache = _dereq_('src/core/PropertyCache').ObjectCache;
			var RequestCache = _dereq_('src/core/PropertyCache').RequestCache;
			var StateMachineCache = _dereq_('src/core/PropertyCache').StateMachineCache;
			var CachedTypes = _dereq_('src/core/CachedTypes');
			var stateMachineCache = new StateMachineCache('stateMachineCache');
			var exportedObjects = {};


			/**
			 * @constructor ValueObject
			 */
			var ValueObject = function(defObj, isSpecial) {
				this.set(defObj, isSpecial);
			};
			ValueObject.prototype.objectType = 'ValueObject';
			exportedObjects.ValueObject = ValueObject;
			Object.defineProperty(ValueObject.prototype, 'model', {value : null});			// virtual
			Object.defineProperty(ValueObject.prototype, 'get',{
				value : function() {}
			});
			Object.defineProperty(ValueObject.prototype, 'getGroupHostDef',{
				value : function() {return (this.host && this.host.host);}
			});
			Object.defineProperty(ValueObject.prototype, 'getHostDef',{
				value : function() {return this.host;}
			});
			Object.defineProperty(ValueObject.prototype, 'getType',{
				value : function() {return this.type;}
			});
			Object.defineProperty(ValueObject.prototype, 'getSection',{
				value : function() {
					return this.getHostDef().section !== null
							? this.getHostDef().section
									: (
											(this.getGroupHostDef() && this.getGroupHostDef().section)
											|| -1
										);
				}
			});
			Object.defineProperty(ValueObject.prototype, 'fromArray',{
				value : function(arr) {
					var i = 0;
					for (let p in this.model) {
						this[p] = arr[i++];
					}
				}
			});
			Object.defineProperty(ValueObject.prototype, 'isEmpty', {
				value : function(obj) {
					for(var prop in obj) {
						return false;
					};
					return true;
				}
			});
			Object.defineProperty(ValueObject.prototype, 'set', {
				value : function(def, isSpecial) {
			//		var objectType = Object.getPrototypeOf(this).objectType;
			//		console.trace(def, isSpecial);
					for (let p in def) {
			//			console.log(p, this[p], def[p]);
						if (isSpecial === 'rootOnly' && def[p])
							this[p] = def[p];
						else {
							const n = p + 'Model';
							if (n in exportedObjects) {
								if (Array.isArray(def[p])) {
									if (exportedObjects[n] === PropFactory) {
										for(let i = 0, l = def[p].length; i < l; i++) {
											this[p].push(PropFactory(def[p][i]));
										}
									}
									else {
										for(let i = 0, l = def[p].length; i < l; i++) {
											this[p].push(new exportedObjects[n](def[p][i], isSpecial));
										}
									}
								}
								else if (def[p] && def[p].host)
									this[p] = new HierarchicalComponentDefModel(def[p], isSpecial);
								else if (def[p] && def[p].type === 'ComponentList')
									this[p] = new ComponentListDefModel(def[p], isSpecial);
								else if (def[p] !== null)
									this[p] = new exportedObjects[n](def[p], isSpecial);
							}
							else
								this[p] = def[p];
						}
			//			console.log(p, this[p], def[p]);
					}
				}
			});



			/**
			 * @constructor OptionsListModel
			 * @extends ValueObject
			 */
			var OptionsListModel = function(obj, isSpecial) {
			//	Object.assign(this, {});
				ValueObject.call(this, obj, isSpecial);
			};
			OptionsListModel.prototype = Object.create(ValueObject.prototype);
			Object.defineProperty(OptionsListModel.prototype, 'objectType', {value :  'AttributesList'});
			exportedObjects.OptionsListModel = OptionsListModel;


			/**
			 * @constructor KeyboardHotkeysModel
			 * @extends ValueObject
			 */
			var KeyboardHotkeysModel = function(obj, isSpecial) {
			//	Object.assign(this, {
					this.ctrlKey = false;						// Boolean
					this.shiftKey = false;						// Boolean
					this.altKey = false;						// Boolean
					this.keyCode = 0;							// Number
			//	});
				ValueObject.call(this, obj, isSpecial);
			};
			KeyboardHotkeysModel.prototype = Object.create(ValueObject.prototype);
			exportedObjects.KeyboardHotkeysModel = KeyboardHotkeysModel;
			Object.defineProperty(KeyboardHotkeysModel.prototype, 'objectType', {value : 'KeyboardHotkeys'});



















			/**
			 * @factory PropFactory
			 * 
			 */
			var PropFactory = function(obj) {
				
				var key = typeof obj === 'string' ? obj : (obj.getName ? obj.getName() : AbstractProp.prototype.getName.call(obj));
				
				if (!(key in PropFactory.props)) {
					PropFactory.props[key] = new Function('obj', 'this["' + key + '"] = obj["' + key + '"];');
			//		PropFactory.props[key].name = 'AbstractProp'; 	// read only
					PropFactory.props[key].prototype = {};
					Object.defineProperty(PropFactory.props[key].prototype, 'getName', {
						value :  new Function('return "' + key + '";')
					});
					Object.defineProperty(PropFactory.props[key].prototype, 'getValue', {
						value :  new Function('return this["' + key + '"];')
					});
					Object.defineProperty(PropFactory.props[key].prototype, 'key', {
						value :  key
					});
					Object.defineProperty(PropFactory.props[key].prototype, 'objectType', {
						value :  'AbstractProp'
					});
			//		console.log(obj, PropFactory.props[key]);
					return (new PropFactory.props[key](obj));
				}
				else {
			//		console.log(obj, PropFactory.props[key]);
					return (new PropFactory.props[key](obj));
				}
					
			};
			PropFactory.props = {};
			exportedObjects.PropFactory = PropFactory;



			/**
			 * @constructor AbstractProp
			 * @extends ValueObject
			 */
			var AbstractProp = function(obj){
				var key = typeof obj === 'string' ? obj : this.getName.call(obj);
			//	if (model = dictionary.solveFromDictionary('attributes', key))
			//		Object.assign(this, model);
				this[key] = obj[key];
			};
			AbstractProp.prototype = Object.create(ValueObject.prototype);
			Object.defineProperty(AbstractProp.prototype, 'getName', {
				value :  function() {
					for(let name in this)
						return name; 
			}});
			Object.defineProperty(AbstractProp.prototype, 'getValue', {
				value :  function() {
					for(let name in this)
						 return this[name]; 
			}});


			/**
			 * @constructor AttributeModel
			 * @extends AbstractProp
			 */
			var AttributeModel = function(obj) {
				AbstractProp.call(this, obj);
			};
			AttributeModel.prototype = Object.create(AbstractProp.prototype);
			exportedObjects.AttributeModel = AttributeModel;
			Object.defineProperty(AttributeModel.prototype, 'objectType', {value :  'Attribute'});


			/**
			 * @constructor StateModel
			 * @extends AbstractProp
			 */
			var StateModel = function(obj) {
				AbstractProp.call(this, obj);
			};
			StateModel.prototype = Object.create(AbstractProp.prototype);
			exportedObjects.StateModel = StateModel;
			Object.defineProperty(StateModel.prototype, 'objectType', {value : 'States'});


			/**
			 * @constructor PropModel
			 * @extends AbstractProp
			 */
			var PropModel = function(obj) {
				AbstractProp.call(this, obj);
			};
			PropModel.prototype = Object.create(AbstractProp.prototype);
			exportedObjects.PropModel = PropModel;
			Object.defineProperty(PropModel.prototype, 'objectType', {value : 'Props'});




			/**
			 * @constructor ReactivityQuery
			 * @extends ValueObject
			 */
			var ReactivityQueryModel = function(obj, isSpecial) {
				this.cbOnly = false;						// Boolean
				this.from = null;							// String
				this.to = null;								// String
				this.obj = null,							// Object [HTMLElement; Stream]
				this.filter = null;							// function (GlorifiedPureFunction ;)
				this.map = null;							// function (GlorifiedPureFunction ;)
				this.subscribe = null;						// function CallBack
				this.inverseTransform = null;				// function CallBack
				
				ValueObject.call(this, obj, isSpecial);
			};
			ReactivityQueryModel.prototype = Object.create(ValueObject.prototype);
			exportedObjects.ReactivityQueryModel = ReactivityQueryModel;
			Object.defineProperty(ReactivityQueryModel.prototype, 'objectType', {value : 'ReactivityQuery'});
			Object.defineProperty(ReactivityQueryModel.prototype, 'subscribeToStream', {
				value : function(stream, queriedOrQueryingObj) {
			//		console.log(this.cbOnly, stream, queriedOrQueryingObj, this);
					if (!this.cbOnly && !queriedOrQueryingObj.streams[this.to] && !this.subscribe) {
						console.warn('missing stream or subscription callback on child subscribing from ' + stream.name + ' to ' + this.to);
						return;
					}
					else if (typeof stream === 'undefined') {
						console.error('no stream object passed for subscription', queriedOrQueryingObj, this.from, this.to);
						return;
					}
					if (this.cbOnly) {
						queriedOrQueryingObj._subscriptions.push(
							stream.subscribe(this.subscribe.bind(queriedOrQueryingObj))
								.filter(this.filter)
								.map(this.map)
								.reverse(this.inverseTransform)
						);
					}
					else {
						queriedOrQueryingObj._subscriptions.push(
							stream.subscribe(queriedOrQueryingObj.streams[this.to], 'value')
								.filter(this.filter)
								.map(this.map)
								.reverse(this.inverseTransform)
						);
					}
			//		if (!queriedOrQueryingObj._parent)
			//			console.log(queriedOrQueryingObj);

					var subscription = queriedOrQueryingObj._subscriptions[queriedOrQueryingObj._subscriptions.length - 1];
			//		stateMachineCache.registerTransition(queriedOrQueryingObj._UID, queriedOrQueryingObj.objectType, this, queriedOrQueryingObj._parent._UID);
					
			//		console.warn(this.from, this.to, stream.subscriptions.length, stream._value, stream);
					if (stream._value)
						stream.subscriptions[stream.subscriptions.length - 1].execute(stream._value);
						
					return subscription;
			}});



			/**
			 * @constructor EventSubscription
			 * @extends ValueObject
			 */
			var EventSubscriptionModel = function(obj, isSpecial) {

				this.on = null;								// String
				this.subscribe = null;						// function CallBack
				ValueObject.call(this, obj, isSpecial);
			};
			EventSubscriptionModel.prototype = Object.create(ValueObject.prototype);
			exportedObjects.EventSubscriptionModel = EventSubscriptionModel;
			Object.defineProperty(EventSubscriptionModel.prototype, 'objectType', {value : 'EventSubscription'});
			Object.defineProperty(EventSubscriptionModel.prototype, 'subscribeToEvent', {
				value : function(targetComponent, requestingComponent) {
					targetComponent.addEventListener(this.on, this.subscribe.bind(requestingComponent));
			}});

			/**
			 * @constructor TaskDefinition
			 * @extends ValueObject
			 */
			var TaskDefinitionModel = function(obj, isSpecial) {

				this.type = null;						// String
				this.task = null;						// function CallBack
				this.index = null;						// number
				ValueObject.call(this, obj, isSpecial);
			};
			TaskDefinitionModel.prototype = Object.create(ValueObject.prototype);
			exportedObjects.TaskDefinitionModel = TaskDefinitionModel;
			Object.defineProperty(TaskDefinitionModel.prototype, 'objectType', {value : 'asyncTaskSubscription'});
			Object.defineProperty(TaskDefinitionModel.prototype, 'execute', {
				value : function(thisArg, definition) {
					this.task.call(thisArg, definition);
			}});





			/**
			 * @constructor PublisherDefinition
			 * @extends ValueObject
			 */
			var PublisherDefinitionModel = function(obj, isSpecial) {
				
				this._name = null;						// String
				this.exportedTypes = null;				// Array
				this.stream = null;						// Stream
				this._publisherUID = null;				// String
				ValueObject.call(this, obj, isSpecial);
			};
			PublisherDefinitionModel.prototype = Object.create(ValueObject.prototype);
			exportedObjects.PublisherDefinitionModel = PublisherDefinitionModel;
			Object.defineProperty(PublisherDefinitionModel.prototype, 'objectType', {value : 'GlobalyReacheableStream'});
			Object.defineProperty(PublisherDefinitionModel.prototype, 'tryReceiveConnection', {
				value : function(subscriber) {
						this.exportedTypes.forEach(function(type, sub) {
							if (sub.acceptedTypes.indexOf(type) !== -1) {
								this.stream.subscribe(sub.streams.updateChannel, 'value');
							}
						}.bind(this, subscriber));
			}});
			// Should not be used in the context of "single-provider" subscribers (the same DefinitionModel may be used in various types of registers)
			Object.defineProperty(PublisherDefinitionModel.prototype, 'tryLateReceiveConnection', {
				value : function(publisherList) {
					var publisher;
					for(let publisherName in publisherList) {
						publisher = publisherList[publisherName];
						this.exportedTypes.forEach(function(type, pub) {
							if (pub.exportedTypes.indexOf(type) !== -1) {
								pub.stream.subscriptions.forEach(function(sub) {
									this.stream.subscribe(sub.subscriber.obj, sub.subscriber.prop);
								}, this);
							}
						}.bind(this, publisher));
					}
			}});
			// TODO: should also be able to lateDisconnect:
			// when queried, answers true if it already holds a subscription
			// for the currently handled type and for the currently handled subscriber
			// (the register is responsible of passing those as args).
			// 	=> case of a subscriber which should only have -one- provider for a given type (color, font, padding, etc.) 











			/**
			 * @constructor SingleLevelComponentDefModel
			 * @extends ValueObject
			 */
			var SingleLevelComponentDefModel = function(obj, isSpecial, givenDef) {
				if (givenDef)
					Object.assign(this, givenDef);
				else {
					this.UID = null;								// overridden at function end
					this.type = null,							// String
					this.isCompound = false;					// Boolean
					this.nodeName = null;						// String
					this.isCustomElem = null;					// Boolean
					this.templateNodeName = null;				// String
					this.attributes = [];						// Array [AttributeDesc]
					this.section = null;						// Number
					this.props = [];							// Array [Prop]
					this.states = [];							// Array [State]
					this.streams = [];							// Array [Prop, States]
					this.targetSlotIndex = null;				// Number
					this.sWrapper = null;						// Object StylesheetWrapper
					this.sOverride = null;						// Object StylesheetWrapper
					this.command = null;						// Object Command
					this.reactOnParent = [];					// Array [ReactivityQuery]
					this.reactOnSelf = [];						// Array [ReactivityQuery]
					this.subscribeOnParent = [];				// Array [EventSubscription]
					this.subscribeOnChild = [];					// Array [EventSubscription]
					this.subscribeOnSelf = [];					// Array [EventSubscription]
					this.keyboardSettings = [];					// Array [KeyboardHotkeys]
					this.keyboardEvents = [];					// Array [KeyboardListeners]
					this.isDummy = false;
				}

				if (obj !== 'bare')
					ValueObject.call(this, obj, isSpecial);
				
				this.UID = UIDGenerator.DefUIDGenerator.newUID().toString();
				
				// Fast-access props
				this.streams = this.props.concat(this.states);
				this.isCustomElem = this.nodeName !== null ? this.nodeName.indexOf('-') !== -1 : null;
			//	console.error(this.nodeName, this, obj);
			//	console.log("this.isCustomElem", this.isCustomElem, this.nodeName !== null, this.nodeName.indexOf('-') !== -1);
			};
			SingleLevelComponentDefModel.prototype = Object.create(ValueObject.prototype);
			exportedObjects.SingleLevelComponentDefModel = SingleLevelComponentDefModel;
			Object.defineProperty(SingleLevelComponentDefModel.prototype, 'objectType', {value : 'SComponentDef'});



			/**
			 * @constructor HierarchicalComponentDefModel
			 * @extends ValueObject
			 */
			var HierarchicalComponentDefModel = function(obj, isSpecial) {

				this.host = null;							// Object SingleLevelComponentDef
				this.subSections = [];						// Array [SingleLevelComponentDef]
				this.members = [];							// Array [SingleLevelComponentDef]
				this.lists = [];							// Array [ComponentListDef]
				this.options = null;						// Object : plain

				ValueObject.call(this, obj, isSpecial);
			};
			HierarchicalComponentDefModel.prototype = Object.create(ValueObject.prototype);
			exportedObjects.HierarchicalComponentDefModel = HierarchicalComponentDefModel;
			Object.defineProperty(HierarchicalComponentDefModel.prototype, 'objectType', {value : 'MComponentDef'});



			/**
			 * @constructor ComponentListDef
			 * @extends ValueObject
			 */
			var ComponentListDefModel = function(obj, isSpecial) {

				this.UID = typeof obj.UID === 'string' ? obj.UID : UIDGenerator.DefUIDGenerator.newUID().toString();
				this.type = 'ComponentList';				// String
				this.reflectOnModel = true;					// Boolean
				this.augmentModel = false;					// Boolean
				this.each = [];								// Array [unknown_type] (model to iterate on)
				this.item = null;							// Object (an item of the model)
				this.template = null;						// Object HierarchicalComponentDef
				this.section = null;						// Number

				ValueObject.call(this, obj, isSpecial);
			};
			ComponentListDefModel.prototype = Object.create(ValueObject.prototype);
			exportedObjects.ComponentListDefModel = ComponentListDefModel;
			Object.defineProperty(ComponentListDefModel.prototype, 'objectType', {value : 'ComponentListDef'});





			/**
			 * @constructor ComponentDefCache
			 * 
			 */
			var ComponentDefCache = function() {
				this.knownIDs = {};
				this.randomUID = 0;
			};
			ComponentDefCache.prototype = {};
			ComponentDefCache.prototype.getUID = function(uniqueID) {
				if (uniqueID in this.knownIDs)
					return this.knownIDs[uniqueID];
				else if (!(uniqueID in this.knownIDs) || !uniqueID || !uniqueID.length) {
					uniqueID = uniqueID ? uniqueID : (this.randomUID++).toString();
					this.knownIDs[uniqueID] = uniqueID;
					return this.knownIDs[uniqueID];
				}
			};

			ComponentDefCache.prototype.isKnownUID = function(uniqueID) {
				return this.getUID(uniqueID);
			};

			ComponentDefCache.prototype.setUID = function(uniqueID, globalObj) {
				return (this.knownIDs[uniqueID] = globalObj);
			};






			/**
			 * @constructor createComponentDef
			 * @factory
			 * HISTORICAL - DO NOT USE ANYMORE
			 */
			var createComponentDef = function(defObj, useCache, isSpecial) {
				var def, UID;
			//	console.log(useCache);
				if (useCache) {
					UID = exportedObjects.definitionsCache.isKnownUID(useCache);
				}
				
				if (!UID || typeof UID === 'string') {
					// shorthand to create defs with just a "type", maybe an attributesList, but only the first props in the model...
					if (typeof defObj === 'string') {
						var c = new SingleLevelComponentDefModel('bare');
						ValueObject.prototype.fromArray.call(c, arguments);
						def = new HierarchicalComponentDefModel({host : c}, 'rootOnly');
					}
					if (typeof defObj === 'object' && defObj.host) {
			//			console.log('HierarchicalComponentDefModel', defObj, isSpecial);
						def = new HierarchicalComponentDefModel(defObj, isSpecial);
						if (isSpecial === 'isDummy')
							def.getHostDef().isDummy = 'isDummy';
			//			console.log(def);
					}
					else if (typeof defObj === 'object' && defObj.type === 'ComponentList')
						def = new HierarchicalComponentDefModel({host : new ComponentListDefModel(defObj, isSpecial)}, 'rootOnly');
					else if (typeof defObj === 'object' && defObj.nodeName || defObj.type || defObj.UID || defObj.sWrapper || (defObj.attributes || defObj.states || defObj.props)) {
						if (isSpecial !== 'hostOnly')
							def = new HierarchicalComponentDefModel({host : new SingleLevelComponentDefModel(defObj, isSpecial)}, 'rootOnly');
						else
							def = new SingleLevelComponentDefModel(defObj);
					}
				}
			//	console.log(def);
				if (typeof UID === 'string')
					return exportedObjects.definitionsCache.setUID(UID, def);
				else if (typeof UID !== 'undefined')
					return UID;
				else
					return def;
			};
			exportedObjects.createComponentDef = createComponentDef;


			/**
			 * @constructor MockedDefModel
			 * @factory
			 */
			var mockDef = function(obj) {
				var dummyObj = {UID : 'dummy'};
				return new HierarchicalComponentDefModel({host : new SingleLevelComponentDefModel(
					(obj && Object.prototype.toString(obj) === '[object Object]') ? Object.assign(dummyObj, obj) : dummyObj
				)}, 'rootOnly');
			};
			exportedObjects.mockDef = mockDef;

			var mockGroupDef = function() {
			//	var dummyObj = {UID : 'dummy'};
				return new HierarchicalComponentDefModel({host : new HierarchicalComponentDefModel({
					host : new SingleLevelComponentDefModel()
				}, 'rootOnly'
			//		(obj && Object.prototype.toString(obj) === '[object Object]') ? Object.assign(dummyObj, obj) : dummyObj
				)}, 'rootOnly');
			};
			exportedObjects.mockGroupDef = mockGroupDef;
			//console.log(mockGroupDef());

			var setAcceptsProp = function(definition, accepts, title, onMember) {
				var acceptsObj = {accepts : accepts};
				var titleObj = {title : title};
				if (definition.getGroupHostDef()) {
					if (title) {
						if (typeof onMember === 'number')
							definition.members[onMember].getHostDef().attributes.push(
								new PropFactory(
									titleObj
								)
							);
						else
							definition.getGroupHostDef().props.push(
								new PropFactory(
									titleObj
								)
							);
					}
					definition.getGroupHostDef().props.push(
						new PropFactory(
							acceptsObj
						)
					);
				}
				else if (definition.getHostDef()) {
					if (title) {
						if (typeof onMember === 'number')
							definition.members[onMember].getHostDef().attributes.push(
								new PropFactory(
									titleObj
								)
							);
						else
							definition.getHostDef().props.push(
							new PropFactory(
								titleObj
							)
						);
					}
					
					definition.getHostDef().props.push(
						new PropFactory(
							acceptsObj
						)
					);
				}
			};










			/**
			 * @typedef {(HierarchicalComponentDefModel|SingleLevelComponentDefModel)} ComponentDef
			 */

			/**
			 * @constructor createDef
			 * @factory
			 * @param {object} defObj 
			 * @return {ComponentDef}
			 */
			//var createDef = function(defObj) {
			////	console.log(defObj);
			//	// MASTER VIEW OF A COMPOUND COMPONENT
			//	if ((defObj.type && defObj.type === 'CompoundComponent') || defObj.isCompound) {
			////		if (defObj.nodeName === 'big-modalbox')
			////			console.log('big-modalbox host', new HierarchicalComponentDefModel({host : new SingleLevelComponentDefModel(defObj, 'hostOnly')}, 'rootOnly'));
			//		return (new HierarchicalComponentDefModel({host : new SingleLevelComponentDefModel(defObj, 'hostOnly')}, 'rootOnly'));
			//	}
			//	// COMPLETE COMPONENT (without host shorthand)
			//	else if (defObj.type) {
			//		return (new HierarchicalComponentDefModel({host : new SingleLevelComponentDefModel(defObj, 'hostOnly')}, 'rootOnly'));
			//	}
			//	// COMPLETE COMPONENT (host given)
			//	else if (defObj.host) {
			////		if (!defObj.host.host)
			////			console.log(defObj);
			////		if (defObj.host.host && defObj.host.host.nodeName === 'big-modalbox')
			////			console.log('big-modalbox complete', new HierarchicalComponentDefModel(defObj, 'rootOnly'));
			//		return (new HierarchicalComponentDefModel(defObj, 'rootOnly'));
			//	}
			//	// VIEW DEF || HOST or VIEW OF A SIMPLE COMPONENT
			//	else if (!defObj.host) {
			//		if (defObj.n && !defObj.type) {
			//			defObj.nodeName = defObj.n;
			//			delete defObj.n;
			//			return (new SingleLevelComponentDefModel(defObj));
			//		}
			//		else if ((defObj.nodeName && !defObj.type) || !defObj.isCompound) {
			////			console.log(new SingleLevelComponentDefModel(defObj));
			//			return (new SingleLevelComponentDefModel(defObj));
			//		}
			//	}
			//}
			var createDef = function(defObj) {
			//	console.log(defObj);
				// MASTER VIEW OF A COMPOUND COMPONENT
				if ((defObj.type && defObj.type === 'CompoundComponent') || defObj.isCompound) {
			//		if (defObj.sOverride)
			//			console.log((new HierarchicalComponentDefModel({host : new SingleLevelComponentDefModel(defObj, 'hostOnly')}, 'rootOnly')));
			//		if (defObj.nodeName === 'big-modalbox')
			//			console.log('big-modalbox host', new HierarchicalComponentDefModel({host : new SingleLevelComponentDefModel(defObj, 'hostOnly')}, 'rootOnly'));
					return (new HierarchicalComponentDefModel({host : new SingleLevelComponentDefModel(defObj, 'hostOnly')}, 'rootOnly'));
				}
				// VIEW DEF || HOST or VIEW OF A SIMPLE COMPONENT
				else if (!defObj.host) {
					if (defObj.n && !defObj.type) {
						defObj.nodeName = defObj.n;
						delete defObj.n;
						return (new SingleLevelComponentDefModel(defObj));
					}
					else if ((defObj.nodeName && !defObj.type) || !defObj.isCompound) {
			//			console.log(new SingleLevelComponentDefModel(defObj));
						return (new SingleLevelComponentDefModel(defObj));
					}
				}
				// COMPLETE COMPONENT
				else if (defObj.host) {
			//		if (!defObj.host.host)
			//			console.log(defObj);
			//		if (defObj.host.host && defObj.host.host.nodeName === 'big-modalbox')
			//			console.log('big-modalbox complete', new HierarchicalComponentDefModel(defObj, 'rootOnly'));
					return (new HierarchicalComponentDefModel(defObj, 'rootOnly'));
				}
			};

			exportedObjects.createDef = createDef;





















			/**
			 * @dictionary
			 */
			var Dictionary = function() {
					this.attributes = {};
					this.states = {};
					this.props = {};
			};
			Dictionary.prototype.solveFromDictionary = function(type, key) {
					
				if (!(this[type] && this[type][key])) {
					if (!this[type]) {
						this[type] = {};
						if (!this[type][key]) {
							this[type][key] = {};
							this[type][key][key] = type === 'states' ? undefined : null;
						}
					}
				}
				
				return this[type][key];
			};
			var dictionary = new Dictionary();

			/**
			 * @finder function
			 */
			exportedObjects.findProp = function(name, item) {
				for(let prop in item)
					return prop === name;
			};

			/**
			 * PRECIOUS HELPERS : for performance concerns, allows looping only on props that are arrays
			 */
			var propsAreArray = [
				'attributes',
				'states',
				'props',
				'streams',
				'reactOnParent',
				'reactOnSelf',
				'subscribeOnParent',
				'subscribeOnChild',
				'subscribeOnSelf'//,
			//	'keyboardSettings',			// TODO: FIX that bypass : implement keyboard handling in the context of the v0.2
			//	'keyboardEvents'
			];
			var reactivityQueries = [
				'reactOnParent',
				'reactOnSelf'
			];
			var eventQueries = [
				'subscribeOnParent',
				'subscribeOnChild',
				'subscribeOnSelf'
			];
			var propsArePrimitives = [
				'type',
				'nodeName',
				'isCustomElem',
				'templateNodeName',
				'targetSlotIndex',
				'section'
			];

			/**
			 * PROPS CACHES : for performance concerns, allows retrieving a prop on the def from anywhere
			 * 		Usefull when instanciating components from a list, as reactivity doesn't change through iterations :
			 * 			- first ensure the def is complete, and store constants : 
			 * 				- the "reactivity" register stores reactivity queries
			 * 				- the "nodes" register stores DOM attributes : relation are uniques, each ID from the def is bound to an attributes-list 
			 * 						=> fill the "nodes" register ( {ID : {nodeName : nodeName, attributes : attributes, cloneMother : DOMNode -but not yet-} )
			 * 			- then compose components, creating streams and views
			 * 				- create static views without instanciating the DOM objects : parentView of the view is either a "View" or a "ChildView"
			 * 						=> assign parentView
			 * 						=> fill the "views" register ( {ID : [view] } )
			 * 					- instanciate streams : if it has streams, it's a host
			 * 						=> fill the "hosts" register ( {ref : Component} ) // alternatively, the "definitionRegister" already holds all "Components"
			 * 				- on composition :
			 * 					- handle reactivity and event subscription : each component as a "unique ID from the def" => retrieve queries from the "reactivity" register
			 * 			- then instanciate DOM objects through cloning : DOM attributes are always static
			 * 					=> iterate on the "views" register
			 * 			- then get back to hosts elem : they're in the "hosts" register
			 * 					- accessing to the component's view, decorate DOM Objects with :
			 * 						- streams
			 * 						- reflexive props
			 * 					- assign reflectedObj to streams
			 * 			- finally reflect streams on the model
			 */







			/**
			 * CORE CACHES
			 */
			var caches = {};
			(function initCaches() {
				propsAreArray.forEach(function(prop) {
					caches[prop] = new PropertyCache(prop);
				});
			})();

			var hostsDefinitionsCacheRegistry = new PropertyCache('hostsDefinitionsCacheRegistry');
			var listsDefinitionsCacheRegistry = new PropertyCache('listsDefinitionsCacheRegistry');
			var permanentProvidersRegistry = new RequestCache('permanentProvidersRegistry');
			var boundingBoxesCache = new PropertyCache('boundingBoxesCache');

			// MAYBE TODO: this cache is used by the RichComponenentInternalsPicker, 
			// to resolve the sWrapper associated with a component out of its UID (? to be confirmed/precised), but
			// we also need a MasterStyleCache, to store each CSS rule at global level,
			// and resolve the binding between a matched rules and a (pseudo-)DOM node, from any outer scope.
			// 		=> could we enhance this cache so it would allow to retrieve a whole sWrapper
			//		al well as a single CSS rule, in order -not- to duplicate the caches used for CSS ?
			// 	=> think of that deeply, and validate any choice regarding performances.
			var sWrappersCache = new PropertyCache('sWrappersCache');

			var hostsRegistry = [];
			var typedHostsRegistry = new PropertyCache('typedHostsRegistry');

			/**
			 * @typedCache {CachedNode} {UID : {nodeName : nodeName, isCustomElem : isCustomElem, cloneMother : DOMNode -but not yet-}}
			 */
			var nodesRegistry = new PropertyCache('nodesRegistry');

			/**
			 * @typedStore {StoredView} {UID : view}
			 */
			var viewsRegistry = [];

			/**
			 * @typedStore {StoredAssocWithModel} {UID : keyOnModel}
			 */
			var dataStoreRegistry = new PropertyCache('dataStoreRegistry');

			/**
			 * @typedStore {StoredStyleIFace} {UID : UID_OfTheOpitimizedSelectorBuffer}
			 */
			var masterStyleRegistry = new PropertyCache('masterStyleRegistry');

			/**
			 * @typedStore {StoredStyleIFace} {UID : UID_OfTheViewIdentifiedAsNeedingUpdate}
			 */
			var pendingStyleRegistry = new PropertyCache('pendingStyleRegistry');

			/**
			 * @typedStore {StoredStyleIFace} {UID : UID_OfTheViewIdentifiedAsNeedingUpdate}
			 */
			var UApendingStyleRegistry = new PropertyCache('UApendingStyleRegistry');

			/**
			 * @typedStore {StoredNodeFromNaiveDOM} {UID : nodeUID}
			 */
			var naiveDOMRegistry = new PropertyCache('naiveDOMRegistry');

			/**
			 * @typedStore {StoredLayoutNode} {UID : nodeUID}
			 */
			var layoutNodesRegistry = new PropertyCache('layoutNodesRegistry');

			/**
			 * @typedStore {StoredTextNode} {UID : nodeUID}
			 */
			var textNodesRegistry = new PropertyCache('textNodesRegistry');

			/**
			 * @typedStore {StoredRasterShape} {UID : nodeUID}
			 */
			var rasterShapesRegistry = new PropertyCache('rasterShapesRegistry');

			/**
			 * @typedStore {StoredFlexCtx} {UID : nodeUID}
			 */
			var flexCtxRegistry = new PropertyCache('flexCtxRegistry');

			/**
			 * @typedStore {StoredLayoutCallback} {UID : nodeUID}
			 */
			var layoutCallbacksRegistry = new PropertyCache('layoutCallbacksRegistry');

			/**
			 * @typedStore {FontSizeCache} {UID : nodeUID}
			 */
			var fontSizeBuffersCache = new PropertyCache('fontSizeBuffersCache');

			//console.log(exportedObjects.definitionsCache);

			//console.log(hostsDefinitionsCacheRegistry);
			//console.log(listsDefinitionsCacheRegistry);
			//console.log(naiveDOMRegistry);
			//console.log(masterStyleRegistry);
			//console.log(rasterShapesRegistry);
			//console.log(permanentProvidersRegistry);

			//console.log(viewsRegistry);














			/**
			 * @aliases
			 */
			Object.assign(exportedObjects, {
				PropertyCache : PropertyCache,
				hostsDefinitionsCacheRegistry : hostsDefinitionsCacheRegistry,	// Object PropertyCache
				listsDefinitionsCacheRegistry : listsDefinitionsCacheRegistry,	// Object PropertyCache
				permanentProvidersRegistry : permanentProvidersRegistry,		// Object RequestCache
				boundingBoxesCache : boundingBoxesCache,						// Object PropertyCache
				stateMachineCache : stateMachineCache,							// Object PropertyCache
				sWrappersCache : sWrappersCache,								// Object PropertyCache
				typedHostsRegistry : typedHostsRegistry,						// Object PropertyCache {defUID : [Components]}
				naiveDOMRegistry : naiveDOMRegistry,							// Object PropertyCache
				masterStyleRegistry : masterStyleRegistry,						// Object PropertyCache
				UApendingStyleRegistry : UApendingStyleRegistry,					// Object PropertyCache
				pendingStyleRegistry : pendingStyleRegistry,					// Object PropertyCache
				rasterShapesRegistry : rasterShapesRegistry,					// Object PropertyCache
				layoutNodesRegistry :layoutNodesRegistry,						// Object PropertyCache
				textNodesRegistry : textNodesRegistry,							// Object PropertyCache
				flexCtxRegistry : flexCtxRegistry,								// Object PropertyCache
				layoutCallbacksRegistry : layoutCallbacksRegistry,				// Object PropertyCache
				fontSizeBuffersCache : fontSizeBuffersCache,									// Object PropertyCache
				caches : caches,												// Object {prop : PropertyCache}
				nodesRegistry : nodesRegistry,
				viewsRegistry : viewsRegistry,
				dataStoreRegistry : dataStoreRegistry,
				propsAreArray : propsAreArray,
				reactivityQueries : reactivityQueries,
				eventQueries : eventQueries,
				propsArePrimitives : propsArePrimitives,
				definitionsCache : new ComponentDefCache(),
				attributesModel : PropFactory,									// Object AbstractProp
				statesModel : PropFactory,										// Object AbstractProp
				propsModel : PropFactory,										// Object AbstractProp
				streamsModel : PropFactory,										// Object AbstractProp
				TaskDefinition : TaskDefinitionModel,							// Object TaskDefinition
				PublisherDefinition : PublisherDefinitionModel,					// Object PublisherDefinition
				optionsModel : OptionsListModel,								// Object OptionsList
				// "host" key catch the special condition and should always be flat ("artificial" deepening of flat defs is handled in the factory function)
				hostModel : SingleLevelComponentDefModel,						// Object SingleLevelComponentDef
				// "numericaly indexed" keys (in an array) catch the HierarchicalComponentDefModel
				subSectionsModel : HierarchicalComponentDefModel,				// Array [HierarchicalComponentDefModel]
				membersModel : HierarchicalComponentDefModel,					// Array [HierarchicalComponentDefModel]
				list : ComponentListDefModel,
				reactOnParentModel : ReactivityQueryModel,						// Object ReactivityQueryList
				reactOnSelfModel : ReactivityQueryModel,						// Object ReactivityQueryList
				subscribeOnParentModel : EventSubscriptionModel,				// Object EventSubscriptionsList
				subscribeOnChildModel : EventSubscriptionModel,					// Object EventSubscriptionsList
				subscribeOnSelfModel : EventSubscriptionModel,					// Object EventSubscriptionsList
				createSimpleComponentDef : HierarchicalComponentDefModel,		// Object HierarchicalComponentDef
				setAcceptsProp : setAcceptsProp,
				UIDGenerator : UIDGenerator.UIDGenerator,
				StyleUIDGenerator : UIDGenerator.StyleUIDGenerator,
				DefUIDGenerator : UIDGenerator.DefUIDGenerator,
			//	debugFlexCtx : {}
			});



			module.exports = exportedObjects;


			},{"src/core/CachedTypes":41,"src/core/PropertyCache":51,"src/core/UIDGenerator":58}],58:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @factory UIDGenerator
			 * 
			 */

			var Generator = function() {
				this.nextUID = 0;
			};

			Generator.prototype.newUID = function() {
				return (this.nextUID++).toString();
			};




			var GeneratorForStyles = function() {
				this.nextUID = 0;
			};

			GeneratorForStyles.prototype.newUID = function() {
				return 'Style_' + (this.nextUID++).toString();
			};




			var GeneratorForDefs = function() {
				this.nextUID = 0;
			};

			GeneratorForDefs.prototype.newUID = function() {
				return 'Def_' + (this.nextUID++).toString();
			};




			var GeneratorForLayoutNodes = function() {
				this.nextUID = 0;
			};

			GeneratorForLayoutNodes.prototype.newUID = function() {
				return (this.nextUID++).toString();
			};

			GeneratorForLayoutNodes.prototype.resetCursor = function() {
				this.nextUID = 0;
			};



			var GeneratorForTweens = function() {
				this.nextUID = 0;
			};

			GeneratorForTweens.prototype.newUID = function() {
				return (this.nextUID++).toString();
			};

			GeneratorForTweens.prototype.resetCursor = function() {
				this.nextUID = 0;
			};




			var GeneratorFor16bitsInt = function() {
				this.nextUID = 0;
			};

			GeneratorFor16bitsInt.prototype.newUID = function() {
				return [++this.nextUID & 0x00FF, (this.nextUID & 0x0000FF00) >> 8] ;
			};

			GeneratorFor16bitsInt.prototype.intFromNumber = function(number) {
				return [number & 0x00FF, (number & 0x0000FF00) >> 8] ;
			};

			GeneratorFor16bitsInt.prototype.numberFromInt = function(int16AsArray) {
				return int16AsArray[0] | (int16AsArray[1] << 8) ;
			};




			module.exports =  {
				UIDGenerator : new Generator(),
				StyleUIDGenerator : new GeneratorForStyles(),
				DefUIDGenerator : new GeneratorForDefs(),
				NodeUIDGenerator : new GeneratorForLayoutNodes(),
				TweenUIDGenerator : GeneratorForTweens,
				GeneratorFor16bitsInt : new GeneratorFor16bitsInt()
			};
			},{}],59:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @helpers _functionalStyleHelpers
			 */


			function noOp() {}


			function falseCombinator() {
				return false;
			}

			function zeroOrOneCombinator(value) {
				return +(value >= 0) || 0;
			}







			module.exports = {
				noOp : noOp,
				falseCombinator : falseCombinator,
				zeroOrOneCombinator : zeroOrOneCombinator
			};
			},{}],60:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @mixin elementConstructorDecorator_HSD
			 * 
			 */


			var TypeManager = _dereq_('src/core/TypeManager');


			var elementConstructorDecorator_HSD = {};

			elementConstructorDecorator_HSD['Hyphen-Star-Dash'] = {
					decorateAttributes : function (nodeName, componentAttributes) {
						
						var titleAttr;
						if (!(titleAttr = componentAttributes.findObjectByKey('title')) || typeof titleAttr['title'] !== 'string')
							return;
						
						var labelAttr, attrName, trim;			
						var trim = (titleAttr && typeof titleAttr['title'] === 'string' && titleAttr['title'].indexOf('-') === 0) || false;
						
						// what to do whit existing attributes : not clear.
						// seems this update syntax shall respect the type : test it
			//			componentAttributes.forEach(function(attr) {
			//				attrName = attr.getName();
			//				switch(attrName) {
			//					case 'label' :
			//						labelAttr = attr['label'] = this.labelDecorator(titleAttr['title'], trim);
			//						break;
			//					case 'id' :
			//						attr['id'] = this.IdDecorator(attr['id'], titleAttr['title'], trim);
			//						break;
			//					}
			//
			//			}, this);
						
						if (!(labelAttr = componentAttributes.findObjectByKey('label')))
							componentAttributes.push(new TypeManager.attributesModel({label : (labelAttr = this.labelDecorator(titleAttr['title'], trim))}));
						
						// CAUTION: don't double-decorate the id
						// Here we'd like to rely on a existing id if it's present, but have short-circuited that option for now
						componentAttributes.push(new TypeManager.attributesModel({id : this.IdDecorator('', titleAttr['title'], trim)}));
						
						// clean title completely
						titleAttr['title'] = this.titleDecorator(titleAttr['title'], trim);
						
						// set a name & a placeholder on input nodes
						if (nodeName && nodeName.toLowerCase().match(/input|smart-input/)) {
							componentAttributes.push(new TypeManager.attributesModel({name : this.nameDecorator(titleAttr['title'])}));
							componentAttributes.push(new TypeManager.attributesModel({placeholder : this.placeHolderDecorator(labelAttr)}));
						}

					},
					labelDecorator : function (title, trim) {
						if (trim)
							return title.replace(/_/g, ' ').slice(1);
						else
							return title.replace(/_/g, ' ');
					},
					IdDecorator : function (id, title, trim) {
						if (id && trim)
							return id + title;
						else
							return trim ? title.slice(1) : title.slice(0);
					},
					titleDecorator : function (title, trim) {
						if (trim)
							return title.slice(1);
						else
							return title.slice(0);
					},
					nameDecorator : function (title) {
						return title.replace(/-/g, '').toLowerCase();
					},
					placeHolderDecorator : function (label) {
						return 'Please type a' + (label.toLowerCase().match(/^[aeio]/) ? 'n ' : ' ') + label + '...';
					}
			};

			module.exports = elementConstructorDecorator_HSD;
			},{"src/core/TypeManager":57}],61:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @mixin elementDecorator_Offset
			 * 
			 */


			var TypeManager = _dereq_('src/core/TypeManager');


			var elementDecorator = {
				offset: function() {

					var rect, win,
						elem = this;

					// Get document-relative position by adding viewport scroll to viewport-relative gBCR
					rect = elem.getBoundingClientRect();
					win = elem.ownerDocument.defaultView;

					return {
						top: rect.top + win.pageYOffset,
						left: rect.left + win.pageXOffset
					};
				},

				// This method will return documentElement in the following cases:
				// 1) For the element inside the iframe without offsetParent, this method will return
				//    documentElement of the parent window
				// 2) For the hidden or detached element
				// 3) For body or html element, i.e. in case of the html node - it will return itself
				//
				// but those exceptions were never presented as a real life use-cases
				// and might be considered as more preferable results.
				//
				// This logic, however, is not guaranteed and can change at any point in the future
				offsetParentGlobal: function() {
					var offsetParent = this.offsetParent;

					while ( offsetParent && offsetParent.style.position === "static" ) {
						offsetParent = offsetParent.offsetParent;
					}

					return offsetParent || documentElement;
				}
			};

			module.exports = elementDecorator;
			},{"src/core/TypeManager":57}],62:[function(_dereq_,module,exports){
			"use strict";


			Object.defineProperty(Array.prototype, 'populateNewObj', {
				writable : true,
				value : function() {
					this.members = 0;
					this.sum = 0;
					this.sumSquares = 0;
					this.md = 0;
					this.avg = 0;
					this.rms = 0;
				}
			});

			Object.defineProperty(Array.prototype, 'average', {
				writable : false,
				value : function (newValue) {
					if (typeof this.sum === 'undefined')
						this.populateNewObj();
					if (typeof newValue !== 'undefined') {
						this.push(newValue);
						this.sum += newValue;
					}
					this.avg = this.sum / (this.members || this.length);
				}
			});
			Object.defineProperty(Array.prototype, 'sortNumeric', {
				writable : false,
				value : function () {
					function compareNumbers(a, b) {
						return a - b;
					}
					this.sort(compareNumbers);
				}
			});
			Object.defineProperty(Array.prototype, 'median', {
				writable : false,
				value : function(value) {
					if (typeof this.md === 'undefined')
						this.populateNewObj();
					if (typeof value === 'undefined') {
						this.sortNumeric();
						this.md = this[Math.floor(this.length / 2)];
					}
					else
						this.md = value;
				}
			});
			Object.defineProperty(Array.prototype, 'rmsCompute', {
				writable : false,
				value : function (newValue) {
					if (typeof this.sum === 'undefined')
						this.populateNewObj();
					if (typeof newValue !== 'undefined') {
						this.push(newValue);
						this.sum += newValue;
					}
					this.sumSquares = 0;
					if (typeof this.avg !== 'undefined') {
						for (var i = 0; i < this.length; i++) {
							this.sumSquares += Math.pow(this[i] - this.avg, 2);
						}
					}
					else
						console.error('Array Exception : rms Compute without defining average value');
					this.rms = Math.sqrt(this.sumSquares / this.members || this.length);
				}
			});
			Object.defineProperty(Array.prototype, 'intersectOnCommonKey', {
				writable : false,
				value : function (b, commonKey) {
					var a = this,
				      lastIndex = 0,
				      result,
				      shortLen, longLen, i, j, k;
					
				    if (b.length > a.length) {
				      a = b;
				      b = this;
				    }
				    
				    shortLen = b.length;
				    longLen = a.length;
				    result = Array(shortLen);
				    k = 0;
				    
				    for (i = 0; i < shortLen; i++) {
				      for (j = lastIndex; j < longLen; j++) {
				        if (b[i][commonKey] == a[j][commonKey]) {
				          result[k] = b[i];
				          k++;
				          lastIndex = j + 1;
				          break;
				        }
				      }
				    }
				    return result.slice(0, k);
				  }
			});

			Object.defineProperty(Array.prototype, 'filterOnCommonKey', {
				writable : false,
				value : function (b, commonKey) {
					
					
					var a = this,
				      lastIndex = 0,
				      result,
				      shortLen, longLen, i, j, k;
					
				    if (b.length > a.length) {
				      a = b;
				      b = this;
				    }
				    
				    shortLen = b.length;
				    longLen = a.length;
				    result = Array(shortLen);
				    k = 0;
				    
				    for (i = 0; i < shortLen; i++) {
				      if (a.findIndex(function(el) {return el[commonKey] === b[i][commonKey]}) !== -1) {
				    	result[k] = b[i];
				      	k++;
				      }
				    }
				    return result.slice(0, k);
				  }
			});

			Object.defineProperty(Array.prototype, 'append', {
				writable: false,
				value : function (array2, position) {
					var or = this.slice(0);
					if (typeof position !== 'undefined') {
						for (var i = 0, j = 0, l = this.length, L = array2.length; i < l + L; i++) {
							if (i > position) {
								if (j < L) {
									this[i] = array2[j];
									j++;
								}
								else
									this[i] = or[i - L]; 
							}
						}
					}
					else if (typeof position === 'undefined'){
						for (var j = 0, l = this.length, L = array2.length; j < L; j++) {
							this[j + l] = array2[j];
						}
					}
				}
			});

			Object.defineProperty(ArrayBuffer.prototype, 'append', {
				enumerable : false, 	// not necessary : false is the default value
				writable: false,
				value : function (buffer2, position, filesize) {
						var tmp, a, b, ret;
						a = new Uint8Array(this);
						b = new Uint8Array(buffer2);

						try {
						  if (typeof position !== 'undefined') {
							  tmp = new Uint8Array(new ArrayBuffer(filesize));
							  tmp.set(a, 0);
							  tmp.set(b, position);
						  }
						  else {
							  tmp = new Uint8Array(this.byteLength + buffer2.byteLength);
							  tmp.set(a, 0);
							  tmp.set(b, this.byteLength);
						  }
						}
						catch (e) {
							console.error(e);
						}
						
						ret = tmp.buffer.slice(0, tmp.buffer.byteLength);
						
						a = b = tmp = undefined;
						
						return ret;
					}
				}
			);


			Object.defineProperty(Array.prototype, 'hasObjectByKey', {
				value : function(key) {
					for (let i = 0, l = this.length; i < l; i++) {
						if (typeof this[i][key] !== 'undefined' || this[i].hasOwnProperty(key))
							return true;
					}
					return false;
				}
			});

			Object.defineProperty(Array.prototype, 'fastHasObjectByKey', {
				value : function(key) {
					for (let i = 0, l = this.length; i < l; i++) {
						if (this[i].__proto__.key === key)
							return i;
					}
					return false;
				}
			});

			Object.defineProperty(Array.prototype, 'findObjectByKey', {
				value : function(key) {
					for (let i = 0, l = this.length; i < l; i++) {
						if (typeof this[i][key] !== 'undefined' || this[i].hasOwnProperty(key))
							return this[i];
					}
					return false;
				}
			});

			Object.defineProperty(Array.prototype, 'getObjectValueByKey', {
				value : function(key) {
					for (let i = 0, l = this.length; i < l; i++) {
						if (typeof this[i][key] !== 'undefined' || this[i].hasOwnProperty(key))
							return this[i][key];
					}
					return false;
				}
			});

			Object.defineProperty(Array.prototype, 'findObjectByValue', {
				value : function(prop, value) {
					for (let i = 0, l = this.length; i < l; i++) {
						if (this[i][prop] === value)
							return this[i];
					}
					return false;
				}
			});

			Object.defineProperty(Array.prototype, 'indexOfObjectByKey', {
				value : function(key) {
					for (let i = 0, l = this.length; i < l; i++) {
						if (typeof this[i][key] !== 'undefined' || this[i].hasOwnProperty(key))
							return i;
					}
					return false;
				}
			});

			Object.defineProperty(Array.prototype, 'indexOfObjectByValue',  {
				value : function(prop, value) {
					for (let i = 0, l = this.length; i < l; i++) {
						if (this[i][prop] === value)
							return i;
					}
					return false;
				}
			});

			Object.defineProperty(Array.prototype, 'findObjectsByValue',  {
				value : function(prop, value) {
					var arr = [];
					for (let i = 0, l = this.length; i < l; i++) {
						if (this[i][prop] === value)
							arr.push(this[i]);
					}
					return arr.length ? arr : false;
				}
			});

			Object.defineProperty(Array.prototype, 'findObjectsByPartialValue',  {
				value : function(prop, value) {
					var arr = [];
					for (let i = 0, l = this.length; i < l; i++) {
						if (this[i][prop].indexOf(value) !== -1)
							arr.push(this[i]);
					}
					return arr.length ? arr : false;
				}
			});



			Object.defineProperty(Array.prototype, 'recitalClearAll',  {
				value : function(ComponentGroupObj) {
					if (ComponentGroupObj) {
						ComponentGroupObj.clearAllModules();
						this.length = 0;
					}
					else
						return false;
				}
			});




			Object.defineProperty(Array.prototype, '_sortForPropHostingArrayOnArrayIdx',  {
				value : function(prop, idx) {
					var sortedArr = [], register  = new Map(), newArray;
					for (let i = 0, l = this.length; i < l; i++) {
						sortedArr.push(this[i][prop][idx]);
						register.set(this[i][prop][idx], i);
					}
					sortedArr.sort();
					var tmpThis = [];
					for (let i = 0, l = sortedArr.length; i < l; i++) {
						tmpThis.push(this[register.get(sortedArr[i])][prop].slice(0));
					}
					for (let i = 0, l = this.length; i < l; i++) {
						for (let k = 0, L = this[i][prop].length; k < L; k++) {
							this[i][prop][k] = tmpThis[i][k];
						}
					}
				}
			});














			Object.defineProperty(Array.prototype, 'sortOnObjectProp',  {
				value : function(prop, a, b) {
					if (typeof a[prop] === 'string')
						return a[prop].charCodeAt(0) - b[prop].charCodeAt(0)
					else
						return parseInt(a[prop], 10) - parseInt(b[prop], 10);
				}
			});

			Object.defineProperty(Array.prototype, 'inverseSortOnObjectProp',  {
				value : function(prop, a, b) {
					if (typeof a[prop] === 'string')
						return b[prop].charCodeAt(0) - a[prop].charCodeAt(0)
					else
						return parseInt(b[prop], 10) - parseInt(a[prop], 10);
				}
			});

























			Object.defineProperty(ArrayBuffer.prototype, 'bufferToString', {
				writable : false,
				value : function (strLength) {
					var tArray;
					if (strLength) {
						tArray = new Uint8Array(this, 0, strLength);
					}
					else {
						tArray = new Uint8Array(this);
						for(var i = 0, l = this.byteLength; i < l; i++) {
							if (tArray[i] === 0) {
								tArray = tArray.slice(0, i);
								break;
							}
				//			str += String.fromCharCode(tArray[i]);
						}
				//		return str;
					}
			//		console.log(Array.prototype.slice.call(tArray));
					return String.fromCharCode(...Array.prototype.slice.call(tArray));
				}
			});

			Object.defineProperty(Uint8Array.prototype, 'bufferToString', {
				writable : false,
				value : function (strLength) {
					if (strLength) {
						return String.fromCharCode(...Array.prototype.slice.call(this.slice(0, strLength)));
					}
					else {
						var tArray = this;
						for(var i = 0, l = this.byteLength; i < l; i++) {
							if (this[i] === 0) {
								tArray = this.slice(0, i);
								break;
							}
						}
						return String.fromCharCode(...Array.prototype.slice.call(tArray));
					}
				}
			});

			Object.defineProperty(Uint8Array.prototype, 'bufferToPartialString', {
				writable : false,
				value : function (startIdx, strLength) {
					if (strLength) {
						return String.fromCharCode(...Array.prototype.slice.call(this.slice(startIdx, startIdx + strLength)));
					}
					else {
						var tArray = this;
						for(var i = startIdx, l = this.byteLength; i < l; i++) {
							if (this[i] === 0) {
								tArray = this.slice(startIdx, i);
								break;
							}
						}
						return String.fromCharCode(...Array.prototype.slice.call(tArray));
					}
				}
			});





			Array.mergeSort = function(arr,l, r, mergeFunction){
				if (typeof mergeFunction === 'undefined')
					mergeFunction = merge;
			    if(l>=r){
			        return;
			    }
			    var m =l+ parseInt((r-l)/2);
			    mergeSort(arr,l,m);
			    mergeSort(arr,m+1,r);
			    merge(arr,l,m,r);
			};

			// JavaScript program for Merge Sort
			 
			// Merges two subarrays of arr[].
			// First subarray is arr[l..m]
			// Second subarray is arr[m+1..r]
			function merge(arr, l, m, r)
			{
			    var n1 = m - l + 1;
			    var n2 = r - m;
			 
			    // Create temp arrays
			    var L = new Array(n1);
			    var R = new Array(n2);
			 
			    // Copy data to temp arrays L[] and R[]
			    for (var i = 0; i < n1; i++)
			        L[i] = arr[l + i];
			    for (var j = 0; j < n2; j++)
			        R[j] = arr[m + 1 + j];
			 
			    // Merge the temp arrays back into arr[l..r]
			 
			    // Initial index of first subarray
			    var i = 0;
			 
			    // Initial index of second subarray
			    var j = 0;
			 
			    // Initial index of merged subarray
			    var k = l;
			 
			    while (i < n1 && j < n2) {
			        if (L[i] <= R[j]) {
			            arr[k] = L[i];
			            i++;
			        }
			        else {
			            arr[k] = R[j];
			            j++;
			        }
			        k++;
			    }
			 
			    // Copy the remaining elements of
			    // L[], if there are any
			    while (i < n1) {
			        arr[k] = L[i];
			        i++;
			        k++;
			    }
			 
			    // Copy the remaining elements of
			    // R[], if there are any
			    while (j < n2) {
			        arr[k] = R[j];
			        j++;
			        k++;
			    }
			}
			 
			// l is for left index and r is
			// right index of the sub-array
			// of arr to be sorted
			Array.mergeSort = function(arr,l, r, mergeFunction){
				if (typeof mergeFunction === 'undefined')
					mergeFunction = merge;
			    if(l>=r){
			        return;
			    }
			    var m =l+ parseInt((r-l)/2);
			    mergeSort(arr,l,m);
			    mergeSort(arr,m+1,r);
			    merge(arr,l,m,r);
			};

			},{}],63:[function(_dereq_,module,exports){
			"use strict";
			Object.defineProperty(Boolean.prototype, 'tryParse', {
				value : function(val) {
			//		console.log('tryParse', typeof val);
					if (typeof val !== 'string')
						return val;
					else {
						if (val === 'false')
							return false;
						else if (val === 'true')
							return true;
						else
							return val;
					}
				}
			});


			Boolean.tryParse = Boolean.prototype.tryParse;
			},{}],64:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * Method sortByPropName
			 * 
			 * returns Array(obj[propNameA], obj[propNameB], obj[propNameC], etc.)
			 */
			Object.defineProperty(Object.prototype, 'sortSelfByPropName', {
				writable : false,
				value : function () {
					var keys = Object.keys(this).sort();

					var newObj = {}; 
					for(var i = 0, l = keys.length; i < l; i++) {
						newObj[keys[i]] = this[keys[i]];
					}
					return newObj;
				}
			});

			Object.defineProperty(Object.prototype, 'sortObjectByPropName', {
				value : function (obj) {
					var arr = Object.keys(obj).sort(), newObj = {};
					for (var key in arr) {
						newObj[arr[key]] = obj[arr[key]];
					}
					return newObj;	
				}
			});





			// As the Array ctor inherits from the Object ctor,
			// any method present on Object.prototype should be available on Array
			Object.defineProperty(Object.prototype, 'toDebugString', {
				value : function() {
					return JSON.stringify(Object.fromEntries(Object.entries(this)));
				}
			});


			!function(Object, getPropertyDescriptor){
			  // (C) WebReflection - Mit Style License
			  if (!(getPropertyDescriptor in Object)) {
			    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
			    Object[getPropertyDescriptor] = function getPropertyDescriptor(o, name) {
			      var proto = o, descriptor;
			      while (proto && !(
			        descriptor = getOwnPropertyDescriptor(proto, name))
			      ) proto = proto.__proto__;
			      return descriptor;
			    };
			  }
			}(Object, "getPropertyDescriptor");



























			},{}],65:[function(_dereq_,module,exports){
			"use strict";
			RegExp.escapeLitteral = /[-\/\\^$*+?.()|[\]{}]/g;

			RegExp.escape= function(s) {
			    return s.replace(this.escapeLitteral, '\\$&');
			};
			RegExp.protect= function(s) {
				return s.replace(/\\/g, '\\\\');
			};
			},{}],66:[function(_dereq_,module,exports){
			"use strict";

			Object.defineProperty(String.prototype, 'escapeRegExp', {
				enumerable : false,
				configurable : false,
				writable : false,
				value : function () {
					return this.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
				}
			});


			Object.defineProperty(String.prototype, 'splice', {
				enumerable : false,
				configurable : false,
				writable : false,
				value : function (index, count, add) {
					// We cannot pass negative indexes directly to the 2nd slicing operation.
					if (index < 0) {
						index = this.length + index;
						if (index < 0) {
							index = 0;
						}
					}
				
					return this.slice(0, index) + (add || '') + this.slice(index + count);
				}
			});
			function padNumber(n, width, z) {
			  z = String(z) || '0';
			  n = n + '';
			  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
			}

			//https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
			//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
			if (!String.prototype.padStart) {
				Object.defineProperty(String.prototype, 'padStart', {
						value : function padStart(targetLength,padString) {
								     targetLength = targetLength>>0; //floor if number or convert non-number to 0;
								     padString = String(padString || ' ');
								     if (this.length > targetLength) {
								         return String(this);
								     }
								     else {
								         targetLength = targetLength-this.length;
								         if (targetLength > padString.length) {
								             padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
								         }
								         return padString.slice(0,targetLength) + String(this);
								     }
								 },
								enumerable : false,
								writable : false,
								configurable : false
							}
				);
			}

			Object.defineProperty(String.prototype, 'dromedarToHyphens', { 						// accepts camel & dromedar
				value : function() {
							return this.replace(/[A-Z]/g, function(match, offset, str) {
								return (offset > 0 ? '-' : '') + String(match).toLowerCase() 	// accept camel & dromedar
							});
						},
						enumerable : false,
						writable : false,
						configurable : false
				}
			);

			Object.defineProperty(String.prototype, 'hyphensToDromedar', {
				value : function() {
							return this.replace(/\-(\w)/g, function(match, p1, offset, str) {
			//					return (offset > 0 ? p1.toUpperCase() : '');
								return p1.toUpperCase();
							});
						},
						enumerable : false,
						writable : false,
						configurable : false
				}
			);

			Object.defineProperty(String.prototype, 'capitalizeFirstChar', {
				value : function() {
					return this.slice(0, 1).toUpperCase() + this.slice(1).toLowerCase();
				}
			});

			Object.defineProperty(String.prototype, 'lowerCaseFirstChar', {
				value : function() {
					return this.slice(0, 1).toLowerCase() + this.slice(1);
				}
			});

			Object.defineProperty(String.prototype, 'hexEncode', {
				value : function(){
							var hex, i;
							
							var result = "";
							for (i = 0; i < this.length; i++) {
							  hex = this.charCodeAt(i).toString(16);
							  result += ("000"+hex).slice(-4) + ' ';
							}
							
							return result
						},
						enumerable : false,
						writable : false,
						configurable : false
						}
			);

			Object.defineProperty(String.prototype, 'indentOnXMLTags', {
				value : function(){
							var lineCounter = 0; depthCounter = -1, returnedString = '', d = 0, indentChars = '';
							for(var i = 0, l = this.length; i < l; i++) {
								d = 0, indentChars = '';
								if (this.charAt(i) === '<') {
									if (this.charAt(i + 1) !== '/')
										depthCounter++;
									
									indentChars += '\n';
									for(d; d < depthCounter; d++) {
										indentChars += '\t';
									}
									returnedString += indentChars + this.charAt(i);
									
									if (this.charAt(i + 1) === '/')
										depthCounter--;
								}
								else if (this.charAt(i) === '>') {
									if (this.charAt(i + 1) !== '<')
										indentChars += '\n';
									for(d; d < depthCounter + 1; d++) {
										indentChars += '\t';
									}
									returnedString += this.charAt(i) + indentChars;
								}
								else {
									returnedString += this.charAt(i);
								}
							}
							return returnedString;
						},
						enumerable : false,
						writable : false,
						configurable : false
						}
			);

			Object.defineProperty(String.prototype, 'nbsp2ws', {
				value : function(){
					return this.replace(/&nbsp;/g, ' ');
				},
				enumerable : false,
				writable : false,
				configurable : false
				}
			);
			Object.defineProperty(String.prototype, 'ws2nbsp', {
				value : function(){
					return this.replace(/ /g, '&nbsp;');
				},
				enumerable : false,
				writable : false,
				configurable : false
				}
			);

			Object.defineProperty(String.prototype, 'getNcharsAsCharArray', {
				value : function(length, offset) {
					if (offset > this.length) {
						offset = 0;
						length = this.length;
					}
					else if ((offset + length) > this.length) {
						length = this.length - offset;
					}
			//			Math.max(0, this.length - offset);
					var i = 0, ret = [];
					while (i < length) {
						ret.push(this[offset + i]);
						i++;
					}
					return ret;
				}
			});

			Object.defineProperty(String.prototype, 'getNcharsAsCharCodesArray', {
				value : function(length, offset) {
			//		console.log(offset, this.length, this, offset >= this.length);
					if (offset >= this.length) {
						offset = 0;
						length = this.length < length ? this.length : length;
					}
					else if ((offset + length) > this.length) {
						// Avoid capturing only one char...
						if ((offset + length) > (this.length - (length - 1))) {
							offset = 0;
							length = this.length < length ? this.length : length;
						}
						else
							length = this.length - offset;
					}
			//			Math.max(0, this.length - offset);
					var i = offset, end = i + length, ret = [];
			//		console.log(i, end);
					while (i < end) {
			//			console.log(this[i]);
						ret.push(this.charCodeAt(i));
						i++;
					}
			//		console.log(ret);
					return [offset, ret];
				}
			});

			// Source: http://www.antiyes.com/jquery-blink-plugin
			//http://www.antiyes.com/jquery-blink/jquery-blink.js
			//(function($) {
			// $.fn.blink = function(options) {
			//     var defaults = {
			//         delay: 113,
			//         iterations : 3
			//     };
			//     var options = $.extend(defaults, options);
			//
			//     return this.each(function() {
			//         var obj = $(this), inter, iterations = 0;
			//         inter = setInterval(function() {
			//             if ($(obj).css("visibility") == "visible") {
			//                 $(obj).css('visibility', 'hidden');
			//             }
			//             else {
			//                 $(obj).css('visibility', 'visible');
			//             }
			//             iterations++;
			//             if (iterations / 2 === options.iterations)
			//            	 clearInterval(inter);
			//         }, options.delay);
			//     });
			// }
			//}(jQuery)) 
			},{}],67:[function(_dereq_,module,exports){
			"use strict";
			/*
			 * Hamster.js v1.1.2
			 * (c) 2013 Monospaced http://monospaced.com
			 * License: MIT
			 */

			(function(window, document){
			'use strict';

			/**
			 * Hamster
			 * use this to create instances
			 * @returns {Hamster.Instance}
			 * @constructor
			 */
			var Hamster = function(element) {
			  return new Hamster.Instance(element);
			};

			// default event name
			Hamster.SUPPORT = 'wheel';

			// default DOM methods
			Hamster.ADD_EVENT = 'addEventListener';
			Hamster.REMOVE_EVENT = 'removeEventListener';
			Hamster.PREFIX = '';

			// until browser inconsistencies have been fixed...
			Hamster.READY = false;

			Hamster.Instance = function(element){
			  if (!Hamster.READY) {
			    // fix browser inconsistencies
			    Hamster.normalise.browser();

			    // Hamster is ready...!
			    Hamster.READY = true;
			  }

			  this.element = element;

			  // store attached event handlers
			  this.handlers = [];

			  // return instance
			  return this;
			};

			/**
			 * create new hamster instance
			 * all methods should return the instance itself, so it is chainable.
			 * @param   {HTMLElement}       element
			 * @returns {Hamster.Instance}
			 * @constructor
			 */
			Hamster.Instance.prototype = {
			  /**
			   * bind events to the instance
			   * @param   {Function}    handler
			   * @param   {Boolean}     useCapture
			   * @returns {Hamster.Instance}
			   */
			  wheel: function onEvent(handler, useCapture){
			    Hamster.event.add(this, Hamster.SUPPORT, handler, useCapture);

			    // handle MozMousePixelScroll in older Firefox
			    if (Hamster.SUPPORT === 'DOMMouseScroll') {
			      Hamster.event.add(this, 'MozMousePixelScroll', handler, useCapture);
			    }

			    return this;
			  },

			  /**
			   * unbind events to the instance
			   * @param   {Function}    handler
			   * @param   {Boolean}     useCapture
			   * @returns {Hamster.Instance}
			   */
			  unwheel: function offEvent(handler, useCapture){
			    // if no handler argument,
			    // unbind the last bound handler (if exists)
			    if (handler === undefined && (handler = this.handlers.slice(-1)[0])) {
			      handler = handler.original;
			    }

			    Hamster.event.remove(this, Hamster.SUPPORT, handler, useCapture);

			    // handle MozMousePixelScroll in older Firefox
			    if (Hamster.SUPPORT === 'DOMMouseScroll') {
			      Hamster.event.remove(this, 'MozMousePixelScroll', handler, useCapture);
			    }

			    return this;
			  }
			};

			Hamster.event = {
			  /**
			   * cross-browser 'addWheelListener'
			   * @param   {Instance}    hamster
			   * @param   {String}      eventName
			   * @param   {Function}    handler
			   * @param   {Boolean}     useCapture
			   */
			  add: function add(hamster, eventName, handler, useCapture){
			    // store the original handler
			    var originalHandler = handler;

			    // redefine the handler
			    handler = function(originalEvent){

			      if (!originalEvent) {
			        originalEvent = window.event;
			      }

			      // create a normalised event object,
			      // and normalise "deltas" of the mouse wheel
			      var event = Hamster.normalise.event(originalEvent),
			          delta = Hamster.normalise.delta(originalEvent);

			      // fire the original handler with normalised arguments
			      return originalHandler(event, delta[0], delta[1], delta[2]);

			    };

			    // cross-browser addEventListener
			    hamster.element[Hamster.ADD_EVENT](Hamster.PREFIX + eventName, handler, useCapture || false);

			    // store original and normalised handlers on the instance
			    hamster.handlers.push({
			      original: originalHandler,
			      normalised: handler
			    });
			  },

			  /**
			   * removeWheelListener
			   * @param   {Instance}    hamster
			   * @param   {String}      eventName
			   * @param   {Function}    handler
			   * @param   {Boolean}     useCapture
			   */
			  remove: function remove(hamster, eventName, handler, useCapture){
			    // find the normalised handler on the instance
			    var originalHandler = handler,
			        lookup = {},
			        handlers;
			    for (var i = 0, len = hamster.handlers.length; i < len; ++i) {
			      lookup[hamster.handlers[i].original] = hamster.handlers[i];
			    }
			    handlers = lookup[originalHandler];
			    handler = handlers.normalised;

			    // cross-browser removeEventListener
			    hamster.element[Hamster.REMOVE_EVENT](Hamster.PREFIX + eventName, handler, useCapture || false);

			    // remove original and normalised handlers from the instance
			    for (var h in hamster.handlers) {
			      if (hamster.handlers[h] == handlers) {
			        hamster.handlers.splice(h, 1);
			        break;
			      }
			    }
			  }
			};

			/**
			 * these hold the lowest deltas,
			 * used to normalise the delta values
			 * @type {Number}
			 */
			var lowestDelta,
			    lowestDeltaXY;

			Hamster.normalise = {
			  /**
			   * fix browser inconsistencies
			   */
			  browser: function normaliseBrowser(){
			    // detect deprecated wheel events
			    if (!('onwheel' in document || document.documentMode >= 9)) {
			      Hamster.SUPPORT = document.onmousewheel !== undefined ?
			                        'mousewheel' : // webkit and IE < 9 support at least "mousewheel"
			                        'DOMMouseScroll'; // assume remaining browsers are older Firefox
			    }

			    // detect deprecated event model
			    if (!window.addEventListener) {
			      // assume IE < 9
			      Hamster.ADD_EVENT = 'attachEvent';
			      Hamster.REMOVE_EVENT = 'detachEvent';
			      Hamster.PREFIX = 'on';
			    }

			  },

			  /**
			   * create a normalised event object
			   * @param   {Function}    originalEvent
			   * @returns {Object}      event
			   */
			   event: function normaliseEvent(originalEvent){
			    var event = {
			          // keep a reference to the original event object
			          originalEvent: originalEvent,
			          target: originalEvent.target || originalEvent.srcElement,
			          type: 'wheel',
			          deltaMode: originalEvent.type === 'MozMousePixelScroll' ? 0 : 1,
			          deltaX: 0,
			          deltaZ: 0,
			          preventDefault: function(){
			            if (originalEvent.preventDefault) {
			              originalEvent.preventDefault();
			            } else {
			              originalEvent.returnValue = false;
			            }
			          },
			          stopPropagation: function(){
			            if (originalEvent.stopPropagation) {
			              originalEvent.stopPropagation();
			            } else {
			              originalEvent.cancelBubble = false;
			            }
			          }
			        };

			    // calculate deltaY (and deltaX) according to the event

			    // 'mousewheel'
			    if (originalEvent.wheelDelta) {
			      event.deltaY = - 1/40 * originalEvent.wheelDelta;
			    }
			    // webkit
			    if (originalEvent.wheelDeltaX) {
			      event.deltaX = - 1/40 * originalEvent.wheelDeltaX;
			    }

			    // 'DomMouseScroll'
			    if (originalEvent.detail) {
			      event.deltaY = originalEvent.detail;
			    }

			    return event;
			  },

			  /**
			   * normalise 'deltas' of the mouse wheel
			   * @param   {Function}    originalEvent
			   * @returns {Array}       deltas
			   */
			  delta: function normaliseDelta(originalEvent){
			    var delta = 0,
			      deltaX = 0,
			      deltaY = 0,
			      absDelta = 0,
			      absDeltaXY = 0,
			      fn;

			    // normalise deltas according to the event

			    // 'wheel' event
			    if (originalEvent.deltaY) {
			      deltaY = originalEvent.deltaY * -1;
			      delta  = deltaY;
			    }
			    if (originalEvent.deltaX) {
			      deltaX = originalEvent.deltaX;
			      delta  = deltaX * -1;
			    }

			    // 'mousewheel' event
			    if (originalEvent.wheelDelta) {
			      delta = originalEvent.wheelDelta;
			    }
			    // webkit
			    if (originalEvent.wheelDeltaY) {
			      deltaY = originalEvent.wheelDeltaY;
			    }
			    if (originalEvent.wheelDeltaX) {
			      deltaX = originalEvent.wheelDeltaX * -1;
			    }

			    // 'DomMouseScroll' event
			    if (originalEvent.detail) {
			      delta = originalEvent.detail * -1;
			    }

			    // Don't return NaN
			    if (delta === 0) {
			      return [0, 0, 0];
			    }

			    // look for lowest delta to normalize the delta values
			    absDelta = Math.abs(delta);
			    if (!lowestDelta || absDelta < lowestDelta) {
			      lowestDelta = absDelta;
			    }
			    absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
			    if (!lowestDeltaXY || absDeltaXY < lowestDeltaXY) {
			      lowestDeltaXY = absDeltaXY;
			    }

			    // convert deltas to whole numbers
			    fn = delta > 0 ? 'floor' : 'ceil';
			    delta  = Math[fn](delta / lowestDelta);
			    deltaX = Math[fn](deltaX / lowestDeltaXY);
			    deltaY = Math[fn](deltaY / lowestDeltaXY);

			    return [delta, deltaX, deltaY];
			  }
			};

			if (typeof window.define === 'function' && window.define.amd) {
			  // AMD
			  window.define('hamster', [], function(){
			    return Hamster;
			  });
			} else if (typeof exports === 'object') {
			  // CommonJS
			  module.exports = Hamster;
			} else {
			  // Browser global
			  window.Hamster = Hamster;
			}

			})(window, window.document);

			},{}],68:[function(_dereq_,module,exports){
			"use strict";
			/*!
			 * validate.js 0.13.1
			 * http://validatejs.org/
			 * (c) 2013-2015 Nicklas Ansman, 2013 Wrapp
			 * validate.js may be freely distributed under the MIT license.
			*/

			(function(a,b,c){"use strict";var d=function(a,b,c){c=e.extend({},e.options,c);var f=e.runValidations(a,b,c);if(f.some(function(a){return e.isPromise(a.error)}))throw new Error("Use validate.async if you want support for promises");return d.processValidationResults(f,c)},e=d;e.extend=function(a){return [].slice.call(arguments,1).forEach(function(b){for(var c in b)a[c]=b[c];}),a},e.extend(d,{version:{major:0,minor:13,patch:1,metadata:null,toString:function(){var a=e.format("%{major}.%{minor}.%{patch}",e.version);return e.isEmpty(e.version.metadata)||(a+="+"+e.version.metadata),a}},Promise:"undefined"!=typeof Promise?Promise:null,EMPTY_STRING_REGEXP:/^\s*$/,runValidations:function(a,b,c){var d,f,g,h,i,j,k,l=[];(e.isDomElement(a)||e.isJqueryElement(a))&&(a=e.collectFormValues(a));for(d in b){g=e.getDeepObjectValue(a,d),h=e.result(b[d],g,a,d,c,b);for(f in h){if(i=e.validators[f],!i)throw k=e.format("Unknown validator %{name}",{name:f}),new Error(k);j=h[f],j=e.result(j,g,a,d,c,b),j&&l.push({attribute:d,value:g,validator:f,globalOptions:c,attributes:a,options:j,error:i.call(i,g,j,d,a,c)});}}return l},processValidationResults:function(a,b){a=e.pruneEmptyErrors(a,b),a=e.expandMultipleErrors(a,b),a=e.convertErrorMessages(a,b);var c=b.format||"grouped";if("function"!=typeof e.formatters[c])throw new Error(e.format("Unknown format %{format}",b));return a=e.formatters[c](a),e.isEmpty(a)?void 0:a},async:function(a,b,c){c=e.extend({},e.async.options,c);var d=c.wrapErrors||function(a){return a};c.cleanAttributes!==!1&&(a=e.cleanAttributes(a,b));var f=e.runValidations(a,b,c);return new e.Promise(function(g,h){e.waitForResults(f).then(function(){var i=e.processValidationResults(f,c);i?h(new d(i,c,a,b)):g(a);},function(a){h(a);});})},single:function(a,b,c){return c=e.extend({},e.single.options,c,{format:"flat",fullMessages:!1}),e({single:a},{single:b},c)},waitForResults:function(a){return a.reduce(function(a,b){return e.isPromise(b.error)?a.then(function(){return b.error.then(function(a){b.error=a||null;})}):a},new e.Promise(function(a){a();}))},result:function(a){var b=[].slice.call(arguments,1);return "function"==typeof a&&(a=a.apply(null,b)),a},isNumber:function(a){return "number"==typeof a&&!isNaN(a)},isFunction:function(a){return "function"==typeof a},isInteger:function(a){return e.isNumber(a)&&a%1===0},isBoolean:function(a){return "boolean"==typeof a},isObject:function(a){return a===Object(a)},isDate:function(a){return a instanceof Date},isDefined:function(a){return null!==a&&void 0!==a},isPromise:function(a){return !!a&&e.isFunction(a.then)},isJqueryElement:function(a){return a&&e.isString(a.jquery)},isDomElement:function(a){return !!a&&(!(!a.querySelectorAll||!a.querySelector)&&(!(!e.isObject(document)||a!==document)||("object"==typeof HTMLElement?a instanceof HTMLElement:a&&"object"==typeof a&&null!==a&&1===a.nodeType&&"string"==typeof a.nodeName)))},isEmpty:function(a){var b;if(!e.isDefined(a))return !0;if(e.isFunction(a))return !1;if(e.isString(a))return e.EMPTY_STRING_REGEXP.test(a);if(e.isArray(a))return 0===a.length;if(e.isDate(a))return !1;if(e.isObject(a)){for(b in a)return !1;return !0}return !1},format:e.extend(function(a,b){return e.isString(a)?a.replace(e.format.FORMAT_REGEXP,function(a,c,d){return "%"===c?"%{"+d+"}":String(b[d])}):a},{FORMAT_REGEXP:/(%?)%\{([^\}]+)\}/g}),prettify:function(a){return e.isNumber(a)?100*a%1===0?""+a:parseFloat(Math.round(100*a)/100).toFixed(2):e.isArray(a)?a.map(function(a){return e.prettify(a)}).join(", "):e.isObject(a)?e.isDefined(a.toString)?a.toString():JSON.stringify(a):(a=""+a,a.replace(/([^\s])\.([^\s])/g,"$1 $2").replace(/\\+/g,"").replace(/[_-]/g," ").replace(/([a-z])([A-Z])/g,function(a,b,c){return ""+b+" "+c.toLowerCase()}).toLowerCase())},stringifyValue:function(a,b){var c=b&&b.prettify||e.prettify;return c(a)},isString:function(a){return "string"==typeof a},isArray:function(a){return "[object Array]"==={}.toString.call(a)},isHash:function(a){return e.isObject(a)&&!e.isArray(a)&&!e.isFunction(a)},contains:function(a,b){return !!e.isDefined(a)&&(e.isArray(a)?a.indexOf(b)!==-1:b in a)},unique:function(a){return e.isArray(a)?a.filter(function(a,b,c){return c.indexOf(a)==b}):a},forEachKeyInKeypath:function(a,b,c){if(e.isString(b)){var d,f="",g=!1;for(d=0;d<b.length;++d)switch(b[d]){case".":g?(g=!1,f+="."):(a=c(a,f,!1),f="");break;case"\\":g?(g=!1,f+="\\"):g=!0;break;default:g=!1,f+=b[d];}return c(a,f,!0)}},getDeepObjectValue:function(a,b){if(e.isObject(a))return e.forEachKeyInKeypath(a,b,function(a,b){if(e.isObject(a))return a[b]})},collectFormValues:function(a,b){var c,d,f,g,h,i,j={};if(e.isJqueryElement(a)&&(a=a[0]),!a)return j;for(b=b||{},g=a.querySelectorAll("input[name], textarea[name]"),c=0;c<g.length;++c)if(f=g.item(c),!e.isDefined(f.getAttribute("data-ignored"))){var k=f.name.replace(/\./g,"\\\\.");i=e.sanitizeFormValue(f.value,b),"number"===f.type?i=i?+i:null:"checkbox"===f.type?f.attributes.value?f.checked||(i=j[k]||null):i=f.checked:"radio"===f.type&&(f.checked||(i=j[k]||null)),j[k]=i;}for(g=a.querySelectorAll("select[name]"),c=0;c<g.length;++c)if(f=g.item(c),!e.isDefined(f.getAttribute("data-ignored"))){if(f.multiple){i=[];for(d in f.options)h=f.options[d],h&&h.selected&&i.push(e.sanitizeFormValue(h.value,b));}else {var l="undefined"!=typeof f.options[f.selectedIndex]?f.options[f.selectedIndex].value:"";i=e.sanitizeFormValue(l,b);}j[f.name]=i;}return j},sanitizeFormValue:function(a,b){return b.trim&&e.isString(a)&&(a=a.trim()),b.nullify!==!1&&""===a?null:a},capitalize:function(a){return e.isString(a)?a[0].toUpperCase()+a.slice(1):a},pruneEmptyErrors:function(a){return a.filter(function(a){return !e.isEmpty(a.error)})},expandMultipleErrors:function(a){var b=[];return a.forEach(function(a){e.isArray(a.error)?a.error.forEach(function(c){b.push(e.extend({},a,{error:c}));}):b.push(a);}),b},convertErrorMessages:function(a,b){b=b||{};var c=[],d=b.prettify||e.prettify;return a.forEach(function(a){var f=e.result(a.error,a.value,a.attribute,a.options,a.attributes,a.globalOptions);return e.isString(f)?("^"===f[0]?f=f.slice(1):b.fullMessages!==!1&&(f=e.capitalize(d(a.attribute))+" "+f),f=f.replace(/\\\^/g,"^"),f=e.format(f,{value:e.stringifyValue(a.value,b)}),void c.push(e.extend({},a,{error:f}))):void c.push(a)}),c},groupErrorsByAttribute:function(a){var b={};return a.forEach(function(a){var c=b[a.attribute];c?c.push(a):b[a.attribute]=[a];}),b},flattenErrorsToArray:function(a){return a.map(function(a){return a.error}).filter(function(a,b,c){return c.indexOf(a)===b})},cleanAttributes:function(a,b){function c(a,b,c){return e.isObject(a[b])?a[b]:a[b]=!!c||{}}function d(a){var b,d={};for(b in a)a[b]&&e.forEachKeyInKeypath(d,b,c);return d}function f(a,b){if(!e.isObject(a))return a;var c,d,g=e.extend({},a);for(d in a)c=b[d],e.isObject(c)?g[d]=f(g[d],c):c||delete g[d];return g}return e.isObject(b)&&e.isObject(a)?(b=d(b),f(a,b)):{}},exposeModule:function(a,b,c,d,e){c?(d&&d.exports&&(c=d.exports=a),c.validate=a):(b.validate=a,a.isFunction(e)&&e.amd&&e([],function(){return a}));},warn:function(a){"undefined"!=typeof console&&console.warn&&console.warn("[validate.js] "+a);},error:function(a){"undefined"!=typeof console&&console.error&&console.error("[validate.js] "+a);}}),d.validators={presence:function(a,b){if(b=e.extend({},this.options,b),b.allowEmpty!==!1?!e.isDefined(a):e.isEmpty(a))return b.message||this.message||"can't be blank"},length:function(a,b,c){if(e.isDefined(a)){b=e.extend({},this.options,b);var d,f=b.is,g=b.maximum,h=b.minimum,i=b.tokenizer||function(a){return a},j=[];a=i(a);var k=a.length;return e.isNumber(k)?(e.isNumber(f)&&k!==f&&(d=b.wrongLength||this.wrongLength||"is the wrong length (should be %{count} characters)",j.push(e.format(d,{count:f}))),e.isNumber(h)&&k<h&&(d=b.tooShort||this.tooShort||"is too short (minimum is %{count} characters)",j.push(e.format(d,{count:h}))),e.isNumber(g)&&k>g&&(d=b.tooLong||this.tooLong||"is too long (maximum is %{count} characters)",j.push(e.format(d,{count:g}))),j.length>0?b.message||j:void 0):b.message||this.notValid||"has an incorrect length"}},numericality:function(a,b,c,d,f){if(e.isDefined(a)){b=e.extend({},this.options,b);var g,h,i=[],j={greaterThan:function(a,b){return a>b},greaterThanOrEqualTo:function(a,b){return a>=b},equalTo:function(a,b){return a===b},lessThan:function(a,b){return a<b},lessThanOrEqualTo:function(a,b){return a<=b},divisibleBy:function(a,b){return a%b===0}},k=b.prettify||f&&f.prettify||e.prettify;if(e.isString(a)&&b.strict){var l="^-?(0|[1-9]\\d*)";if(b.onlyInteger||(l+="(\\.\\d+)?"),l+="$",!new RegExp(l).test(a))return b.message||b.notValid||this.notValid||this.message||"must be a valid number"}if(b.noStrings!==!0&&e.isString(a)&&!e.isEmpty(a)&&(a=+a),!e.isNumber(a))return b.message||b.notValid||this.notValid||this.message||"is not a number";if(b.onlyInteger&&!e.isInteger(a))return b.message||b.notInteger||this.notInteger||this.message||"must be an integer";for(g in j)if(h=b[g],e.isNumber(h)&&!j[g](a,h)){var m="not"+e.capitalize(g),n=b[m]||this[m]||this.message||"must be %{type} %{count}";i.push(e.format(n,{count:h,type:k(g)}));}return b.odd&&a%2!==1&&i.push(b.notOdd||this.notOdd||this.message||"must be odd"),b.even&&a%2!==0&&i.push(b.notEven||this.notEven||this.message||"must be even"),i.length?b.message||i:void 0}},datetime:e.extend(function(a,b){if(!e.isFunction(this.parse)||!e.isFunction(this.format))throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator");if(e.isDefined(a)){b=e.extend({},this.options,b);var c,d=[],f=b.earliest?this.parse(b.earliest,b):NaN,g=b.latest?this.parse(b.latest,b):NaN;return a=this.parse(a,b),isNaN(a)||b.dateOnly&&a%864e5!==0?(c=b.notValid||b.message||this.notValid||"must be a valid date",e.format(c,{value:arguments[0]})):(!isNaN(f)&&a<f&&(c=b.tooEarly||b.message||this.tooEarly||"must be no earlier than %{date}",c=e.format(c,{value:this.format(a,b),date:this.format(f,b)}),d.push(c)),!isNaN(g)&&a>g&&(c=b.tooLate||b.message||this.tooLate||"must be no later than %{date}",c=e.format(c,{date:this.format(g,b),value:this.format(a,b)}),d.push(c)),d.length?e.unique(d):void 0)}},{parse:null,format:null}),date:function(a,b){return b=e.extend({},b,{dateOnly:!0}),e.validators.datetime.call(e.validators.datetime,a,b)},format:function(a,b){(e.isString(b)||b instanceof RegExp)&&(b={pattern:b}),b=e.extend({},this.options,b);var c,d=b.message||this.message||"is invalid",f=b.pattern;if(e.isDefined(a))return e.isString(a)?(e.isString(f)&&(f=new RegExp(b.pattern,b.flags)),c=f.exec(a),c&&c[0].length==a.length?void 0:d):d},inclusion:function(a,b){if(e.isDefined(a)&&(e.isArray(b)&&(b={within:b}),b=e.extend({},this.options,b),!e.contains(b.within,a))){var c=b.message||this.message||"^%{value} is not included in the list";return e.format(c,{value:a})}},exclusion:function(a,b){if(e.isDefined(a)&&(e.isArray(b)&&(b={within:b}),b=e.extend({},this.options,b),e.contains(b.within,a))){var c=b.message||this.message||"^%{value} is restricted";return e.isString(b.within[a])&&(a=b.within[a]),e.format(c,{value:a})}},email:e.extend(function(a,b){b=e.extend({},this.options,b);var c=b.message||this.message||"is not a valid email";if(e.isDefined(a))return e.isString(a)&&this.PATTERN.exec(a)?void 0:c},{PATTERN:/^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i}),equality:function(a,b,c,d,f){if(e.isDefined(a)){e.isString(b)&&(b={attribute:b}),b=e.extend({},this.options,b);var g=b.message||this.message||"is not equal to %{attribute}";if(e.isEmpty(b.attribute)||!e.isString(b.attribute))throw new Error("The attribute must be a non empty string");var h=e.getDeepObjectValue(d,b.attribute),i=b.comparator||function(a,b){return a===b},j=b.prettify||f&&f.prettify||e.prettify;return i(a,h,b,c,d)?void 0:e.format(g,{attribute:j(b.attribute)})}},url:function(a,b){if(e.isDefined(a)){b=e.extend({},this.options,b);var c=b.message||this.message||"is not a valid url",d=b.schemes||this.schemes||["http","https"],f=b.allowLocal||this.allowLocal||!1,g=b.allowDataUrl||this.allowDataUrl||!1;if(!e.isString(a))return c;var h="^(?:(?:"+d.join("|")+")://)(?:\\S+(?::\\S*)?@)?(?:",i="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";if(f?i+="?":h+="(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})",h+="(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*"+i+")(?::\\d{2,5})?(?:[/?#]\\S*)?$",g){var j="\\w+\\/[-+.\\w]+(?:;[\\w=]+)*",k="[A-Za-z0-9-_.!~\\*'();\\/?:@&=+$,%]*",l="data:(?:"+j+")?(?:;base64)?,"+k;h="(?:"+h+")|(?:^"+l+"$)";}var m=new RegExp(h,"i");return m.exec(a)?void 0:c}},type:e.extend(function(a,b,c,d,f){if(e.isString(b)&&(b={type:b}),e.isDefined(a)){var g=e.extend({},this.options,b),h=g.type;if(!e.isDefined(h))throw new Error("No type was specified");var i;if(i=e.isFunction(h)?h:this.types[h],!e.isFunction(i))throw new Error("validate.validators.type.types."+h+" must be a function.");if(!i(a,g,c,d,f)){var j=b.message||this.messages[h]||this.message||g.message||(e.isFunction(h)?"must be of the correct type":"must be of type %{type}");return e.isFunction(j)&&(j=j(a,b,c,d,f)),e.format(j,{attribute:e.prettify(c),type:h})}}},{types:{object:function(a){return e.isObject(a)&&!e.isArray(a)},array:e.isArray,integer:e.isInteger,number:e.isNumber,string:e.isString,date:e.isDate,"boolean":e.isBoolean},messages:{}})},d.formatters={detailed:function(a){return a},flat:e.flattenErrorsToArray,grouped:function(a){var b;a=e.groupErrorsByAttribute(a);for(b in a)a[b]=e.flattenErrorsToArray(a[b]);return a},constraint:function(a){var b;a=e.groupErrorsByAttribute(a);for(b in a)a[b]=a[b].map(function(a){return a.validator}).sort();return a}},d.exposeModule(d,this,a,b,c);}).call(this,"undefined"!=typeof exports?exports:null,"undefined"!=typeof module?module:null,"undefined"!=typeof define?define:null);
			},{}],69:[function(_dereq_,module,exports){
			"use strict";
			!function(n){"use strict";function d(n,t){var r=(65535&n)+(65535&t);return (n>>16)+(t>>16)+(r>>16)<<16|65535&r}function f(n,t,r,e,o,u){return d((u=d(d(t,n),d(e,u)))<<o|u>>>32-o,r)}function l(n,t,r,e,o,u,c){return f(t&r|~t&e,n,t,o,u,c)}function g(n,t,r,e,o,u,c){return f(t&e|r&~e,n,t,o,u,c)}function v(n,t,r,e,o,u,c){return f(t^r^e,n,t,o,u,c)}function m(n,t,r,e,o,u,c){return f(r^(t|~e),n,t,o,u,c)}function c(n,t){var r,e,o,u;n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;for(var c=1732584193,f=-271733879,i=-1732584194,a=271733878,h=0;h<n.length;h+=16)c=l(r=c,e=f,o=i,u=a,n[h],7,-680876936),a=l(a,c,f,i,n[h+1],12,-389564586),i=l(i,a,c,f,n[h+2],17,606105819),f=l(f,i,a,c,n[h+3],22,-1044525330),c=l(c,f,i,a,n[h+4],7,-176418897),a=l(a,c,f,i,n[h+5],12,1200080426),i=l(i,a,c,f,n[h+6],17,-1473231341),f=l(f,i,a,c,n[h+7],22,-45705983),c=l(c,f,i,a,n[h+8],7,1770035416),a=l(a,c,f,i,n[h+9],12,-1958414417),i=l(i,a,c,f,n[h+10],17,-42063),f=l(f,i,a,c,n[h+11],22,-1990404162),c=l(c,f,i,a,n[h+12],7,1804603682),a=l(a,c,f,i,n[h+13],12,-40341101),i=l(i,a,c,f,n[h+14],17,-1502002290),c=g(c,f=l(f,i,a,c,n[h+15],22,1236535329),i,a,n[h+1],5,-165796510),a=g(a,c,f,i,n[h+6],9,-1069501632),i=g(i,a,c,f,n[h+11],14,643717713),f=g(f,i,a,c,n[h],20,-373897302),c=g(c,f,i,a,n[h+5],5,-701558691),a=g(a,c,f,i,n[h+10],9,38016083),i=g(i,a,c,f,n[h+15],14,-660478335),f=g(f,i,a,c,n[h+4],20,-405537848),c=g(c,f,i,a,n[h+9],5,568446438),a=g(a,c,f,i,n[h+14],9,-1019803690),i=g(i,a,c,f,n[h+3],14,-187363961),f=g(f,i,a,c,n[h+8],20,1163531501),c=g(c,f,i,a,n[h+13],5,-1444681467),a=g(a,c,f,i,n[h+2],9,-51403784),i=g(i,a,c,f,n[h+7],14,1735328473),c=v(c,f=g(f,i,a,c,n[h+12],20,-1926607734),i,a,n[h+5],4,-378558),a=v(a,c,f,i,n[h+8],11,-2022574463),i=v(i,a,c,f,n[h+11],16,1839030562),f=v(f,i,a,c,n[h+14],23,-35309556),c=v(c,f,i,a,n[h+1],4,-1530992060),a=v(a,c,f,i,n[h+4],11,1272893353),i=v(i,a,c,f,n[h+7],16,-155497632),f=v(f,i,a,c,n[h+10],23,-1094730640),c=v(c,f,i,a,n[h+13],4,681279174),a=v(a,c,f,i,n[h],11,-358537222),i=v(i,a,c,f,n[h+3],16,-722521979),f=v(f,i,a,c,n[h+6],23,76029189),c=v(c,f,i,a,n[h+9],4,-640364487),a=v(a,c,f,i,n[h+12],11,-421815835),i=v(i,a,c,f,n[h+15],16,530742520),c=m(c,f=v(f,i,a,c,n[h+2],23,-995338651),i,a,n[h],6,-198630844),a=m(a,c,f,i,n[h+7],10,1126891415),i=m(i,a,c,f,n[h+14],15,-1416354905),f=m(f,i,a,c,n[h+5],21,-57434055),c=m(c,f,i,a,n[h+12],6,1700485571),a=m(a,c,f,i,n[h+3],10,-1894986606),i=m(i,a,c,f,n[h+10],15,-1051523),f=m(f,i,a,c,n[h+1],21,-2054922799),c=m(c,f,i,a,n[h+8],6,1873313359),a=m(a,c,f,i,n[h+15],10,-30611744),i=m(i,a,c,f,n[h+6],15,-1560198380),f=m(f,i,a,c,n[h+13],21,1309151649),c=m(c,f,i,a,n[h+4],6,-145523070),a=m(a,c,f,i,n[h+11],10,-1120210379),i=m(i,a,c,f,n[h+2],15,718787259),f=m(f,i,a,c,n[h+9],21,-343485551),c=d(c,r),f=d(f,e),i=d(i,o),a=d(a,u);return [c,f,i,a]}function i(n){for(var t="",r=32*n.length,e=0;e<r;e+=8)t+=String.fromCharCode(n[e>>5]>>>e%32&255);return t}function a(n){var t=[];for(t[(n.length>>2)-1]=void 0,e=0;e<t.length;e+=1)t[e]=0;for(var r=8*n.length,e=0;e<r;e+=8)t[e>>5]|=(255&n.charCodeAt(e/8))<<e%32;return t}function e(n){for(var t,r="0123456789abcdef",e="",o=0;o<n.length;o+=1)t=n.charCodeAt(o),e+=r.charAt(t>>>4&15)+r.charAt(15&t);return e}function r(n){return unescape(encodeURIComponent(n))}function o(n){return i(c(a(n=r(n)),8*n.length))}function u(n,t){return function(n,t){var r,e=a(n),o=[],u=[];for(o[15]=u[15]=void 0,16<e.length&&(e=c(e,8*n.length)),r=0;r<16;r+=1)o[r]=909522486^e[r],u[r]=1549556828^e[r];return t=c(o.concat(a(t)),512+8*t.length),i(c(u.concat(t),640))}(r(n),r(t))}function t(n,t,r){return t?r?u(t,n):e(u(t,n)):r?o(n):e(o(n))}"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:n.md5=t;}(this);

			},{}],70:[function(_dereq_,module,exports){
			"use strict";
			(function (root, factory) {
			    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
			    // Rhino, and plain browser loading.
			    if (typeof define === 'function' && define.amd) {
			        define(['exports'], factory);
			    } else if (typeof exports !== 'undefined') {
			        factory(exports);
			    } else {
			        factory(root);
			    }
			}(this, function (exports) {

			var between = function (num, first, last) { return num >= first && num <= last; };
			function digit(code) { return between(code, 0x30,0x39); }
			function hexdigit(code) { return digit(code) || between(code, 0x41,0x46) || between(code, 0x61,0x66); }
			function uppercaseletter(code) { return between(code, 0x41,0x5a); }
			function lowercaseletter(code) { return between(code, 0x61,0x7a); }
			function letter(code) { return uppercaseletter(code) || lowercaseletter(code); }
			function nonascii(code) { return code >= 0x80; }
			function namestartchar(code) { return letter(code) || nonascii(code) || code == 0x5f; }
			function namechar(code) { return namestartchar(code) || digit(code) || code == 0x2d; }
			function nonprintable(code) { return between(code, 0,8) || code == 0xb || between(code, 0xe,0x1f) || code == 0x7f; }
			function newline(code) { return code == 0xa; }
			function whitespace(code) { return newline(code) || code == 9 || code == 0x20; }
			function badescape(code) { return newline(code) || isNaN(code); }

			var maximumallowedcodepoint = 0x10ffff;

			var InvalidCharacterError = function(message) {
				this.message = message;
			};
			InvalidCharacterError.prototype = new Error;
			InvalidCharacterError.prototype.name = 'InvalidCharacterError';

			function preprocess(str) {
				// Turn a string into an array of code points,
				// following the preprocessing cleanup rules.
				var codepoints = [];
				for(var i = 0; i < str.length; i++) {
					var code = str.charCodeAt(i);
					if(code == 0xd && str.charCodeAt(i+1) == 0xa) {
						code = 0xa; i++;
					}
					if(code == 0xd || code == 0xc) code = 0xa;
					if(code == 0x0) code = 0xfffd;
					if(between(code, 0xd800, 0xdbff) && between(str.charCodeAt(i+1), 0xdc00, 0xdfff)) {
						// Decode a surrogate pair into an astral codepoint.
						var lead = code - 0xd800;
						var trail = str.charCodeAt(i+1) - 0xdc00;
						code = Math.pow(2, 16) + lead * Math.pow(2, 10) + trail;
						i++;
					}
					codepoints.push(code);
				}
				return codepoints;
			}

			function stringFromCode(code) {
				if(code <= 0xffff) return String.fromCharCode(code);
				// Otherwise, encode astral char as surrogate pair.
				code -= Math.pow(2, 16);
				var lead = Math.floor(code/Math.pow(2, 10)) + 0xd800;
				var trail = code % Math.pow(2, 10) + 0xdc00;
				return String.fromCharCode(lead) + String.fromCharCode(trail);
			}

			function tokenize(str) {
				str = preprocess(str);
				var i = -1;
				var tokens = [];
				var code;

				// Line number information.
				var line = 0;
				var column = 0;
				// The only use of lastLineLength is in reconsume().
				var lastLineLength = 0;
				var incrLineno = function() {
					line += 1;
					lastLineLength = column;
					column = 0;
				};
				var locStart = {line:line, column:column};

				var codepoint = function(i) {
					if(i >= str.length) {
						return -1;
					}
					return str[i];
				};
				var next = function(num) {
					if(num === undefined)
						num = 1;
					if(num > 3)
						throw "Spec Error: no more than three codepoints of lookahead.";
					return codepoint(i+num);
				};
				var consume = function(num) {
					if(num === undefined)
						num = 1;
					i += num;
					code = codepoint(i);
					if(newline(code)) incrLineno();
					else column += num;
					//console.log('Consume '+i+' '+String.fromCharCode(code) + ' 0x' + code.toString(16));
					return true;
				};
				var reconsume = function() {
					i -= 1;
					if (newline(code)) {
						line -= 1;
						column = lastLineLength;
					} else {
						column -= 1;
					}
					locStart.line = line;
					locStart.column = column;
					return true;
				};
				var eof = function(codepoint) {
					if(codepoint === undefined) codepoint = code;
					return codepoint == -1;
				};
				var donothing = function() {};
				var parseerror = function() { console.log("Parse error at index " + i + ", processing codepoint 0x" + code.toString(16) + ".");return true; };

				var consumeAToken = function() {
					consumeComments();
					consume();
					if(whitespace(code)) {
						while(whitespace(next())) consume();
						return new WhitespaceToken;
					}
					else if(code == 0x22) return consumeAStringToken();
					else if(code == 0x23) {
						if(namechar(next()) || areAValidEscape(next(1), next(2))) {
							var token = new HashToken();
							if(wouldStartAnIdentifier(next(1), next(2), next(3))) token.type = "id";
							token.value = consumeAName();
							return token;
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x24) {
						if(next() == 0x3d) {
							consume();
							return new SuffixMatchToken();
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x27) return consumeAStringToken();
					else if(code == 0x28) return new OpenParenToken();
					else if(code == 0x29) return new CloseParenToken();
					else if(code == 0x2a) {
						if(next() == 0x3d) {
							consume();
							return new SubstringMatchToken();
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x2b) {
						if(startsWithANumber()) {
							reconsume();
							return consumeANumericToken();
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x2c) return new CommaToken();
					else if(code == 0x2d) {
						if(startsWithANumber()) {
							reconsume();
							return consumeANumericToken();
						} else if(next(1) == 0x2d && next(2) == 0x3e) {
							consume(2);
							return new CDCToken();
						} else if(startsWithAnIdentifier()) {
							reconsume();
							return consumeAnIdentlikeToken();
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x2e) {
						if(startsWithANumber()) {
							reconsume();
							return consumeANumericToken();
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x3a) return new ColonToken;
					else if(code == 0x3b) return new SemicolonToken;
					else if(code == 0x3c) {
						if(next(1) == 0x21 && next(2) == 0x2d && next(3) == 0x2d) {
							consume(3);
							return new CDOToken();
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x40) {
						if(wouldStartAnIdentifier(next(1), next(2), next(3))) {
							return new AtKeywordToken(consumeAName());
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x5b) return new OpenSquareToken();
					else if(code == 0x5c) {
						if(startsWithAValidEscape()) {
							reconsume();
							return consumeAnIdentlikeToken();
						} else {
							parseerror();
							return new DelimToken(code);
						}
					}
					else if(code == 0x5d) return new CloseSquareToken();
					else if(code == 0x5e) {
						if(next() == 0x3d) {
							consume();
							return new PrefixMatchToken();
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x7b) return new OpenCurlyToken();
					else if(code == 0x7c) {
						if(next() == 0x3d) {
							consume();
							return new DashMatchToken();
						} else if(next() == 0x7c) {
							consume();
							return new ColumnToken();
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x7d) return new CloseCurlyToken();
					else if(code == 0x7e) {
						if(next() == 0x3d) {
							consume();
							return new IncludeMatchToken();
						} else {
							return new DelimToken(code);
						}
					}
					else if(digit(code)) {
						reconsume();
						return consumeANumericToken();
					}
					else if(namestartchar(code)) {
						reconsume();
						return consumeAnIdentlikeToken();
					}
					else if(eof()) return new EOFToken();
					else return new DelimToken(code);
				};

				var consumeComments = function() {
					while(next(1) == 0x2f && next(2) == 0x2a) {
						consume(2);
						while(true) {
							consume();
							if(code == 0x2a && next() == 0x2f) {
								consume();
								break;
							} else if(eof()) {
								parseerror();
								return;
							}
						}
					}
				};

				var consumeANumericToken = function() {
					var num = consumeANumber();
					if(wouldStartAnIdentifier(next(1), next(2), next(3))) {
						var token = new DimensionToken();
						token.value = num.value;
						token.repr = num.repr;
						token.type = num.type;
						token.unit = consumeAName();
						return token;
					} else if(next() == 0x25) {
						consume();
						var token = new PercentageToken();
						token.value = num.value;
						token.repr = num.repr;
						return token;
					} else {
						var token = new NumberToken();
						token.value = num.value;
						token.repr = num.repr;
						token.type = num.type;
						return token;
					}
				};

				var consumeAnIdentlikeToken = function() {
					var str = consumeAName();
					if(str.toLowerCase() == "url" && next() == 0x28) {
						consume();
						while(whitespace(next(1)) && whitespace(next(2))) consume();
						if(next() == 0x22 || next() == 0x27) {
							return new FunctionToken(str);
						} else if(whitespace(next()) && (next(2) == 0x22 || next(2) == 0x27)) {
							return new FunctionToken(str);
						} else {
							return consumeAURLToken();
						}
					} else if(next() == 0x28) {
						consume();
						return new FunctionToken(str);
					} else {
						return new IdentToken(str);
					}
				};

				var consumeAStringToken = function(endingCodePoint) {
					if(endingCodePoint === undefined) endingCodePoint = code;
					var string = "";
					while(consume()) {
						if(code == endingCodePoint || eof()) {
							return new StringToken(string);
						} else if(newline(code)) {
							parseerror();
							reconsume();
							return new BadStringToken();
						} else if(code == 0x5c) {
							if(eof(next())) {
								donothing();
							} else if(newline(next())) {
								consume();
							} else {
								string += stringFromCode(consumeEscape());
							}
						} else {
							string += stringFromCode(code);
						}
					}
				};

				var consumeAURLToken = function() {
					var token = new URLToken("");
					while(whitespace(next())) consume();
					if(eof(next())) return token;
					while(consume()) {
						if(code == 0x29 || eof()) {
							return token;
						} else if(whitespace(code)) {
							while(whitespace(next())) consume();
							if(next() == 0x29 || eof(next())) {
								consume();
								return token;
							} else {
								consumeTheRemnantsOfABadURL();
								return new BadURLToken();
							}
						} else if(code == 0x22 || code == 0x27 || code == 0x28 || nonprintable(code)) {
							parseerror();
							consumeTheRemnantsOfABadURL();
							return new BadURLToken();
						} else if(code == 0x5c) {
							if(startsWithAValidEscape()) {
								token.value += stringFromCode(consumeEscape());
							} else {
								parseerror();
								consumeTheRemnantsOfABadURL();
								return new BadURLToken();
							}
						} else {
							token.value += stringFromCode(code);
						}
					}
				};

				var consumeEscape = function() {
					// Assume the the current character is the \
					// and the next code point is not a newline.
					consume();
					if(hexdigit(code)) {
						// Consume 1-6 hex digits
						var digits = [code];
						for(var total = 0; total < 5; total++) {
							if(hexdigit(next())) {
								consume();
								digits.push(code);
							} else {
								break;
							}
						}
						if(whitespace(next())) consume();
						var value = parseInt(digits.map(function(x){return String.fromCharCode(x);}).join(''), 16);
						if( value > maximumallowedcodepoint ) value = 0xfffd;
						return value;
					} else if(eof()) {
						return 0xfffd;
					} else {
						return code;
					}
				};

				var areAValidEscape = function(c1, c2) {
					if(c1 != 0x5c) return false;
					if(newline(c2)) return false;
					return true;
				};
				var startsWithAValidEscape = function() {
					return areAValidEscape(code, next());
				};

				var wouldStartAnIdentifier = function(c1, c2, c3) {
					if(c1 == 0x2d) {
						return namestartchar(c2) || c2 == 0x2d || areAValidEscape(c2, c3);
					} else if(namestartchar(c1)) {
						return true;
					} else if(c1 == 0x5c) {
						return areAValidEscape(c1, c2);
					} else {
						return false;
					}
				};
				var startsWithAnIdentifier = function() {
					return wouldStartAnIdentifier(code, next(1), next(2));
				};

				var wouldStartANumber = function(c1, c2, c3) {
					if(c1 == 0x2b || c1 == 0x2d) {
						if(digit(c2)) return true;
						if(c2 == 0x2e && digit(c3)) return true;
						return false;
					} else if(c1 == 0x2e) {
						if(digit(c2)) return true;
						return false;
					} else if(digit(c1)) {
						return true;
					} else {
						return false;
					}
				};
				var startsWithANumber = function() {
					return wouldStartANumber(code, next(1), next(2));
				};

				var consumeAName = function() {
					var result = "";
					while(consume()) {
						if(namechar(code)) {
							result += stringFromCode(code);
						} else if(startsWithAValidEscape()) {
							result += stringFromCode(consumeEscape());
						} else {
							reconsume();
							return result;
						}
					}
				};

				var consumeANumber = function() {
					var repr = [];
					var type = "integer";
					if(next() == 0x2b || next() == 0x2d) {
						consume();
						repr += stringFromCode(code);
					}
					while(digit(next())) {
						consume();
						repr += stringFromCode(code);
					}
					if(next(1) == 0x2e && digit(next(2))) {
						consume();
						repr += stringFromCode(code);
						consume();
						repr += stringFromCode(code);
						type = "number";
						while(digit(next())) {
							consume();
							repr += stringFromCode(code);
						}
					}
					var c1 = next(1), c2 = next(2), c3 = next(3);
					if((c1 == 0x45 || c1 == 0x65) && digit(c2)) {
						consume();
						repr += stringFromCode(code);
						consume();
						repr += stringFromCode(code);
						type = "number";
						while(digit(next())) {
							consume();
							repr += stringFromCode(code);
						}
					} else if((c1 == 0x45 || c1 == 0x65) && (c2 == 0x2b || c2 == 0x2d) && digit(c3)) {
						consume();
						repr += stringFromCode(code);
						consume();
						repr += stringFromCode(code);
						consume();
						repr += stringFromCode(code);
						type = "number";
						while(digit(next())) {
							consume();
							repr += stringFromCode(code);
						}
					}
					var value = convertAStringToANumber(repr);
					return {type:type, value:value, repr:repr};
				};

				var convertAStringToANumber = function(string) {
					// CSS's number rules are identical to JS, afaik.
					return +string;
				};

				var consumeTheRemnantsOfABadURL = function() {
					while(consume()) {
						if(code == 0x29 || eof()) {
							return;
						} else if(startsWithAValidEscape()) {
							consumeEscape();
							donothing();
						} else {
							donothing();
						}
					}
				};



				var iterationCount = 0;
				while(!eof(next())) {
					tokens.push(consumeAToken());
					iterationCount++;
					if(iterationCount > str.length*2) return "I'm infinite-looping!";
				}
				return tokens;
			}

			function CSSParserToken() { throw "Abstract Base Class"; }
			CSSParserToken.prototype.toJSON = function() {
				return {token: this.tokenType};
			};
			CSSParserToken.prototype.toString = function() { return this.tokenType; };
			CSSParserToken.prototype.toSource = function() { return ''+this; };

			function BadStringToken() { return this; }
			BadStringToken.prototype = Object.create(CSSParserToken.prototype);
			BadStringToken.prototype.tokenType = "BADSTRING";

			function BadURLToken() { return this; }
			BadURLToken.prototype = Object.create(CSSParserToken.prototype);
			BadURLToken.prototype.tokenType = "BADURL";

			function WhitespaceToken() { return this; }
			WhitespaceToken.prototype = Object.create(CSSParserToken.prototype);
			WhitespaceToken.prototype.tokenType = "WHITESPACE";
			WhitespaceToken.prototype.toString = function() { return "WS"; };
			WhitespaceToken.prototype.toSource = function() { return " "; };

			function CDOToken() { return this; }
			CDOToken.prototype = Object.create(CSSParserToken.prototype);
			CDOToken.prototype.tokenType = "CDO";
			CDOToken.prototype.toSource = function() { return "<!--"; };

			function CDCToken() { return this; }
			CDCToken.prototype = Object.create(CSSParserToken.prototype);
			CDCToken.prototype.tokenType = "CDC";
			CDCToken.prototype.toSource = function() { return "-->"; };

			function ColonToken() { return this; }
			ColonToken.prototype = Object.create(CSSParserToken.prototype);
			ColonToken.prototype.tokenType = "COLON";

			function SemicolonToken() { return this; }
			SemicolonToken.prototype = Object.create(CSSParserToken.prototype);
			SemicolonToken.prototype.tokenType = "SEMICOLON";

			function CommaToken() { return this; }
			CommaToken.prototype = Object.create(CSSParserToken.prototype);
			CommaToken.prototype.tokenType = "COMMA";

			function GroupingToken() { throw "Abstract Base Class"; }
			GroupingToken.prototype = Object.create(CSSParserToken.prototype);

			function OpenCurlyToken() { this.value = "{"; this.mirror = "}"; return this; }
			OpenCurlyToken.prototype = Object.create(GroupingToken.prototype);
			OpenCurlyToken.prototype.tokenType = "OPENCURLY";

			function CloseCurlyToken() { this.value = "}"; this.mirror = "{"; return this; }
			CloseCurlyToken.prototype = Object.create(GroupingToken.prototype);
			CloseCurlyToken.prototype.tokenType = "CLOSECURLY";

			function OpenSquareToken() { this.value = "["; this.mirror = "]"; return this; }
			OpenSquareToken.prototype = Object.create(GroupingToken.prototype);
			OpenSquareToken.prototype.tokenType = "OPENSQUARE";

			function CloseSquareToken() { this.value = "]"; this.mirror = "["; return this; }
			CloseSquareToken.prototype = Object.create(GroupingToken.prototype);
			CloseSquareToken.prototype.tokenType = "CLOSESQUARE";

			function OpenParenToken() { this.value = "("; this.mirror = ")"; return this; }
			OpenParenToken.prototype = Object.create(GroupingToken.prototype);
			OpenParenToken.prototype.tokenType = "OPENPAREN";

			function CloseParenToken() { this.value = ")"; this.mirror = "("; return this; }
			CloseParenToken.prototype = Object.create(GroupingToken.prototype);
			CloseParenToken.prototype.tokenType = "CLOSEPAREN";

			function IncludeMatchToken() { return this; }
			IncludeMatchToken.prototype = Object.create(CSSParserToken.prototype);
			IncludeMatchToken.prototype.tokenType = "~=";

			function DashMatchToken() { return this; }
			DashMatchToken.prototype = Object.create(CSSParserToken.prototype);
			DashMatchToken.prototype.tokenType = "|=";

			function PrefixMatchToken() { return this; }
			PrefixMatchToken.prototype = Object.create(CSSParserToken.prototype);
			PrefixMatchToken.prototype.tokenType = "^=";

			function SuffixMatchToken() { return this; }
			SuffixMatchToken.prototype = Object.create(CSSParserToken.prototype);
			SuffixMatchToken.prototype.tokenType = "$=";

			function SubstringMatchToken() { return this; }
			SubstringMatchToken.prototype = Object.create(CSSParserToken.prototype);
			SubstringMatchToken.prototype.tokenType = "*=";

			function ColumnToken() { return this; }
			ColumnToken.prototype = Object.create(CSSParserToken.prototype);
			ColumnToken.prototype.tokenType = "||";

			function EOFToken() { return this; }
			EOFToken.prototype = Object.create(CSSParserToken.prototype);
			EOFToken.prototype.tokenType = "EOF";
			EOFToken.prototype.toSource = function() { return ""; };

			function DelimToken(code) {
				this.value = stringFromCode(code);
				return this;
			}
			DelimToken.prototype = Object.create(CSSParserToken.prototype);
			DelimToken.prototype.tokenType = "DELIM";
			DelimToken.prototype.toString = function() { return "DELIM("+this.value+")"; };
			DelimToken.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.value = this.value;
				return json;
			};
			DelimToken.prototype.toSource = function() {
				if(this.value == "\\")
					return "\\\n";
				else
					return this.value;
			};

			function StringValuedToken() { throw "Abstract Base Class"; }
			StringValuedToken.prototype = Object.create(CSSParserToken.prototype);
			StringValuedToken.prototype.ASCIIMatch = function(str) {
				return this.value.toLowerCase() == str.toLowerCase();
			};
			StringValuedToken.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.value = this.value;
				return json;
			};

			function IdentToken(val) {
				this.value = val;
			}
			IdentToken.prototype = Object.create(StringValuedToken.prototype);
			IdentToken.prototype.tokenType = "IDENT";
			IdentToken.prototype.toString = function() { return "IDENT("+this.value+")"; };
			IdentToken.prototype.toSource = function() {
				return escapeIdent(this.value);
			};

			function FunctionToken(val) {
				this.value = val;
				this.mirror = ")";
			}
			FunctionToken.prototype = Object.create(StringValuedToken.prototype);
			FunctionToken.prototype.tokenType = "FUNCTION";
			FunctionToken.prototype.toString = function() { return "FUNCTION("+this.value+")"; };
			FunctionToken.prototype.toSource = function() {
				return escapeIdent(this.value) + "(";
			};

			function AtKeywordToken(val) {
				this.value = val;
			}
			AtKeywordToken.prototype = Object.create(StringValuedToken.prototype);
			AtKeywordToken.prototype.tokenType = "ATKEYWORD";
			AtKeywordToken.prototype.toString = function() { return "AT("+this.value+")"; };
			AtKeywordToken.prototype.toSource = function() {
				return "@" + escapeIdent(this.value);
			};

			function HashToken(val) {
				this.value = val;
				this.type = "unrestricted";
			}
			HashToken.prototype = Object.create(StringValuedToken.prototype);
			HashToken.prototype.tokenType = "HASH";
			HashToken.prototype.toString = function() { return "HASH("+this.value+")"; };
			HashToken.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.value = this.value;
				json.type = this.type;
				return json;
			};
			HashToken.prototype.toSource = function() {
				if(this.type == "id") {
					return "#" + escapeIdent(this.value);
				} else {
					return "#" + escapeHash(this.value);
				}
			};

			function StringToken(val) {
				this.value = val;
			}
			StringToken.prototype = Object.create(StringValuedToken.prototype);
			StringToken.prototype.tokenType = "STRING";
			StringToken.prototype.toString = function() {
				return '"' + escapeString(this.value) + '"';
			};

			function URLToken(val) {
				this.value = val;
			}
			URLToken.prototype = Object.create(StringValuedToken.prototype);
			URLToken.prototype.tokenType = "URL";
			URLToken.prototype.toString = function() { return "URL("+this.value+")"; };
			URLToken.prototype.toSource = function() {
				return 'url("' + escapeString(this.value) + '")';
			};

			function NumberToken() {
				this.value = null;
				this.type = "integer";
				this.repr = "";
			}
			NumberToken.prototype = Object.create(CSSParserToken.prototype);
			NumberToken.prototype.tokenType = "NUMBER";
			NumberToken.prototype.toString = function() {
				if(this.type == "integer")
					return "INT("+this.value+")";
				return "NUMBER("+this.value+")";
			};
			NumberToken.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.value = this.value;
				json.type = this.type;
				json.repr = this.repr;
				return json;
			};
			NumberToken.prototype.toSource = function() { return this.repr; };

			function PercentageToken() {
				this.value = null;
				this.repr = "";
			}
			PercentageToken.prototype = Object.create(CSSParserToken.prototype);
			PercentageToken.prototype.tokenType = "PERCENTAGE";
			PercentageToken.prototype.toString = function() { return "PERCENTAGE("+this.value+")"; };
			PercentageToken.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.value = this.value;
				json.repr = this.repr;
				return json;
			};
			PercentageToken.prototype.toSource = function() { return this.repr + "%"; };

			function DimensionToken() {
				this.value = null;
				this.type = "integer";
				this.repr = "";
				this.unit = "";
			}
			DimensionToken.prototype = Object.create(CSSParserToken.prototype);
			DimensionToken.prototype.tokenType = "DIMENSION";
			DimensionToken.prototype.toString = function() { return "DIM("+this.value+","+this.unit+")"; };
			DimensionToken.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.value = this.value;
				json.type = this.type;
				json.repr = this.repr;
				json.unit = this.unit;
				return json;
			};
			DimensionToken.prototype.toSource = function() {
				var source = this.repr;
				var unit = escapeIdent(this.unit);
				if(unit[0].toLowerCase() == "e" && (unit[1] == "-" || between(unit.charCodeAt(1), 0x30, 0x39))) {
					// Unit is ambiguous with scinot
					// Remove the leading "e", replace with escape.
					unit = "\\65 " + unit.slice(1, unit.length);
				}
				return source+unit;
			};

			function escapeIdent(string) {
				string = ''+string;
				var result = '';
				var firstcode = string.charCodeAt(0);
				for(var i = 0; i < string.length; i++) {
					var code = string.charCodeAt(i);
					if(code == 0x0) {
						throw new InvalidCharacterError('Invalid character: the input contains U+0000.');
					}

					if(
						between(code, 0x1, 0x1f) || code == 0x7f ||
						(i == 0 && between(code, 0x30, 0x39)) ||
						(i == 1 && between(code, 0x30, 0x39) && firstcode == 0x2d)
					) {
						result += '\\' + code.toString(16) + ' ';
					} else if(
						code >= 0x80 ||
						code == 0x2d ||
						code == 0x5f ||
						between(code, 0x30, 0x39) ||
						between(code, 0x41, 0x5a) ||
						between(code, 0x61, 0x7a)
					) {
						result += string[i];
					} else {
						result += '\\' + string[i];
					}
				}
				return result;
			}

			function escapeHash(string) {
				// Escapes the contents of "unrestricted"-type hash tokens.
				// Won't preserve the ID-ness of "id"-type hash tokens;
				// use escapeIdent() for that.
				string = ''+string;
				var result = '';
				var firstcode = string.charCodeAt(0);
				for(var i = 0; i < string.length; i++) {
					var code = string.charCodeAt(i);
					if(code == 0x0) {
						throw new InvalidCharacterError('Invalid character: the input contains U+0000.');
					}

					if(
						code >= 0x80 ||
						code == 0x2d ||
						code == 0x5f ||
						between(code, 0x30, 0x39) ||
						between(code, 0x41, 0x5a) ||
						between(code, 0x61, 0x7a)
					) {
						result += string[i];
					} else {
						result += '\\' + code.toString(16) + ' ';
					}
				}
				return result;
			}

			function escapeString(string) {
				string = ''+string;
				var result = '';
				for(var i = 0; i < string.length; i++) {
					var code = string.charCodeAt(i);

					if(code == 0x0) {
						throw new InvalidCharacterError('Invalid character: the input contains U+0000.');
					}

					if(between(code, 0x1, 0x1f) || code == 0x7f) {
						result += '\\' + code.toString(16) + ' ';
					} else if(code == 0x22 || code == 0x5c) {
						result += '\\' + string[i];
					} else {
						result += string[i];
					}
				}
				return result;
			}

			// Exportation.
			exports.tokenize = tokenize;
			exports.IdentToken = IdentToken;
			exports.FunctionToken = FunctionToken;
			exports.AtKeywordToken = AtKeywordToken;
			exports.HashToken = HashToken;
			exports.StringToken = StringToken;
			exports.BadStringToken = BadStringToken;
			exports.URLToken = URLToken;
			exports.BadURLToken = BadURLToken;
			exports.DelimToken = DelimToken;
			exports.NumberToken = NumberToken;
			exports.PercentageToken = PercentageToken;
			exports.DimensionToken = DimensionToken;
			exports.IncludeMatchToken = IncludeMatchToken;
			exports.DashMatchToken = DashMatchToken;
			exports.PrefixMatchToken = PrefixMatchToken;
			exports.SuffixMatchToken = SuffixMatchToken;
			exports.SubstringMatchToken = SubstringMatchToken;
			exports.ColumnToken = ColumnToken;
			exports.WhitespaceToken = WhitespaceToken;
			exports.CDOToken = CDOToken;
			exports.CDCToken = CDCToken;
			exports.ColonToken = ColonToken;
			exports.SemicolonToken = SemicolonToken;
			exports.CommaToken = CommaToken;
			exports.OpenParenToken = OpenParenToken;
			exports.CloseParenToken = CloseParenToken;
			exports.OpenSquareToken = OpenSquareToken;
			exports.CloseSquareToken = CloseSquareToken;
			exports.OpenCurlyToken = OpenCurlyToken;
			exports.CloseCurlyToken = CloseCurlyToken;
			exports.EOFToken = EOFToken;
			exports.CSSParserToken = CSSParserToken;
			exports.GroupingToken = GroupingToken;

			function TokenStream(tokens) {
				// Assume that tokens is an array.
				this.tokens = tokens;
				this.i = -1;
			}
			TokenStream.prototype.tokenAt = function(i) {
				if(i < this.tokens.length)
					return this.tokens[i];
				return new EOFToken();
			};
			TokenStream.prototype.consume = function(num) {
				if(num === undefined) num = 1;
				this.i += num;
				this.token = this.tokenAt(this.i);
				//console.log(this.i, this.token);
				return true;
			};
			TokenStream.prototype.next = function() {
				return this.tokenAt(this.i+1);
			};
			TokenStream.prototype.reconsume = function() {
				this.i--;
			};

			function parseerror(s, msg) {
				console.log("Parse error at token " + s.i + ": " + s.token + ".\n" + msg);
				return true;
			}
			function donothing(){ return true; };

			function consumeAListOfRules(s, topLevel) {
				var rules = [];
				var rule;
				while(s.consume()) {
					if(s.token instanceof WhitespaceToken) {
						continue;
					} else if(s.token instanceof EOFToken) {
						return rules;
					} else if(s.token instanceof CDOToken || s.token instanceof CDCToken) {
						if(topLevel == "top-level") continue;
						s.reconsume();
						if(rule = consumeAQualifiedRule(s)) rules.push(rule);
					} else if(s.token instanceof AtKeywordToken) {
						s.reconsume();
						if(rule = consumeAnAtRule(s)) rules.push(rule);
					} else {
						s.reconsume();
						if(rule = consumeAQualifiedRule(s)) rules.push(rule);
					}
				}
			}

			function consumeAnAtRule(s) {
				s.consume();
				var rule = new AtRule(s.token.value);
				while(s.consume()) {
					if(s.token instanceof SemicolonToken || s.token instanceof EOFToken) {
						return rule;
					} else if(s.token instanceof OpenCurlyToken) {
						rule.value = consumeASimpleBlock(s);
						return rule;
					} else if(s.token instanceof SimpleBlock && s.token.name == "{") {
						rule.value = s.token;
						return rule;
					} else {
						s.reconsume();
						rule.prelude.push(consumeAComponentValue(s));
					}
				}
			}

			function consumeAQualifiedRule(s) {
				var rule = new QualifiedRule();
				while(s.consume()) {
					if(s.token instanceof EOFToken) {
						parseerror(s, "Hit EOF when trying to parse the prelude of a qualified rule.");
						return;
					} else if(s.token instanceof OpenCurlyToken) {
						rule.value = consumeASimpleBlock(s);
						return rule;
					} else if(s.token instanceof SimpleBlock && s.token.name == "{") {
						rule.value = s.token;
						return rule;
					} else {
						s.reconsume();
						rule.prelude.push(consumeAComponentValue(s));
					}
				}
			}

			function consumeAListOfDeclarations(s) {
				var decls = [];
				while(s.consume()) {
					if(s.token instanceof WhitespaceToken || s.token instanceof SemicolonToken) {
						donothing();
					} else if(s.token instanceof EOFToken) {
						return decls;
					} else if(s.token instanceof AtKeywordToken) {
						s.reconsume();
						decls.push(consumeAnAtRule(s));
					} else if(s.token instanceof IdentToken) {
						var temp = [s.token];
						while(!(s.next() instanceof SemicolonToken || s.next() instanceof EOFToken))
							temp.push(consumeAComponentValue(s));
						var decl;
						if(decl = consumeADeclaration(new TokenStream(temp))) decls.push(decl);
					} else {
						parseerror(s);
						s.reconsume();
						while(!(s.next() instanceof SemicolonToken || s.next() instanceof EOFToken))
							consumeAComponentValue(s);
					}
				}
			}

			function consumeADeclaration(s) {
				// Assumes that the next input token will be an ident token.
				s.consume();
				var decl = new Declaration(s.token.value);
				while(s.next() instanceof WhitespaceToken) s.consume();
				if(!(s.next() instanceof ColonToken)) {
					parseerror(s);
					return;
				} else {
					s.consume();
				}
				while(!(s.next() instanceof EOFToken)) {
					decl.value.push(consumeAComponentValue(s));
				}
				var foundImportant = false;
				for(var i = decl.value.length - 1; i >= 0; i--) {
					if(decl.value[i] instanceof WhitespaceToken) {
						continue;
					} else if(decl.value[i] instanceof IdentToken && decl.value[i].ASCIIMatch("important")) {
						foundImportant = true;
					} else if(foundImportant && decl.value[i] instanceof DelimToken && decl.value[i].value == "!") {
						decl.value.splice(i, decl.value.length);
						decl.important = true;
						break;
					} else {
						break;
					}
				}
				return decl;
			}

			function consumeAComponentValue(s) {
				s.consume();
				if(s.token instanceof OpenCurlyToken || s.token instanceof OpenSquareToken || s.token instanceof OpenParenToken)
					return consumeASimpleBlock(s);
				if(s.token instanceof FunctionToken)
					return consumeAFunction(s);
				return s.token;
			}

			function consumeASimpleBlock(s) {
				var mirror = s.token.mirror;
				var block = new SimpleBlock(s.token.value);
				while(s.consume()) {
					if(s.token instanceof EOFToken || (s.token instanceof GroupingToken && s.token.value == mirror))
						return block;
					else {
						s.reconsume();
						block.value.push(consumeAComponentValue(s));
					}
				}
			}

			function consumeAFunction(s) {
				var func = new Func(s.token.value);
				while(s.consume()) {
					if(s.token instanceof EOFToken || s.token instanceof CloseParenToken)
						return func;
					else {
						s.reconsume();
						func.value.push(consumeAComponentValue(s));
					}
				}
			}

			function normalizeInput(input) {
				if(typeof input == "string")
					return new TokenStream(tokenize(input));
				else if(typeof input == "number")
					return new TokenStream(tokenize(input.toString()));
				if(input instanceof TokenStream)
					return input;
				if(input.length !== undefined)
					return new TokenStream(input);
				else throw SyntaxError(String(input) + ' ' + typeof input);
			}

			function parseAStylesheet(s) {
				s = normalizeInput(s);
				var sheet = new Stylesheet();
				sheet.value = consumeAListOfRules(s, "top-level");
				return sheet;
			}

			function parseAListOfRules(s) {
				s = normalizeInput(s);
				return consumeAListOfRules(s);
			}

			function parseARule(s) {
				s = normalizeInput(s);
				while(s.next() instanceof WhitespaceToken) s.consume();
				if(s.next() instanceof EOFToken) throw SyntaxError();
				if(s.next() instanceof AtKeywordToken) {
					var rule = consumeAnAtRule(s);
				} else {
					var rule = consumeAQualifiedRule(s);
					if(!rule) throw SyntaxError();
				}
				while(s.next() instanceof WhitespaceToken) s.consume();
				if(s.next() instanceof EOFToken)
					return rule;
				throw SyntaxError();
			}

			function parseADeclaration(s) {
				s = normalizeInput(s);
				while(s.next() instanceof WhitespaceToken) s.consume();
				if(!(s.next() instanceof IdentToken)) throw SyntaxError();
				var decl = consumeADeclaration(s);
				if(decl)
					return decl
				else
					throw SyntaxError();
			}

			function parseAListOfDeclarations(s) {
				s = normalizeInput(s);
				return consumeAListOfDeclarations(s);
			}

			function parseAComponentValue(s) {
				s = normalizeInput(s);
				while(s.next() instanceof WhitespaceToken) s.consume();
				if(s.next() instanceof EOFToken) throw SyntaxError();
				var val = consumeAComponentValue(s);
				if(!val) throw SyntaxError();
				while(s.next() instanceof WhitespaceToken) s.consume();
				if(s.next() instanceof EOFToken)
					return val;
				throw SyntaxError();
			}

			function parseAListOfComponentValues(s) {
				s = normalizeInput(s);
				var vals = [];
				while(true) {
					var val = consumeAComponentValue(s);
					if(val instanceof EOFToken)
						return vals
					else
						vals.push(val);
				}
			}

			function parseACommaSeparatedListOfComponentValues(s) {
				s = normalizeInput(s);
				var listOfCVLs = [];
				while(true) {
					var vals = [];
					while(true) {
						var val = consumeAComponentValue(s);
						if(val instanceof EOFToken) {
							listOfCVLs.push(vals);
							return listOfCVLs;
						} else if(val instanceof CommaToken) {
							listOfCVLs.push(vals);
							break;
						} else {
							vals.push(val);
						}
					}
				}
			}


			function CSSParserRule() { throw "Abstract Base Class"; }
			CSSParserRule.prototype.toString = function(indent) {
				return JSON.stringify(this,null,indent);
			};
			CSSParserRule.prototype.toJSON = function() {
				return {type:this.type, value:this.value};
			};

			function Stylesheet() {
				this.value = [];
				return this;
			}
			Stylesheet.prototype = Object.create(CSSParserRule.prototype);
			Stylesheet.prototype.type = "STYLESHEET";

			function AtRule(name) {
				this.name = name;
				this.prelude = [];
				this.value = null;
				return this;
			}
			AtRule.prototype = Object.create(CSSParserRule.prototype);
			AtRule.prototype.type = "AT-RULE";
			AtRule.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.name = this.name;
				json.prelude = this.prelude;
				return json;
			};

			function QualifiedRule() {
				this.prelude = [];
				this.value = [];
				return this;
			}
			QualifiedRule.prototype = Object.create(CSSParserRule.prototype);
			QualifiedRule.prototype.type = "QUALIFIED-RULE";
			QualifiedRule.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.prelude = this.prelude;
				return json;
			};

			function Declaration(name) {
				this.name = name;
				this.value = [];
				this.important = false;
				return this;
			}
			Declaration.prototype = Object.create(CSSParserRule.prototype);
			Declaration.prototype.type = "DECLARATION";
			Declaration.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.name = this.name;
				json.important = this.important;
				return json;
			};

			function SimpleBlock(type) {
				this.name = type;
				this.value = [];
				return this;
			}
			SimpleBlock.prototype = Object.create(CSSParserRule.prototype);
			SimpleBlock.prototype.type = "BLOCK";
			SimpleBlock.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.name = this.name;
				return json;
			};

			function Func(name) {
				this.name = name;
				this.value = [];
				return this;
			}
			Func.prototype = Object.create(CSSParserRule.prototype);
			Func.prototype.type = "FUNCTION";
			Func.prototype.tokenType = "FUNCTION";
			Func.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.name = this.name;
				return json;
			};


			/* Grammar Application */

			function canonicalize(rule, grammar, topGrammar) {
				if(grammar === undefined) grammar = CSSGrammar;
				if(topGrammar === undefined) topGrammar = grammar;
				if(!validateGrammar(grammar)) return;
				if(grammar) {
					if(grammar.stylesheet) grammar = topGrammar;
					var unknownTransformer = grammar.unknown || function(){return};
				}
				var ret = {"type":rule.type.toLowerCase()};

				if(rule.type == "STYLESHEET") {
					var contents = rule.value;
				} else if(rule.type == "BLOCK") {
					var unparsedContents = rule.value;
					ret.name = rule.name;
				} else if(rule.type == "QUALIFIED-RULE") {
					var unparsedContents = rule.value.value;
					ret.prelude = rule.prelude;
				} else if(rule.type == "AT-RULE") {
					var unparsedContents = rule.value.value;
					ret.name = rule.name;
					ret.prelude = rule.prelude;
				} else if(rule.type == "DECLARATION") {
					// I don't do grammar-checking of declarations yet.
					ret.name = rule.name;
					ret.value = rule.value;
					ret.important = rule.important;
					return ret;
				}
				if(unparsedContents) {
					if(grammar.declarations) {
						var contents = parseAListOfDeclarations(unparsedContents);
					} else if(grammar.qualified) {
						var contents = parseAListOfRules(unparsedContents);
					}
				}

				if(!grammar) {
					return ret;
				} else if(grammar.declarations) {
					ret.declarations = {}; // simple key/value map of declarations
					ret.rules = []; // in-order list of both decls and at-rules
					ret.errors = [];
					for(var i = 0; i < contents.length; i++) {
						var rule = contents[i];
						if(rule instanceof Declaration) {
							var decl = canonicalize(rule, {}, topGrammar);
							ret.declarations[rule.name] = decl;
							ret.rules.push(decl);
						} else { // rule is instanceof AtRule
							var subGrammar = grammar["@" + rule.name];
							if(subGrammar) { // Rule is valid in this context
								ret.rules.push(canonicalize(rule, subGrammar, topGrammar));
							} else {
								var result = unknownTransformer(rule);
								if(result) {
									ret.rules.push(result);
								} else {
									ret.errors.push(result);
								}
							}
						}
					}
				} else {
					ret.rules = [];
					ret.errors = [];
					for(var i = 0; i < contents.length; i++) {
						var rule = contents[i];
						if(rule instanceof QualifiedRule) {
							ret.rules.push(canonicalize(rule, grammar.qualified, topGrammar));
						} else {
							var subGrammar = grammar["@" + rule.name];
							if(subGrammar) { // Rule is valid in this context
								ret.rules.push(canonicalize(rule, subGrammar, topGrammar));
							} else {
								var result = unknownTransformer(rule);
								if(result) {
									ret.rules.push(result);
								} else {
									ret.errors.push(result);
								}
							}
						}
					}
				}
				return ret;
			}

			function validateGrammar(grammar) {
				// TODO
				return true
			}

			var CSSGrammar = {
				qualified: {declarations:true},
				"@media": {stylesheet:true},
				"@keyframes": {qualified:{declarations:true}},
				"@font-face": {declarations:true},
				"@supports": {stylesheet:true},
				"@scope": {stylesheet:true},
				"@counter-style": {declarations:true},
				"@import": null,
				"@font-feature-values": {
					// No qualified rules actually allowed,
					// but have to declare it one way or the other.
					qualified: true,
					"@stylistic": {declarations:true},
					"@styleset": {declarations:true},
					"@character-variants": {declarations:true},
					"@swash": {declarations:true},
					"@ornaments": {declarations:true},
					"@annotation": {declarations:true},
				},
				"@viewport": {declarations:true},
				"@page": {
					declarations: true,
					"@top-left-corner": {declarations:true},
					"@top-left": {declarations:true},
					"@top-center": {declarations:true},
					"@top-right": {declarations:true},
					"@top-right-corner": {declarations:true},
					"@right-top": {declarations:true},
					"@right-middle": {declarations:true},
					"@right-bottom": {declarations:true},
					"@right-bottom-corner": {declarations:true},
					"@bottom-right": {declarations:true},
					"@bottom-center": {declarations:true},
					"@bottom-left": {declarations:true},
					"@bottom-left-corner": {declarations:true},
					"@left-bottom": {declarations:true},
					"@left-center": {declarations:true},
					"@left-top": {declarations:true},
				},
				"@custom-selector": null,
				"@custom-media": null
			};



			// Exportation.
			exports.CSSParserRule = CSSParserRule;
			exports.Stylesheet = Stylesheet;
			exports.AtRule = AtRule;
			exports.QualifiedRule = QualifiedRule;
			exports.Declaration = Declaration;
			exports.SimpleBlock = SimpleBlock;
			exports.Func = Func;
			exports.parseAStylesheet = parseAStylesheet;
			exports.parseAListOfRules = parseAListOfRules;
			exports.parseARule = parseARule;
			exports.parseADeclaration = parseADeclaration;
			exports.parseAListOfDeclarations = parseAListOfDeclarations;
			exports.parseAComponentValue = parseAComponentValue;
			exports.parseAListOfComponentValues = parseAListOfComponentValues;
			exports.parseACommaSeparatedListOfComponentValues = parseACommaSeparatedListOfComponentValues;
			exports.canonicalizeRule = canonicalize;
			exports.CSSGrammar = CSSGrammar;

			}));

			},{}],71:[function(_dereq_,module,exports){
			"use strict";
			(function (root, factory) {
			    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
			    // Rhino, and plain browser loading.
			    if (typeof define === 'function' && define.amd) {
			        define(['exports'], factory);
			    } else if (typeof exports !== 'undefined') {
			        factory(exports);
			    } else {
			        factory(root);
			    }
			}(this, function (exports) {

			var between = function (num, first, last) { return num >= first && num <= last; };
			function digit(code) { return between(code, 0x30,0x39); }
			function hexdigit(code) { return digit(code) || between(code, 0x41,0x46) || between(code, 0x61,0x66); }
			function uppercaseletter(code) { return between(code, 0x41,0x5a); }
			function lowercaseletter(code) { return between(code, 0x61,0x7a); }
			function letter(code) { return uppercaseletter(code) || lowercaseletter(code); }
			function nonascii(code) { return code >= 0x80; }
			function namestartchar(code) { return letter(code) || nonascii(code) || code == 0x5f; }
			function namechar(code) { return namestartchar(code) || digit(code) || code == 0x2d; }
			function nonprintable(code) { return between(code, 0,8) || code == 0xb || between(code, 0xe,0x1f) || code == 0x7f; }
			function newline(code) { return code == 0xa; }
			function whitespace(code) { return newline(code) || code == 9 || code == 0x20; }
			function badescape(code) { return newline(code) || isNaN(code); }

			var maximumallowedcodepoint = 0x10ffff;

			var InvalidCharacterError = function(message) {
				this.message = message;
			};
			InvalidCharacterError.prototype = new Error;
			InvalidCharacterError.prototype.name = 'InvalidCharacterError';

			function preprocess(str) {
				// Turn a string into an array of code points,
				// following the preprocessing cleanup rules.
				var codepoints = [];
				for(var i = 0; i < str.length; i++) {
					var code = str.charCodeAt(i);
					if(code == 0xd && str.charCodeAt(i+1) == 0xa) {
						code = 0xa; i++;
					}
					if(code == 0xd || code == 0xc) code = 0xa;
					if(code == 0x0) code = 0xfffd;
					if(between(code, 0xd800, 0xdbff) && between(str.charCodeAt(i+1), 0xdc00, 0xdfff)) {
						// Decode a surrogate pair into an astral codepoint.
						var lead = code - 0xd800;
						var trail = str.charCodeAt(i+1) - 0xdc00;
						code = Math.pow(2, 16) + lead * Math.pow(2, 10) + trail;
						i++;
					}
					codepoints.push(code);
				}
			//	console.log(str, codepoints);
				return codepoints;
			}

			function stringFromCode(code) {
				if(code <= 0xffff) return String.fromCharCode(code);
				// Otherwise, encode astral char as surrogate pair.
				code -= Math.pow(2, 16);
				var lead = Math.floor(code/Math.pow(2, 10)) + 0xd800;
				var trail = code % Math.pow(2, 10) + 0xdc00;
				return String.fromCharCode(lead) + String.fromCharCode(trail);
			}

			function tokenize(str) {
				str = preprocess(str);
				var i = -1;
				var tokens = [];
				var code;

				// Line number information.
				var line = 0;
				var column = 0;
				// The only use of lastLineLength is in reconsume().
				var lastLineLength = 0;
				var incrLineno = function() {
					line += 1;
					lastLineLength = column;
					column = 0;
				};
				var locStart = {line:line, column:column};

				var codepoint = function(i) {
					if(i >= str.length) {
						return -1;
					}
					return str[i];
				};
				var next = function(num) {
					if(num === undefined)
						num = 1;
					if(num > 3)
						throw "Spec Error: no more than three codepoints of lookahead.";
					return codepoint(i+num);
				};
				var consume = function(num) {
					if(num === undefined)
						num = 1;
					i += num;
					code = codepoint(i);
					if(newline(code)) incrLineno();
					else column += num;
					//console.log('Consume '+i+' '+String.fromCharCode(code) + ' 0x' + code.toString(16));
					return true;
				};
				var reconsume = function() {
					i -= 1;
					if (newline(code)) {
						line -= 1;
						column = lastLineLength;
					} else {
						column -= 1;
					}
					locStart.line = line;
					locStart.column = column;
					return true;
				};
				var eof = function(codepoint) {
					if(codepoint === undefined) codepoint = code;
					return codepoint == -1;
				};
				var donothing = function() {};
				var parseerror = function() { console.log("Parse error at index " + i + ", processing codepoint 0x" + code.toString(16) + ".");return true; };

				var consumeAToken = function() {
					consumeComments();
					consume();
					if(code == 0x22) return consumeAStringToken();
					else if(whitespace(code)) {
						while(whitespace(next())) consume();
						return new WhitespaceToken;
					}
					else if(code == 0x23) {
						if(namechar(next()) || areAValidEscape(next(1), next(2))) {
							var token = new HashToken();
							if(wouldStartAnIdentifier(next(1), next(2), next(3))) token.type = "id";
			//				token.value = consumeAName();
							token.repr = '#' + consumeAName();
							return token;
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x24) {
						if(next() == 0x3d) {
							consume();
							return new SuffixMatchToken();
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x27) return consumeAStringToken();
					else if(code == 0x28) return new OpenParenToken();
					else if(code == 0x29) return new CloseParenToken();
					else if(code == 0x2a) {
						if(next() == 0x3d) {
							consume();
							return new SubstringMatchToken();
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x2b) {
						if(startsWithANumber()) {
							reconsume();
							return consumeANumericToken();
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x2c) return new CommaToken();
					else if(code == 0x2d) {
						if(startsWithANumber()) {
							reconsume();
							return consumeANumericToken();
						} else if(next(1) == 0x2d && next(2) == 0x3e) {
							consume(2);
							return new CDCToken();
						} else if(startsWithAnIdentifier()) {
							reconsume();
							return consumeAnIdentlikeToken();
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x2e) {
						if(startsWithANumber()) {
							reconsume();
							return consumeANumericToken();
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x3a) return new ColonToken;
					else if(code == 0x3b) return new SemicolonToken;
					else if(code == 0x3c) {
						if(next(1) == 0x21 && next(2) == 0x2d && next(3) == 0x2d) {
							consume(3);
							return new CDOToken();
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x40) {
						if(wouldStartAnIdentifier(next(1), next(2), next(3))) {
							return new AtKeywordToken(consumeAName());
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x5b) return new OpenSquareToken();
					else if(code == 0x5c) {
						if(startsWithAValidEscape()) {
							reconsume();
							return consumeAnIdentlikeToken();
						} else {
							parseerror();
							return new DelimToken(code);
						}
					}
					else if(code == 0x5d) return new CloseSquareToken();
					else if(code == 0x5e) {
						if(next() == 0x3d) {
							consume();
							return new PrefixMatchToken();
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x7b) return new OpenCurlyToken();
					else if(code == 0x7c) {
						if(next() == 0x3d) {
							consume();
							return new DashMatchToken();
						} else if(next() == 0x7c) {
							consume();
							return new ColumnToken();
						} else {
							return new DelimToken(code);
						}
					}
					else if(code == 0x7d) return new CloseCurlyToken();
					else if(code == 0x7e) {
						if(next() == 0x3d) {
							consume();
							return new IncludeMatchToken();
						} else {
							return new DelimToken(code);
						}
					}
					else if(digit(code)) {
						reconsume();
						return consumeANumericToken();
					}
					else if(namestartchar(code)) {
						reconsume();
						return consumeAnIdentlikeToken();
					}
					else if(eof()) return new EOFToken();
					else return new DelimToken(code);
				};

				var consumeComments = function() {
					while(next(1) == 0x2f && next(2) == 0x2a) {
						consume(2);
						while(true) {
							consume();
							if(code == 0x2a && next() == 0x2f) {
								consume();
								break;
							} else if(eof()) {
								parseerror();
								return;
							}
						}
					}
				};
				
				// DONE: normalize type
				var consumeANumericToken = function() {
					var num = consumeANumber();
					if(wouldStartAnIdentifier(next(1), next(2), next(3))) {
						var token = new DimensionToken();
						token.value = num.value;
			//			token.repr = num.repr;
						token.type = num.type;
						token.unit = consumeAName();
						token.repr = num.repr + token.unit;
						return token;
					} else if(next() == 0x25) {
						consume();
						var token = new PercentageToken();
						token.value = num.value;
						token.repr = num.repr + '%';
						return token;
					} else {
						var token = new NumberToken();
						token.value = num.value;
						token.repr = num.repr;
						token.type = num.type;
						return token;
					}
				};

				var consumeAnIdentlikeToken = function() {
					var str = consumeAName();
					if(str.toLowerCase() == "url" && next() == 0x28) {
						consume();
						while(whitespace(next(1)) && whitespace(next(2))) consume();
						if(next() == 0x22 || next() == 0x27) {
							return new FunctionToken(str);
						} else if(whitespace(next()) && (next(2) == 0x22 || next(2) == 0x27)) {
							return new FunctionToken(str);
						} else {
							return consumeAURLToken();
						}
					} else if(next() == 0x28) {
						consume();
						return new FunctionToken(str);
					} else {
						return new IdentToken(str);
					}
				};

				var consumeAStringToken = function(endingCodePoint) {
					if(endingCodePoint === undefined) endingCodePoint = code;
					var string = "";
					while(consume()) {
						if(code == endingCodePoint || eof()) {
							return new StringToken(string);
						} else if(newline(code)) {
							parseerror();
							reconsume();
							return new BadStringToken();
						} else if(code == 0x5c) {
							if(eof(next())) {
								donothing();
							} else if(newline(next())) {
								consume();
							} else {
								string += stringFromCode(consumeEscape());
							}
						} else {
							string += stringFromCode(code);
						}
					}
				};

				var consumeAURLToken = function() {
					var token = new URLToken("");
					while(whitespace(next())) consume();
					if(eof(next())) return token;
					while(consume()) {
						if(code == 0x29 || eof()) {
							return token;
						} else if(whitespace(code)) {
							while(whitespace(next())) consume();
							if(next() == 0x29 || eof(next())) {
								consume();
								return token;
							} else {
								consumeTheRemnantsOfABadURL();
								return new BadURLToken();
							}
						} else if(code == 0x22 || code == 0x27 || code == 0x28 || nonprintable(code)) {
							parseerror();
							consumeTheRemnantsOfABadURL();
							return new BadURLToken();
						} else if(code == 0x5c) {
							if(startsWithAValidEscape()) {
								token.value += stringFromCode(consumeEscape());
							} else {
								parseerror();
								consumeTheRemnantsOfABadURL();
								return new BadURLToken();
							}
						} else {
							token.value += stringFromCode(code);
						}
					}
				};

				var consumeEscape = function() {
					// Assume the the current character is the \
					// and the next code point is not a newline.
					consume();
					if(hexdigit(code)) {
						// Consume 1-6 hex digits
						var digits = [code];
						for(var total = 0; total < 5; total++) {
							if(hexdigit(next())) {
								consume();
								digits.push(code);
							} else {
								break;
							}
						}
						if(whitespace(next())) consume();
						var value = parseInt(digits.map(function(x){return String.fromCharCode(x);}).join(''), 16);
						if( value > maximumallowedcodepoint ) value = 0xfffd;
						return value;
					} else if(eof()) {
						return 0xfffd;
					} else {
						return code;
					}
				};

				var areAValidEscape = function(c1, c2) {
					if(c1 != 0x5c) return false;
					if(newline(c2)) return false;
					return true;
				};
				var startsWithAValidEscape = function() {
					return areAValidEscape(code, next());
				};

				var wouldStartAnIdentifier = function(c1, c2, c3) {
					if(c1 == 0x2d) {
						return namestartchar(c2) || c2 == 0x2d || areAValidEscape(c2, c3);
					} else if(namestartchar(c1)) {
						return true;
					} else if(c1 == 0x5c) {
						return areAValidEscape(c1, c2);
					} else {
						return false;
					}
				};
				var startsWithAnIdentifier = function() {
					return wouldStartAnIdentifier(code, next(1), next(2));
				};

				var wouldStartANumber = function(c1, c2, c3) {
					if(c1 == 0x2b || c1 == 0x2d) {
						if(digit(c2)) return true;
						if(c2 == 0x2e && digit(c3)) return true;
						return false;
					} else if(c1 == 0x2e) {
						if(digit(c2)) return true;
						return false;
					} else if(digit(c1)) {
						return true;
					} else {
						return false;
					}
				};
				var startsWithANumber = function() {
					return wouldStartANumber(code, next(1), next(2));
				};

				var consumeAName = function() {
					var result = "";
					while(consume()) {
						if(namechar(code)) {
							result += stringFromCode(code);
						} else if(startsWithAValidEscape()) {
							result += stringFromCode(consumeEscape());
						} else {
							reconsume();
							return result;
						}
					}
				};

				var consumeANumber = function() {
					var repr = [];
					var type = "integer";
					if(next() == 0x2b || next() == 0x2d) {
						consume();
						repr += stringFromCode(code);
					}
					while(digit(next())) {
						consume();
						repr += stringFromCode(code);
					}
					if(next(1) == 0x2e && digit(next(2))) {
						consume();
						repr += stringFromCode(code);
						consume();
						repr += stringFromCode(code);
						type = "number";
						while(digit(next())) {
							consume();
							repr += stringFromCode(code);
						}
					}
					var c1 = next(1), c2 = next(2), c3 = next(3);
					if((c1 == 0x45 || c1 == 0x65) && digit(c2)) {
						consume();
						repr += stringFromCode(code);
						consume();
						repr += stringFromCode(code);
						type = "number";
						while(digit(next())) {
							consume();
							repr += stringFromCode(code);
						}
					} else if((c1 == 0x45 || c1 == 0x65) && (c2 == 0x2b || c2 == 0x2d) && digit(c3)) {
						consume();
						repr += stringFromCode(code);
						consume();
						repr += stringFromCode(code);
						consume();
						repr += stringFromCode(code);
						type = "number";
						while(digit(next())) {
							consume();
							repr += stringFromCode(code);
						}
					}
					var value = convertAStringToANumber(repr);
					return {type:type, value:value, repr:repr};
				};

				var convertAStringToANumber = function(string) {
					// CSS's number rules are identical to JS, afaik.
					return +string;
				};

				var consumeTheRemnantsOfABadURL = function() {
					while(consume()) {
						if(code == 0x29 || eof()) {
							return;
						} else if(startsWithAValidEscape()) {
							consumeEscape();
							donothing();
						} else {
							donothing();
						}
					}
				};



				var iterationCount = 0;
				while(!eof(next())) {
					tokens.push(consumeAToken());
					iterationCount++;
					if(iterationCount > str.length*2) return "I'm infinite-looping!";
				}
				return tokens;
			}

			// DONE: normalize type
			function CSSParserToken() {
				this.value = 0;
				this.repr = '';
				this.type = "unrestricted";
				this.unit = "";
			}//throw "Abstract Base Class"; }
			CSSParserToken.prototype.toJSON = function() {
				return {token: this.tokenType};
			};
			CSSParserToken.prototype.toString = function() { return this.tokenType; };
			CSSParserToken.prototype.toSource = function() { return ''+this; };

			function BadStringToken() { return this; }
			BadStringToken.prototype = Object.create(CSSParserToken.prototype);
			BadStringToken.prototype.tokenType = "BADSTRING";

			function BadURLToken() { return this; }
			BadURLToken.prototype = Object.create(CSSParserToken.prototype);
			BadURLToken.prototype.tokenType = "BADURL";

			function WhitespaceToken() { return this; }
			WhitespaceToken.prototype = Object.create(CSSParserToken.prototype);
			WhitespaceToken.prototype.tokenType = "WHITESPACE";
			WhitespaceToken.prototype.toString = function() { return "WS"; };
			WhitespaceToken.prototype.toSource = function() { return " "; };

			function CDOToken() { return this; }
			CDOToken.prototype = Object.create(CSSParserToken.prototype);
			CDOToken.prototype.tokenType = "CDO";
			CDOToken.prototype.toSource = function() { return "<!--"; };

			function CDCToken() { return this; }
			CDCToken.prototype = Object.create(CSSParserToken.prototype);
			CDCToken.prototype.tokenType = "CDC";
			CDCToken.prototype.toSource = function() { return "-->"; };

			function ColonToken() { return this; }
			ColonToken.prototype = Object.create(CSSParserToken.prototype);
			ColonToken.prototype.tokenType = "COLON";

			function SemicolonToken() { return this; }
			SemicolonToken.prototype = Object.create(CSSParserToken.prototype);
			SemicolonToken.prototype.tokenType = "SEMICOLON";

			function CommaToken() { return this; }
			CommaToken.prototype = Object.create(CSSParserToken.prototype);
			CommaToken.prototype.tokenType = "COMMA";

			function GroupingToken() { throw "Abstract Base Class"; }
			GroupingToken.prototype = Object.create(CSSParserToken.prototype);

			function OpenCurlyToken() { this.value = "{"; this.mirror = "}"; return this; }
			OpenCurlyToken.prototype = Object.create(GroupingToken.prototype);
			OpenCurlyToken.prototype.tokenType = "OPENCURLY";

			function CloseCurlyToken() { this.value = "}"; this.mirror = "{"; return this; }
			CloseCurlyToken.prototype = Object.create(GroupingToken.prototype);
			CloseCurlyToken.prototype.tokenType = "CLOSECURLY";

			function OpenSquareToken() { this.value = "["; this.mirror = "]"; return this; }
			OpenSquareToken.prototype = Object.create(GroupingToken.prototype);
			OpenSquareToken.prototype.tokenType = "OPENSQUARE";

			function CloseSquareToken() { this.value = "]"; this.mirror = "["; return this; }
			CloseSquareToken.prototype = Object.create(GroupingToken.prototype);
			CloseSquareToken.prototype.tokenType = "CLOSESQUARE";

			function OpenParenToken() { this.value = "("; this.mirror = ")"; return this; }
			OpenParenToken.prototype = Object.create(GroupingToken.prototype);
			OpenParenToken.prototype.tokenType = "OPENPAREN";

			function CloseParenToken() { this.value = ")"; this.mirror = "("; return this; }
			CloseParenToken.prototype = Object.create(GroupingToken.prototype);
			CloseParenToken.prototype.tokenType = "CLOSEPAREN";

			function IncludeMatchToken() { return this; }
			IncludeMatchToken.prototype = Object.create(CSSParserToken.prototype);
			IncludeMatchToken.prototype.tokenType = "~=";

			function DashMatchToken() { return this; }
			DashMatchToken.prototype = Object.create(CSSParserToken.prototype);
			DashMatchToken.prototype.tokenType = "|=";

			function PrefixMatchToken() { return this; }
			PrefixMatchToken.prototype = Object.create(CSSParserToken.prototype);
			PrefixMatchToken.prototype.tokenType = "^=";

			function SuffixMatchToken() { return this; }
			SuffixMatchToken.prototype = Object.create(CSSParserToken.prototype);
			SuffixMatchToken.prototype.tokenType = "$=";

			function SubstringMatchToken() { return this; }
			SubstringMatchToken.prototype = Object.create(CSSParserToken.prototype);
			SubstringMatchToken.prototype.tokenType = "*=";

			function ColumnToken() { return this; }
			ColumnToken.prototype = Object.create(CSSParserToken.prototype);
			ColumnToken.prototype.tokenType = "||";

			function EOFToken() { return this; }
			EOFToken.prototype = Object.create(CSSParserToken.prototype);
			EOFToken.prototype.tokenType = "EOF";
			EOFToken.prototype.toSource = function() { return ""; };

			// TODO: normalize type
			function DelimToken(code) {
				this.value = stringFromCode(code);
				return this;
			}
			DelimToken.prototype = Object.create(CSSParserToken.prototype);
			DelimToken.prototype.tokenType = "DELIM";
			DelimToken.prototype.toString = function() { return "DELIM("+this.value+")"; };
			DelimToken.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.value = this.value;
				return json;
			};
			DelimToken.prototype.toSource = function() {
				if(this.value == "\\")
					return "\\\n";
				else
					return this.value;
			};

			// DONE: normalize type
			function StringValuedToken() {
				CSSParserToken.call(this);
			}//throw "Abstract Base Class"; }
			StringValuedToken.prototype = Object.create(CSSParserToken.prototype);
			StringValuedToken.prototype.ASCIIMatch = function(str) {
				return this.value.toLowerCase() == str.toLowerCase();
			};
			StringValuedToken.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
			//	json.value = this.value;
				json.value = this.repr;
				return json;
			};

			// DONE: normalize type
			function IdentToken(val) {
				StringValuedToken.call(this);

			//	this.value = val;
				this.repr = val;
			}
			IdentToken.prototype = Object.create(StringValuedToken.prototype);
			IdentToken.prototype.tokenType = "IDENT";
			IdentToken.prototype.toString = function() { return "IDENT("+this.repr+")"; };//return "IDENT("+this.value+")"; }
			IdentToken.prototype.toSource = function() {
			//	return escapeIdent(this.value);
				return escapeIdent(this.repr);
			};

			// DONE: normalize type
			function FunctionToken(val) {
				StringValuedToken.call(this);
			//	this.value = val;
				this.repr = val;
				this.mirror = ")";
			}
			FunctionToken.prototype = Object.create(StringValuedToken.prototype);
			FunctionToken.prototype.tokenType = "FUNCTION";
			FunctionToken.prototype.toString = function() { return "FUNCTION("+this.repr+")"; };//return "FUNCTION("+this.value+")"; }
			FunctionToken.prototype.toSource = function() {
			//	return escapeIdent(this.value) + "(";
				return escapeIdent(this.repr) + "(";
			};

			// DONE: normalize type
			function AtKeywordToken(val) {
				StringValuedToken.call(this);
			//	this.value = val;
				this.repr = val;
			}
			AtKeywordToken.prototype = Object.create(StringValuedToken.prototype);
			AtKeywordToken.prototype.tokenType = "ATKEYWORD";
			AtKeywordToken.prototype.toString = function() { return "AT("+this.repr+")"; };//return "AT("+this.value+")"; }
			AtKeywordToken.prototype.toSource = function() {
			//	return "@" + escapeIdent(this.value);
				return "@" + escapeIdent(this.repr);
			};

			// TODO: normalize type
			function HashToken(val) {
				StringValuedToken.call(this);
			//	this.value = val;
				this.repr = val;
				this.type = "unrestricted";
			}
			HashToken.prototype = Object.create(StringValuedToken.prototype);
			HashToken.prototype.tokenType = "HASH";
			HashToken.prototype.toString = function() { return "HASH("+this.repr+")";};  //return "HASH("+this.value+")"; }
			HashToken.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
			//	json.value = this.value;
				json.value = this.repr;
				json.type = this.type;
				return json;
			};
			HashToken.prototype.toSource = function() {
			//	if(this.type == "id") {
			//		return "#" + escapeIdent(this.value);
			//	} else {
			//		return "#" + escapeHash(this.value);
			//	}
				if(this.type == "id") {
					return "#" + escapeIdent(this.repr);
				} else {
					return "#" + escapeHash(this.repr);
				}
			};

			// DONE: normalize type
			function StringToken(val) {
				StringValuedToken.call(this);
			//	this.value = val;
				this.repr = val;
			}
			StringToken.prototype = Object.create(StringValuedToken.prototype);
			StringToken.prototype.tokenType = "STRING";
			StringToken.prototype.toString = function() {
			//	return '"' + escapeString(this.value) + '"';
				return '"' + escapeString(this.repr) + '"';
			};

			// DONE: normalize type
			function URLToken(val) {
				StringValuedToken.call(this);
			//	this.value = val;
				this.repr = val;
			}
			URLToken.prototype = Object.create(StringValuedToken.prototype);
			URLToken.prototype.tokenType = "URL";
			URLToken.prototype.toString = function() { return "URL("+this.repr+")"; };//return "URL("+this.value+")"; }
			URLToken.prototype.toSource = function() {
			//	return 'url("' + escapeString(this.value) + '")';
				return 'url("' + escapeString(this.repr) + '")';
			};

			// DONE: normalize type
			function NumberToken() {
				CSSParserToken.call(this);
				this.value = 0;
				this.type = "integer";
				this.repr = "";
			}
			NumberToken.prototype = Object.create(CSSParserToken.prototype);
			NumberToken.prototype.tokenType = "NUMBER";
			NumberToken.prototype.toString = function() {
			//	if(this.type == "integer")
			//		return "INT("+this.value+")";
			//	return "NUMBER("+this.value+")";
				if(this.type == "integer")
					return "INT("+this.repr+")";
				return "NUMBER("+this.repr+")";
			};
			NumberToken.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.value = this.value;
				json.type = this.type;
				json.repr = this.repr;
				return json;
			};
			NumberToken.prototype.toSource = function() { return this.repr; };

			// DONE: normalize type
			function PercentageToken() {
				CSSParserToken.call(this);
				this.value = 0;
				this.repr = "";
				this.type = "percentage";
			}
			PercentageToken.prototype = Object.create(CSSParserToken.prototype);
			PercentageToken.prototype.tokenType = "PERCENTAGE";
			PercentageToken.prototype.toString = function() { return "PERCENTAGE("+this.repr+")"; };//return "PERCENTAGE("+this.value+")"; }
			PercentageToken.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.value = this.value;
				json.repr = this.repr;
				return json;
			};
			PercentageToken.prototype.toSource = function() { return this.repr + "%"; };

			// DONE: normalize type
			function DimensionToken() {
				CSSParserToken.call(this);
				this.value = null;
				this.type = "integer";
				this.repr = "";
				this.unit = "";
			}
			DimensionToken.prototype = Object.create(CSSParserToken.prototype);
			DimensionToken.prototype.tokenType = "DIMENSION";
			DimensionToken.prototype.toString = function() { return "DIM("+this.repr+","+this.unit+")"; };//return "DIM("+this.value+","+this.unit+")"; }
			DimensionToken.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.value = this.value;
				json.type = this.type;
				json.repr = this.repr;
				json.unit = this.unit;
				return json;
			};
			DimensionToken.prototype.toSource = function() {
				var source = this.repr;
				var unit = escapeIdent(this.unit);
				if(unit[0].toLowerCase() == "e" && (unit[1] == "-" || between(unit.charCodeAt(1), 0x30, 0x39))) {
					// Unit is ambiguous with scinot
					// Remove the leading "e", replace with escape.
					unit = "\\65 " + unit.slice(1, unit.length);
				}
				return source+unit;
			};

			function escapeIdent(string) {
				string = ''+string;
				var result = '';
				var firstcode = string.charCodeAt(0);
				for(var i = 0; i < string.length; i++) {
					var code = string.charCodeAt(i);
					if(code == 0x0) {
						throw new InvalidCharacterError('Invalid character: the input contains U+0000.');
					}

					if(
						between(code, 0x1, 0x1f) || code == 0x7f ||
						(i == 0 && between(code, 0x30, 0x39)) ||
						(i == 1 && between(code, 0x30, 0x39) && firstcode == 0x2d)
					) {
						result += '\\' + code.toString(16) + ' ';
					} else if(
						code >= 0x80 ||
						code == 0x2d ||
						code == 0x5f ||
						between(code, 0x30, 0x39) ||
						between(code, 0x41, 0x5a) ||
						between(code, 0x61, 0x7a)
					) {
						result += string[i];
					} else {
						result += '\\' + string[i];
					}
				}
				return result;
			}

			function escapeHash(string) {
				// Escapes the contents of "unrestricted"-type hash tokens.
				// Won't preserve the ID-ness of "id"-type hash tokens;
				// use escapeIdent() for that.
				string = ''+string;
				var result = '';
				var firstcode = string.charCodeAt(0);
				for(var i = 0; i < string.length; i++) {
					var code = string.charCodeAt(i);
					if(code == 0x0) {
						throw new InvalidCharacterError('Invalid character: the input contains U+0000.');
					}

					if(
						code >= 0x80 ||
						code == 0x2d ||
						code == 0x5f ||
						between(code, 0x30, 0x39) ||
						between(code, 0x41, 0x5a) ||
						between(code, 0x61, 0x7a)
					) {
						result += string[i];
					} else {
						result += '\\' + code.toString(16) + ' ';
					}
				}
				return result;
			}

			function escapeString(string) {
				string = ''+string;
				var result = '';
				for(var i = 0; i < string.length; i++) {
					var code = string.charCodeAt(i);

					if(code == 0x0) {
						throw new InvalidCharacterError('Invalid character: the input contains U+0000.');
					}

					if(between(code, 0x1, 0x1f) || code == 0x7f) {
						result += '\\' + code.toString(16) + ' ';
					} else if(code == 0x22 || code == 0x5c) {
						result += '\\' + string[i];
					} else {
						result += string[i];
					}
				}
				return result;
			}

			// Exportation.
			exports.tokenize = tokenize;
			exports.IdentToken = IdentToken;
			exports.FunctionToken = FunctionToken;
			exports.AtKeywordToken = AtKeywordToken;
			exports.HashToken = HashToken;
			exports.StringToken = StringToken;
			exports.BadStringToken = BadStringToken;
			exports.URLToken = URLToken;
			exports.BadURLToken = BadURLToken;
			exports.DelimToken = DelimToken;
			exports.NumberToken = NumberToken;
			exports.PercentageToken = PercentageToken;
			exports.DimensionToken = DimensionToken;
			exports.IncludeMatchToken = IncludeMatchToken;
			exports.DashMatchToken = DashMatchToken;
			exports.PrefixMatchToken = PrefixMatchToken;
			exports.SuffixMatchToken = SuffixMatchToken;
			exports.SubstringMatchToken = SubstringMatchToken;
			exports.ColumnToken = ColumnToken;
			exports.WhitespaceToken = WhitespaceToken;
			exports.CDOToken = CDOToken;
			exports.CDCToken = CDCToken;
			exports.ColonToken = ColonToken;
			exports.SemicolonToken = SemicolonToken;
			exports.CommaToken = CommaToken;
			exports.OpenParenToken = OpenParenToken;
			exports.CloseParenToken = CloseParenToken;
			exports.OpenSquareToken = OpenSquareToken;
			exports.CloseSquareToken = CloseSquareToken;
			exports.OpenCurlyToken = OpenCurlyToken;
			exports.CloseCurlyToken = CloseCurlyToken;
			exports.EOFToken = EOFToken;
			exports.CSSParserToken = CSSParserToken;
			exports.GroupingToken = GroupingToken;

			function TokenStream(tokens) {
				// Assume that tokens is an array.
				this.tokens = tokens;
				this.i = -1;
			}
			TokenStream.prototype.tokenAt = function(i) {
				if(i < this.tokens.length)
					return this.tokens[i];
				return new EOFToken();
			};
			TokenStream.prototype.consume = function(num) {
				if(num === undefined) num = 1;
				this.i += num;
				this.token = this.tokenAt(this.i);
				//console.log(this.i, this.token);
				return true;
			};
			TokenStream.prototype.next = function() {
				return this.tokenAt(this.i+1);
			};
			TokenStream.prototype.reconsume = function() {
				this.i--;
			};

			function parseerror(s, msg) {
				console.log("Parse error at token " + s.i + ": " + s.token + ".\n" + msg);
				return true;
			}
			function donothing(){ return true; };

			function consumeAListOfRules(s, topLevel) {
				var rules = [];
				var rule;
				while(s.consume()) {
					if(s.token instanceof WhitespaceToken) {
						continue;
					} else if(s.token instanceof EOFToken) {
						return rules;
					} else if(s.token instanceof CDOToken || s.token instanceof CDCToken) {
						if(topLevel == "top-level") continue;
						s.reconsume();
						if(rule = consumeAQualifiedRule(s)) rules.push(rule);
					} else if(s.token instanceof AtKeywordToken) {
						s.reconsume();
						if(rule = consumeAnAtRule(s)) rules.push(rule);
					} else {
						s.reconsume();
						if(rule = consumeAQualifiedRule(s)) rules.push(rule);
					}
				}
			}

			function consumeAnAtRule(s) {
				s.consume();
				var rule = new AtRule(s.token.value);
				while(s.consume()) {
					if(s.token instanceof SemicolonToken || s.token instanceof EOFToken) {
						return rule;
					} else if(s.token instanceof OpenCurlyToken) {
						rule.value = consumeASimpleBlock(s);
						return rule;
					} else if(s.token instanceof SimpleBlock && s.token.name == "{") {
						rule.value = s.token;
						return rule;
					} else {
						s.reconsume();
						rule.prelude.push(consumeAComponentValue(s));
					}
				}
			}

			function consumeAQualifiedRule(s) {
				var rule = new QualifiedRule();
				while(s.consume()) {
					if(s.token instanceof EOFToken) {
						parseerror(s, "Hit EOF when trying to parse the prelude of a qualified rule.");
						return;
					} else if(s.token instanceof OpenCurlyToken) {
						rule.value = consumeASimpleBlock(s);
						return rule;
					} else if(s.token instanceof SimpleBlock && s.token.name == "{") {
						rule.value = s.token;
						return rule;
					} else {
						s.reconsume();
						rule.prelude.push(consumeAComponentValue(s));
					}
				}
			}

			function consumeAListOfDeclarations(s) {
				var decls = [];
				while(s.consume()) {
					if(s.token instanceof WhitespaceToken || s.token instanceof SemicolonToken) {
						donothing();
					} else if(s.token instanceof EOFToken) {
						return decls;
					} else if(s.token instanceof AtKeywordToken) {
						s.reconsume();
						decls.push(consumeAnAtRule(s));
					} else if(s.token instanceof IdentToken) {
						var temp = [s.token];
						while(!(s.next() instanceof SemicolonToken || s.next() instanceof EOFToken))
							temp.push(consumeAComponentValue(s));
						var decl;
						if(decl = consumeADeclaration(new TokenStream(temp))) decls.push(decl);
					} else {
						parseerror(s);
						s.reconsume();
						while(!(s.next() instanceof SemicolonToken || s.next() instanceof EOFToken))
							consumeAComponentValue(s);
					}
				}
			}

			function consumeADeclaration(s) {
				// Assumes that the next input token will be an ident token.
				s.consume();
				var decl = new Declaration(s.token.value);
				while(s.next() instanceof WhitespaceToken) s.consume();
				if(!(s.next() instanceof ColonToken)) {
					parseerror(s);
					return;
				} else {
					s.consume();
				}
				while(!(s.next() instanceof EOFToken)) {
					decl.value.push(consumeAComponentValue(s));
				}
				var foundImportant = false;
				for(var i = decl.value.length - 1; i >= 0; i--) {
					if(decl.value[i] instanceof WhitespaceToken) {
						continue;
					} else if(decl.value[i] instanceof IdentToken && decl.value[i].ASCIIMatch("important")) {
						foundImportant = true;
					} else if(foundImportant && decl.value[i] instanceof DelimToken && decl.value[i].value == "!") {
						decl.value.splice(i, decl.value.length);
						decl.important = true;
						break;
					} else {
						break;
					}
				}
				return decl;
			}

			function consumeAComponentValue(s) {
				s.consume();
				if(s.token instanceof OpenCurlyToken || s.token instanceof OpenSquareToken || s.token instanceof OpenParenToken)
					return consumeASimpleBlock(s);
				if(s.token instanceof FunctionToken)
					return consumeAFunction(s);
				return s.token;
			}

			function consumeASimpleBlock(s) {
				var mirror = s.token.mirror;
				var block = new SimpleBlock(s.token.value);
				while(s.consume()) {
					if(s.token instanceof EOFToken || (s.token instanceof GroupingToken && s.token.value == mirror))
						return block;
					else {
						s.reconsume();
						block.value.push(consumeAComponentValue(s));
					}
				}
			}

			// DONE: normalize type
			function consumeAFunction(s) {
			//	var func = new Func(s.token.value);
				var func = new Func(s.token.repr);
				while(s.consume()) {
					if(s.token instanceof EOFToken || s.token instanceof CloseParenToken)
						return func;
					else {
						s.reconsume();
						func.value.push(consumeAComponentValue(s));
					}
				}
			}

			function normalizeInput(input) {
				if(typeof input == "string")
					return new TokenStream(tokenize(input));
				else if(typeof input == "number")
					return new TokenStream(tokenize(input.toString()));
				if(input instanceof TokenStream)
					return input;
				if(input.length !== undefined)
					return new TokenStream(input);
				else throw SyntaxError(String(input) + ' ' + typeof input);
			}

			function parseAStylesheet(s) {
				s = normalizeInput(s);
				var sheet = new Stylesheet();
				sheet.value = consumeAListOfRules(s, "top-level");
				return sheet;
			}

			function parseAListOfRules(s) {
				s = normalizeInput(s);
				return consumeAListOfRules(s);
			}

			function parseARule(s) {
				s = normalizeInput(s);
				while(s.next() instanceof WhitespaceToken) s.consume();
				if(s.next() instanceof EOFToken) throw SyntaxError();
				if(s.next() instanceof AtKeywordToken) {
					var rule = consumeAnAtRule(s);
				} else {
					var rule = consumeAQualifiedRule(s);
					if(!rule) throw SyntaxError();
				}
				while(s.next() instanceof WhitespaceToken) s.consume();
				if(s.next() instanceof EOFToken)
					return rule;
				throw SyntaxError();
			}

			function parseADeclaration(s) {
				s = normalizeInput(s);
				while(s.next() instanceof WhitespaceToken) s.consume();
				if(!(s.next() instanceof IdentToken)) throw SyntaxError();
				var decl = consumeADeclaration(s);
				if(decl)
					return decl
				else
					throw SyntaxError();
			}

			function parseAListOfDeclarations(s) {
				s = normalizeInput(s);
				return consumeAListOfDeclarations(s);
			}

			function parseAComponentValue(s) {
				s = normalizeInput(s);
				while(s.next() instanceof WhitespaceToken) s.consume();
				if(s.next() instanceof EOFToken) throw SyntaxError();
				var val = consumeAComponentValue(s);
				if(!val) throw SyntaxError();
				while(s.next() instanceof WhitespaceToken) s.consume();
				if(s.next() instanceof EOFToken)
					return val;
				throw SyntaxError();
			}

			function parseAListOfComponentValues(s) {
				s = normalizeInput(s);
				var vals = [];
				while(true) {
					var val = consumeAComponentValue(s);
					if(val instanceof EOFToken)
						return vals
					else
						vals.push(val);
				}
			}

			function parseACommaSeparatedListOfComponentValues(s) {
				s = normalizeInput(s);
				var listOfCVLs = [];
				while(true) {
					var vals = [];
					while(true) {
						var val = consumeAComponentValue(s);
						if(val instanceof EOFToken) {
							listOfCVLs.push(vals);
							return listOfCVLs;
						} else if(val instanceof CommaToken) {
							listOfCVLs.push(vals);
							break;
						} else {
							vals.push(val);
						}
					}
				}
			}


			function CSSParserRule() { throw "Abstract Base Class"; }
			CSSParserRule.prototype.toString = function(indent) {
				return JSON.stringify(this,null,indent);
			};
			CSSParserRule.prototype.toJSON = function() {
				return {type:this.type, value:this.value};
			};

			function Stylesheet() {
				this.value = [];
				return this;
			}
			Stylesheet.prototype = Object.create(CSSParserRule.prototype);
			Stylesheet.prototype.type = "STYLESHEET";

			function AtRule(name) {
				this.name = name;
				this.prelude = [];
				this.value = null;
				return this;
			}
			AtRule.prototype = Object.create(CSSParserRule.prototype);
			AtRule.prototype.type = "AT-RULE";
			AtRule.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.name = this.name;
				json.prelude = this.prelude;
				return json;
			};

			function QualifiedRule() {
				this.prelude = [];
				this.value = [];
				return this;
			}
			QualifiedRule.prototype = Object.create(CSSParserRule.prototype);
			QualifiedRule.prototype.type = "QUALIFIED-RULE";
			QualifiedRule.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.prelude = this.prelude;
				return json;
			};

			function Declaration(name) {
				this.name = name;
				this.value = [];
				this.important = false;
				return this;
			}
			Declaration.prototype = Object.create(CSSParserRule.prototype);
			Declaration.prototype.type = "DECLARATION";
			Declaration.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.name = this.name;
				json.important = this.important;
				return json;
			};

			function SimpleBlock(type) {
				this.name = type;
				this.value = [];
				return this;
			}
			SimpleBlock.prototype = Object.create(CSSParserRule.prototype);
			SimpleBlock.prototype.type = "BLOCK";
			SimpleBlock.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.name = this.name;
				return json;
			};

			function Func(name) {
				this.name = name;
				this.value = [];
				return this;
			}
			Func.prototype = Object.create(CSSParserRule.prototype);
			Func.prototype.type = "FUNCTION";
			Func.prototype.tokenType = "FUNCTION";
			Func.prototype.toJSON = function() {
				var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
				json.name = this.name;
				return json;
			};


			/* Grammar Application */

			function canonicalize(rule, grammar, topGrammar) {
				if(grammar === undefined) grammar = CSSGrammar;
				if(topGrammar === undefined) topGrammar = grammar;
				if(!validateGrammar(grammar)) return;
				if(grammar) {
					if(grammar.stylesheet) grammar = topGrammar;
					var unknownTransformer = grammar.unknown || function(){return};
				}
				var ret = {"type":rule.type.toLowerCase()};

				if(rule.type == "STYLESHEET") {
					var contents = rule.value;
				} else if(rule.type == "BLOCK") {
					var unparsedContents = rule.value;
					ret.name = rule.name;
				} else if(rule.type == "QUALIFIED-RULE") {
					var unparsedContents = rule.value.value;
					ret.prelude = rule.prelude;
				} else if(rule.type == "AT-RULE") {
					var unparsedContents = rule.value.value;
					ret.name = rule.name;
					ret.prelude = rule.prelude;
				} else if(rule.type == "DECLARATION") {
					// I don't do grammar-checking of declarations yet.
					ret.name = rule.name;
					ret.value = rule.value;
					ret.important = rule.important;
					return ret;
				}
				if(unparsedContents) {
					if(grammar.declarations) {
						var contents = parseAListOfDeclarations(unparsedContents);
					} else if(grammar.qualified) {
						var contents = parseAListOfRules(unparsedContents);
					}
				}

				if(!grammar) {
					return ret;
				} else if(grammar.declarations) {
					ret.declarations = {}; // simple key/value map of declarations
					ret.rules = []; // in-order list of both decls and at-rules
					ret.errors = [];
					for(var i = 0; i < contents.length; i++) {
						var rule = contents[i];
						if(rule instanceof Declaration) {
							var decl = canonicalize(rule, {}, topGrammar);
							ret.declarations[rule.name] = decl;
							ret.rules.push(decl);
						} else { // rule is instanceof AtRule
							var subGrammar = grammar["@" + rule.name];
							if(subGrammar) { // Rule is valid in this context
								ret.rules.push(canonicalize(rule, subGrammar, topGrammar));
							} else {
								var result = unknownTransformer(rule);
								if(result) {
									ret.rules.push(result);
								} else {
									ret.errors.push(result);
								}
							}
						}
					}
				} else {
					ret.rules = [];
					ret.errors = [];
					for(var i = 0; i < contents.length; i++) {
						var rule = contents[i];
						if(rule instanceof QualifiedRule) {
							ret.rules.push(canonicalize(rule, grammar.qualified, topGrammar));
						} else {
							var subGrammar = grammar["@" + rule.name];
							if(subGrammar) { // Rule is valid in this context
								ret.rules.push(canonicalize(rule, subGrammar, topGrammar));
							} else {
								var result = unknownTransformer(rule);
								if(result) {
									ret.rules.push(result);
								} else {
									ret.errors.push(result);
								}
							}
						}
					}
				}
				return ret;
			}

			function validateGrammar(grammar) {
				// TODO
				return true
			}

			var CSSGrammar = {
				qualified: {declarations:true},
				"@media": {stylesheet:true},
				"@keyframes": {qualified:{declarations:true}},
				"@font-face": {declarations:true},
				"@supports": {stylesheet:true},
				"@scope": {stylesheet:true},
				"@counter-style": {declarations:true},
				"@import": null,
				"@font-feature-values": {
					// No qualified rules actually allowed,
					// but have to declare it one way or the other.
					qualified: true,
					"@stylistic": {declarations:true},
					"@styleset": {declarations:true},
					"@character-variants": {declarations:true},
					"@swash": {declarations:true},
					"@ornaments": {declarations:true},
					"@annotation": {declarations:true},
				},
				"@viewport": {declarations:true},
				"@page": {
					declarations: true,
					"@top-left-corner": {declarations:true},
					"@top-left": {declarations:true},
					"@top-center": {declarations:true},
					"@top-right": {declarations:true},
					"@top-right-corner": {declarations:true},
					"@right-top": {declarations:true},
					"@right-middle": {declarations:true},
					"@right-bottom": {declarations:true},
					"@right-bottom-corner": {declarations:true},
					"@bottom-right": {declarations:true},
					"@bottom-center": {declarations:true},
					"@bottom-left": {declarations:true},
					"@bottom-left-corner": {declarations:true},
					"@left-bottom": {declarations:true},
					"@left-center": {declarations:true},
					"@left-top": {declarations:true},
				},
				"@custom-selector": null,
				"@custom-media": null
			};



			// Exportation.
			exports.CSSParserRule = CSSParserRule;
			exports.Stylesheet = Stylesheet;
			exports.AtRule = AtRule;
			exports.QualifiedRule = QualifiedRule;
			exports.Declaration = Declaration;
			exports.SimpleBlock = SimpleBlock;
			exports.Func = Func;
			exports.parseAStylesheet = parseAStylesheet;
			exports.parseAListOfRules = parseAListOfRules;
			exports.parseARule = parseARule;
			exports.parseADeclaration = parseADeclaration;
			exports.parseAListOfDeclarations = parseAListOfDeclarations;
			exports.parseAComponentValue = parseAComponentValue;
			exports.parseAListOfComponentValues = parseAListOfComponentValues;
			exports.parseACommaSeparatedListOfComponentValues = parseACommaSeparatedListOfComponentValues;
			exports.canonicalizeRule = canonicalize;
			exports.CSSGrammar = CSSGrammar;

			}));

			},{}],72:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor AbstractStylesheet
			 * 
			 * @param {object} styleRules
			 * @returns self
			 */

			var appConstants = _dereq_('src/appLauncher/appLauncher');
			var TypeManager = _dereq_('src/core/TypeManager');
			var StyleRule = _dereq_('src/editing/StyleRule');
			var Style = _dereq_('src/editing/Style');
			var AdvancedAttributesList = _dereq_('src/editing/SplittedAttributes');

				
			var AbstractStylesheet = function(styleRules, name) {
				this.objectType = 'AbstractStylesheet';
				if (name)
					this.name = name;
				
				if (!Array.isArray(styleRules)) {
					console.warn(this.objectType, 'styleRules isn\'t an Array. Returning..., "', styleRules, '" has been received');
					return this;
				}
				
				this.length = 0;
				this.rules = {};
				this.currentAPI = new DOMStyleAPI(name);
				
				this.iterateOnRules(styleRules);
			};

			AbstractStylesheet.prototype.getName = function() {
				return this.currentAPI.getName();
			};

			AbstractStylesheet.prototype.getStyleNode = function() {
				return this.currentAPI.getStyleNode();
			};

			//AbstractStylesheet.prototype.export = function(defUID) {
			//	var cachedUnderUID = TypeManager.sWrappersCache.getItem(defUID);
			//	if (Object.prototype.toString.call(cachedUnderUID) === '[object Object]')
			//		return cachedUnderUID.clone();
			//	else {
			//		TypeManager.sWrappersCache.setItem(defUID, this);
			//		return this.clone()	
			//	}
			//}

			AbstractStylesheet.prototype.getProp = function(selector, prop) {
				return this.rules[selector].getAttr(prop);
			};

			AbstractStylesheet.prototype.setProp = function(selector, prop, value) {
				this.rules[selector].setAttr(prop, value);
				this.replaceRule(selector);
			};

			AbstractStylesheet.prototype.iterateOnRules = function(styleRules) {
				styleRules.forEach(function(rawRule) {
					this.addRule(rawRule);
				}, this);
			};

			AbstractStylesheet.prototype.newRule = function(rawRule) {
				if (rawRule instanceof AdvancedAttributesList) {
					var selector = rawRule.selector;
					delete rawRule.selector;
					return StyleRule.fromAdvancedStyleAttributes(this.length++, selector, rawRule)
				}
				else
					return new StyleRule(this.length++, rawRule);
			};

			AbstractStylesheet.prototype.deleteRule = function(selector) {
				delete this[selector];
				return --this.length;
			};

			AbstractStylesheet.prototype.addRule = function(rule, selector) {
				var sRule;
				if (!(rule instanceof StyleRule))
					sRule = this.newRule(rule);
				else
					sRule = rule;
				selector = rule.selector || sRule.selector || (rule.attrIFace && rule.attrIFace.selector) || selector;
				
				if (!selector) {
					console.warn('AbstractStylesheet: constructing a styleRule based on an empty selector', rule, 'Returning...');
					return;
				}
				this.rules[selector] = sRule;
			};

			AbstractStylesheet.prototype.addRules = function(rules) {
				if (!Array.isArray(rules)) {
					console.warn(this.objectType, 'addRules only accepts arrays. Returning...');
					return;
				}
				rules.forEach(function(rule) {
					this.addRule(rule);
				}, this);
			};



			AbstractStylesheet.prototype.updateRule = function(rawRule, selector) {
				selector = rawRule.selector || selector;
				this.rules[selector].setAttributes(rawRule);
				this.replaceRule(selector);
			};

			AbstractStylesheet.prototype.replaceRule = function(selector) {
				if (!this.rules[selector].strRule.length)
					return;
				var newStrRule = this.rules[selector].styleIFace.linearize();
				this.currentAPI.replaceRule(this.rules[selector].strRule, newStrRule);
				this.rules[selector].strRule = newStrRule;
			};

			AbstractStylesheet.prototype.removeRule = function(selector) {
				this.currentAPI.removeRule(this.rules[selector].strRule);
				this.deleteRule(selector);
			};

			AbstractStylesheet.prototype.overrideStyles = function(styleRules) {
				if (!styleRules || !Array.isArray(styleRules)) {
					console.warn(this.objectType, 'overrideStyles only accepts arrays.', styleRules === null ? 'null' : typeof styleRules, 'given. Returning...');
					return;
				}
				styleRules.forEach(function(rawRule) {
					if (rawRule.selector)
						this.safeMergeStyleRule(rawRule.selector, rawRule);
				}, this);
			};

			AbstractStylesheet.prototype.safeMergeStyleRule = function(selector, rawRule) {
				if (typeof this.rules[selector] !=='undefined')
					this.rules[selector].safeMergeAttributes(rawRule);
				else
					this.addRule(rawRule, selector);
			};

			AbstractStylesheet.prototype.clone = function() {
				var styleRules = [];
				for (let selector in this.rules) {
					styleRules.push(
						Object.assign(
							this.rules[selector].cloneAttributes(),
							{selector : selector}
						)
					);
					// HACK
			//		if (this.rules[selector].hasOverride) {
			//			console.log(this.objectType, selector, 'hasOverride : ', styleRules[styleRules.length - 1]);
			//			Object.assign(styleRules[styleRules.length - 1], this.rules[selector].additionalAttributes);
			//		}
				}
				if (!Array.isArray(styleRules))
					console.error(styleRules);
				return new AbstractStylesheet(styleRules, this.currentAPI.getName());
			};

			AbstractStylesheet.prototype.shouldSerializeOne = function(selector) {
				if (this.rules[selector].strRule.length) {
					this.replaceRule(selector);
					return;
				}
				this.rules[selector].strRule = this.rules[selector].styleIFace.linearize();
				this.currentAPI.appendRule(this.rules[selector].strRule);
			};

			AbstractStylesheet.prototype.shouldSerializeAll = function() {
				var styleAsString = '';
				for (let selector in this.rules) {
					this.rules[selector].applyAdditionnalStyleAsOverride();
					styleAsString += (this.rules[selector].strRule = this.rules[selector].styleIFace.linearize());
				}
				this.currentAPI.setContent(styleAsString);
			};













			var DOMStyleAPI = function(name) {
				this.styleElem = {};				// should be null
				name = this.getStyleElem(name);		// cache temporary registration magic...
				this.styleElem.name = name;
				this.stylesheet = this.styleElem.sheet;
			};

			DOMStyleAPI.prototype.getStyleElem = function(name) {
				var cachedUnderUID = appConstants.isKnownUID(name);
				if (Object.prototype.toString.call(cachedUnderUID) === '[object Object]') {
					this.styleElem = cachedUnderUID.currentAPI.getStyleNode().cloneNode(true);
					return name;
				}
				else {
					// HACK: before we generalize the API for style objects, there's only this one...
					//		=> don't try to get a stylElement if we're outside the browser
					if (typeof document === 'undefined' || typeof document.ownerDocument === 'undefined')
						return cachedUnderUID;
					this.styleElem = document.createElement('style');
					return cachedUnderUID;
				}
			};

			DOMStyleAPI.prototype.getName = function() {
				return this.styleElem.name;
			};

			DOMStyleAPI.prototype.getStyleNode = function() {
				return this.styleElem;
			};

			DOMStyleAPI.prototype.appendRule = function(strRule) {
				this.styleElem.innerHTML += strRule;
			};

			DOMStyleAPI.prototype.setContent = function(strContent) {
				this.styleElem.innerHTML = strContent;
			};

			DOMStyleAPI.prototype.removeRule = function(strRule) {
				this.styleElem.innerHTML = this.styleElem.innerHTML.replace(strRule, '');
			};

			DOMStyleAPI.prototype.replaceRule = function(strRule, newStrRule) {
				this.styleElem.innerHTML = this.styleElem.innerHTML.replace(strRule, newStrRule);
			};
















			module.exports = AbstractStylesheet;

			},{"src/appLauncher/appLauncher":6,"src/core/TypeManager":57,"src/editing/SplittedAttributes":79,"src/editing/Style":80,"src/editing/StyleRule":82}],73:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor CSSPropertyBuffer
			 */


			var TypeManager = _dereq_('src/core/TypeManager');
			var BinarySchemaFactory = _dereq_('src/core/BinarySchema');
			var GeneratorFor16bitsInt = _dereq_('src/core/UIDGenerator').GeneratorFor16bitsInt;
			//var CSSPropertyDescriptors = require('src/editing/CSSPropertyDescriptors');
			var parser = _dereq_('src/parsers/css-parser_forked_normalized');

			var CSSPropertyBuffer = function(initialLoad, propName) {
				this.objectType = 'CSSPropertyBuffer';
				this.propName = propName;
				this._buffer = new Uint8Array(initialLoad || this.bufferSchema.size);
				
			//	if (typeof initialLoad === 'undefined' || initialLoad === null
			//			|| (
			//				Object.getPrototypeOf(initialLoad) === Uint8Array.prototype
			//					&& initialLoad[0] === 0
			//			)
			//		) {
			//			var defaultValue = CSSPropertyDescriptors[propName].prototype.initialValue;
			//			
			//			if (typeof defaultValue !== 'undefined' && defaultValue !== null) {
			//				this.setValue(this.parseValue(defaultValue));
			//			}
			//	}
			};
			CSSPropertyBuffer.prototype = {};
			CSSPropertyBuffer.prototype.objectType = 'CSSPropertyBuffer';

			CSSPropertyBuffer.prototype.setValue = function(value) {
				
			//	if (/\s/.test(value))
			//		parsedValue = parser.parseAListOfComponentValues(value);
			//	else
			//		parsedValue = [value];
			//	console.log('setValue', value);
				// For now, we haven't yet populated the initlaValue for each CSSPropertyDescriptor.
				// So this function is very frequently called with an empty array
				if (!value.length)
					return;
				
				var valueAsParsed, tokenType, concatVal;
				// if the property is a shorthand property, or if the property may be abbreviated,
				// we concatenate back
				// => shorthands are then handled (expanded) in CSSPropertySetBuffer.setPropFromShorthand()
				// => abbreviated props are also handled (in a branch) of CSSPropertySetBuffer.setPropFromShorthand()
				
				if (!/\s/.test(value.trim())) {
					var parsedValue = parser.parseAListOfComponentValues(value.trim());
					if (!parsedValue.length)
						return;
			//		if (Object.getPrototypeOf(parsedValue[0]).tokenType === 'WHITESPACE')
			//			console.log(parsedValue);

					tokenType = Object.getPrototypeOf(parsedValue[0]).tokenType.capitalizeFirstChar() + 'Token';

					if (tokenType === 'FunctionToken') {
			//			console.log('CSS function found');
						valueAsParsed = this.functionToCanonical(parsedValue[0]);
					}
					else
						valueAsParsed = parsedValue[0]; //this.fixValueFromParser(parsedValue[0]);
						
			//		if (this.propName === 'backgroundImage')
			//			console.log('valueAsParsed', parsedValue);
				}
				else {
			//		concatVal = this.concatenateBackFromParser(parsedValue);
					concatVal = value.trim();
					tokenType = 'NonparsedToken';
					
					// Concatenated values are typed as "Non Parsed",
					// and then, the valueAsParsed only has a repr property.
					valueAsParsed = new (
						LocalTokenFromParserFactory(null, 'NONPARSED')
						)(
							tokenType,
							null,
							null,
							'string',
							concatVal
						);
				}
				
				this.populate(tokenType, valueAsParsed);
			};

			// WON'T WORK FOR RELATIVE DIMENSIONS,
			// as, for example, we have no clue of the value of the inherited font-size property for the current property
			//CSSPropertyBuffer.prototype.unitToCanonical = function(valueAsParsed) {
			//	switch(valueAsParsed.unit) {
			//		case 'em' : 
			//			console.log("EM FOUND");
			//			break;
			//		default :
			//			break;
			//	}
			//	
			//	return valueAsParsed;
			//}

			CSSPropertyBuffer.prototype.functionToCanonical = function(valueAsParsed) {
				var value, tokenTypeFromParser;
				if (valueAsParsed.name === 'rgb' || valueAsParsed.name === 'rgba') {
			//		console.log('rgb found');
					value = new (LocalTokenFromParserFactory(null, 'HASH'))();
					value.type = 'hash';
					value.repr = '#';
					valueAsParsed.value.forEach(function(val) {
						tokenTypeFromParser = Object.getPrototypeOf(val).tokenType;
						if (tokenTypeFromParser === "WHITESPACE" || tokenTypeFromParser === "COMMA")
							return;
						else
							value.repr += parseInt(val.value).toString(16).padStart(2, '0');
					}, this);
			//		console.log(value)
					return value;
				}
				else {
					// As for now, "format" and "local" are seen as unsupported functions
					if ((valueAsParsed.name === 'format' || valueAsParsed.name === 'local')
						|| (valueAsParsed.name === 'animation' || valueAsParsed.name === 'animationName' || valueAsParsed.name === 'animationDuration' || valueAsParsed.name === 'animationIterationCount' || valueAsParsed.name === 'animationIterationFunction' || valueAsParsed.name === 'animationDelay'))
						return new (LocalTokenFromParserFactory(null, 'UNDEFINED'))();
					else if (valueAsParsed.name === 'url') {
						value = new (LocalTokenFromParserFactory(null, 'URL'))();
						value.type = 'url';
						value.repr = 'url("';
						valueAsParsed.value.forEach(function(val) {
							value.repr += val.repr;
						});
						value.repr += '")';
						return value;
					}
					else if (valueAsParsed.name === 'translate' || valueAsParsed.name === 'rotate' || valueAsParsed.name === 'scale') {
						value = new (LocalTokenFromParserFactory(null, 'TRANSFORM'))();
						value.type = valueAsParsed.name;
						value.repr = valueAsParsed.name + '(';
						valueAsParsed.value.forEach(function(val, key) {
							value.repr += val.repr;
							if (key < valueAsParsed.value.length - 1)
								value.repr += ', ';
						});
						value.repr += ')';
						return value;
					}
					
					console.warn('CSSPropertyBuffer->functionToCanonical: unsupported function given (' + valueAsParsed.name + ').');
					return new (LocalTokenFromParserFactory(null, 'UNDEFINED'))();
				} 
			};

			CSSPropertyBuffer.prototype.populate = function(tokenType, value) {
				
				// the buffer size : 64 bytes buffers shall align well on a 2048KB L2 CPU cache
				// 16 bits values have to be declared as byte-tuples ([1, 0] would then represent 1, as all CPU's are now little-endian) 
				// (GeneratorFor16bitsInt, responsible for the UID, shall return an array)
				
				var normalizedValue = value;//this.fixValueFromParser(value);
				if (typeof normalizedValue.repr === 'undefined')
					console.error('normalizedValue', normalizedValue);
				var strVal = normalizedValue.repr,
					strLength = strVal.length,
					strBuf = strVal.getNcharsAsCharCodesArray(this.stdStrLength, 0)[1],
					valueBuf = GeneratorFor16bitsInt.intFromNumber(normalizedValue.value);
					
			//	console.log('POPULATE', strVal, strBuf, value);

				// this.TokenTypes[tokenType] is the TokenType from the parser
				// represented as a numeric constant
				this._buffer.set(
						[this.TokenTypes[tokenType]],
						this.bufferSchema.tokenType.start
					);
				// value type
				var valueTypeAsConst = this.ValueTypes[value.type];
				this._buffer.set(
						[valueTypeAsConst],
						this.bufferSchema.propertyType.start
					);
				// value
				// FIXME: floats are NOT handled by our CSSPropertyBuffer type,
				// and flexGrow, font[em], and even dimensions may be float
				// For now, it acts like if we had parseInt the number
				this._buffer.set(
						valueBuf,
						this.bufferSchema.propertyValue.start
					);
				// representation
				this._buffer.set(
						strBuf,
						this.bufferSchema.repr.start
					);
				// representation string length
				var strLength;
				this._buffer.set(
					[strLength],
					this.bufferSchema.reprLength.start
				);
				// unit
				this._buffer.set(
						[value.unit ? this.Units[value.unit].idx : 0],
						this.bufferSchema.unit.start
					);
			};

			CSSPropertyBuffer.prototype.parseAndSetValue = function(singleValueAsString) {
				var parsedValue;
				if ((parsedValue = this.parseValue(singleValueAsString)).length)
					this.setValue(parsedValue);
			};

			CSSPropertyBuffer.prototype.parseValue = function(singleValueAsString) {
				return parser.parseAListOfComponentValues(singleValueAsString);
			};

			CSSPropertyBuffer.prototype.fixValueFromParser = function(parsedValue) {
				return (new (LocalTokenFromParserFactory(parsedValue, Object.getPrototypeOf(parsedValue).tokenType))(
					null,
					parsedValue.value,
					parsedValue.name,
					parsedValue.type,
					parsedValue.repr,
					parsedValue.unit
					)
				);
			};

			CSSPropertyBuffer.prototype.concatenateBackFromParser = function(parsedValue) {
				var tokenTypeFromParser;
				var concatVal = ''; 
				parsedValue.forEach(function(val) {
					tokenTypeFromParser = Object.getPrototypeOf(val).tokenType;
					switch (tokenTypeFromParser) {
						case 'WHITESPACE' :
								concatVal += ' ';
								break;
						case 'PERCENTAGE' :
								concatVal += val.repr + '%';
								break;
						case 'HASH' :
								concatVal += val.value ? '#' + val.value : val.repr;
								break;
						case 'COMMA' :
								concatVal += ',';
								break;
						case 'FUNCTION' : 
								concatVal += this.functionToCanonical(val).repr;
						case 'OPENPAREN' :
								concatVal += '(';
								break;
						case 'CLOSEPAREN' :
								concatVal += ')';
								break;
						default : concatVal += typeof val.repr !== 'undefined' ? val.repr + this.Units[val.unit || ''].unit : val.value.toString() + this.Units[val.Units || ''].unit;
					}
				}, this);
				return concatVal;
			};

			CSSPropertyBuffer.prototype.getIsInitialValue = function() {
				return this._buffer[this.bufferSchema.isInitialValue.start];
			};

			CSSPropertyBuffer.prototype.getIsInitialValueAsBool = function() {
				return !!this._buffer[this.bufferSchema.isInitialValue.start];
			};

			CSSPropertyBuffer.prototype.setIsInitialValue = function() {
				this._buffer.set([1], this.bufferSchema.isInitialValue.start);
			};

			CSSPropertyBuffer.prototype.tokenTypeToString = function() {
				return Object.keys(this.TokenTypes)[this._buffer[this.bufferSchema['tokenType'].start]];
			};

			CSSPropertyBuffer.prototype.tokenTypeToNumber = function() {
				return this._buffer[this.bufferSchema['tokenType'].start];
			};

			CSSPropertyBuffer.prototype.getValueTypeAsString = function() {
				return Object.keys(this.ValueTypes)[this._buffer[this.bufferSchema['propertyType'].start]];
			};

			CSSPropertyBuffer.prototype.getValueTypeAsNumber = function() {
				return this._buffer[this.bufferSchema['propertyType'].start];
			};

			CSSPropertyBuffer.prototype.getUnitAsString = function() {
				return this.unitToString();
			};

			CSSPropertyBuffer.prototype.getTokenTypeAsString = function() {
				return this.TokenTypesAsArray[this._buffer[this.bufferSchema['tokenType'].start]];
			};

			CSSPropertyBuffer.prototype.getTokenTypeAsNumber = function() {
				return this._buffer[this.bufferSchema['tokenType'].start];
			};

			CSSPropertyBuffer.prototype.unitToString = function() {
				return this.UnitsAsArray[this._buffer[this.bufferSchema['unit'].start]];
			};

			CSSPropertyBuffer.prototype.setUnit = function(unit) {
				var idxOfUnit = this.UnitsAsArray.indexOf(unit);
				if (idxOfUnit === -1)
					return;
				this._buffer.set([idxOfUnit], this.bufferSchema.unit.start);
			};




			// getValueAsString() is an alias for bufferedValueToString()
			// TODO: unify
			CSSPropertyBuffer.prototype.getValueAsString = function() {
				return this.bufferedValueToString();
			};


			//CSSPropertyBuffer.prototype.getValueAsHash = function() {
			//	return '#' + this.bufferedValueToString();
			//}

			// getValueAsNumber() is an alias for bufferedValueToNumber()
			// TODO: unify
			CSSPropertyBuffer.prototype.getValueAsNumber = function() {
				return this.bufferedValueToNumber();
			};

			// bufferedValueToString() is an alias for getValueAsString()
			// TODO: unify
			CSSPropertyBuffer.prototype.bufferedValueToString = function() {
				var start = this.bufferSchema.repr.start, end = start + this.bufferSchema.repr.length,
					strLengthIdx = this.bufferSchema.reprLength.start;
			//	console.log(start, end, this._buffer.slice(start, end));
			//	var test = this._buffer.slice(start, end).bufferToString(this._buffer[strLengthIdx]);
			//	if (test.slice(0, 1) === '#')
			//		console.log(test);
				return this._buffer.slice(start, end).bufferToString(this._buffer[strLengthIdx]);
			};

			// bufferedValueToNumber() is an alias for getValueAsNumber()
			// TODO: unify
			CSSPropertyBuffer.prototype.bufferedValueToNumber = function() {
				var start = this.bufferSchema['propertyValue'].start, end = start + this.bufferSchema['propertyValue'].length;
				return this.byteTuppleTo16bits(this._buffer.slice(start, end));
			};

			CSSPropertyBuffer.prototype.byteTuppleTo16bits = function(bytesInt8Array) {
				return GeneratorFor16bitsInt.numberFromInt(bytesInt8Array);
			};






			//var countTokenTypes = {
			//	IDENT : 0,
			//	NUMBER : 0,
			//	PERCENTAGE : 0,
			//	COLORorFUNCTION : 0,
			//	un_defined : 0
			//}
			//console.log(countTokenTypes);


			var LocalTokenFromParserFactory = function(parsedValue, tokenTypeFromParser) {
				
				if (tokenTypeFromParser && LocalTokenFromParserCache[tokenTypeFromParser])
					return LocalTokenFromParserCache[tokenTypeFromParser];
				else {
					tokenTypeFromParser = parsedValue ? Object.getPrototypeOf(parsedValue).tokenType : tokenTypeFromParser;
					
					var LocalTokenFromParser = function(tokenType, value, name, type, repr, unit) {
						var localValue = 0, localType = 'string', localRepr = '';
						if (tokenTypeFromParser === 'IDENT' || tokenTypeFromParser === 'NONPARSED') {
							localRepr  = repr || (value ? value.toString() : '');
							localType = 'string';
			//				countTokenTypes['IDENT']++;
						}
						else if (tokenTypeFromParser === 'NUMBER' || tokenTypeFromParser === 'DIMENSION') {	// typeof value !== 'undefined' && Object.getPrototypeOf(value) === Number.prototype
							localRepr = (value || localValue).toString() + (unit || '');
							localValue = value || localValue;
							localType = 'number';
			//				countTokenTypes['NUMBER']++;
						}
						else if (type === 'hash' || type === 'id' || type === 'unrestricted' || (tokenTypeFromParser === 'FUNCTION' && name === 'rgb')) {
							localRepr  = repr || '#' + (value || localValue).toString();
							localType = 'hash';
			//				countTokenTypes['COLORorFUNCTION']++;
						}
						else if (tokenTypeFromParser === 'PERCENTAGE') {
							localValue = value || localValue;
							localRepr  = (repr ? (repr.slice(-1) === '%' ? repr : repr + '%') : (value ? value.toString() : '0')  + '%');
							localType = 'percentage';
			//				countTokenTypes['PERCENTAGE']++;
						}
						else if (typeof type === 'undefined') {
							localRepr  = value ? value.toString() : '';
			//				countTokenTypes['un_defined']++;
						}
						
						this.localTokenType = tokenType ? tokenType : tokenTypeFromParser.capitalizeFirstChar() + 'Token';
						this.value = localValue;
						this.type = localType;
						this.repr = localRepr;
						this.reprLength = this.repr.length;
						this.unit = unit || '';
					};
					LocalTokenFromParser.prototype = {
						tokenType : tokenTypeFromParser || 'NONE'
					};
					LocalTokenFromParserCache[LocalTokenFromParser] = LocalTokenFromParser;
					
					return LocalTokenFromParser
				}
			};

			var LocalTokenFromParserCache = {
				
			};












			Object.defineProperty(CSSPropertyBuffer.prototype, 'TokenTypes', {
				value : {
						UndefinedToken : 0, 
						BadstringToken : 1,
						BadurlToken : 2,
						WhitespaceToken : 3,
						CdoToken : 4,
						CdcToken : 5,
						ColonToken : 6,
						SemicolonToken : 7,
						CommaToken : 8,
						OpencurlyToken : 9,
						ClosecurlyToken : 10,
						OpensquareToken : 11,
						ClosesquareToken : 12,
						OpenparenToken : 13,
						CloseparenToken : 14,
						IncludeMatchToken : 15,
						DashmatchToken : 16,
						PrefixmatchToken : 17,
						SuffixmatchToken : 18,
						SubstringmatchToken : 19,
						ColumnToken : 20,
						EOFToken : 21,
						DelimToken : 22,
						IdentToken : 23,
						FunctionToken : 24,
						AtkeywordToken : 25,
						HashToken : 26,
						StringToken : 27,
						UrlToken : 28,
						NumberToken : 29,
						PercentageToken : 30,
						DimensionToken : 31,
						NonparsedToken : 32
						}
			});

			Object.defineProperty(CSSPropertyBuffer.prototype, 'stdStrLength', {
				value : 89
			});

			Object.defineProperty(CSSPropertyBuffer.prototype, 'ValueTypes', {
				value : {
					integer : 0,
					percentage : 1,
					float : 2,
					string : 3,
					hash : 4,
					numericalArray : 5,
					'' : 6
				}
			});

			Object.defineProperty(CSSPropertyBuffer.prototype, 'Units', {
				value : {
					'' : {
						idx : 0,
						unit : '',
						fullName : 'non-applicable',
						equivStr : 'some values have no unit'
					},
					cm : {
						idx : 1,
						unit : 'cm',
						fullName : 'centimeters',
						equivStr : '1cm : 96px/2.54'
					} ,
					mm : {
						idx : 2,
						unit : 'mm',
						fullName : 'millimeters',
						equivStr : '1mm : 1/10th of 1cm'
					} ,
					Q : {
						idx : 3,
						unit : 'Q',
						fullName : 'quarter',
						equivStr : '1Q : 1/40th of 1cm'
					},
					in : {
						idx : 4,
						unit : 'in',
						fullName : 'inches',
						equivStr : '1in : 2.54cm : 96px'
					},
					pc : {
						idx : 5,
						unit : 'pc',
						fullName : 'picas',
						equivStr : '1pc : 1/6th of 1in'
					},
					pt : {
						idx : 6,
						unit : 'pt',
						fullName : 'points',
						equivStr : '1pt : 1/72th of 1in'
					},
					px : {
						idx : 7,
						unit : 'px',
						fullName : 'pixels',
						equivStr : '1px : 1/96th of 1in '
					},
					em : {
						idx : 8,
						unit : 'em',
						fullName : 'size of the uppercase M',
						equivStr : '1em is equivalent to the inherited font-size'
					},
					rem : {
						idx : 9,
						unit : 'rem',
						fullName : 'root em',
						equivStr : '1rem is equivalent to the root element\'s font-size'
					},
					fr : {
						idx : 10,
						unit : 'fr',
						fullName : 'flex grid unit',
						equivStr : 'flexibility factor of a grid track'
					},
					s : {
						idx : 11,
						unit : 's',
						fullName : 'seconds',
						equivStr : 'seconds are used when defining the duration of an animation'
					}
				}
			});

			Object.defineProperty(CSSPropertyBuffer.prototype, 'UnitsAsArray', {
				value : (function() {
					var ret = [];
					for (var unitDef in CSSPropertyBuffer.prototype.Units)  {
						ret.push(CSSPropertyBuffer.prototype.Units[unitDef].unit);
					}
					return ret;
				})()
			});

			Object.defineProperty(CSSPropertyBuffer.prototype, 'TokenTypesAsArray', {
				value : (function() {
					return Object.keys(CSSPropertyBuffer.prototype.TokenTypes);
				})()
			});


			//var sample = {
			//	token: "DIMENSION",
			//	value: 1,
			//	type: "integer",
			//	repr: "1",
			//	unit: "px"
			//}

			Object.defineProperty(CSSPropertyBuffer.prototype, 'bufferSchema', {
				value : BinarySchemaFactory(
					'compactedViewOnProperty',
					[
						'tokenType',
						'propertyValue',
						'propertyType',
						'repr',
						'reprLength',
						'unit',
						'isInitialValue'
					],
					[
						1,
						2,
						1,
						CSSPropertyBuffer.prototype.stdStrLength,		// defining a tight limit to the size of the representation of a string is obviously a strong opinion: lets keep some neurons on it)
						1,
						1,
						1
					]
			)
			});

			//console.log(CSSPropertyBuffer.prototype.bufferSchema);






			module.exports = CSSPropertyBuffer;
			},{"src/core/BinarySchema":39,"src/core/TypeManager":57,"src/core/UIDGenerator":58,"src/parsers/css-parser_forked_normalized":71}],74:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor CSSPropertyDescriptors
			 */

			var TypeManager = _dereq_('src/core/TypeManager', false);
			var CSSPropertyBuffer = _dereq_('src/editing/CSSPropertyBuffer', false);

			var CSSPropertyDescriptors = {};
			var SplittedCSSPropertyDescriptors = {};

			var CSSPropertyDescriptorFactory = function(attrName, initialValue, isShorthand, expandedPropNames, mayBeAbbreviated, isAlias) {
				
				var CSSPropertyDescriptor = function(value) {
					
				};
				CSSPropertyDescriptor.prototype = {
					propName : attrName,
					isShorthand : isShorthand,
					mayBeAbbreviated : mayBeAbbreviated,
					isAlias : isAlias,
					initialValue : initialValue,
					expandedPropNames : expandedPropNames
				};
				CSSPropertyDescriptors[attrName] = CSSPropertyDescriptor;
				
				return CSSPropertyDescriptor;
			};

			SplittedCSSPropertyDescriptors.inheritedAttributes = {
				writingMode : CSSPropertyDescriptorFactory('writingMode', '', false, [], false, false),
				textDirection : CSSPropertyDescriptorFactory('textDirection', '', false, [], false, false),
				direction : CSSPropertyDescriptorFactory('direction', '', false, [], false, false),
				captionSide : CSSPropertyDescriptorFactory('captionSide', '', false, [], false, false),
				listStyleType : CSSPropertyDescriptorFactory('listStyleType', '', false, [], false, false),
				listStylePosition : CSSPropertyDescriptorFactory('listStylePosition', '', false, [], false, false),
				visibility : CSSPropertyDescriptorFactory('visibility', '', false, [], false, false),
				font : CSSPropertyDescriptorFactory('font', '', true, ['fontFamily', 'fontSize', 'fontWeight', 'fontStyle'], false, false),
				fontFamily : CSSPropertyDescriptorFactory('fontFamily', '', false, [], false, false),
				fontSize : CSSPropertyDescriptorFactory('fontSize', '', false, [], false, false),
				fontWeight  : CSSPropertyDescriptorFactory('fontWeight', '', false, [], false, false),
				fontStyle : CSSPropertyDescriptorFactory('fontStyle', '', false, [], false, false),
				fontVariant : CSSPropertyDescriptorFactory('fontVariant', '', false, [], false, false),
				fontFeatureSettings : CSSPropertyDescriptorFactory('fontFeatureSettings', '', false, [], false, false),
				src : CSSPropertyDescriptorFactory('src', '', false, [], false, false),	// only present in a @font-face rule
				lineHeight : CSSPropertyDescriptorFactory('lineHeight', '', false, [], false, false),
				color : CSSPropertyDescriptorFactory('color', '#000000', false, [], false, false), // the CSS spec says "depends on the user-agent" : https://www.w3.org/TR/2011/REC-CSS2-20110607/propidx.html#q24.0
				textOrientation : CSSPropertyDescriptorFactory('textOrientation', '', false, [], false, false),
				textAlign : CSSPropertyDescriptorFactory('textAlign', '', false, ['textAlignAll', 'textAlignLast'], false, false),
				textAlignAll : CSSPropertyDescriptorFactory('textAlignAll', '', false, [], false, false),
				textAlignLast : CSSPropertyDescriptorFactory('textAlignLast', '', false, [], false, false),
				textTransform : CSSPropertyDescriptorFactory('textTransform', '', false, [], false, false),
				textDecoration : CSSPropertyDescriptorFactory('textDecoration', '', false, [], false, false),
				textShadow : CSSPropertyDescriptorFactory('textShadow', '', false, [], false, false),
				cursor : CSSPropertyDescriptorFactory('cursor', 'auto', false, [], false, false),
				pointerEvents : CSSPropertyDescriptorFactory('pointerEvents', 'auto', false, [], false, false),
				borderCollapse : CSSPropertyDescriptorFactory('borderCollapse', '', false, [], false, false),
				whiteSpace : CSSPropertyDescriptorFactory('whiteSpace', '', false, [], false, false),
				speak : CSSPropertyDescriptorFactory('speak', 'auto', false, [], false, false),									// auto | always | never
				wordBreak : CSSPropertyDescriptorFactory('wordBreak', 'normal', false, [], false, false),
				wordSpacing : CSSPropertyDescriptorFactory('wordSpacing', 'normal', false, [], false, false),
				lineBreak : CSSPropertyDescriptorFactory('lineBreak', 'auto', false, [], false, false),
				hyphens : CSSPropertyDescriptorFactory('hyphens', 'manual', false, [], false, false),
				overflowWrap : CSSPropertyDescriptorFactory('overflowWrap', 'auto', false, [], false, false),						// The wordWrap property is an alias for overflowWrap
				wordWrap : CSSPropertyDescriptorFactory('wordWrap', 'auto', false, [], false, false),								// The overflowWrap property is an alias for wordWrap
				letterSpacing : CSSPropertyDescriptorFactory('letterSpacing', 'normal', false, [], false, false),					// normal | <length>
				fontVariantLigatures : CSSPropertyDescriptorFactory('fontVariantLigatures', '', false, [], false, false),
				// dash-prefixed properties (specific to a UA) are rendered with an Uppercase first letter by our translation function
				WebkitFontSmoothing : CSSPropertyDescriptorFactory('WebkitFontSmoothing', '', false, [], false, false),
				WebkitFontFeatureSettings : CSSPropertyDescriptorFactory('WebkitFontFeatureSettings', '', false, [], false, false),
				WebkitFontVariantLigatures : CSSPropertyDescriptorFactory('WebkitFontVariantLigatures', '', false, [], false, false),
				
				WebkitTapHighlightColor : CSSPropertyDescriptorFactory('WebkitTapHighlightColor', 'black', false, [], false)
			};

			SplittedCSSPropertyDescriptors.locallyEffectiveAttributes = {
				display : CSSPropertyDescriptorFactory('display', 'inline', false, [], false, false),
				overflow : CSSPropertyDescriptorFactory('overflow', 'visible', false, [], false, false),
				overflowX : CSSPropertyDescriptorFactory('overflowX', '', false, [], false, false),
				overflowY : CSSPropertyDescriptorFactory('overflowY', '', false, [], false, false),
				verticalAlign : CSSPropertyDescriptorFactory('verticalAlign', 'baseline', false, [], false, false),
				clear : CSSPropertyDescriptorFactory('clear', '', false, [], false, false),
				float : CSSPropertyDescriptorFactory('float', '', false, [], false, false),
				position : CSSPropertyDescriptorFactory('position', '', false, [], false, false),
				resize : CSSPropertyDescriptorFactory('resize', 'none', false, [], false, false),
				
				flex : CSSPropertyDescriptorFactory('flex', '0 1 auto', true, ['flexGrow', 'flexShrink', 'flexBasis'], false, false),
				flexFlow : CSSPropertyDescriptorFactory('flexFlow', 'row nowrap', true, ['flexDirection', 'flexWrap'], false, false),
				flexDirection : CSSPropertyDescriptorFactory('flexDirection', 'row', false, [], false, false),
				flexWrap : CSSPropertyDescriptorFactory('flexWrap', 'nowrap', false, [], false, false),
				flexGrow : CSSPropertyDescriptorFactory('flexGrow', 0, false, [], false, false),
				flexShrink : CSSPropertyDescriptorFactory('flexShrink', 1, false, [], false, false),
				flexBasis : CSSPropertyDescriptorFactory('flexBasis', 'auto', false, [], false, false),
				justifyContent : CSSPropertyDescriptorFactory('justifyContent', 'flex-start', false, [], false, false), 
				alignItems : CSSPropertyDescriptorFactory('alignItems', 'stretch', false, [], false, false),
				alignSelf : CSSPropertyDescriptorFactory('alignSelf', 'auto', false, [], false, false),
				alignContent : CSSPropertyDescriptorFactory('alignContent', 'stretch', false, [], false, false),
				gap : CSSPropertyDescriptorFactory('gap', 'normal', false, [], false, false),
				
				gridTemplateRows : CSSPropertyDescriptorFactory('gridTemplateRows', '', false, [], false, false),
				gridTemplateColumns : CSSPropertyDescriptorFactory('gridTemplateColumns', '', false, [], false, false),
				
				gridRow : CSSPropertyDescriptorFactory('gridRow', '', false, [], false, false),
				gridColumn : CSSPropertyDescriptorFactory('gridColumn', '', false, [], false, false),
				
				tabSize : CSSPropertyDescriptorFactory('tabSize', '', false, [], false, false),
				MozTabSize : CSSPropertyDescriptorFactory('MozTabSize', '', false, [], false, false),
				
				opacity : CSSPropertyDescriptorFactory('opacity', '1', false, [], false, false),
				zIndex : CSSPropertyDescriptorFactory('zIndex', '1', false, [], false)
			};

			SplittedCSSPropertyDescriptors.boxModelAttributes = {
				boxSizing : CSSPropertyDescriptorFactory('boxSizing', 'content-box', false, [], false, false),
				// dash-prefixed properties (specific to a UA) are rendered with an Uppercase first letter by our translation function
				MozBoxSizing : CSSPropertyDescriptorFactory('MozBoxSizing', 'content-box', false, [], false, false),
				width : CSSPropertyDescriptorFactory('width', 'auto', false, [], false, false),
				height : CSSPropertyDescriptorFactory('height', 'auto', false, [], false, false),
				minWidth : CSSPropertyDescriptorFactory('minWidth', 'auto', false, [], false, false),
				minHeight : CSSPropertyDescriptorFactory('minHeight', 'auto', false, [], false, false),
				maxWidth : CSSPropertyDescriptorFactory('maxWidth', 'auto', false, [], false, false),
				maxHeight : CSSPropertyDescriptorFactory('maxHeight', 'auto', false, [], false, false),
				top : CSSPropertyDescriptorFactory('top', 'auto', false, [], false, false),
				left : CSSPropertyDescriptorFactory('left', 'auto', false, [], false, false),
				right : CSSPropertyDescriptorFactory('right', 'auto', false, [], false, false),
				bottom : CSSPropertyDescriptorFactory('bottom', 'auto', false, [], false, false),

				padding : CSSPropertyDescriptorFactory('padding', 0, true, ['paddingBlockStart', 'paddingInlineEnd', 'paddingBlockEnd', 'paddingInlineStart'], true),
				margin : CSSPropertyDescriptorFactory('margin', 0, true, ['marginBlockStart', 'marginInlineEnd', 'marginBlockEnd', 'marginInlineStart'], true),
				border : CSSPropertyDescriptorFactory('border', 0, true, ['borderWidth', 'borderStyle', 'borderColor'], false, false),
				
				// TODO: Should be accounted by an alias mechanism: theses props exist but are not the ones we request
				paddingTop : CSSPropertyDescriptorFactory('paddingTop', 0, false, ['paddingBlockStart'], false, true),
				paddingRight : CSSPropertyDescriptorFactory('paddingRight', 0, false, ['paddingInlineEnd'], false, true),
				paddingBottom : CSSPropertyDescriptorFactory('paddingBottom', 0, false, ['paddingBlockEnd'], false, true),
				paddingLeft : CSSPropertyDescriptorFactory('paddingLeft', 0, false, ['paddingInlineStart'], false, true),
				
				paddingBlockStart : CSSPropertyDescriptorFactory('paddingBlockStart', 0, false, [], false, false),
				paddingInlineEnd : CSSPropertyDescriptorFactory('paddingInlineEnd', 0, false, [], false, false),
				paddingBlockEnd : CSSPropertyDescriptorFactory('paddingBlockEnd', 0, false, [], false, false),
				paddingInlineStart : CSSPropertyDescriptorFactory('paddingInlineStart', 0, false, [], false, false),
				
				// TODO: Should be accounted by an alias mechanism: theses props exist but are not the ones we request
				marginTop : CSSPropertyDescriptorFactory('marginTop', 0, false, ['marginBlockStart'], false, true),
				marginRight : CSSPropertyDescriptorFactory('marginRight', 0, false, ['marginInlineEnd'], false, true),
				marginBottom : CSSPropertyDescriptorFactory('marginBottom', 0, false, ['marginBlockEnd'], false, true),
				marginLeft : CSSPropertyDescriptorFactory('marginLeft', 0, false, ['marginInlineStart'], false, true),
				
				marginBlockStart : CSSPropertyDescriptorFactory('marginBlockStart', 0, false, [], false, false),
				marginBlockEnd : CSSPropertyDescriptorFactory('marginBlockEnd', 0, false, [], false, false),
				marginInlineStart : CSSPropertyDescriptorFactory('marginInlineStart', 0, false, [], false, false),
				marginInlineEnd : CSSPropertyDescriptorFactory('marginInlineEnd', 0, false, [], false, false),
				
				// TODO: Should be accounted by an alias mechanism: theses props exist but are not the ones we request
				borderTop : CSSPropertyDescriptorFactory('borderTop', '0 medium #000000', false, ['borderBlockStart'], false, true),
				borderRight : CSSPropertyDescriptorFactory('borderRight', '0 medium #000000', false, ['borderInlineEnd'], false, true),
				borderBottom : CSSPropertyDescriptorFactory('borderBottom', '0 medium #000000', false, ['borderBlockEnd'], false, true),
				borderLeft : CSSPropertyDescriptorFactory('borderLeft', '0 medium #000000', false, ['borderInlineStart'], false, true),

				borderBlockStart : CSSPropertyDescriptorFactory('borderBlockStart', '0 medium #000000', true, ['borderBlockStartWidth', 'borderBlockStartStyle', 'borderBlockStartColor'], false, false),
				borderBlockEnd : CSSPropertyDescriptorFactory('borderBlockEnd', '0 medium #000000', true, ['borderBlockEndWidth', 'borderBlockEndStyle', 'borderBlockEndColor'], false, false),
				borderInlineStart : CSSPropertyDescriptorFactory('borderInlineStart', '0 medium #000000', true, ['borderInlineStartWidth', 'borderInlineStartStyle', 'borderInlineStartColor'], false, false),
				borderInlineEnd : CSSPropertyDescriptorFactory('borderInlineEnd', '0 medium #000000', true, ['borderInlineEndWidth', 'borderInlineEndStyle', 'borderInlineEndColor'], false, false),

				borderWidth : CSSPropertyDescriptorFactory('borderWidth', 0, true, ['borderBlockStartWidth', 'borderInlineEndWidth', 'borderBlockEndWidth', 'borderInlineStartWidth'], true),
				borderBlockStartWidth : CSSPropertyDescriptorFactory('borderBlockStartWidth', 0, false, [], false, false),
				borderBlockEndWidth : CSSPropertyDescriptorFactory('borderBlockEndWidth', 0, false, [], false, false),
				borderInlineStartWidth : CSSPropertyDescriptorFactory('borderInlineStartWidth', 0, false, [], false, false),
				borderInlineEndWidth : CSSPropertyDescriptorFactory('borderInlineEndWidth', 0, false, [], false, false),

				borderStyle : CSSPropertyDescriptorFactory('borderStyle', 'none', true, ['borderBlockStartStyle', 'borderInlineEndStyle', 'borderBlockEndStyle', 'borderInlineStartStyle'], true),
				borderBlockStartStyle : CSSPropertyDescriptorFactory('borderBlockStartStyle', 'none', false, [], false, false),
				borderBlockEndStyle : CSSPropertyDescriptorFactory('borderBlockEndStyle', 'none', false, [], false, false),
				borderInlineStartStyle : CSSPropertyDescriptorFactory('borderInlineStartStyle', 'none', false, [], false, false),
				borderInlineEndStyle : CSSPropertyDescriptorFactory('borderInlineEndStyle', 'none', false, [], false, false),

				borderColor : CSSPropertyDescriptorFactory('borderColor', '#000000', true, ['borderBlockStartColor', 'borderInlineEndColor', 'borderBlockEndColor', 'borderInlineStartColor'], true),
				borderBlockStartColor : CSSPropertyDescriptorFactory('borderBlockStartColor', '#000000', false, [], false, false),
				borderBlockEndColor : CSSPropertyDescriptorFactory('borderBlockEndColor', '#000000', false, [], false, false),
				borderInlineStartColor : CSSPropertyDescriptorFactory('borderInlineStartColor', '#000000', false, [], false, false),
				borderInlineEndColor : CSSPropertyDescriptorFactory('borderInlineEndColor', '#000000', false, [], false, false),

				borderRadius : CSSPropertyDescriptorFactory('borderRadius', '', true, ['borderStartStartRadius', 'borderEndStartRadius', 'borderEndEndRadius', 'borderStartEndRadius'], true, false),
				// dash-prefixed properties (specific to a UA) are rendered with an Uppercase first letter by our translation function
				MozBorderRadius : CSSPropertyDescriptorFactory('MozBorderRadius', '', true, ['borderStartStartRadius', 'borderEndStartRadius', 'borderEndEndRadius', 'borderEndStartRadius'], false, false),
				WebkitBorderRadius : CSSPropertyDescriptorFactory('WebkitBorderRadius', '', true, ['borderStartStartRadius', 'borderEndStartRadius', 'borderEndEndRadius', 'borderEndStartRadius'], false, false),
				borderTopLeftRadius : CSSPropertyDescriptorFactory('borderTopLeftRadius', '', false, [], false, false),
				borderTopRightRadius : CSSPropertyDescriptorFactory('borderTopRightRadius', '', false, [], false, false),
				borderBottomRightRadius : CSSPropertyDescriptorFactory('borderBottomRightRadius', '', false, [], false, false),
				borderBottomLeftRadius : CSSPropertyDescriptorFactory('borderBottomLeftRadius', '', false, [], false, false),
				borderStartStartRadius : CSSPropertyDescriptorFactory('borderStartStartRadius', '', false, [], false, false),
				borderEndStartRadius : CSSPropertyDescriptorFactory('borderEndStartRadius', '', false, [], false, false),
				borderEndEndRadius : CSSPropertyDescriptorFactory('borderEndEndRadius', '', false, [], false, false),
				borderStartEndRadius : CSSPropertyDescriptorFactory('borderStartEndRadius', '', false, [], false),
				
				transform : CSSPropertyDescriptorFactory('transform', '', false, [], false)
			};

			SplittedCSSPropertyDescriptors.strictlyLocalAttributes = {
				background : CSSPropertyDescriptorFactory('background', '', true, ['backgroundColor', 'backgroundImage', 'backgroundRepeat', 'backgroundAttachment', 'backgroundPositionTop', 'backgroundPositionLeft'], false, false),
				backgroundColor : CSSPropertyDescriptorFactory('backgroundColor', 'transparent', false, [], false, false),
				objectFit : CSSPropertyDescriptorFactory('objectFit', 'fill', false, [], false, false),
				
				// CSSOM properties are not supported by Browsers for now : change the "isShorthand" (first) flag to true when available
				backgroundPosition : CSSPropertyDescriptorFactory('backgroundPosition', '0% 0%', false, ['backgroundPositionTop', 'backgroundPositionLeft'], false, false),
				backgroundSize : CSSPropertyDescriptorFactory('backgroundSize', 'auto auto', false, [], false, false),
				backgroundPositionTop : CSSPropertyDescriptorFactory('backgroundPositionTop', '0%', false, [], false, false),
				backgroundPositionLeft : CSSPropertyDescriptorFactory('backgroundPositionLeft', '0%', false, [], false, false),
				backgroundImage : CSSPropertyDescriptorFactory('backgroundImage', 'none', false, [], false, false),
				backgroundAttachment : CSSPropertyDescriptorFactory('backgroundAttachment', '', false, [], false, false),
				backgroundRepeat : CSSPropertyDescriptorFactory('backgroundRepeat', 'repeat', false, [], false, false),
				boxShadow : CSSPropertyDescriptorFactory('boxShadow', 'none', false, [], false, false),
				
				// CSSOM properties are not supported by Browsers for now : change the "isShorthand" (first) flag to true when available
				outline : CSSPropertyDescriptorFactory('outline', '', false, ['outlineColor', 'outlineStyle', 'outlineWidth', ], false, false),
				// not supported by Browsers for now : change the "isShorthand" and "mayBeAbbreviated" (two) flags to true when available
				outlineColor : CSSPropertyDescriptorFactory('outlineColor', 'none', false, ['outlineColorBlockStart', 'outlineColorInlineEnd', 'outlineColorBlockEnd', 'outlineColorInlineStart'], false),
				outlineStyle : CSSPropertyDescriptorFactory('outlineStyle', 'none', false, ['outlineStyleBlockStart', 'outlineStyleInlineEnd', 'outlineStyleBlockEnd', 'outlineStyleInlineStart'], false),
				outlineWidth : CSSPropertyDescriptorFactory('outlineWidth', 'none', false, ['outlineWidthBlockStart', 'outlineWidthInlineEnd', 'outlineWidthBlockEnd', 'outlineWidthInlineStart'], false),
				
				outlineColorBlockStart : CSSPropertyDescriptorFactory('outlineColorBlockStart', 0, false, [], false, false),
				outlineColorInlineEnd : CSSPropertyDescriptorFactory('outlineColorInlineEnd', 0, false, [], false, false),
				outlineColorBlockEnd : CSSPropertyDescriptorFactory('outlineColorBlockEnd', 0, false, [], false, false),
				outlineColorInlineStart : CSSPropertyDescriptorFactory('outlineColorInlineStart', 0, false, [], false, false),
				
				outlineStyleBlockStart : CSSPropertyDescriptorFactory('outlineStyleBlockStart', 0, false, [], false, false),
				outlineStyleInlineEnd : CSSPropertyDescriptorFactory('outlineStyleInlineEnd', 0, false, [], false, false),
				outlineStyleBlockEnd : CSSPropertyDescriptorFactory('outlineStyleBlockEnd', 0, false, [], false, false),
				outlineStyleInlineStart : CSSPropertyDescriptorFactory('outlineStyleInlineStart', 0, false, [], false, false),
				
				outlineWidthBlockStart : CSSPropertyDescriptorFactory('outlineWidthBlockStart', 0, false, [], false, false),
				outlineWidthInlineEnd : CSSPropertyDescriptorFactory('outlineWidthInlineEnd', 0, false, [], false, false),
				outlineWidthBlockEnd : CSSPropertyDescriptorFactory('outlineWidthBlockEnd', 0, false, [], false, false),
				outlineWidthInlineStart : CSSPropertyDescriptorFactory('outlineWidthInlineStart', 0, false, [], false, false),
				
				content : CSSPropertyDescriptorFactory('content', 'normal', false, [], false, false),									// normal | none | [ <content-replacement> | <content-list> ] [/ [ <string> | <counter> ]+ ]?
				
				animation : CSSPropertyDescriptorFactory('animation', 'normal', false, [], false, false),
				animationName : CSSPropertyDescriptorFactory('animationName', 'none', false, [], false, false),
				animationDuration : CSSPropertyDescriptorFactory('animationDuration', '1', false, [], false, false),
				animationIterationCount : CSSPropertyDescriptorFactory('animationIterationCount', '1', false, [], false, false),
				animationIterationFunction : CSSPropertyDescriptorFactory('animationIterationFunction', '', false, [], false, false),
				animationTimingFunction : CSSPropertyDescriptorFactory('animationTimingFunction', '', false, [], false, false),
				animationDelay : CSSPropertyDescriptorFactory('animationDelay', '0', false, [], false, false)
			};





			var boundaries = {}, c = 0, l = 0;
			for (var groupName in SplittedCSSPropertyDescriptors) {
				l = Object.keys(SplittedCSSPropertyDescriptors[groupName]).length;
				boundaries[groupName] = {
					start : c,
					length : l
				};
				c += l;
			}
			// DEBUG: stdAttributes is the complete list of attributes for a given CSS rule (to be deleted)
			boundaries.stdAttributes = {
				start : 0,
				length : c
			};



			module.exports = {
				all : CSSPropertyDescriptors,
				splitted : SplittedCSSPropertyDescriptors,
				boundaries : boundaries
			};
			},{"src/core/TypeManager":57,"src/editing/CSSPropertyBuffer":73}],75:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * construct. CSSPropertySetBuffer
			 */

			var TypeManager = _dereq_('src/core/TypeManager');
			var MemoryMapBuffer = _dereq_('src/core/MemoryMapBuffer');

			var CSSPropertyBuffer = _dereq_('src/editing/CSSPropertyBuffer');
			var CSSPropertyDescriptors = _dereq_('src/editing/CSSPropertyDescriptors');
			var FontSizeBuffer = _dereq_('src/editing/FontSizeBuffer');
			var StylePropertyEnhancer = _dereq_('src/editing/StylePropertyEnhancer');
			var stylePropertyConverter = new StylePropertyEnhancer();

			var parser = _dereq_('src/parsers/css-parser_forked_normalized');

			var TextSizeGetter = _dereq_('src/core/TextSizeGetter');
			var textSizeGetter = new TextSizeGetter();

			/**
			 * @constructor CSSPropertySetBuffer
			 */
			var CSSPropertySetBuffer = function(initialContent) {
				var itemSize = CSSPropertyBuffer.prototype.bufferSchema.size;
				MemoryMapBuffer.call(this, itemSize, initialContent);
				this.objectType = 'CSSPropertySetBuffer';
				
				if (!initialContent)
					this.populateInitialValues();
			};
			CSSPropertySetBuffer.prototype = Object.create(MemoryMapBuffer.prototype);
			CSSPropertySetBuffer.prototype.objectType = 'CSSPropertySetBuffer';

			CSSPropertySetBuffer.prototype.propertiesStaticArray = Object.keys(CSSPropertyDescriptors.all);
			CSSPropertySetBuffer.prototype.inheritedPropertiesStaticArray = Object.keys(CSSPropertyDescriptors.splitted.inheritedAttributes);
			CSSPropertySetBuffer.prototype.propertiesAccessGroupsBoundaries = CSSPropertyDescriptors.boundaries;

			CSSPropertySetBuffer.prototype.populateInitialValues = function() {
				var start = 0, end = 0;
				// we assume the propertiesAccessGroupsBoundaries object isn't ordered, although JS objects are ordered now
				for (var attrGroup in this.propertiesAccessGroupsBoundaries) {
					if (this.propertiesAccessGroupsBoundaries[attrGroup].start > start) {
						start = this.propertiesAccessGroupsBoundaries[attrGroup].start;
						end = start + this.propertiesAccessGroupsBoundaries[attrGroup].length;
					}
				}
				this._buffer.set(
					CachedCSSPropertySetBuffer._buffer.slice(
						0,
						end * this.itemSize
					)
				);
			};

			CSSPropertySetBuffer.prototype.getPosForProp = function(propName) {
				var propIdx = 0;

				if ((propIdx = this.propertiesStaticArray.indexOf(propName)) !== -1) {
					return propIdx;
				}
				return -1;
			};

			CSSPropertySetBuffer.prototype.getPropForPos = function(pos) {
				return this.propertiesStaticArray[pos];
			};

			CSSPropertySetBuffer.prototype.getProp = function(propName) {
				var posForProp = this.getPosForProp(propName) * this.itemSize;
			//	if (propName === 'display')
			//		console.log(posForProp);
				var propAsBuffer = new CSSPropertyBuffer(
						this._buffer.slice(posForProp, posForProp + this.itemSize),
						propName
					);
				return propAsBuffer; 
			};

			CSSPropertySetBuffer.prototype.setPropFromBuffer = function(propName, propBuffer) {
				var resolvedPropName = propName, posForProp;
				
				if (CSSPropertyDescriptors.all[resolvedPropName].prototype.isShorthand) {
					this.setPropFromShorthand(resolvedPropName, propBuffer.getValueAsString());
				}
			//	else if (propBuffer.getTokenTypeAsString() === 'DimensionToken') {
			//		this.setPropAfterResolvingCanonicalUnits(resolvedPropName, propBuffer)
			//	}
				else {
					if (CSSPropertyDescriptors.all[resolvedPropName].prototype.isAlias)
						resolvedPropName = CSSPropertyDescriptors.all[resolvedPropName].prototype.expandedPropNames[0];
					if ((posForProp = this.getPosForProp(resolvedPropName) * this.itemSize) < 0)
						return;
					this._buffer.set(propBuffer._buffer, posForProp);
				}
			};

			CSSPropertySetBuffer.prototype.setPropFromShorthand = function(propName, value) {
				
			//	console.log('	', propName, value);
				if (CSSPropertyDescriptors.all[propName].prototype.mayBeAbbreviated) {
			//		console.log('setPropFromShorthand', propName, value);
					this.handleAbbreviatedValues(propName, value);
					return;
				}
				
			//	console.log('	setPropFromShorthand', propName, value);
				
				// FIXME: (IMPROVEME)
				// We rely on the order of CSSPropertyDescriptors.all[propName].prototype.expandedPropNames
				// The sorting function won't work for all use-cases,
				// as it relies on the fact that shorthands contains uniquely typed values in the sequence of tokens
				var tmpBuffer, expandedPropertyName;
				var valueList = this.sortValuesFromShorthand(propName, value);
				
			//	if (!valueList)
			//		return;
				
				// TODO: optimization : this may be passed a real result from the parser => benchmark
			//	console.log('		setPropFromShorthand', propName, valueList);
				valueList.forEach(function(val, key) {
					if (val === null)
						return;
						
					expandedPropertyName = CSSPropertyDescriptors.all[propName].prototype.expandedPropNames[key];
					if (CSSPropertyDescriptors.all[expandedPropertyName].prototype.mayBeAbbreviated) {
						this.handleAbbreviatedValues(expandedPropertyName, val);
						return;
					}
					
					tmpBuffer = new CSSPropertyBuffer(null, expandedPropertyName);
			//		console.log('	', expandedPropertyName, val);
					tmpBuffer.setValue(val);
			//		console.log('		', tmpBuffer.bufferedValueToString());
					this.setPropFromBuffer(expandedPropertyName, tmpBuffer);
				}, this);
			};

			CSSPropertySetBuffer.prototype.sortValuesFromShorthand = function(propName, value) {
				
				if (CSSPropertyDescriptors.splitted.boxModelAttributes[propName]) {
					var tokenTypeFromParser;
					var parsedValue = parser.parseAListOfComponentValues(value);
					var sortedProp = {dimension : null, ident : null, hash : null};
					parsedValue.forEach(function(val) {
						tokenTypeFromParser = Object.getPrototypeOf(val).tokenType;
			//			console.log('	', tokenTypeFromParser);
						switch (tokenTypeFromParser) {
							case 'WHITESPACE' :
							case 'COMMA' :
									break;
							case 'NUMBER' :
								// There's an ambiguity in the CSS spec:
								// The parser is designed to assume that every integer/float
								// non-followed by an alphabetic char is a number (css-parser.js - line 254 && https://www.w3.org/TR/css-syntax-3/#consume-a-numeric-token).
								// But border-width may only be of type <length>,
								// and then is a dimension => it has to be an ident-like, then it is of type string
								if (propName === 'border')
									sortedProp.dimension = val.repr;
								else
									sortedProp.dimension = val.value;
								break;
							case 'DIMENSION' :
									sortedProp.dimension = val.repr;
									break;
							case 'PERCENTAGE' :
									sortedProp.dimension = val.repr;
									break;
							case 'HASH' :
									sortedProp.hash = val.repr;
									break;
							case 'IDENT' :
									sortedProp.ident = val.repr;
									break;
							case 'FUNCTION' : 
									sortedProp.hash = CSSPropertyBuffer.prototype.functionToCanonical.call(null, val).repr;
							default : break;
						}
					}, this);
					return Object.values(sortedProp);
				}
			//	else if (propName === 'background') {
			//		
			//	} etc.
				else {
					return value.match(/[a-zA-Z0-9#\/:.,%-]+/g) || [];
				}
			};

			CSSPropertySetBuffer.prototype.handleAbbreviatedValues = function(propName, value) {
				var offset = 0, tmpBuffer, valueList = value.split(' '), expandedPropertyName;
				// valueList = parser.parseAListOfComponentValues(value.trim())
				if (valueList.length === 1) {
					CSSPropertyDescriptors.all[propName].prototype.expandedPropNames.forEach(function(expandedPropertyName, key) {
						tmpBuffer = new CSSPropertyBuffer(null, expandedPropertyName);
						tmpBuffer.setValue(valueList[0]);
						this.setPropFromBuffer(expandedPropertyName, tmpBuffer);
					}, this);
				}
				else if (valueList.length === 2) {			// the property shall include 1 whitespace
					CSSPropertyDescriptors.all[propName].prototype.expandedPropNames.forEach(function(expandedPropertyName, key) {
						tmpBuffer = new CSSPropertyBuffer(null, expandedPropertyName);
						if (key === 0 || key === 2)
							tmpBuffer.setValue(valueList[0]);
						else
							tmpBuffer.setValue(valueList[1]);
						this.setPropFromBuffer(expandedPropertyName, tmpBuffer);
					}, this);
				}
				else if (valueList.length === 3) {			// the property shall include 2 whitespace
					CSSPropertyDescriptors.all[propName].prototype.expandedPropNames.forEach(function(expandedPropertyName, key) {
						tmpBuffer = new CSSPropertyBuffer(null, expandedPropertyName);
						if (key !== 3)
							tmpBuffer.setValue(valueList[key]);
						else
							tmpBuffer.setValue(valueList[1]);
			//			offset++;
						this.setPropFromBuffer(expandedPropertyName, tmpBuffer);
					}, this);
				}
				else if (valueList.length === 4) {			// the property shall include 3 whitespace
					CSSPropertyDescriptors.all[propName].prototype.expandedPropNames.forEach(function(expandedPropertyName, key) {
						tmpBuffer = new CSSPropertyBuffer(null, expandedPropertyName);
						tmpBuffer.setValue(valueList[key]);
			//			offset++;
						this.setPropFromBuffer(expandedPropertyName, tmpBuffer);
					}, this);
				}
			};

			CSSPropertySetBuffer.prototype.setPropAfterResolvingCanonicalUnits = function(overridePropBuffer, isFontSizeProp, originalPropName) {
				var propName = 'fontSize',
					fontSize = this.getPropAsNumber(propName);
				
				if (isFontSizeProp) {
					overridePropBuffer.setValue(
						String(
							Math.floor(fontSize * overridePropBuffer.getValueAsNumber() / 100)
						) + 'px'
					);
				}
				
				var	fontFamily = this.getPropAsString('fontFamily'),
					fontStyle = fontSize + this.getUnitAsString(propName) + ' ' + fontFamily,
					sizeOfM = 0;
				
				switch(overridePropBuffer.getUnitAsString()) {
					case 'em' :
						sizeOfM = this.getTextDimensions('M', fontStyle);
			//			console.log('NEW SIZE', overridePropBuffer.getValueAsNumber(), sizeOfM, fontStyle);
						overridePropBuffer.setValue(
							String(
								Math.floor(overridePropBuffer.getValueAsNumber() * sizeOfM)
							) + 'px'
						);
						break;
					default :
						break;
				}
			};

			CSSPropertySetBuffer.prototype.getDefinedPropertiesAsAttributesList = function() {
				var propName;
				var c = 0;
				
				var ret = {};
				
				for (var i = 0, end = i + this.propertiesStaticArray.length * this.itemSize; i < end; i += this.itemSize) {
					propName = this.propertiesStaticArray[c];
					if (this._buffer[i + CSSPropertyBuffer.prototype.bufferSchema.isInitialValue.start] === 0) {
						ret[propName] = this.getProp(propName).getValueAsString();
					}
					c++;
				}
				
				return ret;
			};

			CSSPropertySetBuffer.prototype.getPropertyGroupAsBufferMap = function(groupName) {
				var propName;
				var c = 0;
				var boundaries = this.propertiesAccessGroupsBoundaries[groupName];
				
				var ret = {};
				for (var i = boundaries.start * this.itemSize, end = i + boundaries.length * this.itemSize; i < end; i += this.itemSize) {
					propName = this.propertiesStaticArray[boundaries.start + c];
					ret[propName] = (new CSSPropertyBuffer(
						this._buffer.slice(i, i + this.itemSize),
						propName
						));
					c++;
				}
				return ret;
			};

			CSSPropertySetBuffer.prototype.getPropertyGroupAsAttributesList = function(groupName) {
				var propName;
				var c = 0;
				var boundaries = this.propertiesAccessGroupsBoundaries[groupName];
				
				var ret = {};
				for (var i = boundaries.start * this.itemSize, end = i + boundaries.length * this.itemSize; i < end; i += this.itemSize) {
					propName = this.propertiesStaticArray[boundaries.start + c];
					ret[propName] = this.getProp(propName).getValueAsString();
					c++;
				}
				return ret;
			};

			CSSPropertySetBuffer.prototype.getDefinedPropertiesFromGroupAsAttributesList = function(groupName) {
				var propName, propValue;
				var c = 0;
				var boundaries = this.propertiesAccessGroupsBoundaries[groupName];
				
				var ret = {};
				for (var i = boundaries.start * this.itemSize, end = i + boundaries.length * this.itemSize; i < end; i += this.itemSize) {
					propName = this.propertiesStaticArray[boundaries.start + c];
					if (this._buffer[i + CSSPropertyBuffer.prototype.bufferSchema.isInitialValue.start] === 0)
						ret[propName] = this.getProp(propName).getValueAsString();
					c++;
				}
				return ret;
			};

			CSSPropertySetBuffer.prototype.getPropertyGroupAsBuffer = function(groupName) {
				var boundaries = this.propertiesAccessGroupsBoundaries[groupName];
				var start = boundaries.start * this.itemSize, end = start + boundaries.length * this.itemSize;
				return this._buffer.slice(start, end);
			};

			CSSPropertySetBuffer.prototype.setPropertyGroupFromGroupBuffer = function(groupName, groupBuffer) {
				var boundaries = this.propertiesAccessGroupsBoundaries[groupName];
				var start = boundaries.start * this.itemSize;
				this._buffer.set(groupBuffer, start);
			};

			CSSPropertySetBuffer.prototype.overridePropertyGroupFromGroupBuffer = function(groupName, groupBuffer, setFromInherited) {
			//	console.log('called');
				var inheritedAttributesStr = 'inheritedAttributes',
					fontSizeStr = 'fontSize',
					fontFamilyStr = 'fontFamily',
					isFontSizeProp = false; 
				var c = 0,
					boundaries = this.propertiesAccessGroupsBoundaries[groupName],
					fontSizeIdx = 0,
					tmpPropertyBuffer,
					fontFamily = '',
					fontSize = 0;
				
				for (var i = boundaries.start * this.itemSize, end = i + boundaries.length * this.itemSize; i < end; i += this.itemSize) {
					isFontSizeProp = false;
					
					// groupBuffer[c + offset] represents the flag "isInitialValue"
			//		console.log('TokenType', groupBuffer[c + CSSPropertyBuffer.prototype.bufferSchema.tokenType.start])
			//		console.log(i / this.itemSize, this.propertiesStaticArray[i / this.itemSize], fontFamilyStr);
					// Not optimized way to handle 'em' CSS units (they depend on the size of the letter "M" in the current font-style)
					// TODO: is there a way to optimize this ?
					// FIXME: 
					if (groupBuffer[c + CSSPropertyBuffer.prototype.bufferSchema.tokenType.start] === CSSPropertyBuffer.prototype.TokenTypes.DimensionToken) {
						// && groupBuffer[c + CSSPropertyBuffer.prototype.bufferSchema.isInitialValue.start] !== 1
						tmpPropertyBuffer = new CSSPropertyBuffer(null, '');
						tmpPropertyBuffer._buffer.set(groupBuffer.slice(c, c + this.itemSize), 0);
						
						this.setPropAfterResolvingCanonicalUnits(tmpPropertyBuffer, isFontSizeProp);
						this._buffer.set(tmpPropertyBuffer._buffer, i);
						
						c += this.itemSize;
						continue;
					}
					// Handling of the font-sizes caches : we must have the size AND the family to compute a cache
					// So we trigger cache-building only when we apply styles on a layout node
					else if (groupName === 	inheritedAttributesStr								// hard-coded for optimization
						&& this.propertiesStaticArray[i / this.itemSize] === fontFamilyStr
						&& groupBuffer[c + CSSPropertyBuffer.prototype.bufferSchema.isInitialValue.start] !== 1) {
			//			console.error(groupName);
						
						fontFamily = groupBuffer.bufferToPartialString(c + CSSPropertyBuffer.prototype.bufferSchema.repr.start);
						
						// Get the fontSize from the next Buffer in the loop, as we don't know yet if the local size is the actual size
						// In the PropertyDescriptors, we chose to have the family before the size
						tmpPropertyBuffer = new CSSPropertyBuffer(null, fontFamilyStr);
						tmpPropertyBuffer._buffer.set(groupBuffer.slice(c + this.itemSize, c + this.itemSize * 2), 0);
						fontSize = tmpPropertyBuffer.getValueAsNumber().toString() + tmpPropertyBuffer.getUnitAsString();
						
						// TODO: find in which cases the fontSize is 0 : seems we apply populateStyles before inheritedStyles
			//			if (fontSize === '0')
			//				fontSize = this.getPropAsNumber(fontSizeStr) + this.getUnitAsString(fontSizeStr);
						
						if (fontSize !== '0') {
							if (!this.isFontSizeBufferInCache(fontSize, fontFamily))
								this.addFontSizeBufferToCache(fontSize, fontFamily);
						}
					}
					// Handling of fontSizes in percents
					else if (!setFromInherited
						&& groupName === inheritedAttributesStr								// hard-coded for optimization
						&& this.propertiesStaticArray[i / this.itemSize] === fontSizeStr
						&& groupBuffer[c + CSSPropertyBuffer.prototype.bufferSchema.isInitialValue.start] !== 1) {
						
						tmpPropertyBuffer = new CSSPropertyBuffer(null, fontSizeStr);
						tmpPropertyBuffer._buffer.set(groupBuffer.slice(c, c + this.itemSize), 0);
						
						if (tmpPropertyBuffer.getTokenTypeAsNumber() === CSSPropertyBuffer.prototype.TokenTypes.PercentageToken) {
							this.setPropAfterResolvingCanonicalUnits(tmpPropertyBuffer, true);
							groupBuffer.set(tmpPropertyBuffer._buffer, c);
						}
					}
					
					if (groupBuffer[c + CSSPropertyBuffer.prototype.bufferSchema.isInitialValue.start] !== 1)
						this._buffer.set(groupBuffer.slice(c, c + this.itemSize), i);
					c += this.itemSize;
				}
			};

			CSSPropertySetBuffer.prototype.isFontSizeBufferInCache = function(fontSize, fontFamily) {
				return TypeManager.fontSizeBuffersCache.cache.hasOwnProperty(fontSize +' ' + fontFamily);
			};

			CSSPropertySetBuffer.prototype.addFontSizeBufferToCache = function(fontSize, fontFamily) {
			//	console.log(fontSize, fontFamily);
				TypeManager.fontSizeBuffersCache.cache[fontSize +' ' + fontFamily] = new FontSizeBuffer(fontSize, fontFamily);
			};

			CSSPropertySetBuffer.prototype.setGroupIsInitialValue = function(groupName, bool) {
				var c = 0, boundaries = this.propertiesAccessGroupsBoundaries[groupName];
				for (var i = boundaries.start * this.itemSize, end = i + boundaries.length * this.itemSize; i < end; i += this.itemSize) {
					this._buffer.set([+(bool || 0)], i + CSSPropertyBuffer.prototype.bufferSchema.isInitialValue.start);
				}
			};

			CSSPropertySetBuffer.prototype.getIsInitialValue = function(propName) {
				var propBuffer = this.getProp(propName);
				return propBuffer.getIsInitialValue();
			};

			CSSPropertySetBuffer.prototype.getIsInitialValueAsBool = function(propName) {
				var propBuffer = this.getProp(propName);
				return propBuffer.getIsInitialValueAsBool();
			};

			CSSPropertySetBuffer.prototype.getTokenTypeForPropAsString = function(propName) {
				var propBuffer = this.getProp(propName);
				return propBuffer.tokenTypeToString();
			};

			CSSPropertySetBuffer.prototype.getTokenTypeForPropAsConstant = function(propName) {
				var propBuffer = this.getProp(propName);
				return propBuffer.tokenTypeToNumber();
			};

			// getPropAsString() is an alias for bufferedValueToString()
			// TODO: unify
			CSSPropertySetBuffer.prototype.getPropAsString = function(propName) {
				return this.bufferedValueToString(propName);
			};

			// getPropAsNumber() is an alias for bufferedValueToNumber(propName)
			// TODO: unify
			CSSPropertySetBuffer.prototype.getPropAsNumber = function(propName) {
				return this.bufferedValueToNumber(propName);
			};

			CSSPropertySetBuffer.prototype.getUnitAsString = function(propName) {
				var propBuffer = this.getProp(propName);
				return propBuffer.getUnitAsString();
			};

			CSSPropertySetBuffer.prototype.getValueTypeAsString = function(propName) {
				var propBuffer = this.getProp(propName);
				return propBuffer.getValueTypeAsString();
			};

			CSSPropertySetBuffer.prototype.getValueTypeAsNumber = function(propName) {
				var propBuffer = this.getProp(propName);
				return propBuffer.getValueTypeAsNumber();
			};

			CSSPropertySetBuffer.prototype.bufferedValueToString = function(propName) {
				var propBuffer = this.getProp(propName);
				return propBuffer.bufferedValueToString();
			};

			CSSPropertySetBuffer.prototype.bufferedValueToNumber = function(propName) {
				var propBuffer = this.getProp(propName);
			//	console.log(propBuffer);
				return propBuffer.bufferedValueToNumber();
			};

			CSSPropertySetBuffer.prototype.fastBufferedValueToString = function(propName) {
				var propIndex = this.getPosForProp(propName) * this.itemSize,
					propLength = this._buffer[propIndex + CSSPropertyBuffer.prototype.bufferSchema.reprLength.start],
					propOffset = CSSPropertyBuffer.prototype.bufferSchema.repr.start,
					propStartIndex = propIndex + propOffset,
					propEndIndex = propStartIndex + propLength;
				return this._buffer.slice(propStartIndex, propEndIndex).bufferToString(propLength);
			};

			CSSPropertySetBuffer.prototype.fastBufferedValueToNumber = function(propName) {
				var propIndex = this.getPosForProp(propName) * this.itemSize,
					propOffset = CSSPropertyBuffer.prototype.bufferSchema.propertyValue.start,
					propStartIndex = propIndex + propOffset,
					propEndIndex = propStartIndex + CSSPropertyBuffer.prototype.bufferSchema.propertyValue.length;
				return CSSPropertyBuffer.prototype.byteTuppleTo16bits(this._buffer.slice(propStartIndex, propEndIndex));
			};




			/**
			 * @method getTextDimensions
			 * @param {String} textContent
			 */
			CSSPropertySetBuffer.prototype.getTextDimensions = function(textContent, fontStyle) {
			//	console.log(this.getAugmentedFontStyle());
				if (!textContent.length)
					return 0;
				var textSize = textSizeGetter.getTextSizeDependingOnStyle(
						textContent,
						fontStyle
					);
				return textSize[0] - textSize[0] / 21;
			};














			var CachedCSSPropertySetBuffer = (function() {
				var packedCSSProperty, propertySetBuffer = new CSSPropertySetBuffer(new Uint8Array());
				for (var attrGroup in CSSPropertyDescriptors.splitted) {
					Object.keys(CSSPropertyDescriptors.splitted[attrGroup]).forEach(function(attrName) {
			//			console.log(attrName, CSSPropertyDescriptors.all[attrName].prototype.initialValue);
						packedCSSProperty = new CSSPropertyBuffer(null, attrName);
						packedCSSProperty.setValue(
			//				parser.parseAListOfComponentValues(
								CSSPropertyDescriptors.all[attrName].prototype.initialValue
			//				)
						);
						propertySetBuffer.setPropFromBuffer(attrName, packedCSSProperty);
					});
					propertySetBuffer.setGroupIsInitialValue(attrGroup, true);
				}
				return propertySetBuffer;
			})();













			module.exports = CSSPropertySetBuffer;
			},{"src/core/MemoryMapBuffer":49,"src/core/TextSizeGetter":56,"src/core/TypeManager":57,"src/editing/CSSPropertyBuffer":73,"src/editing/CSSPropertyDescriptors":74,"src/editing/FontSizeBuffer":78,"src/editing/StylePropertyEnhancer":81,"src/parsers/css-parser_forked_normalized":71}],76:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * construct. CSSSelectorSetBuffer
			 */


			var TypeManager = _dereq_('src/core/TypeManager');
			var CSSSelectorsList = _dereq_('src/editing/CSSSelectorsList');
			var MemoryMapBuffer = _dereq_('src/core/MemoryMapBuffer');
			var MemorySingleBuffer = _dereq_('src/core/MemorySingleBuffer');
			var GeneratorFor16bitsInt = _dereq_('src/core/UIDGenerator').GeneratorFor16bitsInt;


			/**
			 * @constructor CSSSelectorSetBuffer
			 */
			var CSSSelectorSetBuffer = function(initialContent, selectorsList) {
				this.itemSize = CSSSelectorsList.prototype.optimizedSelectorBufferSchema.size;
				MemoryMapBuffer.call(this, this.itemSize, initialContent);
				this.objectType = 'CSSSelectorSetBuffer';
				this._byteLength = 0;
				
				this.entryList = [];
				
				if (selectorsList)
					this.populateFromSelectorsList(selectorsList);
			};
			CSSSelectorSetBuffer.prototype = Object.create(MemoryMapBuffer.prototype);
			CSSSelectorSetBuffer.prototype.objectType = 'CSSSelectorSetBuffer';

			CSSSelectorSetBuffer.prototype.getPosForEntry = function(entryName) {
				var entryIdx = 0;
				if ((entryIdx = this.entryList.indexOf(entryName)) !== -1) {
					return entryIdx;
				}
				return -1;
			};

			CSSSelectorSetBuffer.prototype.getEntryForPos = function(pos) {
				return this.entryList[pos];
			};

			CSSSelectorSetBuffer.prototype.getEntry = function(entryName) {
				var posForEntry = this.getPosForEntry(entryName) * this.itemSize;
			//	console.log(entryName, posForEntry, this._buffer, this._buffer.slice(posForEntry, posForEntry + this.itemSize));
				if (posForEntry < 0)
					return new MemorySingleBuffer(CSSSelectorsList.prototype.optimizedSelectorBufferSchema);
				
				var propAsBuffer = new MemorySingleBuffer(
					CSSSelectorsList.prototype.optimizedSelectorBufferSchema,
					this._buffer.slice(posForEntry, posForEntry + this.itemSize)
					);
				return propAsBuffer; 
			};

			CSSSelectorSetBuffer.prototype.addEntryFromBuffer = function(entryName, selectorBuffer) {
				if (this._byteLength + selectorBuffer._byteLength > this._buffer.byteLength) {
					this._buffer = new Uint8Array(this._buffer.buffer.append(new ArrayBuffer(selectorBuffer._byteLength)));
					this._byteLength += selectorBuffer._byteLength;
				}
				
				var posForEntry = this.entryList.length * this.itemSize;
				this.entryList.push(entryName);
				this._buffer.set(selectorBuffer._buffer, posForEntry);
			};

			CSSSelectorSetBuffer.prototype.populateFromSelectorsList = function(selectorsList) {
				var substrDef, bufferUIDforList = GeneratorFor16bitsInt.newUID();
			//	console.log(bufferUIDforList);
				selectorsList.forEach(function(selector) {
					// TAKE CARE OF PERF: Our fail-fast strategy: we optimized the String.prototype.getNCharAsCharCodes method to get 3 chars most of the time,
					// 		and then we only match on the first char.
					
					// We're matching insensitive to case: eg https://www.w3.org/TR/2011/REC-CSS2-20110607/syndata.html#characters
					// 		=> "All CSS syntax is case-insensitive within the ASCII range."
					// (selector.rightMost.toLowerCase().getNcharsAsCharCodesArray(3, 4);)
			//		console.log(selector.rightMostHasPseudoClassFlag);
					substrDef = selector.rightMost.toLowerCase().getNcharsAsCharCodesArray(3, 4);
					this.addEntryFromBuffer(
						selector.selectorStr,
						this.getCompactedViewOnSelector(
							substrDef,
							selector.selectorProofingPartType,
							bufferUIDforList,
							selector.rightMostHasPseudoClassFlag,
							selector.rightMostPseudoClassType
							));
				}, this);
			};

			CSSSelectorSetBuffer.prototype.getCompactedViewOnSelector = function(substrDef, proofingPartType, bufferUIDforList, hasPseudoClass, pseudoClassType) {
				var buffer = new MemorySingleBuffer(CSSSelectorsList.prototype.optimizedSelectorBufferSchema);
				// 16 bits values have to be declared as byte-tuples ([1, 0] would then represent 1, as all CPU's are now little-endian) 
				// (GeneratorFor16bitsInt, responsible for the UID, shall return an array)
				// Offset of the extracted string from the original string
				
				buffer.set(
						[substrDef[0]],
						CSSSelectorsList.prototype.optimizedSelectorBufferSchema.startingOffsetInString.start
					);
				// Length of the extracted string from the original string
				buffer.set(
						[substrDef[1].length],
						CSSSelectorsList.prototype.optimizedSelectorBufferSchema.stringLength.start
					);
				// Inject the most specific selector (specificity priority is: !important -> "style" DOM attr as a rule -> ID -> class/attribute/prop/pseudo-class -> nodeType/pseudo-elem)
				buffer.set(
						substrDef[1],
						CSSSelectorsList.prototype.optimizedSelectorBufferSchema.stringBinaryEncoded.start
					);
				// ProofingPartType
				buffer.set(
						[proofingPartType],
						CSSSelectorsList.prototype.optimizedSelectorBufferSchema.selectorProofingPartType.start
					);
				// hasPseudoClass
				buffer.set(
						[hasPseudoClass],
						CSSSelectorsList.prototype.optimizedSelectorBufferSchema.selectorHasPseudoClass.start
					);
				// pseudoClassType
				buffer.set(
						[pseudoClassType],
						CSSSelectorsList.prototype.optimizedSelectorBufferSchema.selectorPseudoClassType.start
					);
				// bufferUIDforList
				buffer.set(
						bufferUIDforList,
						CSSSelectorsList.prototype.optimizedSelectorBufferSchema.bufferUID.start
					);
			//	console.log(buffer);
				return buffer;
			};


















			module.exports = CSSSelectorSetBuffer;
			},{"src/core/MemoryMapBuffer":49,"src/core/MemorySingleBuffer":50,"src/core/TypeManager":57,"src/core/UIDGenerator":58,"src/editing/CSSSelectorsList":77}],77:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * construct. CSSSelectorsList
			 */

			var TypeManager = _dereq_('src/core/TypeManager');
			var BinarySchemaFactory = _dereq_('src/core/BinarySchema');



			/**
			 * @constructor CSSSelectorsList
			 */
			var CSSSelectorsList = function(selectorAsStr) {
				Object.defineProperty(this, 'objectType', {value : 'CSSSelectorsList'});
				var selectorsList;
				
				if (selectorAsStr.match(/,/)) {
					selectorsList = selectorAsStr.split(/,\s/);
					if (selectorsList === null) {
						console.warn('CSSSelectorsList: no actual selector could be identified. selectorAsStr is "' + selectorAsStr + '"');
						return;
					}
					selectorsList.forEach(function(selector){
						this.push(new CSSSelector(selector));
					}, this);
				}
				else
					this.push(new CSSSelector(selectorAsStr));

				Object.defineProperty(CSSSelectorsList.prototype, 'maxSpecificity', {
					value : this.getMaxSpecificity()
				});
			};
			CSSSelectorsList.prototype = Object.create(Array.prototype);
			CSSSelectorsList.prototype.objectType = 'CSSSelectorsList';

			Object.defineProperty(CSSSelectorsList.prototype, 'getMaxSpecificity', {
				value : function() {
					
				}
			});

			Object.defineProperty(CSSSelectorsList.prototype, 'optimizedSelectorBufferSchema', {
				value : BinarySchemaFactory(
					'compactedViewOnSelector',
					[	
						'startingOffsetInString',
						'stringLength',
						'stringBinaryEncoded',
						'selectorProofingPartType',
						'selectorHasPseudoClass',
						'selectorPseudoClassType',
						'reservedForFutureUse',
						'bufferUID',
					],
					[
						1,
						1,
						3,
						1,
						1,
						1,
						6,
						2
					]
				)
			});

			// UTILITY FUNCTIONS: to be used when matching the selectors
			CSSSelectorsList.prototype.DHLstr = function(DHL) {
				var ret = '';
				for (var i = 0, l = DHL; i < l; i++) {
					ret += '	';
				}
				return ret;
			};

			CSSSelectorsList.prototype.localDebugLog = function() {
			//	console.log.apply(null, Array.prototype.slice.call(arguments));
			};







			var CSSSelector = function(selectorAsStr) {
				//TODO: A CSS selector may be a list of selectors
				//		=> instanciate a list by default

				this.selectorStr = selectorAsStr;
				this.components = new CSSSelectorComponentList();	// Dummy object to avoid hidden-class transition
				this.selectorProofingPartType = 0;
				this.rightMost = this.extractMostSpecificPartFromSelector();
			//	console.log(this.rightMost);
				this.rightMostHasPseudoClassFlag = this.components[this.components.length - 1].hasPseudoClassFlag;
				this.rightMostPseudoClassType = this.components[this.components.length - 1].pseudoClassType;
				this.specificity = this.getSpecificity();
			};
			CSSSelector.prototype = {};
			CSSSelector.prototype.objectType = 'CSSSelector';

			CSSSelector.prototype.toString = function() {
				return this.selectorStr;
			};

			CSSSelector.prototype.extractMostSpecificPartFromSelector = function() {
				this.components = new CSSSelectorComponentList(this.selectorStr);
				this.specificity = this.components.specificity;
				return this.cascadeOnSpecificity(this.components[this.components.length - 1].value);
			};

			CSSSelector.prototype.cascadeOnSpecificity = function(rightMost) {
				var match;
			//	console.log(rightMost);
			//	(rightMost === ':host' && console.log(rightMost, match));
				match = rightMost.match(this.typeIsId);

				if (match) {
					this.selectorProofingPartType = this.constants.idIsProof;
					return match[1];
				}
				else {
					match = rightMost.match(this.typeIsClass);
			//		(rightMost === ':host' && console.log(rightMost, match));
					if (match) {
						this.selectorProofingPartType = this.constants.classIsProof;
						return match[1] || match[2];
					}
					else {
						match = rightMost.match(this.typeIsHost);
			//			(rightMost === ':host' && console.log(rightMost, match));
						if (match) {
							this.selectorProofingPartType = this.constants.hostIsProof;
							return match[0];
						}
						else {
							match = rightMost.match(this.typeIsTag);
				//			(rightMost === ':host' && console.log(rightMost, match));
							if (match) {
								this.selectorProofingPartType = this.constants.tagIsProof;
								return match[0];
							}
						}
					}
				}
				
				return rightMost;
			};

			CSSSelector.prototype.getSpecificity = function(selectorAsStr) {
				return this.components.specificity;
			};

			CSSSelector.prototype.constants = {
				rawSelectorIsProof : 0,
				idIsProof : 1,
				classIsProof : 2,
				tagIsProof : 3,
				hostIsProof : 4
			};















			var CSSSelectorComponentList = function(selectorAsStr) {
				if (!selectorAsStr)
					return;
					
				this.captureRelationship(selectorAsStr);
				
				Object.defineProperty(this, 'specificity', {
					value : this.getSpecificity()
				});
				 
				if (!this.length)
					console.warn('CSSSelectorComponentList:', 'selectorAsStr => [' + selectorAsStr + ']', 'instanciation of the CSSSelectorComponentList failed.');
			};
			CSSSelectorComponentList.prototype = Object.create(Array.prototype);

			Object.defineProperty(CSSSelectorComponentList.prototype, 'objectType', {
				value : 'CSSSelectorComponentList'
			});

			Object.defineProperty(CSSSelectorComponentList.prototype, 'getSpecificity', {
				value : function() {
					var specificity = 0;
					this.forEach(function(component) {
						specificity += component.getSpecificity();
					}, this);
					return specificity;
				}
			});

			Object.defineProperty(CSSSelectorComponentList.prototype, 'captureRelationship', {
				value : function(selectorAsStr) {
					// TODO: Ensure we can't encounter a coma here, that would be a list of selectors
					var leftSibbling;
					var splitted = selectorAsStr.trim().split(CSSSelectorComponent.prototype.splitter);
					
					splitted.forEach(function(rawComponent) {
						if (!rawComponent.match(CSSSelectorComponent.prototype.typeIsCombinator))
							this.push(new CSSSelectorComponent(rawComponent, leftSibbling));
						leftSibbling = rawComponent;
					}, this);
				}
			});














			var CSSSelectorComponent = function(componentAsStr, leftSibbling) {
				var match;
				this.objectType = 'CSSSelectorComponent';
				
				this.value = componentAsStr;
				this.type = this.getType(componentAsStr);
				this.relation = this.getRelation(leftSibbling);
				
				this.compoundValues = this.getCompoundValues(componentAsStr);
				this.isCompound = this.compoundValues.valuesCount > 1;
				
				// FIXME: this code does not support having multiple pseudo-classes
				this.hasPseudoClassFlag = this.getHasPseudoClass(componentAsStr) || 0;
				this.pseudoClassMicroSyntax = [];
				this.pseudoClassType = (this.hasPseudoClassFlag && this.getPseudoClassConstant(componentAsStr)) || 0;
				
				this.hasAttributesFlag = this.getHasAttributes(componentAsStr) || 0;
				
				return (this.type && this.relation) || undefined;
			};
			CSSSelectorComponent.prototype = {};
			CSSSelectorComponent.prototype.objectType = 'CSSSelectorComponent';

			CSSSelectorComponent.prototype.splitter = /\s/;
			CSSSelectorComponent.prototype.hostPseudoFunction = /^(:host)\((.+?)\)/;
			CSSSelectorComponent.prototype.attributesComponent = /^(\w+?)\[(\w+?)([=~^]+?)(.+?)\]/;

			CSSSelectorComponent.prototype.shadowDOMHostSpecialKeyword = ':host';

			// /\w/ matches on alphaNum AND underscore
			CSSSelectorComponent.prototype.typeIsCombinator = /^[>~+]/;
			CSSSelectorComponent.prototype.typeIsUniversal = /^\*$/;
			CSSSelectorComponent.prototype.typeIsId = /^#(\w+)/;
			CSSSelectorComponent.prototype.typeIsClass = /^\.([\w-]+)|\[class.?="([\w-]+)"\]/;
			CSSSelectorComponent.prototype.typeIsAttribute = CSSSelectorComponent.prototype.attributesComponent;
			CSSSelectorComponent.prototype.typeIsHost = /^:host/;	// we removed the $ flag, cause it failed in getType() with :host(.class-name) (but if I remeber well, we had added the $ because it failed in other cases, but which?) 
			CSSSelectorComponent.prototype.typeIsTag = /^(?<![\.#\:])[\w_-]+/;		 // Negative lookbehind : (?<!...)

			CSSSelectorComponent.prototype.hasPseudoClass = /(?<=[^:]):[\w-]+/;
			CSSSelectorComponent.prototype.pseudoClassTypeFormat = /(.+?):([\w-]+?)\(([\wn+-]+?)\)(.+)?/;
			CSSSelectorComponent.prototype.pseudoClassMicroSyntaxFormat = /(-?[0-9]n\s?)?\s?([+-]?\s?(-?[0-9]*))?/;

			CSSSelectorComponent.prototype.getType = function(componentAsStr) {
				// TODO: this MUST return a value qualifying ONLY the first part of the component (poorly tested till then)
				if (this.typeIsId.test(componentAsStr))
					return this.typeConstants.idType;
				else if (this.typeIsClass.test(componentAsStr))
					return this.typeConstants.classType;
				else if (this.typeIsAttribute.test(componentAsStr))
					return this.typeConstants.attributeType;
				else if (this.typeIsTag.test(componentAsStr))
					return this.typeConstants.tagType;
				else if (this.typeIsHost.test(componentAsStr))
					return this.typeConstants.hostType;
				else if (this.typeIsUniversal.test(componentAsStr))
					return this.typeConstants.universalType;
				else {
			//		console.warn('CSSSelectorComponent:', 'unknown type case should not be reachable.');
					return this.relationConstants.unknownType;
				}
			};

			CSSSelectorComponent.prototype.getHasPseudoClass = function(componentAsStr) {
			//	console.log(componentAsStr);
				return +(this.hasPseudoClass.test(componentAsStr) && !this.typeIsHost.test(componentAsStr));
			};

			CSSSelectorComponent.prototype.getHasAttributes = function(componentAsStr) {
			//	console.log(componentAsStr);
				return this.attributesComponent.test(componentAsStr);
			};

			CSSSelectorComponent.prototype.getPseudoClassConstant = function(componentAsStr) {
				var match;

				if ((match = componentAsStr.match(this.pseudoClassTypeFormat)) && match.length >= 4) {
					this.isCompound = true;
					var newComponentAsStr = match[1] + (match[4] || '');
					this.compoundValues = this.getCompoundValues(newComponentAsStr);
					
					var microSyntax;
					if ((microSyntax = match[3].match(this.pseudoClassMicroSyntaxFormat)) && microSyntax[0]) {
						this.pseudoClassMicroSyntax = [microSyntax[1] ? parseInt(microSyntax[1].slice(0, -1)) : 0, microSyntax[3] ? parseInt(microSyntax[3]) : 0];
						return this.pseudoClassConstants[match[2].hyphensToDromedar() + 'ANpB'];
					}
					
					return this.pseudoClassConstants[match[2].hyphensToDromedar() + match[3].capitalizeFirstChar()];
				}
				else
					return this.pseudoClassConstants['unknown'];
			};

			CSSSelectorComponent.prototype.getRelation = function(leftSibbling) {
				if (!leftSibbling)
					return this.relationConstants.none;
				else if (this.isValidComponent(leftSibbling))
					return this.relationConstants.descendant;
				else if (leftSibbling === this.interestingTokens.immediateDescendantToken)
					return this.relationConstants.immediateDescendant;
				else if (leftSibbling === this.interestingTokens.immediateNextSibblingToken)
					return this.relationConstants.immediateNextSibbling;
				else if (leftSibbling === this.interestingTokens.anyForwardSibblingToken)
					return this.relationConstants.anyForwardSibbling;
				else {
					console.warn('CSSSelectorComponent,', 'unsupported relation : leftSibbling is /' + leftSibbling + '/,', 'that case should not be reachable. (possible parsing error on our side)');
					return this.relationConstants.unknown;
				}
			};

			CSSSelectorComponent.prototype.getCompoundValues = function(selectorAsStr) {
				var classPart1, classPart2;
				var splittedOnId = selectorAsStr.split('#');
				var tagPart = (classPart1 = splittedOnId[0].split('.')) && classPart1.shift();
				var idPart = (splittedOnId.length > 1 && (classPart2 = splittedOnId[1].split('.')).shift());
				var classPart = classPart2 ? classPart1.concat(classPart2) : classPart1;

				return (new CSSSelectorComponentValues(selectorAsStr, tagPart, idPart, classPart));
			};

			CSSSelectorComponent.prototype.getSpecificity = function() {
				var simpleSpecificity, compoundSpecificity;
				if (this.isCompound) {
					compoundSpecificity = this.compoundValues.getSpecificity();
					// FIXME: There may be multiple pseudo-classes
					if (this.hasPseudoClassFlag)
						return compoundSpecificity | (1 << 8)
					else
						return compoundSpecificity;
				}
				else {
					if (this.type === this.typeConstants.idType)
						simpleSpecificity = 1 << 16;
					if (this.type === this.typeConstants.classType || this.type === this.typeConstants.attributeType)
						simpleSpecificity = 1 << 8;
					if (this.type === this.typeConstants.tagType || this.type === this.typeConstants.hostType)
						simpleSpecificity = 1;
					// FIXME: There may be multiple pseudo-classes
					if (this.hasPseudoClassFlag)
						return simpleSpecificity | (1 << 8)
					else
						return simpleSpecificity;
				}
			};

			CSSSelectorComponent.prototype.isValidComponent = function(leftSibbling) {
				// HACK: could we really rely on the fact that a component
				// is valid if it can be resolved to a known type ? 
				return this.getType(leftSibbling);
			};

			CSSSelectorComponent.prototype.interestingTokens = {
				immediateDescendantToken : '>',
				immediateNextSibblingToken : '+',
				anyForwardSibblingToken : '~'
			};

			CSSSelectorComponent.prototype.typeConstants = {
				unknownType : 0,
				universalType : 1,
				idType : 2,
				classType : 3,
				attributeType : 4,
				tagType : 5,
				hostType : 6
			};

			CSSSelectorComponent.prototype.relationConstants = {
				unknown : 0,
				none : 1,
				descendant : 2,
				immediateDescendant : 3,
				immediateNextSibbling : 4,
				anyForwardSibbling : 5
			};

			CSSSelectorComponent.prototype.pseudoClassConstants = {
				unknown : 0,
				firstChild : 1,
				lastChild : 2,
				nthChildOdd : 3,
				nthChildEven : 4,
				nthChildANpB : 5,
			};











			var CSSSelectorComponentValuesCounter = 0;

			var CSSSelectorComponentValues = function(completeSelector, tagPart, idPart, classPart) {
				// FIXME: this.isolateAttributesSelectors won't support the case where we must match on 'startwith', 'includes', 'endWith'
				// ALSO: we haven't yet really implemented all the cases
				
				this.objectType = '';
				this.idPart = ''; this.classPart = []; this.tagPart = ''; this.namePart = '';
				this.idPart = this.isolateAttributesSelectors(idPart || '');			// String
				this.classPart = this.isolateAttributesSelectors(classPart || []);		// Array
				this.tagPart = this.isolateHostPseudoFunction(
						this.isolateAttributesSelectors(completeSelector || ''),
						tagPart
					);																	// String
				this.attributesPart = new SelectorComponentAttributesValues();			// Map (SelectorComponentAttributesValues)
				
				this.valuesCount = +(tagPart.length > 0) + (+(idPart.length > 0)) + (+(classPart.length > 0 && classPart.length));
				this.specificity = this.getSpecificity();
			//	console.log(completeSelector, this.idPart, this.idPart, this.classPart, this.tagPart)
			};
			CSSSelectorComponentValues.prototype = {};
			CSSSelectorComponentValues.prototype.objectType = 'CSSSelectorComponentValues';

			CSSSelectorComponentValues.prototype.isolateHostPseudoFunction = function(completeSelector, tagPart) {
				var pseudoFunction, tmpCapture;
				if ((pseudoFunction = completeSelector.match(CSSSelectorComponent.prototype.hostPseudoFunction))) {
					// WARNING: There's a risky recursion here, but this code seems to handle that correctly
					tmpCapture = CSSSelectorComponent.prototype.getCompoundValues(pseudoFunction[2]);
					this.classPart = tmpCapture.classPart;
					this.idPart = tmpCapture.idPart;
					return pseudoFunction[1];
				}
				return tagPart;
			};

			CSSSelectorComponentValues.prototype.isolateAttributesSelectors = function(componentPart) {
				// We assume it's worth coding an optimization on the "attributes" selector:
				// 	=> if the attribute targets a class or an id with the "stricly equals" operator, we convert that "attribute" component
				var attribute, tmpCapture;
				// Case of the class part
				if (Array.isArray(componentPart) && componentPart.length > 0) {
					var indexesToRemove = [];
					// Due to the simplicity of our splitter, there may be an attribute part
					// on each classPart element:
					// 		=> try to match each time and store immediatly the modified classPart element
					// 		=> then, remove these classPart elements before merging the two arrays
					componentPart.forEach(function(classFragment, key) {
						if ((attribute = classFragment.match(CSSSelectorComponent.prototype.attributesComponent))) {
							// FIXME: matcher is not used => see constructor
							var type = attribute[2], matcher = attribute[3], target = attribute[4];
							
							// TODO: implement the other attributes
							if (type === 'class') {
								this.classPart.push(target);
								indexesToRemove.push(key);
							}
							else if (type === 'id')
								this.idPart = target;
							else if (name === 'name')
								this.attributesPart.set('name', target);
							else if (name === 'checked')
								this.attributesPart.set('checked', target);
							else if (name === 'valid')
								this.attributesPart.set('valid', target);
							else if (name === 'selected')
								this.attributesPart.set('selected', target);
							
							this.classPart.push(attribute[1]);	
						}
					}, this);
					for (var i = componentPart.length - 1; i >= 0; i--) {
						if (indexesToRemove.indexOf(i) !== -1)
							componentPart.splice(i, 1);
					}
					return this.classPart.concat(componentPart);
				}
				// other cases
				else if (componentPart.length) {
					if ((attribute = componentPart.match(CSSSelectorComponent.prototype.attributesComponent))) {
						// FIXME: matcher is not used => see constructor
						var type = attribute[2], matcher = attribute[3], target = attribute[4];
						
						// TODO: implement the other attributes
						if (type === 'class')
							this.classPart.push(target);
						else if (type === 'id')
							this.idPart = target;
						else if (name === 'name')
							this.attributesPart.set('name', target);
						else if (name === 'checked')
							this.attributesPart.set('checked', target);
						else if (name === 'valid')
							this.attributesPart.set('valid', target);
						else if (name === 'selected')
							this.attributesPart.set('selected', target);
							
						return attribute[1];
					}
					return componentPart;
				}
				return componentPart;
			};

			CSSSelectorComponentValues.prototype.getSpecificity = function() {
				var A = 0, B = 0, C = 0;
				
				A = +(this.idPart.length > 0);
				B = this.classPart.length + this.attributesPart.valuesCount;
				C = +(this.tagPart.length > 0);
			//	console.log('A', A, 'B', B, 'C', C);
			//	console.log('ABC', (A << 16) | (B << 8) | (C));
				return (A << 16) | (B << 8) | (C)
			};












			var SelectorComponentAttributesValues = function() {
				this.name = '';
				this.checked = '';
				this.valid = '';
				this.selected = '';
				
				Object.defineProperty(this, 'valuesCount', {value : 0});
			};
			SelectorComponentAttributesValues.prototype = {};
			Object.defineProperty(SelectorComponentAttributesValues.prototype, 'objectType', {value : 'SelectorComponentAttributesValues'});

			Object.defineProperty(SelectorComponentAttributesValues.prototype, 'set', {
				value : function(attrName, attrValue) {
							this[attrName] = attrValue;
							this.countValues();
						}
			});
			Object.defineProperty(SelectorComponentAttributesValues.prototype, 'countValues', {
				value : function() {
					this.valuesCount = 0;
					for (var attrName in this) {
						if (this[attrName].length)
							this.valuesCount++;
					}
				}
			});




















			CSSSelector.prototype.typeIsUniversal = CSSSelectorComponent.prototype.typeIsUniversal;
			CSSSelector.prototype.typeIsId = CSSSelectorComponent.prototype.typeIsId;
			CSSSelector.prototype.typeIsClass = CSSSelectorComponent.prototype.typeIsClass;
			CSSSelector.prototype.typeIsTag = CSSSelectorComponent.prototype.typeIsTag;
			CSSSelector.prototype.typeIsHost = CSSSelectorComponent.prototype.typeIsHost;

			CSSSelectorsList.prototype.constants = CSSSelector.prototype.constants;
			CSSSelectorsList.prototype.interestingTokens = CSSSelectorComponent.prototype.interestingTokens;
			CSSSelectorsList.prototype.typeConstants = CSSSelectorComponent.prototype.typeConstants;
			CSSSelectorsList.prototype.relationConstants = CSSSelectorComponent.prototype.relationConstants;
			CSSSelectorsList.prototype.pseudoClassConstants = CSSSelectorComponent.prototype.pseudoClassConstants;

			CSSSelectorsList.prototype.shadowDOMHostSpecialKeyword = CSSSelectorComponent.prototype.shadowDOMHostSpecialKeyword;

			module.exports = CSSSelectorsList;
			},{"src/core/BinarySchema":39,"src/core/TypeManager":57}],78:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * construct. FontSizeBuffer
			 */

			//var TypeManager = require('src/core/TypeManager');

			var TextSizeGetter = _dereq_('src/core/TextSizeGetter');

			/**
			 * @constructor FontSizeBuffer
			 */
			var FontSizeBuffer = function(fontSize, fontFamily) {
				this._buffer = new Float64Array(new ArrayBuffer(341 * 8));
				this.objectType = 'FontSizeBuffer';
				
				// For now, we assume we won't have to fall back on the second typeface of the family
				this.fontStyle = fontSize + ' ' + fontFamily.split(',')[0];
				this.textSizeGetter = new TextSizeGetter(this.fontStyle);
				
				if (this.fontStyle)
					this.populateInitialValues();
			};
			FontSizeBuffer.prototype = {};
			FontSizeBuffer.prototype.objectType = 'FontSizeBuffer';

			FontSizeBuffer.prototype.populateInitialValues = function() {
				// We need to cache values until 340 tio catch "oe"
				for (var i = 32, l = 340; i < l; i++) {
			//		console.log(i, String.fromCharCode(i), this.textSizeGetter.getTextWidth(String.fromCharCode(i)))
					this._buffer.set([this.textSizeGetter.getTextWidth(String.fromCharCode(i))], i);
				}
			};

			FontSizeBuffer.prototype.getWidthOfSpace = function() {
				return this._buffer.at(32);
			};

			FontSizeBuffer.prototype.getWidthOfWord = function(str) {
				var width = 0;
				for (var i = 0, l = str.length; i < l; i++) {
			//		console.log(i, str.charCodeAt(i), this._buffer.at(str.charCodeAt(i)))
					width += this._buffer.at(str.charCodeAt(i));
				}
				return width;
			};

			module.exports = FontSizeBuffer;
			},{"src/core/TextSizeGetter":56}],79:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * Constructor AttributesList
			 * 
			 */

			//var StylePropertyEnhancer = require('src/editing/StylePropertyEnhancer');
			//var enhancer = new StylePropertyEnhancer();

			var MemoryMapBuffer = _dereq_('src/core/MemoryMapBuffer');
			var CSSPropertyBuffer = _dereq_('src/editing/CSSPropertyBuffer');
			var BinarySlice = _dereq_('src/core/BinarySlice');
			var CSSPropertyDescriptors = _dereq_('src/editing/CSSPropertyDescriptors');
			var CSSPropertySetBuffer = _dereq_('src/editing/CSSPropertySetBuffer');
			var parser = _dereq_('src/parsers/css-parser_forked_normalized');


			/**
			 * Constructor AttributesList
			 * This abstract type shall be used as a base for the "splitted" styles:
			 * "Inheritable" and "local" attributes are grouped in 4 different objects
			 * in the "style" type. This allows important optimizations when embracing
			 * the concept of "component" as being decoupled from the DOM.
			 * 	=> see AdvancedAttributesListFactory()
			 * 
			 * @param attributes Object : passive partial AttributesList-Like (no methods, only significative keys defined)
			 */
			var AttributesList = function(attributes) {
				if (typeof attributes === 'undefined')
					return this;
				// backward compatibility with the attributes list we defined in PHP,
				// and ported as the basic implementation of AttributesList (StyleAttributes.js)

				// TODO: WHY Array.isArray ? AttributesList should always be "object"...
				// Find out how we, once upon a time, got an array...
				// 		=> fixed in AdvancedAttributesList
				if (typeof attributes === 'string' && arguments[1] && Array.isArray(arguments[1]))
					attributes = arguments[1];

				// TODO: explicitly type each CSS data-structure so they precisely reproduce
				// the CSS props we're currently supporting 
				if (typeof attributes === 'object' && Object.keys(attributes).length) {
					for (var prop in attributes) {
						if (attributes.hasOwnProperty(prop) && prop !== 'selector' && prop !== 'type')
							this[prop] = attributes[prop];
					};
				}
			};
			AttributesList.prototype = {};

			Object.defineProperty(AttributesList.prototype, 'linearize', {
				value: function() {
					var str = '', current = '', attrCount = Object.keys(this).length, c = 0;
					for (var prop in this) {
						c++;
						// may be a typed property
						if (typeof this[prop] === 'string')
							current = this[prop];

						str += prop.dromedarToHyphens() + ' : ' + current + ';';

						if (c !== attrCount)
							str += '\n';
					};
					return str;
				}
			});

			Object.defineProperty(AttributesList.prototype, 'get', {
				value: function(attributeName) {

				}
			});

			Object.defineProperty(AttributesList.prototype, 'getAttributeAsCSSOM', {
				value: function(attributeName) {

				}
			});

			Object.defineProperty(AttributesList.prototype, 'getAttributeAsKeyValue', {
				value: function(attributeName) {

				}
			});

			Object.defineProperty(AttributesList.prototype, 'set', {
				value: function(attributeName, attributeValue) {

				}
			});

			Object.defineProperty(AttributesList.prototype, 'setAttributeFromCSSOM', {
				value: function(attributeName, attributeValue) {

				}
			});

			Object.defineProperty(AttributesList.prototype, 'setAttributeFromKeyValue', {
				value: function(attributeName, attributeValue) {

				}
			});





			// This is OBSOLETE.
			// (re-defined (in another format, and without the "per-purpose" classification)
			// in CSSPropertyDescriptors)
			//var PerPurposeAttributesList = {
			//	inheritedAttributes: [
			//		'writingMode',					// horizontal-tb / vertical-lr / vertical-rl / sideways-rl / sideways-lr
			//		'captionSide',					// top / bottom (title or legend of a table)
			//		'listStyleType', 				// disc / circle / square / decimal / georgian, and anything you want... UNICODE codepoint ?
			//		'listStylePosition',			// inside / outside (position of the ::marker : first inline box or before first inline box)
			//		'visibility',					// visible / hidden
			//		'fontFamily',					// list of IDENT values
			//		'fontSize',						// DIMENSION
			//		'lineHeight',					// DIMENSION
			//		'color',						// HASH or FUNCTION
			//		'textOrientation',				// mixed / upright / sideways / sideways-right / sideways-left / use-glyph-orientation
			//		'textAlign',					// left / right / center / justify (start / end)
			//		'textTransform',				// capitalize / uppercase / lowercase / none / full-width / full-size-kana (full-width aligns vertical and horizontal letters on a grid of text)
			//		'textDecoration',				// underline / + dotted / + red / + wavy / + overline
			//		'cursor',						// help / wait / crosshair / not-allowed / zoom-in / grab
			//		'borderCollapse',				// collapse / separate
			//		'whiteSpace',					// normal / nowrap / pre / pre-wrap / pre-line / break-spaces
			//		'wordBreak'						// normal / break-all / keep-all / break-word
			//
			//	],
			//	locallyEffectiveAttributes: [
			//		'display',						// grid / flex / inline / inline-block / block / table / table-cell
			//		'overflowX',					// hidden / visible / scroll
			//		'overflowY',					// hidden / visible / scroll
			//		'verticalAlign',				// baseline / top / middle / bottom / sub / text-top
			//		'clear',						// left / right / both
			//		'float',						// left / right (inline-start / inline-end)
			//		'position',						// static / relative / absolute / fixed / sticky / top / bottom / right / left
			//
			//		'flex',							// SHORTHAND
			//		'flexFlow',						// SHORTHAND
			//		'flexDirection',				// row / column
			//		'flexWrap',						// nowrap / wrap
			//		'flexSchrink',					// INTEGER
			//		'flexGrow',						// INTEGER
			//		'flexBasis',					// INTEGER
			//
			//		'justifyContent',				// flex-start | flex-end | center | space-evenly | space-between | space-around 
			//		'alignItems',					// flex-start | flex-end | center | baseline | stretch
			//		'alignSelf',					// auto | flex-start | flex-end | center | baseline | stretch
			//		'alignContent'					// flex-start | flex-end | center | space-between | space-around | stretch  	
			//	],
			//	boxModelAttributes: [
			//		'boxSizing',					// border-box / content-box
			//		'width',						// DIMENSION
			//		'height',						// DIMENSION
			//		'top',							// DIMENSION
			//		'left',							// DIMENSION
			//		'right',						// DIMENSION
			//		'bottom',						// DIMENSION
			//
			//		'padding',						// SHORTHAND
			//		'margin',						// SHORTHAND
			//		'border',						// SHORTHAND
			//
			//		'paddingBlockStart',			// DIMENSION
			//		'paddingInlineEnd',				// DIMENSION
			//		'paddingBlockEnd',				// DIMENSION
			//		'paddingInlineStart',			// DIMENSION
			//
			//		'marginBlockStart',				// DIMENSION
			//		'marginBlockEnd',				// DIMENSION
			//		'marginInlineStart',			// DIMENSION
			//		'marginInlineEnd',				// DIMENSION
			//
			//		'borderBlockStart',				// width, style, color
			//		'borderBlockEnd',				// width, style, color
			//		'borderInlineStart',			// width, style, color
			//		'borderInlineEnd',				// width, style, color
			//
			//		'borderWidth',					// DIMENSION
			//		'borderBlockStartWidth',		// DIMENSION
			//		'borderBlockEndWidth',			// DIMENSION
			//		'borderInlineStartWidth',		// DIMENSION
			//		'borderInlineEndWidth',			// DIMENSION
			//
			//		'borderStyle',					// none / dotted / inset / dashed / solid / double / groove
			//		'borderBlockStartStyle',		// none / dotted / inset / dashed / solid / double / groove
			//		'borderBlockEndStyle',			// none / dotted / inset / dashed / solid / double / groove
			//		'borderInlineStartStyle',		// none / dotted / inset / dashed / solid / double / groove
			//		'borderInlineEndStyle',			// none / dotted / inset / dashed / solid / double / groove
			//
			//		'borderColor',					// COLOR
			//		'borderBlockStartColor',		// COLOR
			//		'borderBlockEndColor',			// COLOR
			//		'borderInlineStartColor',		// COLOR
			//		'borderInlineEndColor',			// COLOR
			//		
			//		'borderRadius',					// DIMENSION[1-4] / DIMENSION[1-4]
			//
			//		'borderTopLeftRadius',			// DIMENSION / DIMENSION
			//		'borderTopRightRadius',			// DIMENSION / DIMENSION
			//		'borderBottomRightRadius',		// DIMENSION / DIMENSION
			//		'borderBottomLeftRadius',		// DIMENSION / DIMENSION
			//
			//		'borderStartStartRadius',		// DIMENSION / DIMENSION
			//		'borderStartEndRadius',			// DIMENSION / DIMENSION
			//		'borderEndStartRadius',			// DIMENSION / DIMENSION
			//		'borderEndEndRadius'			// DIMENSION / DIMENSION
			//	],
			//	strictlyLocalAttributes: [
			//		'background',					// SHORTHAND
			//		'backgroundColor',				//
			//		'backgroundPosition',			// SHORTHAND
			//		'backgroundPositionTop',		//
			//		'backgroundPositionLeft',		//
			//		'backgroundImage',				//
			//		'backgroundRepeat'				//
			//
			//
			//	]
			//};








			/**
			 * Construct. BaseClass SplittedAttributesListBaseClass
			 * 
			 * @param attributes Object : partial AttributesList-Like (only significative keys defined)
			 */
			var SplittedAttributesListBaseClass = function(attributes) {
				Object.defineProperty(this, 'CSSPropertySetBuffer', {value: new CSSPropertySetBuffer()});
				this.disambiguateAttributes(attributes);
			};
			SplittedAttributesListBaseClass.prototype = {};	//Object.create(AttributesList.prototype);
			Object.defineProperty(SplittedAttributesListBaseClass.prototype, 'objectType', {value: 'SplittedAttributesListBaseClass'});
			Object.defineProperty(SplittedAttributesListBaseClass.prototype, 'purpose', {value: 'VirtualAttributes' });	// virtual
			Object.defineProperty(SplittedAttributesListBaseClass.prototype, 'VirtualAttributes', {value: [] });		// virtual
			Object.defineProperty(SplittedAttributesListBaseClass.prototype, 'InheritedAttributes', {value: Object.keys(CSSPropertyDescriptors.splitted.inheritedAttributes)});
			Object.defineProperty(SplittedAttributesListBaseClass.prototype, 'LocallyEffectiveAttributes', {value: Object.keys(CSSPropertyDescriptors.splitted.locallyEffectiveAttributes)});
			Object.defineProperty(SplittedAttributesListBaseClass.prototype, 'BoxModelAttributes', {value: Object.keys(CSSPropertyDescriptors.splitted.boxModelAttributes)});
			Object.defineProperty(SplittedAttributesListBaseClass.prototype, 'StrictlyLocalAttributes', {value: Object.keys(CSSPropertyDescriptors.splitted.strictlyLocalAttributes)});

			/**
			 * This function ignores attributes depending on the fact they pertain to a certain category of CSS props  :
			 * 
			 * InheritedAttributes,
			 * BoxModelAttributes,
			 * LocallyEffectiveAttributes,
			 * StrictlyLocalAttributes
			 * 
			 * and assign the filtered ones to the embedded CSSPropertySetBuffer
			 * 
			 * It also logs a warning if we encounter a non-supported CSS prop
			 * (for now, we're not aimed at supporting the entire spec)
			 */
			Object.defineProperty(SplittedAttributesListBaseClass.prototype, 'disambiguateAttributes', {
				value: function(attributes) {
					var self = this, definedAttributes = Object.keys(attributes), packedCSSProperty;
					
					for (var i = 0, l = definedAttributes.length; i < l; i++) {
						(function(attrIdx, attrName) {
							if (!CSSPropertyDescriptors.all[attrName]) {
								console.warn('Unsupported CSS Property:', attrName);
								return;
							}
							else if (self[self.purpose].indexOf(attrName) < 0)
								return;
								
							packedCSSProperty = new CSSPropertyBuffer(null, attrName);
							packedCSSProperty.setValue(
								attributes[attrName]
							);

							// Set the isInitialValue flag to false
							packedCSSProperty._buffer.set([0], CSSPropertyBuffer.prototype.bufferSchema.isInitialValue.start);
							
							self.CSSPropertySetBuffer.setPropFromBuffer(attrName, packedCSSProperty);
						})(i, definedAttributes[i]);
					}
			//		this[this.purpose].forEach(function(attrName) {
			//			packedCSSProperty = new CSSPropertyBuffer(null, attrName);
			//			if (attributes[attrName]) {
			//				packedCSSProperty.setValue(
			//					parser.parseAListOfComponentValues(attributes[attrName])
			//				);
			//			}
			//			else {
			//				packedCSSProperty.setValue(
			//					parser.parseAListOfComponentValues(
			//						CSSPropertyDescriptors.all[attrName].prototype.initialValue
			//					)
			//				);
			//			}
			//			this.CSSPropertySetBuffer.setPropFromBuffer(attrName, packedCSSProperty);
			//		}, this);
				}
			});

			//Object.defineProperty(SplittedAttributesListBaseClass.prototype, 'populateInitialValues', {
			//	value: function() {
			//		// CAUTION: Categories in CSSPropertyDescriptors don't correspond
			//		// to the "purposes" used here :
			//		// => purposes are camel-case although categories are dromedar-case
			//		var itemSize = this.CSSPropertySetBuffer.itemSize,
			//			purpose = this.purpose.lowerCaseFirstChar();
			//		var boundaries = CSSPropertyDescriptors.boundaries[purpose];
			//		this.CSSPropertySetBuffer._buffer.set(
			//			this.CachedCSSPropertySetBuffer._buffer.slice(
			//				boundaries.start * itemSize,
			//				(boundaries.start + boundaries.length) * itemSize
			//			),
			//			boundaries.start * itemSize
			//		);
			//	}
			//});
			//
			//Object.defineProperty(SplittedAttributesListBaseClass.prototype, 'CachedCSSPropertySetBuffer', {
			//	value: (function() {
			//		var packedCSSProperty, propertySetBuffer = new CSSPropertySetBuffer();
			//		for (var attrGroup in CSSPropertyDescriptors.splitted) {
			//			Object.keys(CSSPropertyDescriptors.splitted[attrGroup]).forEach(function(attrName) {
			//				packedCSSProperty = new CSSPropertyBuffer(null, attrName);
			//				packedCSSProperty.setValue(
			//					parser.parseAListOfComponentValues(
			//						CSSPropertyDescriptors.all[attrName].prototype.initialValue
			//					)
			//				);
			//				propertySetBuffer.setPropFromBuffer(attrName, packedCSSProperty);
			//			}, this);
			//			propertySetBuffer.setGroupIsInitialValue(attrGroup, true);
			//		}
			//		return propertySetBuffer;
			//	})()
			//});











			/**
			 * @constructor InheritedAttributesList
			 * @extends SplittedAttributesListBaseClass
			 * @param attributes Object : partial AttributesList-Like (only significative keys defined)
			 */
			var InheritedAttributesList = function(attributes) {
				SplittedAttributesListBaseClass.call(this, attributes);
			};
			InheritedAttributesList.prototype = Object.create(SplittedAttributesListBaseClass.prototype);
			Object.defineProperty(InheritedAttributesList.prototype, 'objectType', { value: 'InheritedAttributesList' });
			Object.defineProperty(InheritedAttributesList.prototype, 'purpose', { value: 'InheritedAttributes' });


			/**
			 * @constructor LocallyEffectiveAttributesList
			 * @extends SplittedAttributesListBaseClass
			 * @param attributes Object : partial AttributesList-Like
			 */
			var LocallyEffectiveAttributesList = function(attributes) {
				SplittedAttributesListBaseClass.call(this, attributes);
			};
			LocallyEffectiveAttributesList.prototype = Object.create(SplittedAttributesListBaseClass.prototype);
			Object.defineProperty(LocallyEffectiveAttributesList.prototype, 'objectType', { value: 'LocallyEffectiveAttributesList' });
			Object.defineProperty(LocallyEffectiveAttributesList.prototype, 'purpose', { value: 'LocallyEffectiveAttributes' });


			/**
			 * @constructor boxModelAttributes
			 * @extends SplittedAttributesListBaseClass
			 * @param attributes Object : partial AttributesList-Like 
			 */
			var BoxModelAttributesList = function(attributes) {
				SplittedAttributesListBaseClass.call(this, attributes);
			};
			BoxModelAttributesList.prototype = Object.create(SplittedAttributesListBaseClass.prototype);
			Object.defineProperty(BoxModelAttributesList.prototype, 'objectType', { value: 'BoxModelAttributesList' });
			Object.defineProperty(BoxModelAttributesList.prototype, 'purpose', { value: 'BoxModelAttributes' });


			/**
			 * @constructor StrictlyLocalAttributes
			 * @extends SplittedAttributesListBaseClass
			 * @param attributes Object : partial AttributesList-Like
			 */
			var StrictlyLocalAttributesList = function(attributes) {
				SplittedAttributesListBaseClass.call(this, attributes);
			};
			StrictlyLocalAttributesList.prototype = Object.create(SplittedAttributesListBaseClass.prototype);
			Object.defineProperty(StrictlyLocalAttributesList.prototype, 'objectType', { value: 'StrictlyLocalAttributesList' });
			Object.defineProperty(StrictlyLocalAttributesList.prototype, 'purpose', { value: 'StrictlyLocalAttributes' });






















			var AdvancedAttributesListFactory = function(attributes) {
				if ((typeof attributes === 'string' || !attributes) && Object.prototype.toString.call(arguments[1]) === '[object Object]')
					attributes = arguments[1];

				this.inheritedAttributes = new InheritedAttributesList(attributes);
				this.locallyEffectiveAttributes = new LocallyEffectiveAttributesList(attributes);
				this.boxModelAttributes = new BoxModelAttributesList(attributes);
				this.strictlyLocalAttributes = new StrictlyLocalAttributesList(attributes);

			//	this.stdAttributes = new AttributesList(attributes);
			};
			AdvancedAttributesListFactory.prototype = {};

			Object.defineProperty(AdvancedAttributesListFactory.prototype, 'get', {
				value: function(attr) {
					var propBuffer;
					for (var propGroup in CSSPropertyDescriptors.splitted) {
						if (CSSPropertyDescriptors.splitted[propGroup][attr]) {
							return this[propGroup].CSSPropertySetBuffer.bufferedValueToString(attr);
						}
					}
				}
			});
			Object.defineProperty(AdvancedAttributesListFactory.prototype, 'set', {
				value: function(attr, value) {
					if (attr === 'borderLeft')
						console.log('setAttribute', value);
					
					var propBuffer;
					for (var propGroup in CSSPropertyDescriptors.splitted) {
						if (CSSPropertyDescriptors.splitted[propGroup][attr]) {
							propBuffer = new CSSPropertyBuffer();
							propBuffer.setValue(value);
							this[propGroup].CSSPropertySetBuffer.setPropFromBuffer(attr, propBuffer);
						}
					}
				}
			});
			// FIXME: should update all partial lists down the object
			Object.defineProperty(AdvancedAttributesListFactory.prototype, 'setApply', {
				value: function(attrList) {
			//		Object.entries(attrList).forEach(function(pair) {
			//			this.stdAttributes.set(pair[0], pair[1]);
			//		}, this);
				}
			});
			Object.defineProperty(AdvancedAttributesListFactory.prototype, 'getAllAttributes', {
				value: function() {
					var allAttributes = {};
					for (var attrGroup in this) {
						Object.assign(allAttributes, this[attrGroup].CSSPropertySetBuffer.getPropertyGroupAsAttributesList(attrGroup));
					}
					return allAttributes;
				}
			});

			Object.defineProperty(AdvancedAttributesListFactory.prototype, 'getAllDefinedAttributes', {
				value: function() {
					var allAttributes = {};
					for (var attrGroup in this) {
			//			console.log(this[attrGroup].CSSPropertySetBuffer.getPropertyGroupAsAttributesList(attrGroup));
						Object.assign(allAttributes, this[attrGroup].CSSPropertySetBuffer.getDefinedPropertiesFromGroupAsAttributesList(attrGroup));
					}
			//		console.log(allAttributes);
					return allAttributes;
				}
			});

			Object.defineProperty(AdvancedAttributesListFactory.prototype, 'linearize', {
				value: function() {
					return new AttributesList(this.getAllDefinedAttributes()).linearize();
				}
			});

			Object.defineProperty(AdvancedAttributesListFactory, 'fromAST', {
				value: function(ast) {
					var name, attrList = {};
					// ast is an array of declarations
					ast.forEach(function(declaration) {
						// YET CSSOM ? it seems...
						
						name = declaration.name.hyphensToDromedar();
						if (CSSPropertyDescriptors.all.hasOwnProperty(name)) {
							attrList[name] = declaration.value.reduce(AdvancedAttributesListFactory.flattenDeclarationValues, '');
						}
					});
			//		console.log(attrList);
					return new AdvancedAttributesListFactory(attrList);
				}
			});

			// A callback for the Reducer we use as a hacky serializer for the objects we get from the CSS ast
			Object.defineProperty(AdvancedAttributesListFactory, 'flattenDeclarationValues', {
				value: function(acc, item, key) {
					//			console.log(acc, key);
					acc += item.tokenType !== 'WHITESPACE'
						? (item.tokenType === 'COMMA'
							? ','
							: (item.tokenType === 'DIMENSION' || item.tokenType === 'NUMBER'
								? item.repr + (item.unit || '')
								: (item.tokenType === 'PERCENTAGE'
									? item.repr + '%'
									: (item.type === 'FUNCTION'		// NOT a DECLARATION (item.type): it's a high-level type
										? item.name + '(' + item.value.reduce(AdvancedAttributesListFactory.flattenDeclarationValues, '') + ')'
										: item.value)
								)
							)
						)
						: (acc.length ? ' ' : '');		// no leading space in resulting string CSS values
					//			console.log(acc);
					return acc;
				}
			});










			// This is OBSOLETE.
			// (already defined sooner in this file, and all the way rightly defined in CSSPropertyDescriptors)
			//Object.defineProperty(AdvancedAttributesListFactory.prototype, 'inheritedAttributes', {
			//	value: [
			//		'writingMode',					// horizontal-tb / vertical-lr / vertical-rl / sideways-rl / sideways-lr
			//		'captionSide',					// top / bottom (title or legend of a table)
			//		'listStyleType', 				// disc / circle / square / decimal / georgian, and anything you want... UNICODE codepoint ?
			//		'listStylePosition',			// inside / outside (position of the ::marker : first inline box or before first inline box)
			//		'visibility',					// visible / hidden
			//		'fontFamily',					// list of IDENT values
			//		'fontSize',						// DIMENSION
			//		'lineHeight',					// DIMENSION
			//		'color',						// HASH or FUNCTION
			//		'textOrientation',				// mixed / upright / sideways / sideways-right / sideways-left / use-glyph-orientation
			//		'textAlign',					// left / right / center / justify (start / end)
			//		'textTransform',				// capitalize / uppercase / lowercase / none / full-width / full-size-kana (full-width aligns vertical and horizontal letters on a grid of text)
			//		'textDecoration',				// underline / + dotted / + red / + wavy / + overline
			//		'cursor',						// help / wait / crosshair / not-allowed / zoom-in / grab
			//		'borderCollapse',				// collapse / separate
			//		'whiteSpace',					// normal / nowrap / pre / pre-wrap / pre-line / break-spaces
			//		'wordBreak'						// normal / break-all / keep-all / break-word
			//
			//	]
			//});
			//
			//Object.defineProperty(AdvancedAttributesListFactory.prototype, 'locallyEffectiveAttributes', {
			//	value: [
			//		'display',						// grid / flex / inline / inline-block / block / table / table-cell
			//		'overflowX',					// hidden / visible / scroll
			//		'overflowY',					// hidden / visible / scroll
			//		'verticalAlign',				// baseline / top / middle / bottom / sub / text-top
			//		'clear',						// left / right / both
			//		'float',						// left / right (inline-start / inline-end)
			//		'position',						// static / relative / absolute / fixed / sticky / top / bottom / right / left
			//
			//		'flex',							// SHORTHAND
			//		'flexFlow',						// SHORTHAND
			//		'flexDirection',				// row / column
			//		'flexWrap',						// nowrap / wrap
			//		'flexSchrink',					// INTEGER
			//		'flexGrow',						// INTEGER
			//		'flexBasis',						// INTEGER
			//
			//		'justifyContent',				// flex-start | flex-end | center | space-evenly | space-between | space-around 
			//		'alignItems',					// flex-start | flex-end | center | baseline | stretch
			//		'alignSelf',					// auto | flex-start | flex-end | center | baseline | stretch
			//		'alignContent'					// flex-start | flex-end | center | space-between | space-around | stretch  	
			//	]
			//});
			//
			//Object.defineProperty(AdvancedAttributesListFactory.prototype, 'boxModelAttributes', {
			//	value: [
			//		'boxSizing',					// border-box / content-box
			//		'width',						// DIMENSION
			//		'height',						// DIMENSION
			//		'top',							// DIMENSION
			//		'left',							// DIMENSION
			//		'right',						// DIMENSION
			//		'bottom',						// DIMENSION
			//
			//		'padding',						// SHORTHAND
			//		'margin',						// SHORTHAND
			//		'border',						// SHORTHAND
			//
			//		//			'paddingTop',					// DIMENSION
			//		//			'paddingBottom',				// DIMENSION
			//		//			'paddingLeft',					// DIMENSION
			//		//			'paddingRight',					// DIMENSION
			//
			//		'paddingBlockStart',			// DIMENSION
			//		'paddingInlineEnd',				// DIMENSION
			//		'paddingBlockEnd',				// DIMENSION
			//		'paddingInlineStart',			// DIMENSION
			//
			//		//			'marginTop',					// DIMENSION
			//		//			'marginBottom',					// DIMENSION
			//		//			'marginLeft',					// DIMENSION
			//		//			'marginRight',					// DIMENSION
			//
			//		'marginBlockStart',				// DIMENSION
			//		'marginBlockEnd',				// DIMENSION
			//		'marginInlineStart',			// DIMENSION
			//		'marginInlineEnd',				// DIMENSION
			//
			//		'borderBlockStart',				// width, style, color
			//		'borderBlockEnd',				// width, style, color
			//		'borderInlineStart',			// width, style, color
			//		'borderInlineEnd',				// width, style, color
			//
			//		'borderWidth',					// DIMENSION
			//		'borderBlockStartWidth',		// DIMENSION
			//		'borderBlockEndWidth',			// DIMENSION
			//		'borderInlineStartWidth',		// DIMENSION
			//		'borderInlineEndWidth',			// DIMENSION
			//
			//		'borderStyle',					// none / dotted / inset / dashed / solid / double / groove
			//		'borderBlockStartStyle',		// none / dotted / inset / dashed / solid / double / groove
			//		'borderBlockEndStyle',			// none / dotted / inset / dashed / solid / double / groove
			//		'borderInlineStartStyle',		// none / dotted / inset / dashed / solid / double / groove
			//		'borderInlineEndStyle',			// none / dotted / inset / dashed / solid / double / groove
			//
			//		'borderColor',					// COLOR
			//		'borderBlockStartColor',		// COLOR
			//		'borderBlockEndColor',			// COLOR
			//		'borderInlineStartColor',		// COLOR
			//		'borderInlineEndColor'			// COLOR
			//	]
			//});
			//
			//Object.defineProperty(AdvancedAttributesListFactory.prototype, 'strictlyLocalAttributes', {
			//	value: [
			//		'background',					// SHORTHAND
			//		'backgroundColor',				//
			//		'backgroundPosition',			// SHORTHAND
			//		'backgroundPositionTop',		//
			//		'backgroundPositionLeft',		//
			//		'backgroundImage',				//
			//		'backgroundRepeat',				//
			//
			//		'borderRadius',					// DIMENSION[1-4] / DIMENSION[1-4]
			//
			//		'borderTopLeftRadius',			// DIMENSION / DIMENSION
			//		'borderTopRightRadius',			// DIMENSION / DIMENSION
			//		'borderBottomRightRadius',		// DIMENSION / DIMENSION
			//		'borderBottomLeftRadius',		// DIMENSION / DIMENSION
			//
			//		'borderStartStartRadius',		// DIMENSION / DIMENSION
			//		'borderStartEndRadius',			// DIMENSION / DIMENSION
			//		'borderEndStartRadius',			// DIMENSION / DIMENSION
			//		'borderEndEndRadius',			// DIMENSION / DIMENSION
			//	]
			//});




			/*
			 * The following values are declared and used in the CSSPropertyBuffer class
			 */


			//\w+\.prototype\.tokenType\s?=\s?"[^"]+";

			//	var TokenTypes = {};
			//	TokenTypes.BadStringToken = 0;
			//	TokenTypes.BadURLToken = 1;
			//	TokenTypes.WhitespaceToken = 2;
			//	TokenTypes.CDOToken = 3;
			//	TokenTypes.CDCToken = 4;
			//	TokenTypes.ColonToken = 5;
			//	TokenTypes.SemicolonToken = 6;
			//	TokenTypes.CommaToken = 7;
			//	TokenTypes.OpenCurlyToken = 8;
			//	TokenTypes.CloseCurlyToken = 9;
			//	TokenTypes.OpenSquareToken = 10;
			//	TokenTypes.CloseSquareToken = 11;
			//	TokenTypes.OpenParenToken = 12;
			//	TokenTypes.CloseParenToken = 13;
			//	TokenTypes.IncludeMatchToken = 14;
			//	TokenTypes.DashMatchToken = 15;
			//	TokenTypes.PrefixMatchToken = 16;
			//	TokenTypes.SuffixMatchToken = 17;
			//	TokenTypes.SubstringMatchToken = 18;
			//	TokenTypes.ColumnToken = 19;
			//	TokenTypes.EOFToken = 20;
			//	TokenTypes.DelimToken = 21;
			//	TokenTypes.IdentToken = 22;
			//	TokenTypes.FunctionToken = 23;
			//	TokenTypes.AtKeywordToken = 24;
			//	TokenTypes.HashToken = 25;
			//	TokenTypes.StringToken = 26;
			//	TokenTypes.URLToken = 27;
			//	TokenTypes.NumberToken = 28;
			//	TokenTypes.PercentageToken = 29;
			//	TokenTypes.DimensionToken = 30;

			// ^\t(\w{1,2})\s?\t\s?\t(\w+)
			// Units.\1 = {\Runit : '\1',\R\tfullName : '\2'\R}

			//	var Units = {};
			//	Units.cm = {
			//		idx : 0,
			//		unit : 'cm',
			//		fullName : 'centimeters',
			//		equivStr : '1cm = 96px/2.54'
			//	} 	
			//	Units.mm = {
			//		idx : 1,
			//		unit : 'mm',
			//		fullName : 'millimeters',
			//		equivStr : '1mm = 1/10th of 1cm'
			//	} 	
			//	Units.Q = {
			//		idx : 2,
			//		unit : 'Q',
			//		fullName : 'quarter',
			//		equivStr : '1Q = 1/40th of 1cm'
			//	}
			//	Units.in = {
			//		idx : 3,
			//		unit : 'in',
			//		fullName : 'inches',
			//		equivStr : '1in = 2.54cm = 96px'
			//	}
			//	Units.pc = {
			//		idx : 4,
			//		unit : 'pc',
			//		fullName : 'picas',
			//		equivStr : '1pc = 1/6th of 1in'
			//	}
			//	Units.pt = {
			//		idx : 5,
			//		unit : 'pt',
			//		fullName : 'points',
			//		equivStr : '1pt = 1/72th of 1in'
			//	}
			//	Units.px = {
			//		idx : 6,
			//		unit : 'px',
			//		fullName : 'pixels',
			//		equivStr : '1px = 1/96th of 1in '
			//	}






			module.exports = AdvancedAttributesListFactory;
			},{"src/core/BinarySlice":40,"src/core/MemoryMapBuffer":49,"src/editing/CSSPropertyBuffer":73,"src/editing/CSSPropertyDescriptors":74,"src/editing/CSSPropertySetBuffer":75,"src/parsers/css-parser_forked_normalized":71}],80:[function(_dereq_,module,exports){
			"use strict";
			/**
			* Stylesheets
			*/

			var TypeManager = _dereq_('src/core/TypeManager');
			var GeneratorFor16bitsInt = _dereq_('src/core/UIDGenerator').GeneratorFor16bitsInt;
			var CSSSelectorsList = _dereq_('src/editing/CSSSelectorsList');
			var CSSSelectorSetBuffer = _dereq_('src/editing/CSSSelectorSetBuffer');
			//var StyleAttributes = require('src/editing/StyleAttributes');
			var AdvancedAttributesList = _dereq_('src/editing/SplittedAttributes');

			//var MemorySingleBuffer = require('src/core/MemorySingleBuffer');
			//var MemoryBufferStack = require('src/core/MemoryBufferStack');

			/**
			 * @constructor Style
			 * 
			 * @param type {string} : 'p' || 'span'
			 * @param selector {string} : CSS selector
			 * @param optimizedSelector {string} : optimized CSS selector (represented as a 4 bytes sequence and a UID)
			 * @param attrIface {object} : passive partial PropertiesList-Like (no methods, only significative keys defined)
			 */


			var Style = function(type, selector, attributes) {
				this.selectorsList = new CSSSelectorsList(attributes.selector || selector);
				this.compactedViewOnSelectorsList = new CSSSelectorSetBuffer(null, this.selectorsList);
				this.type = type;
				this.attrIFace = new AdvancedAttributesList(this.type, attributes);
				
				// Populate the masterStyleRegistry, from which we shall later retrieve
				// the optimized part of the style object, i.e the current CSS rule
				this.selectorsList.forEach(function(currentSelector) {
			//		console.log(this.compactedViewOnSelectorsList.getEntry(
			//				currentSelector.selectorStr
			//				// we unpack 16 and 32 bits integers in the CSSCompactedSelector type (in fact it's a MemorySingleBuffer)
			//				).get(
			//					CSSSelectorsList.prototype.optimizedSelectorBufferSchema.bufferUID.start,
			//					2
			//				));
					TypeManager.masterStyleRegistry.setItem(
						this.compactedViewOnSelectorsList.getEntry(
							currentSelector.selectorStr
							// we unpack 16 and 32 bits integers in the CSSCompactedSelector type (in fact it's a MemorySingleBuffer)
							).get(
								CSSSelectorsList.prototype.optimizedSelectorBufferSchema.bufferUID.start,
								2
							),
						this
					);
				}, this);
				
			};
			Style.prototype = {};

			Style.prototype.linearize = function() {
				var linearizedSelector = '';
				this.selectorsList.forEach(function(selector, key) {
					linearizedSelector += selector.selectorStr;
					if (key !== this.selectorsList.length - 1)
						linearizedSelector += ', ';
				}, this);
				linearizedSelector += ' { ' + '\n' + this.attrIFace.linearize() + '\n' + '}\n';
				// FIXME: this should loop on the selectors and interpolate with commas
				return linearizedSelector;
			};

			Style.prototype.addToStyleSheet = function(styleSheet) {
				this.index = styleSheet.insertRule(this.linearize());
			};

			Style.prototype.removeFromStyleSheet = function(styleSheet) {
				styleSheet.deleteRule(this.index);
			};

			//Style.prototype.populateCompactedViewOnSelector = function(substrDef, proofingPartType) {
			//	// 16 bits values have to be declared as byte-tuples ([1, 0] would then represent 1, as all CPU's are now little-endian) 
			//	// (GeneratorFor16bitsInt, responsible for the UID, shall return an array)
			//	// Offset of the extracted string from the original string
			//	this.compactedViewOnSelector.set(
			//			[substrDef[0]],
			//			CSSSelectorsList.prototype.optimizedSelectorBufferSchema.startingOffsetInString.start
			//		);
			//	// Length of the extracted string from the original string
			//	this.compactedViewOnSelector.set(
			//			[substrDef[1].length],
			//			CSSSelectorsList.prototype.optimizedSelectorBufferSchema.stringLength.start
			//		);
			//	// Extract the most specific selector (specificity priority is: !important -> "style" DOM attr as a rule -> ID -> class/attribute/prop/pseudo-class -> nodeType/pseudo-elem)
			//	this.compactedViewOnSelector.set(
			//			substrDef[1],
			//			CSSSelectorsList.prototype.optimizedSelectorBufferSchema.stringBinaryEncoded.start
			//		);
			//	this.compactedViewOnSelector.set(
			//			proofingPartType,
			//			CSSSelectorsList.prototype.optimizedSelectorBufferSchema.selectorProofingPartType.start
			//		);
			//	this.compactedViewOnSelector.set(
			//			GeneratorFor16bitsInt.newUID(),
			//			CSSSelectorsList.prototype.optimizedSelectorBufferSchema.bufferUID.start
			//		);
			//		
			//		
			//	// Populate the masterStyleRegistry from which we shall later retrieve
			//	// the optimized part of the style object, i.e the current CSS rule
			//	TypeManager.masterStyleRegistry.setItem(
			//		GeneratorFor16bitsInt.numberFromInt(this.compactedViewOnSelector.get(
			//			CSSSelectorsList.prototype.optimizedSelectorBufferSchema.bufferUID.start,
			//			2
			//		)),
			//		this.attrIFace
			//	)
			//}

			// TODO: OPTIMIZE
			Style.prototype.copyAndMergeWithStyle = function(styleObj) {
				var attrIFaceCopy = new AdvancedAttributesList('FIXME:noType', this.attrIFace.getAllDefinedAttributes());
				attrIFaceCopy.setApply(styleObj);
				return attrIFaceCopy;
			};





			module.exports = Style;

			},{"src/core/TypeManager":57,"src/core/UIDGenerator":58,"src/editing/CSSSelectorSetBuffer":76,"src/editing/CSSSelectorsList":77,"src/editing/SplittedAttributes":79}],81:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor StylePropertyEnhancer
			 * 
			 * 
			 */

			var CSSPropertyBuffer = _dereq_('src/editing/CSSPropertyBuffer');
			var parser = _dereq_('src/parsers/css-parser_forked');


			var StylePropertyEnhancer = function() {
				this.objectType = 'StylePropertyEnhancer';
				
			};

			StylePropertyEnhancer.prototype.toCSSPropertyBuffer = function(attrName, attrValue) {
				var packedCSSProperty = new CSSPropertyBuffer(null, attrName);
			//	console.log(attrName, attrValue);
			//	console.log(packedCSSProperty);
			//	console.log(parser.parseAListOfComponentValues(attrValue));
				
				packedCSSProperty.setValue(parser.parseAListOfComponentValues(attrValue));
				packedCSSProperty._buffer.set([0], CSSPropertyBuffer.prototype.bufferSchema.isInitialValue.start);
				
				return packedCSSProperty;
			};

			StylePropertyEnhancer.prototype.fromCSSPropertyBuffer = function(propBuffer) {
				
			};

			StylePropertyEnhancer.prototype.toCSSOM = function(propBuffer) {
				
			};

			StylePropertyEnhancer.prototype.fromCSSOM = function(propBuffer) {
				
			};

















			module.exports = StylePropertyEnhancer;
			},{"src/editing/CSSPropertyBuffer":73,"src/parsers/css-parser_forked":70}],82:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor StyleRule
			 
			 * @param {ruleIdx} number 
			 * @param {styleObj} Style
			 * @returns self
			 */

			var Style = _dereq_('src/editing/Style');
			var AdvancedAttributesList = _dereq_('src/editing/SplittedAttributes');

				
			var StyleRule = function(ruleIdx, rawRule) {
				this.objectType = 'StyleRule';
				
				if (Object.prototype.toString.call(rawRule) !== '[object Object]') {
					console.warn(this.objectType, 'rawRule isn\'t an Object or no ruleIdx given : ' + rawRule + '. Returning...');
					return;
				}
				
				this.ruleIdx = ruleIdx || 0;
				this.selector = rawRule.selector;
				this.hasOverride = false;
				this.styleIFace = new Style(null, this.selector, this.getAttributes(rawRule));
				this.attrIFace  = this.styleIFace.attrIFace;
				this.additionalAttributes = {};
				this.strRule = this.attrIFace.linearize();
			};
			StyleRule.prototype = {};
			StyleRule.fromAdvancedStyleAttributes = function(ruleIdx, selector, attrIFace) {
				var styleRule = new StyleRule(ruleIdx, {selector : selector});
				styleRule.styleIFace.attrIFace = attrIFace;
				styleRule.attrIFace = attrIFace;
				styleRule.strRule = styleRule.attrIFace.linearize();
				return styleRule;
			};

			StyleRule.prototype.getAttributes = function(rawRule) {
				var attr = {};
				for (let prop in rawRule) {
					if (prop !== 'selector')
						attr[prop] = rawRule[prop];
				}
				return attr;
			};

			StyleRule.prototype.setAttributes = function(rawRule) {
				for (let prop in rawRule) {
					if (prop !== 'selector')
						this.attrIFace.set(prop, rawRule[prop]);
				}
			};

			StyleRule.prototype.cloneAttributes = function() {
				return (new AdvancedAttributesList(this.attrIFace.getAllDefinedAttributes())).getAllDefinedAttributes();
			};

			StyleRule.prototype.populateStrRule = function() {
				this.strRule = this.styleIFace.linearize();
			};

			StyleRule.prototype.getAttr = function(attr) {
				return this.attrIFace.get(attr);
			};

			StyleRule.prototype.setAttr = function(attr, value) {
				this.attrIFace.set(attr, value);
			};

			StyleRule.prototype.safeMergeAttributes = function(rawRule) {
				for (let prop in rawRule) {
					this.additionalAttributes[prop] = rawRule[prop];
				}
				this.hasOverride = true;
			};

			StyleRule.prototype.applyAdditionnalStyleAsOverride = function() {
				if (this.hasOverride) {
					for (let attr in this.additionalAttributes) {
						this.attrIFace.set(attr, this.additionalAttributes[attr]);
					}
				}
			};












			module.exports = StyleRule;
			},{"src/editing/SplittedAttributes":79,"src/editing/Style":80}]},{},[1])(1)
			});


			},{}],3:[function(_dereq_,module,exports){
			"use strict";
			module.exports = (function() {return {"_configurationFiles":["_arias&glyphsDef.js"],"_recentlyCreated":[],"basics":["AbstractSlider","ClickableComponent","GenericTitledPanelComponent","InnerReactiveComponent","KeyValuePairComponent","MultisetAccordionComponent","SimpleText","SimpleTextReplace","SpecializedTypedListComponent","Tooltip","TypedListComponent","VisibleStateComponent"],"forms":["BoolSelector","CancelButton","CheckboxInput","ColorPickerSliderInput","EMailInput","Fieldset","FormComponent","LabelledButton","NamedButton","PasswordInput","SubmitButton","TextInput","TextareaInput","UsernameInput"],"specials":["SourceCodeViewCleanerRouter.js","SourceCodeViewRouter.js","SourceCodeViewRouterForExternalSources.js","SourceInjectionUtility.js"],"tables":["ExtensibleTable"],"tabs":["ComponentTabPanel","TabPanel"],"trees":[],"utilities":["SpinnerComponent"],"validators":["apipasswordInputDef.js","emailInputDef.js","filenameInputDef.js","mapcontentInputDef.js","passwordInputDef.js","usernameInputDef.js"]};})();
			},{}],4:[function(_dereq_,module,exports){
			"use strict";
			module.exports = (function() {return ["apipasswordInputDef.js","emailInputDef.js","filenameInputDef.js","mapcontentInputDef.js","passwordInputDef.js","usernameInputDef.js"];})();
			},{}],5:[function(_dereq_,module,exports){
			module.exports = "\"use strict\";\n/* PrismJS 1.29.0\r\nhttps://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript */\r\ncode[class*=language-],pre[class*=language-]{color:#ccc;background:0 0;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:0;min-width: 1080px;width: 0px; overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d; color : #f6f7f9;}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#999}.token.punctuation{color:#ccc}.token.attr-name,.token.deleted,.token.namespace,.token.tag{color:#e2777a}.token.function-name{color:#6196cc}.token.boolean,.token.function,.token.number{color:#f08d49}.token.class-name,.token.constant,.token.property,.token.symbol{color:#f8c555}.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{color:#cc99cd}.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{color:#7ec699}.token.entity,.token.operator,.token.url{color:#67cdcc}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:green}\r\n";

			},{}],6:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @interface labelledButtonInterface
			*/


			const {TypeManager} = _dereq_('formantCore');
			const {TemplateFactory} = _dereq_('formantCore');
			var inter = function() {
				this.createEvent('clicked_ok');
			};
			inter.prototype.objectType = 'labelledButtonInterface';


			inter.prototype.queueAsync = function(objectType) {
				return new TypeManager.TaskDefinition({
								type : 'viewExtend',
								task : function(definition) {
									var hostDef = definition.getHostDef();
									var nodeDef = TypeManager.createComponentDef({
											host : TypeManager.createComponentDef({
												UID : 'labelledButtonInterface'
											}, null, 'hostOnly'),
											members : [
												TypeManager.createComponentDef({
													nodeName : 'label',
													attributes : [
			//											{title : 'label-for-' + (hostDef.attributes.getObjectValueByKey('id') || '')},
														{htmlFor : 'input-' + (hostDef.attributes.getObjectValueByKey('id') || '')},
			//											{innerHTML : '<span class="label">' + (hostDef.attributes.getObjectValueByKey('label') || '') + '</span>'}
													],
													templateNodeName : 'span'
												}, null, 'hostOnly'),
												TypeManager.createComponentDef({
													nodeName : 'button',
													attributes : [
														{id : 'input-' + (hostDef.attributes.getObjectValueByKey('id') || '')},
														{title : (hostDef.attributes.getObjectValueByKey('id') || '')},
														{role : 'button'},
														hostDef.attributes.findObjectByKey('name')
													]
												}, null, 'hostOnly')
											]
									}, 'labelledButtonInterface_' + this._defUID + '_' +  + this._defComposedUID, 'rootOnly');
								
									this.addReactiveMemberViewFromFreshDef(definition, nodeDef);
								}
				});
			};

			inter.prototype.registerEvents = function() {
				this.view.subViewsHolder.memberAt(1).addEventLListener('mouseDown', this.handleClickEvent.bind(this));
			};

			inter.prototype.handleClickEvent = function(e) {
				this.trigger('clicked_ok', {self_key : this._key, self_UID : this._UID});
			};


			module.exports = inter;
			},{"formantCore":2}],7:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @interface labelledTextInputInterface
			*/


			const {TypeManager} = _dereq_('formantCore');
			const {TemplateFactory} = _dereq_('formantCore');
			var inter = function() {};
			inter.prototype.objectType = 'labelledTextInputInterface';

			inter.prototype.queueAsync = function(objectType) {
				return new TypeManager.TaskDefinition({
								type : 'viewExtend',
								task : function(definition) {
									var hostDef = definition.getHostDef();
									var nodeDef = TypeManager.createComponentDef({
											host : TypeManager.createComponentDef({
												UID : 'labelledInputInterface'
											}, null, 'hostOnly'),
											members : [
												TypeManager.createComponentDef({
													nodeName : 'label',
													attributes : [
														{title : 'label-for-' + (hostDef.attributes.getObjectValueByKey('id') || '')},
														{htmlFor : 'input-' + (hostDef.attributes.getObjectValueByKey('id') || '')},
														{innerHTML : '<span class="label">' + (hostDef.attributes.getObjectValueByKey('label') || '') + '</span>'}
													]
												}, null, 'hostOnly'),
												TypeManager.createComponentDef({
													nodeName : 'input',
													attributes : [
														{type : 'checkbox'},
														{id : 'input-' + (hostDef.attributes.getObjectValueByKey('id') || '')},
														{title : (hostDef.attributes.getObjectValueByKey('id') || '')},
														hostDef.attributes.findObjectByKey('name'),
														hostDef.attributes.findObjectByKey('placeholder')
													]
												}, null, 'hostOnly')
											]
									}, 'labelledInputInterface_' + this._defUID + '_' +  + this._defComposedUID, 'rootOnly');
			//						console.log(hostDef, hostDef.attributes.findObjectByKey('name'));
			//						console.log('LABELLEDIPUT', nodeDef.members);
									
			//						if (hostDef.attributes.getObjectValueByKey('label').match(/password/i)) {
			//							nodeDef.members[1].attributes.type = 'password';			
			//						}
									this.addReactiveMemberViewFromFreshDef(definition, nodeDef);
								}
				});
			};

			module.exports = inter;
			},{"formantCore":2}],8:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @interface labelledInputInterface
			*/


			const {TypeManager} = _dereq_('formantCore');
			const {TemplateFactory} = _dereq_('formantCore');
			var inter = function() {};
			inter.prototype.objectType = 'labelledInputInterface';


			inter.prototype.queueAsync = function(objectType) {
				return new TypeManager.TaskDefinition({
								type : 'viewExtend',
								task : function(definition) {
									var hostDef = definition.getHostDef();
									var nodeDef = TypeManager.createComponentDef({
											host : TypeManager.createComponentDef({
												UID : 'labelledInputInterface'
											}, null, 'hostOnly'),
											members : [
												TypeManager.createComponentDef({
													nodeName : 'label',
													attributes : [
														{title : 'label-for-' + (hostDef.attributes.getObjectValueByKey('id') || '')},
														{htmlFor : 'input-' + (hostDef.attributes.getObjectValueByKey('id') || '')},
														{innerHTML : '<span class="label">' + (hostDef.attributes.getObjectValueByKey('label') || '') + '</span>'}
													]
												}, null, 'hostOnly')
											]
									}, 'labelledInputInterface_' + this._defUID + '_' +  + this._defComposedUID, 'rootOnly');
								
									// There is a real probability for the default definition of the Component to have added - "one" - node:
									// 		e.g. an input, a button, a select, even maybe an invisible checkbox
									if (this.view.subViewsHolder.memberViews.length === 1)
										this.view.subViewsHolder.immediateUnshiftMemberView(nodeDef.members[0]);
									else
										this.view.subViewsHolder.addMemberViewFromDef(nodeDef.members[0]);
								}
				});
			};

			module.exports = inter;
			},{"formantCore":2}],9:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @interface labelledTextInputInterface
			*/


			const {TypeManager} = _dereq_('formantCore');const {TemplateFactory} = _dereq_('formantCore');
			var inter = function() {};
			inter.prototype.objectType = 'labelledTextInputInterface';

			inter.prototype.queueAsync = function(objectType) {
				return new TypeManager.TaskDefinition({
								type : 'viewExtend',
								task : function(definition) {
									var hostDef = definition.getHostDef();
									var nodeDef = TypeManager.createComponentDef({
											host : TypeManager.createComponentDef({
												UID : 'labelledInputInterface'
											}, null, 'hostOnly'),
											members : [
												TypeManager.createComponentDef({
													nodeName : 'label',
													attributes : [
														{title : 'label-for-' + (hostDef.attributes.getObjectValueByKey('id') || '')},
														{htmlFor : 'input-' + (hostDef.attributes.getObjectValueByKey('id') || '')},
														{innerHTML : '<span class="label">' + (hostDef.attributes.getObjectValueByKey('label') || '') + '</span>'}
													]
												}, null, 'hostOnly'),
												TypeManager.createComponentDef({
													nodeName : 'input',
													attributes : [
														{id : 'input-' + (hostDef.attributes.getObjectValueByKey('id') || '')},
														{title : (hostDef.attributes.getObjectValueByKey('id') || '')},
														hostDef.attributes.findObjectByKey('name'),
														hostDef.attributes.findObjectByKey('placeholder')
													]
												}, null, 'hostOnly')
											]
									}, 'labelledInputInterface_' + this._defUID + '_' +  + this._defComposedUID, 'rootOnly');
			//						console.log(hostDef, hostDef.attributes.findObjectByKey('name'));
			//						console.log('LABELLEDIPUT', nodeDef.members);
									
			//						if (hostDef.attributes.getObjectValueByKey('label').match(/password/i)) {
			//							nodeDef.members[1].attributes.type = 'password';			
			//						}
									this.addReactiveMemberViewFromFreshDef(definition, nodeDef);
								}
				});
			};

			module.exports = inter;
			},{"formantCore":2}],10:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @interface labelledTextInputInterface
			*/


			const {TypeManager} = _dereq_('formantCore');
			const {TemplateFactory} = _dereq_('formantCore');
			var inter = function() {};
			inter.prototype.objectType = 'labelledTextareaInputInterface';

			inter.prototype.queueAsync = function(objectType) {
				return new TypeManager.TaskDefinition({
								type : 'viewExtend',
								task : function(definition) {
									var hostDef = definition.getHostDef();
									var nodeDef = TypeManager.createComponentDef({
											host : TypeManager.createComponentDef({
												UID : 'labelledTextareaInterface'
											}, null, 'hostOnly'),
											members : [
												TypeManager.createComponentDef({
													nodeName : 'label',
													attributes : [
														{title : 'label-for-' + (hostDef.attributes.getObjectValueByKey('id') || '')},
														{htmlFor : 'input-' + (hostDef.attributes.getObjectValueByKey('id') || '')},
														{innerHTML : '<span class="label">' + (hostDef.attributes.getObjectValueByKey('label') || '') + '</span>'}
													]
												}, null, 'hostOnly'),
												TypeManager.createComponentDef({
													nodeName : 'textarea',
													attributes : [
														{id : 'input-' + (hostDef.attributes.getObjectValueByKey('id') || '')},
														{title : (hostDef.attributes.getObjectValueByKey('id') || '')},
														hostDef.attributes.findObjectByKey('name'),
														hostDef.attributes.findObjectByKey('placeholder'),
														{rows : '25'},
														{cols : '73'}
													]
												}, null, 'hostOnly')
											]
									}, 'labelledInputInterface_' + this._defUID + '_' +  + this._defComposedUID, 'rootOnly');
			//						console.log(hostDef, hostDef.attributes.findObjectByKey('name'));
			//						console.log('LABELLEDIPUT', nodeDef.members);
									
			//						if (hostDef.attributes.getObjectValueByKey('label').match(/password/i)) {
			//							nodeDef.members[1].attributes.type = 'password';			
			//						}
									this.addReactiveMemberViewFromFreshDef(definition, nodeDef);
								}
				});
			};

			module.exports = inter;
			},{"formantCore":2}],11:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @interface locallySavableInputInterface
			*/
			const {TemplateFactory} = _dereq_('formantCore');

			var inter = function() {};
			inter.prototype.objectType = 'locallySavableInputInterface';

			inter.prototype.queueAsyncRegister = function(objectType) {
				return new TemplateFactory.TaskDefinition({
								type : 'lateBinding',
								// requires that the component has a "savableStore" property
								task : function() {
									if (!this.savableStore)
										return;
									
									const DOMInputName = this.view.getMasterNode().title;
									this.savableStore.addValue(DOMInputName);
										
									const self = this;
									this.addEventListener('update', function(e) {
										self.savableStore.update(DOMInputName, self.getValue());
									});
								}
				});
			};



			module.exports = inter;
			},{"formantCore":2}],12:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @interface orientationDependantInterface
			*/

			var inter = function() {};

			inter.prototype.resize = function() {
				var self = this;
				setTimeout(function() {
			//		if (self.options.orientation === 'horizontal')
			//			self.cashElem.width(self.container.width());
			//		else
			//			self.cashElem.height(self.container.height());
				}, 64);
			};

			module.exports = inter;
			},{}],13:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @interface typedInputInterface
			*/
			const {TypeManager} = _dereq_('formantCore');
			const {TemplateFactory} = _dereq_('formantCore');
			const {Registries} = _dereq_('formantCore');
			var ariasAndGlyphs = _dereq_('src/UI/categories/_configurationFiles/_arias&glyphsDef');

			var inter = function() {};
			inter.prototype.objectType = 'typedInputInterface';

			inter.prototype.queueAsync = function(objectType) {
				return new TypeManager.TaskDefinition({
								type : 'viewExtend',
								task : function(definition) {
									
									if ((this.view.subViewsHolder.memberViews.length > 1
											&& Registries.caches.attributes.getItem(this.view.subViewsHolder.memberViews[1]._defUID).getObjectValueByKey('type'))
												|| definition.getHostDef().attributes.getObjectValueByKey('type'))
										return;
									
									switch(definition.getHostDef().attributes.getObjectValueByKey('title')) {
										
										case 'E-Mail' :
											Registries.caches.attributes.getItem(this.view.subViewsHolder.memberViews[1]._defUID)
												.push(new TypeManager.attributesModel({type : 'email'}));
											break;
										case 'Password' :
										case 'API-Password' : 
											Registries.caches.attributes.getItem(this.view.subViewsHolder.memberViews[1]._defUID)
												.push(new TypeManager.attributesModel({type : 'password'}));
											break;
										case 'Submit' : 
											Registries.caches.attributes.getItem(this.view._defUID)
												.push(new TypeManager.attributesModel({type : 'button'}));
											break;
										case 'Cancel' :
											break;
										case 'Username' :
										default :
											Registries.caches.attributes.getItem(this.view.subViewsHolder.memberViews[1]._defUID)
												.push(new TypeManager.attributesModel({type : 'text'}));
											break;
									}
								}
				});
			};

			inter.prototype.setArias = function() {
				var arias = ariasAndGlyphs.getArias(this.objectType);
				for(var aria in arias) {
					this.view.getMasterNode().setAttribute(aria, arias[aria]);
				}
			};

			module.exports = inter;
			},{"formantCore":2,"src/UI/categories/_configurationFiles/_arias&glyphsDef":15}],14:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @interface validableInterface
			*/

			const {TemplateFactory, integratedLibs, validators} = _dereq_('formantCore');
			const Validate = integratedLibs.Validate;

			//var validators = require('src/_buildTools/_UIpackages')(null, null).validatorList;
			//for (let validator in validators) {
			//	validators[validator] = require(validators[validator]);
			//}


			//Mnemonic (caution, more files may have been added since this example call)
			//var validators = {
			//		emailInput : require('src/UI/validators/emailInputDef'),
			//		passwordInput : require('src/UI/validators/passwordInputDef'),
			//		usernameInput : require('src/UI/validators/usernameInputDef')
			//}


			var inter = function() {
				this.defaultValidator;
				this.validator;
			};
			inter.prototype.constructor = inter;
			inter.prototype.objectType = 'validableInterface';

			inter.prototype.queueAsync = function(objectType) {
				return new TemplateFactory.TaskDefinition({
					type : 'viewExtend',
					task : function(definition) {
							// Set validator name depending on input name
							this.defaultValidator = definition.getHostDef().attributes.findObjectByKey('name').name + 'Input';
							this.validator = validators[this.defaultValidator];
							
							this.decorateAttrBasedOnValidators(definition);
					},
					index : 0
				});
			};

			inter.prototype.queueAsyncRegister = function() {
				// TODO : Optimize : using a closure on "self" may be faster than "binding" the event callback
				return new TemplateFactory.TaskDefinition({
					type : 'lateBinding',
					task : function(definition) {
							// From the MDN : "Depending on the kind of element being changed and the way the user interacts with the element, the change event fires at a different moment:
							// When the element loses focus after its value was changed: for elements where the user's interaction is typing rather than selection, such as a <textarea> or the text, search, url, tel, email, or password types of the <input> element."
							this.view.subViewsHolder.memberViews[1].getMasterNode().addEventListener('change', function(e) {
								
								var validationRes = Validate.single(e.target.value, this.validator);
			//					console.log(validationRes, this.validator)
								this.streams['valid'].value = (validationRes === undefined ? true : null);
								if (e.target.name === 'username') {
									this.streams['errors'].value = [this.validator.presence.message.slice(1)];
									// TODO : CSS Fade Out here.
									this.forceShowTooltip();	// we can't update once with null, then update another time with some content : the browser is deboucing the prop changes...
								}
								else
									this.streams['errors'].value = (validationRes || null);
							}.bind(this));
							
							if(Object.keys(this.validator).length === 1 && this.validator.presence && this.validator.presence.allowEmpty === true)
								this.streams.valid.value = true;
						}
				});;
			};

			inter.prototype.decorateAttrBasedOnValidators = function(definition) {
				var attributes = definition.getHostDef().attributes;
				
				if (!this.validator || !this.validator.presence || this.validator.presence.allowEmpty === true) {
					attributes.findObjectByKey('placeholder').placeholder = attributes.getObjectValueByKey('placeholder').replace(/Please/, 'You may');
					attributes.findObjectByKey('label').label = attributes.getObjectValueByKey('label') + ' :';
				}
				else if (this.validator.presence && this.validator.presence.allowEmpty === false)
					attributes.findObjectByKey('label').label = attributes.getObjectValueByKey('label') + '* :';
			};

			module.exports = inter;
			},{"formantCore":2}],15:[function(_dereq_,module,exports){
			"use strict";
			module.exports = (function(){
				return {
					getArias : function(objType){
						switch(objType) {
							case 'FormComponent' :
								return {
									role : 'form'
								};
							case 'BoolSelector' :
								return {
									role : 'checkbox'
								};
							case 'UsernameInput' :
							case 'PasswordInput' :
							case 'EMailInput' :
							default :
								return {
									
								};
						}
					},
					getGlyphs : function(objType){
						switch(objType) {
							case 'UsernameInput' :
							case 'PasswordInput' :
							case 'EMailInput' :
								return {
									glyphNotvalid : 'glyphicon-ban-circle',
									glyphValid : 'glyphicon-ok'
								};
							case 'picto_Delete' :
								return {
									glyphDelete : 'glyphicon-circle-remove'
								};
							case 'DropZoneOverlay' :
								return {
									glyphHandlesvideo : 'icofont-file-video'
								};
							case 'VaritextButtonWithPictoFirst' :
								return {
									glyphExpanded : 'glyphicon-arrow-down',
									glyphNotexpanded : 'glyphicon-arrow-right',
									glyphBranchintree : 'icofont-box',
									glyphNodeintree : 'icofont-listing-number',
									glyphSortable : 'icofont-sort',
									glyphSortedasc : 'icofont-square-up',
									glyphSorteddesc : 'icofont-square-down',
								};
							case 'SelectInputArrow' : 
								return {
									glyphExpanded : 'glyphicon-arrow-down',
									glyphNotexpanded : 'glyphicon-arrow-right',
								};
							default :
								return null;
						}
					}
				}
			})();
			},{}],16:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def abstractSliderHandleDef
			 * @isGroup true
			 * 
			 */


			const {TypeManager, CreateStyle} = _dereq_('formantCore');


			var abstractSliderHandleDef = function(uniqueID, options, model) {
					
				// Some CSS stuff (styles are directly injected in the main def below)
				var styles = [
			/*@CSSifySlot*/
					];
				
				
				var handleDef = TypeManager.createComponentDef({
					nodeName : 'slider-handle',
					attributes : [
						{id : 'slider-handle-' + TypeManager.UIDGenerator.newUID()}
					]
				}, null, 'hostOnly');
				
				return handleDef;
			};

			abstractSliderHandleDef.__factory_name = 'abstractSliderHandleDef';
			module.exports = abstractSliderHandleDef;
			},{"formantCore":2}],17:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def GenericTitledPanelComponent
			 * @isGroup true
			 * 
			 * @CSSify styleName : GenericTitledPanelComponentHost
			 * @CSSify styleName : GenericTitledPanelComponentTemplate
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */
			const {TypeManager, CreateStyle} = _dereq_('formantCore');


			var GenericTitledPanelComponentDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */
				
				
				return TypeManager.createComponentDef({
							host : TypeManager.createComponentDef({
								type : 'GenericTitledPanelComponent',
								nodeName : 'generic-panel',
			//					states : [
			//						{unfolded : undefined} 
			//					]
								/**@CSSifyStyle componentStyle : GenericTitledPanelComponentHost */
							}),
							members : [
								TypeManager.createComponentDef({
									type : 'ComponentWithView',
									nodeName : 'header'
								}),
								TypeManager.createComponentDef({
									type : 'ComponentWithView',
									nodeName : 'div',
									attributes : [
										{className : 'accordion_panel_shadow'}
									]
								}),
								TypeManager.createComponentDef({
									host : TypeManager.createComponentDef({
										type : 'CompoundComponent',
										nodeName : 'ul'
									})
								}, null, 'rootOnly'),
								TypeManager.createComponentDef({
									type : 'ComponentWithView',
									nodeName : 'div',
									attributes : [
										{className : 'accordion_panel_inverse_shadow'}
									]
								}),
								TypeManager.createComponentDef({
									type : 'ComponentWithView',
									nodeName : 'footer',
								})
							]
						}, null, 'rootOnly');
			};

			module.exports = GenericTitledPanelComponentDef;
			},{"formantCore":2}],18:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def MultisetAccordionComponent
			 * @isGroup true
			 * 
			 * @CSSify styleName : MultisetAccordionComponentHost/true
			 * @CSSify styleName : MultisetAccordionComponentSet/true
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */
			const {TypeManager, CreateStyle} = _dereq_('formantCore');


			var MultisetAccordionComponentDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */
				
				// The ("almost" ?) only def that CAN'T cache is the def of a pseudo-slot:
				// 		There's a quasi-systematic risk that at some point that def is specialized:
				// 		=> it's not a default def, it's combined with the "concrete" def, and so mutable.
				var setDef = TypeManager.createComponentDef({
						type : 'ComponentWithView',
						nodeName : 'accordion-set',
						states : [
							{"accordion-set" : undefined}
						]/**@CSSify Style componentStyle : MultisetAccordionComponentSet */
				});
				
				
				var moduleDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
						type : 'MultisetAccordionComponent',
						nodeName : 'reactive-accordion'/**@CSSify Style componentStyle : MultisetAccordionComponentHost */
					}),
					lists : [
						TypeManager.createComponentDef({
							type : 'ComponentList',
							template : setDef
						})
					]
				}, null, 'rootOnly');

				return moduleDef;
				
			//	return {
			//		setDef : setDef//,
			//		moduleDef : moduleDef	
			//	};
			};

			module.exports = MultisetAccordionComponentDef;
			},{"formantCore":2}],19:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def SpecializedTypedListComponent
			 * @isGroup true
			 * 
			 * @CSSify styleName : SpecializedTypedListComponentHost
			 * @CSSify styleName : SpecializedTypedListComponentTemplate
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */
			const {TypeManager, CreateStyle} = _dereq_('formantCore');


			var SpecializedTypedListComponentDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */
				
				
				var moduleDef = TypeManager.createComponentDef({
							nodeName : 'specialized-typedlist'
			//				,
			//				props : [
			//					{updateChannel : undefined}
			//				],
			//				reactOnSelf : [
			//					{
			//						from : 'updateChannel',
			//						cbOnly : true,
			//						subscribe : function(value) {
			//							this.typedSlots[0].resetLength();
			//							
			////							console.log(value);
			//							if (Array.isArray(value)) {
			////								console.log('isArray', value);
			//								// we got at least a set, but maybe a group of sets
			//								if (Array.isArray(value[0])) {
			////									console.log('memberIsArray', value[0]);
			//									// it's a group
			//									if (value[0][0]._id) {
			////										console.log('firstMemberHasId', value[0][0]);
			//										// we found the effective obj
			//										var items = value.map(function(set) {
			//											return this.typedSlots[0].newItem(set);
			//										}, this);
			////										console.log(items);
			//										this.typedSlots[0].pushApply(items);
			//										
			////										console.log(this);
			//										
			////										console.log(this.typedSlots[0]);
			//									}
			//								}
			//								else {
			////									console.log(this.typedSlots[0]);
			//									// it's a single set
			//									this.typedSlots[0].push(
			//										this.typedSlots[0].newItem(value)
			//									);
			//								}
			//							}
			//							else
			//								console.warn(this.objectType, 'set-viewers are meant to instanciate lists, but value received was not an array');
			//						}
			//					}
			//				]
							/**@CSSify Style componentStyle : SpecializedTypedListComponentHost */
					});
				
				return moduleDef;
			};

			module.exports = SpecializedTypedListComponentDef;
			},{"formantCore":2}],20:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def SpecializedTypedListComponentSlots
			 * @isGroup false
			 * 
			 * @CSSify styleName : SpecializedTypedListComponentHeader
			 * @CSSify styleName : SpecializedTypedListComponentSection
			 * @CSSifyTheme themeName : basic-light
			 */
			const {TypeManager, CreateStyle} = _dereq_('formantCore');


			var SpecializedTypedListComponentSlotsDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */ 		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */
				
				var headerDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
						type : 'VaritextButton',
						nodeName : 'header',
						states : [
							{highlighted : undefined}
						],
						props : [
							{headerTitle : undefined}
						],
						reactOnSelf : [
							{
								from : 'headerTitle',
								to : 'content'
							}
						]/**@CSSifyStyle componentStyle : SpecializedTypedListComponentHeader */
					}, null, 'hostOnly')
				}, null, 'rootOnly');
				
				var sectionDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
						type : 'ComponentWithView',
						nodeName : 'pseudoslot-panel'/**@CSSifyStyle componentStyle : SpecializedTypedListComponentSection */
					}, null, 'hostOnly')
				}, null, 'rootOnly');
				
				
				
				return {
					headerDef : headerDef,
					sectionDef : sectionDef
				};
			};

			module.exports = SpecializedTypedListComponentSlotsDef;
			},{"formantCore":2}],21:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def tooltip
			 * 
			 * @CSSify styleName : TooltipHost
			 * 
			 */

			const {TemplateFactory, CreateStyle} = _dereq_('formantCore');

			var tooltipDef = function(uniqueID, options) {
				/**@CSSify DEBUG */		// Remove the whitespace between @CSSify and the word DEBUG to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var moduleDef = TemplateFactory.createDef({
					host : TemplateFactory.createDef({
						nodeName : 'input-tooltip',
			//			attributes : [
			//				{className : 'tooltip'}
			//			],
						states : [
							{hidden : true}
						],
						props : [
							{contentToList : null}
						],
						reactOnParent : [
							{
								from : 'valid',
								to : 'hidden',
							}
						],
						targetSlotIndex : 1,
						templateNodeName : 'p'/**@CSSifyStyle componentStyle : TooltipHost */
					}),
					members : [
						TemplateFactory.createDef({
							nodeName : 'header'
						}),
						TemplateFactory.createDef({
							nodeName : 'section'
						})
					]
				});

				return moduleDef;
			};

			tooltipDef.__factory_name = 'tooltipDef';
			module.exports = tooltipDef;
			},{"formantCore":2}],22:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def TypedListComponent
			 * @isGroup true
			 * 
			 * @CSSify styleName : TypedListComponentHost
			 * @CSSify styleName : TypedListComponentTemplate
			 * 
			 */
			const {TypeManager, CreateStyle} = _dereq_('formantCore');


			var TypedListComponentDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */
				

				var moduleDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
			//			type : 'ComposedCompnent', 				// this is implicit, as we call the CompoundComponent ctor in the TabPanel ctor
						nodeName : 'typed-list'/**@CSSify Style componentStyle : TypedListComponentHost */
					})
				}, null, 'rootOnly');
				
				return moduleDef;
			};

			module.exports = TypedListComponentDef;
			},{"formantCore":2}],23:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def TypedListComponentSlots
			 * @isGroup false
			 * 
			 * @CSSify styleName : TypedListComponentHeader
			 * @CSSify styleName : TypedListComponentSection
			 */
			const {TypeManager, CreateStyle} = _dereq_('formantCore');


			var TypedListComponentSlotsDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */ 		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */
				

				
				var hostedComponentDef = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
						type : 'ComponentWithView',
						nodeName : 'hosted-component',
						props : [
							{labelTitle : undefined}
						]/**@CSSify Style componentStyle : TypedListComponentSection */
					}, null, 'hostOnly')
				}, null, 'rootOnly');
				
				
				
				return {
					hostedComponentDef : hostedComponentDef
				};
			};

			module.exports = TypedListComponentSlotsDef;
			},{"formantCore":2}],24:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def boolSelector
			 * 
			 * @CSSify hostName : boolSelector
			 * @CSSifyRule rule : host flexBoxRow/flexCenter
			 * @CSSifyRule rule : track inlineBlock/lineHeightEquiv/doubleLineWidthEquiv/ridge/bigRoundedCorner/border/inset_F
			 * @CSSifyRule rule : handle spanHandle/bigRoundedCorner/flatLightButton_F
			 */

			const {TypeManager, CreateStyle} = _dereq_('formantCore');

			var boolSelectorDef = function(uniqueID, options) {
				var context = this.context,
					selectorOptions = {
						handleClassName : 'handle',
						orientation : 'horizontal',		// this are default values
						min : 0,						// this are default values
						max : 100,						// this are default values
						step : 100, 					// step represents the "length" of a step, in the min/max interval
						constrainsToInner : true 		// constrainsToInner restricts min and max computation to half the width of the handle on the "max" side
														// min alignement by setting a negative margin on the handle should be handled at component level
					},
					options = Object.assign(options, selectorOptions),
					styles,
					styleDef;
					styles = [
			/*@CSSifySlot*/
					];
					
				styleDef = CreateStyle('bool_selector', {id : '', className : 'bool_selector_handle'}, styles);
				var moduleDef = TypeManager.createComponentDef({
					UID : 'dummy',
					sWrapper : styleDef.sWrapper
				});

				return moduleDef;
			};

			boolSelectorDef.__factory_name = 'boolSelectorDef';
			module.exports = boolSelectorDef;
			},{"formantCore":2}],25:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def CancelButton
			 * 
			 * @CSSify styleName : CancelButtonHost
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */

			const {TypeManager, CreateStyle} = _dereq_('formantCore');

			var cancelButtonDef = function(uniqueID, options) {
				/**@CSSify DEBUG */		// Remove the whitespace between @CSSify and the word DEBUG to trigger debug infos
				
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var hostStyles = [

				{
					"selector": ":host",
					"background": "#90989e",
					"color": "#EAEAEA",
					"font": "inherit",
					"padding": "12px 21px",
					"boxSizing": "border-box",
					"maxWidth": "300px",
					"minWidth": "122px",
					"marginBottom": "5px",
					"borderColor": "#383838 #303030 #303030 #383838",
					"cursor": "pointer",
					"textAlign": "center"
				}

				];
				var hostStylesUseCache = {
					use : undefined,
					nameInCache : 'CancelButtonHostStyles'
				};
				
				return TypeManager.createComponentDef({
					nodeName : 'dummy',
							sWrapper : CreateStyle(
									hostStylesUseCache.use ? hostStylesUseCache.nameInCache : null,
									hostStyles
								)
				}); 
			};

			module.exports = cancelButtonDef;
			},{"formantCore":2}],26:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def textInput
			 * 
			 * @CSSify styleName : CheckboxInputHost
			 * 
			 */

			const {TypeManager, CreateStyle} = _dereq_('formantCore');

			var textInputDef = function(uniqueID, options) {
				/**@CSSify DEBUG */		// Remove the whitespace between @CSSify and the word DEBUG to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var hostStyles = [

				{
					"selector": ":host",
					"display": "flex"
				},
				{
					"selector": "label",
					"display": "inline-block",
					"width": "332px"
				},
				{
					"selector": "input",
					"color": "#EAEAEA",
					"background": "#1a2327",
					"alignSelf": "flex-end",
					"border": "1px solid #444"
				}

				];
				var hostStylesUseCache = {
					use : undefined,
					nameInCache : 'CheckboxInputHostStyles'
				};
				
				// DUMMY Def: only used to assign a sWrapper anda sOverride prop to the "real" def in the component
				var textInputDef = TypeManager.createComponentDef({
					UID : 'dummy',
							sWrapper : CreateStyle(
									hostStylesUseCache.use ? hostStylesUseCache.nameInCache : null,
									hostStyles
								)
				}); 
				return textInputDef;
			};

			module.exports = textInputDef;
			},{"formantCore":2}],27:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def Fieldset
			 * @isGroup true
			 * 
			 * @CSSify styleName : FieldsetHost
			 * @CSSify styleName : FieldsetSlots
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */
			const {TypeManager, CreateStyle, Components} = _dereq_('formantCore');


			var FieldsetDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// Remove the whitespace between @CSSify and the word DEBUG to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */
				
				return TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
						host : TypeManager.createComponentDef({
							nodeName : 'fieldset',
				//			props : [							// hint: we have to choose between a text by default, or a text always defined by the implementation
				//				{slotsTextContent : undefined}
				//			],
							reactOnSelf : [
									{
										from : 'slotsTextContent',
										cbOnly : true,
										subscribe : Components.ComponentWithReactiveText.prototype.setContentFromArrayOnEachMemberView
									}
							]
							// Fieldset isn't a wustom element, then it cannot be styled
							/**@CSSify Style componentStyle : FieldsetHost */
						}, null, 'hostOnly'),
						members : [
							TypeManager.createComponentDef({
								nodeName : 'legend',
							}, null, 'hostOnly')
						]
					}, null, 'rootOnly')
				}, null, 'rootOnly');
				
			};

			module.exports = FieldsetDef;
			},{"formantCore":2}],28:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def formComponent
			 * @CSSify styleName : FormComponentHost
			 * @CSSifyTheme themeName : basic-light
			 */

			const {TemplateFactory, CreateStyle} = _dereq_('formantCore');

			var formComponentDef = function(uniqueID, options) {
				/**@CSSify DEBUG */		// Remove the whitespace between @CSSify and the word DEBUG to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var hostStyles = [

				{
					"selector": ":host",
					"display": "flex",
					"flexDirection": "column",
					"boxSizing": "border-box",
					"height": "100%",
					"padding": "7px"
				},
				{
					"selector": ":host section:nth-child(3)",
					"display": "flex",
					"flexDirection": "column",
					"alignItems": "end",
					"paddingTop": "5px"
				},
				{
					"selector": ":host section:nth-child(2)",
					"display": "flex",
					"flexDirection": "column",
					"width": "407px",
					"height": "100%"
				},
				{
					"selector": ":host fieldset",
					"width": "375px",
					"border": "1px solid #383838",
					"boxSizing": "border-box"
				}

				];
				var hostStylesUseCache = {
					use : undefined,
					nameInCache : 'FormComponentHostStyles'
				};
				
				return TemplateFactory.createDef({
					host : TemplateFactory.createDef({
						isCompound : true,
						nodeName : 'smart-form',
							sWrapper : CreateStyle(
									hostStylesUseCache.use ? hostStylesUseCache.nameInCache : null,
									hostStyles
								)
						// Reminder
			//			states : [
			//				{action : ''}
			//			]
						
					}),
					subSections : [
						TemplateFactory.createDef({
							host : TemplateFactory.createDef({
								type : 'ComponentWithView',
								nodeName : 'section'
							})
						}),
						TemplateFactory.createDef({
							host : TemplateFactory.createDef({
								type : 'ComponentWithView',
								nodeName : 'section'
							})
						})
					],
					members : [
						// Sample code
			//			TemplateFactory.createDef({
			//				host : TemplateFactory.createDef({
			//					type : 'SubmitButton',
			//					nodeName : 'button',
			//					section : 1,
			//					props : [
			//						{text : 'Open File'}
			//					]
			//				})
			//			}),
			//			TemplateFactory.createDef({
			//				host : TemplateFactory.createDef({
			//					type : 'CancelButton',
			//					nodeName : 'button',
			//					section : 1,
			//					props : [
			//						{text : 'Cancel'}
			//					]
			//				})
			//			})
					]
				}); 
			};

			module.exports = formComponentDef;
			},{"formantCore":2}],29:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def LabelledButton
			 * @isGroup true
			 * 
			 * @CSSify styleName : LabelledButtonHost
			 * @CSSify styleName : LabelledButtonTemplate
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */
			const {TypeManager, CreateStyle} = _dereq_('formantCore');


			var LabelledButtonDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// DEBUG must be stuck (RED and bold) to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */
				
				var moduleDef = TypeManager.createComponentDef({
						host : TypeManager.createComponentDef({
								type : 'LabelledButton',
								nodeName : 'labelled-button',
								subscribeOnChild : [
									{
										on : 'clicked_ok',
										subscribe : function(e) {
											this.trigger('update', e.data);
										}
									}
								]/**@CSSify Style componentStyle LabelledButtonHost */
						})
					}, null, 'rootOnly');
				
				return moduleDef;
			};

			module.exports = LabelledButtonDef;
			},{"formantCore":2}],30:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def NamedButton
			 * @isGroup true
			 * 
			 * @CSSify styleName : NamedButtonHost
			 * @CSSify styleName : NamedButtonTemplate
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */
			const {TemplateFactory, CreateStyle} = _dereq_('formantCore');


			var NamedButtonDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// Remove the whitespace between @CSSify and the word DEBUG to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */
				
				var moduleDef = TemplateFactory.createDef({
					host : TemplateFactory.createDef({
						nodeName : 'named-button'/**@CSSifyStyle componentStyle : NamedButtonHost */
					})
				});
				
				return moduleDef;
			};

			module.exports = NamedButtonDef;
			},{"formantCore":2}],31:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def SubmitButton
			 * 
			 * @CSSify styleName : SubmitButtonHost
			 * @CSSify styleName : SubmitButtonTemplate
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */

			const {TypeManager, CreateStyle} = _dereq_('formantCore');

			var submitButtonDef = function(uniqueID, options) {
				/**@CSSify DEBUG */		// Remove the whitespace between @CSSify and the word DEBUG to trigger debug infos
				
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var hostStyles = [

				{
					"selector": ":host",
					"background": "#0c849e",
					"color": "#EAEAEA",
					"font": "inherit",
					"padding": "12px 21px",
					"boxSizing": "border-box",
					"maxWidth": "300px",
					"minWidth": "122px",
					"marginBottom": "5px",
					"borderColor": "#383838 #303030 #303030 #383838",
					"cursor": "pointer",
					"textAlign": "center"
				}

				];
				var hostStylesUseCache = {
					use : undefined,
					nameInCache : 'SubmitButtonHostStyles'
				};
				
				return TypeManager.createComponentDef({
					nodeName : 'dummy',
							sWrapper : CreateStyle(
									hostStylesUseCache.use ? hostStylesUseCache.nameInCache : null,
									hostStyles
								)
				}); 
			};

			submitButtonDef.__factory_name = 'submitButtonDef';
			module.exports = submitButtonDef;
			},{"formantCore":2}],32:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def textInput
			 * 
			 * @CSSify styleName : TextInputHost
			 * 
			 */

			const {TemplateFactory, CreateStyle} = _dereq_('formantCore');

			var textInputDef = function(uniqueID, options) {
				/**@CSSify DEBUG */		// Remove the whitespace between @CSSify and the word DEBUG to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var hostStyles = [

				{
					"selector": ":host",
					"display": "block"
				},
				{
					"selector": "label",
					"display": "inline-block",
					"width": "157px"
				},
				{
					"selector": "input",
					"color": "#EAEAEA",
					"background": "#1a2327",
					"height": "25px",
					"width": "345px",
					"border": "1px solid #444"
				},
				{
					"selector": ":host textarea",
					"resize": "none",
					"backgroundColor": "#283235",
					"color": "#C7C7C7"
				},
				{
					"selector": "tooltip"
				},
				{
					"selector": ":host(:not([valid])) input, :host(:not([valid])) textarea",
					"outline": "2px ridge Orange"
				}

				];
				var hostStylesUseCache = {
					use : undefined,
					nameInCache : 'TextInputHostStyles'
				};
				
				// DUMMY Def: only used to assign a sWrapper anda sOverride prop to the "real" def in the component
				var textInputDef = TemplateFactory.createHostDef({
					UID : 'dummy',
							sWrapper : CreateStyle(
									hostStylesUseCache.use ? hostStylesUseCache.nameInCache : null,
									hostStyles
								)
				}); 
				return textInputDef;
			};

			module.exports = textInputDef;
			},{"formantCore":2}],33:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def extensibleTableDef
			 * @isGroup true
			 * 
			 * @CSSify styleName : ExtensibleTableHost
			 * @CSSify styleName : ExtensibleTablePseudoSlot
			 */


			//var TypeManager = require('src/core/TypeManager');
			const {TemplateFactory, CreateStyle} = _dereq_('formantCore');

			var extensibleTableDef = function(uniqueID, options, model) {
					
				/**@CSSify DEBUG */		// Remove the whitespace between @CSSify and the word DEBUG to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var hostStyles = [

				{
					"selector": ":host",
					"background": "#012B39",
					"borderRadius": "0.25em",
					"borderCollapse": "collapse",
					"margin": "1em"
				},
				{
					"selector": "th",
					"borderBottom": "1px solid #364043",
					"color": "#E2B842",
					"fontSize": "0.85em",
					"fontWeight": "600",
					"padding": "0.5em 1em",
					"textAlign": "left",
					"cursor": "pointer"
				},
				{
					"selector": "td",
					"color": "#fff",
					"fontWeight": "400",
					"padding": "0.65em 1em"
				},
				{
					"selector": ".disabled td",
					"color": "#4F5F64"
				},
				{
					"selector": "tbody tr",
					"transition": "background 0.25s ease"
				},
				{
					"selector": "tbody tr:hover",
					"background": "#014055"
				},
				{
					"selector": "tbody tr[selected]",
					"backgroundColor": "#115065"
				}

				];
				var hostStylesUseCache = {
					use : undefined,
					nameInCache : 'ExtensibleTableHostStyles'
				};
				
				
				const slotDef = TemplateFactory.createHostDef({
			//		host : TemplateFactory.createDef({
						type : 'ComponentWithView',
						nodeName : 'tbody',
						states : [
							{'slot-id' : undefined},
							{'is-embedded' : undefined},
							{'position' : undefined}
							
						],
						subscribeOnChild : [
							{
								on : 'update',
								subscribe : function(e) {
									if (e.bubble)
										this.trigger('update', e.data, true);
								}
							}
						]/**@CSSify Style componentStyle : ExtensibleTablePseudoSlot */
			//		}, null, 'hostOnly')
				});
				
				const moduleDef = TemplateFactory.createDef({
					host : TemplateFactory.createHostDef({
			//			type : 'ComposedCompnent', 				// this is implicit, as we call the CompoundComponent ctor in the TabPanel ctor
						nodeName : 'extensible-table',
						props : [
							{updateChannel : undefined}
						],
							sWrapper : CreateStyle(
									hostStylesUseCache.use ? hostStylesUseCache.nameInCache : null,
									hostStyles
								)
					}),
					lists : [
						TemplateFactory.createDef({
							type : 'ComponentList',
							template : slotDef
						})
					]
				});
				
				return moduleDef;
			};

			module.exports = extensibleTableDef;
			},{"formantCore":2}],34:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def extensibleTableSlots
			 * @isGroup false
			 * 
			 * 
			 */


			//var TypeManager = require('src/core/TypeManager');
			const {TemplateFactory, CreateStyle, Components} = _dereq_('formantCore');


			var extensibleTableSlotsDef = function(uniqueID, options, model) {
					
				/**@CSSify DEBUG */		// Remove the whitespace between @CSSify and the word DEBUG to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */
				
				var headerDef = TemplateFactory.createHostDef({
					type : 'SimpleText',		// VaritextButtonWithPictoFirst
					nodeName : 'th',
					// this is a big hack of shit (should be an attribute, but not... should be a "DOM" attribute... -> setAttribute(). TODO: fix after re-implementation of _arias&glyphs)
					states : [
						{sortable : 'sortable'},
						{sortedasc : undefined},
						{sorteddesc : undefined}
					],
					props : [
						{headerTitle : undefined}
					],
					reactOnSelf : [
						{
							from : 'headerTitle',
							to : 'content'
						}
					]
				});
				
				var rowDef = TemplateFactory.createHostDef({
					type : 'ComponentWith_FastReactiveText',
					nodeName : 'tr',
					props : [
						{rowContentAsArray : undefined}
					],
					reactOnSelf : [
							{
								from : 'rowContentAsArray',
								cbOnly : true,
								subscribe : Components.ComponentWith_FastReactiveText.prototype.setContentFromArrayOnEachMemberView
							}
					]
				});
				
				// tdDef MUST be a view
				var tdDef = TemplateFactory.createDef({
					nodeName : 'td',
				});
				
				
				
				return {
					headerDef : headerDef,
					rowDef : rowDef,
					tdDef : tdDef
				};
			};

			module.exports = extensibleTableSlotsDef;
			},{"formantCore":2}],35:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def TabPanel
			 * @isGroup true
			 * 
			 * @CSSify styleName : TabPanelHost
			 * @CSSify styleName : TabPanelSlotTemplate
			 * @CSSifyTheme themeName : basic-light
			 * 
			 */
			const {TemplateFactory, CreateStyle} = _dereq_('formantCore');

			const tabPanelDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */		// Remove the whitespace between @CSSify and the word DEBUG to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */

				var templateStyles = [

				{
					"selector": ":host tab-header",
					"boxSizing": "border-box",
					"backgroundColor": "#282828",
					"minWidth": "140px",
					"width": "fit-content",
					"height": "44px",
					"border": "1px solid #383838",
					"borderRadius": "7px 0px 0px 7px",
					"borderWidth": "1px 1px 0px 1px",
					"padding": "7px",
					"textAlign": "center",
					"cursor": "pointer"
				},
				{
					"selector": ":host",
					"backgroundColor": "#282828"
				},
				{
					"selector": ":host tab-header[highlighted]",
					"backgroundColor": "#555"
				}

				];
				var templateStylesUseCache = {
					use : undefined,
					nameInCache : 'TabPanelSlotTemplateStyles'
				};

				var hostStyles = [

				{
					"selector": ":host pseudo-slot",
					"display": "block",
					"boxSizing": "border-box",
					"minHeight": "44px"
				},
				{
					"selector": ":host  pseudo-slot:nth-child(2)",
					"display": "flex"
				},
				{
					"selector": ":host  pseudo-slot:nth-child(3)",
					"border": "1px inset #444",
					"borderRadius": "7px"
				}

				];
				var hostStylesUseCache = {
					use : undefined,
					nameInCache : 'TabPanelHostStyles'
				};
				
				const slotDef = TemplateFactory.createDef({
					host : TemplateFactory.createDef({
						type : 'ComponentWithView',
						nodeName : 'pseudo-slot',
						states : [
							{'slot-id' : undefined},
							{'is-embedded' : undefined},
							{'position' : undefined}
							
						],
						subscribeOnChild : [
							{
								on : 'update',
								subscribe : function(e) {
									if (e.bubble)
										this.trigger('update', e.data, true);
								}
							}
						],
							sWrapper : CreateStyle(
									templateStylesUseCache.use ? templateStylesUseCache.nameInCache : null,
									templateStyles
								)
					})
				});
				
				const moduleDef = TemplateFactory.createDef({
					host : TemplateFactory.createDef({
						nodeName : 'smart-tabs',
						isCompound : true,
							sWrapper : CreateStyle(
									hostStylesUseCache.use ? hostStylesUseCache.nameInCache : null,
									hostStyles
								)
					}),
					lists : [
						TemplateFactory.createDef({
							type : 'ComponentList',
							template : slotDef
						})
					]
				});
				
				return moduleDef;
			};

			module.exports = tabPanelDef;
			},{"formantCore":2}],36:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @def TabPanelSlots
			 * @isGroup false
			 * 
			 * @CSSify styleName : TabPanelHeader
			 * @CSSify styleName : TabPanelSection
			 * @CSSifyTheme themeName : basic-light
			 */
			const {TemplateFactory, CreateStyle} = _dereq_('formantCore');


			var TabPanelSlotsDef = function(uniqueID, options, model) {
				/**@CSSify DEBUG */ 	// Remove the whitespace between @CSSify and the word DEBUG to trigger debug infos
					
				// Some CSS stuff (styles are directly injected in the main def below)
				/**@CSSifySlots placeholder */
				
				const headerDef = TemplateFactory.createHostDef({
					type : 'NamedButton',
					nodeName : 'tab-header',
					states : [
						{role : "heading"},
						{highlighted : undefined}
					],
					props : [
						{headerTitle : undefined}
					],
					reactOnSelf : [
						{
							from : 'headerTitle',
							to : 'content'
						}
					]/**@CSSify Style componentStyle : TabPanelHeader */
				});
				
				const sectionDef = TemplateFactory.createHostDef({
					type : 'ComponentWithView',
					nodeName : 'tab-panel'/**@CSSifyStyle componentStyle : TabPanelSection */
				});
				
				return {
					headerDef : headerDef,
					sectionDef : sectionDef
				};
			};

			module.exports = TabPanelSlotsDef;
			},{"formantCore":2}],37:[function(_dereq_,module,exports){
			"use strict";
			/**
			* @constructor SpinnerComponent
			*/


			const {TemplateFactory, Components} = _dereq_('formantCore');
			//var CoreTypes = require('src/core/CoreTypes');

			//var spinnerStyle = require('src/UI/defs/extraStyles/spinner');

			var SpinnerComponent = function(def, containerDOMId, automakeable) {
				Components.ComponentWithHooks.apply(this, arguments);
				this.objectType = 'SpinnerComponent';
			};

			SpinnerComponent.prototype = Object.create(Components.ComponentWithHooks.prototype);
			SpinnerComponent.prototype.objectType = 'SpinnerComponent';

			SpinnerComponent.prototype.createDefaultDef = function() {
				return TemplateFactory.createDef({
							host : TemplateFactory.createDef({
								nodeName : 'loading-spinner',
								attributes : [
									{id : 'loading_spinner_3'},
									{className : 'spinner ' + this._defUID}
								],
								states : [
									{hidden : undefined}
								],
								reactOnParent : [
									{
										from : 'spinnerOn',
										to : 'hidden',
										map : function(val) {return val ? null : 'hidden';}
									}
								],
			//					sWrapper : CreateStyle('spinner_style', null, spinnerStyle).sWrapper // should be entirely rewritten (source has been lost)
							}, null, 'hostOnly'),
							members : [
								TemplateFactory.createDef({
									nodeName : 'div'
								}, null, 'hostOnly'),
								TemplateFactory.createDef({
									nodeName : 'div'
								}, null, 'hostOnly'),
								TemplateFactory.createDef({
									nodeName : 'div'
								}, null, 'hostOnly')
							]
					}, 'SpinnerComponent', 'rootOnly');
			};



			module.exports = SpinnerComponent;

			},{"formantCore":2}],38:[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @indexer UIpackageList
			 * 
			 */

			const fs  = _dereq_('fs');

			module.exports = function(grunt, options) {
				var categories = {
					all : ['basics', 'forms', 'tables', 'tabs', 'trees', 'specials']
				};
				
				options = options || {};
			//	var componentLibPath =options.rootPath + 'jsComponentLib/src/';
				
				// UI package : "minimal" by default
				options.UIpackage = options.UIpackage;
				var UIpackageList = {};
				options.UIpackageList = [];
				// Validators : -all- (guess : we'll only validate "text" inputs... TODO : what should be validated ? "editable node" content (from a char table))
				var UIvalidatorList = {};
				options.UIvalidatorsList = [];
				var packageTree = {}, validatorTree = [];
				
				if (grunt && fs.existsSync(grunt.config.data.rootPath + 'jsComponentLib/src/')) {
					var packageFolders = grunt.file.expand({cwd : grunt.config.data.rootPath + 'jsComponentLib/src/UI/categories/'}, '*!(_Base|copy)');
					var validatorTree = grunt.file.expand({cwd : grunt.config.data.rootPath + 'jsComponentLib/src/UI/categories/validators/'}, '*');
					
					// list 1 level deeper to get filenames
					packageFolders.forEach(function(folder, key) {
						packageTree[folder] = grunt.file.expand({cwd : grunt.config.data.rootPath + 'jsComponentLib/src/UI/categories/' + folder + '/'}, '*');
					});
					
					// write categories paths as a flat 2 dimensional array, validators as a 1 dimensional array 
					var prefix = 'module.exports = (function() {return ',
						postfix = ';})();';
					
					grunt.file.write(grunt.config.data.pathToComponentLib + '/cache/UIpackagesFolderCache.js', prefix + JSON.stringify(packageTree) + postfix);
					grunt.file.write(grunt.config.data.pathToComponentLib + '/cache/UIvalidatorsFileCache.js', prefix + JSON.stringify(validatorTree) + postfix);
				}
				// if (fs.existsSync('cache/UIpackagesFolderCache.js') && fs.existsSync('cache/UIvalidatorsFileCache.js'))
				else  {
					packageTree = _dereq_('cache/UIpackagesFolderCache');
					validatorTree = _dereq_('cache/UIvalidatorsFileCache');
				}
				
				// remove file extension, concatenate the file paths from the desired folders
				// prepare the returned list (indexed on file names) to be used by the requiring code
				// and the exported list (basic array of path) to be used by browserify (automatic inclusion in the bundle)
				var path;
				
				// some files call this helper to get the list of validators and pass null as UIpackage
				if (typeof categories[options.UIpackage] !== 'undefined') {
					categories[options.UIpackage].forEach(function(dir) {
						// case of empty folders
						if (!packageTree[dir])
							return;
						options.UIpackageList = options.UIpackageList.concat(
								packageTree[dir].map(function(item) {
									path = '';
									if (item.indexOf('.js') === -1)
										path = '/' + item + '.js';
									item = item.replace(/\.\w{2,3}$/, '');
									path = 'src/UI/categories/' + dir + '/' + item + path;
									UIpackageList[item] = path;
									return path;
									})
							);
					});
				}
				
				validatorTree = validatorTree.map(function(file) {
					path = 'src/UI/categories/validators/' + file.slice(0, -3);
					UIvalidatorList[file.slice(0, -6)] = path;
					return path;
				});
				options.UIvalidatorsList = validatorTree;

				if (!grunt)
					return {packageList : UIpackageList, validatorList : UIvalidatorList};

			};
			},{"cache/UIpackagesFolderCache":3,"cache/UIvalidatorsFileCache":4,"fs":40}],39:[function(_dereq_,module,exports){
			"use strict";
			const {App, Components, ReactiveDataset, ComponentSet} = _dereq_('formantCore');

			// Components relying on core components
			Components.CompositorComponent.createAppLevelExtendedComponent();

			//temporary tests during the re-organisation of the component-lib
			if (typeof App.componentTypes.KeyValueList !== 'undefined')
				App.componentTypes.KeyValueList.prototype.render = function(DOMNodeId) {
					new App.DelayedDecoration(DOMNodeId, this, this.listTemplate.getHostDef());
				};
			if (typeof App.componentTypes.ScrollSlider !== 'undefined')
				App.componentTypes.ScrollSlider.prototype.render = function(DOMNodeId) {
					new App.DelayedDecoration(DOMNodeId, this);
				};
			if (typeof App.componentTypes.SlidingPanel !== 'undefined')
				App.componentTypes.SlidingPanel.prototype.render = function(DOMNodeId) {
					new App.DelayedDecoration(DOMNodeId, this);
				};
			if (typeof App.componentTypes.ImgPlaceholder !== 'undefined')
				App.componentTypes.ImgPlaceholder.prototype.render = function(DOMNodeId) {
					new App.DelayedDecoration(DOMNodeId, this);
				};
			},{"formantCore":2}],40:[function(_dereq_,module,exports){

			},{}],"src/UI/categories/basics/AbstractSlider/AbstractSlider.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor Slider
			 * A free implementation of the main design choices of the jQuery Slider Widget
			 * 
			*/
			const {TemplateFactory, CoreTypes, Components, appConstants} = _dereq_('formantCore');
			const orientationDependantInterface = _dereq_('src/UI/_interfaces/orientationDependantInterface');

			const createAbstractSliderHandleDef = _dereq_('src/UI/categories/basics/AbstractSlider/componentDefs/abstractSliderHandleDef');

			/**
			 * @constructor Slider
			 * 
			*/
			const Slider = function(definition, parentView, parent) {
			//	console.log('componentWithHooks');
				Components.ComponentWithHooks.call(this, definition, parentView, parent);
				this.objectType = 'Slider';
				
				this.limitExcursionToInner = typeof this.limitExcursionToInner !== 'undefined' ? this.limitExcursionToInner : false;
				this.orientation = typeof this.orientation !== 'undefined' ? this.orientation : 'horizontal';
				this.min = typeof this.min !== 'undefined' ? this.min : 0;
				this.max = typeof this.max !== 'undefined' ? this.max : 100;
				this.step = typeof this.step !== 'undefined' ? this.step : 1;
				
				this._clickOffset = {left : 0, top : 0};
				this.trackElementSize = {h : 0, w : 0};
				this.trackElementOffset = {left : 0, top : 0};
				this.handleSize = {h : 0, w : 0};
				this._mouseMove = this._mouseMove.bind(this);
			//	console.log('slider-handle');
				// INTERESTING HACK :)
				// A memberView in a memberView (works in the ctor but should also be handled smoothly in an interface)
				this.view.subViewsHolder.memberViews.push(new CoreTypes.ComponentSubView(createAbstractSliderHandleDef(), this.view.subViewsHolder.memberViews[1]));
				
				this._value = this.min;
				this.handleElem;
				
				this._mouseStarted = false;
				this._mouseMovement = false;
				
				this.onDOMReadyInit();
				
			//	var self= this;
			//	setTimeout(function() {
			//		console.log(self.trackElementSize, self.trackElementOffset);
			//		setTimeout(function() {
			//			console.log(self.trackElementSize, self.trackElementOffset);
			//		}, 1024);
			//	}, 1024);
				
			};

			Slider.prototype = Object.create(Components.ComponentWithHooks.prototype);
			Slider.prototype.objectType = 'Slider';


			//	Slider = Factory.CoreModule.addInterface(Slider, orientationDependantInterface);

			Slider.prototype.createEvents = function(def, container) {
				this.createEvent('slide');
				this.createEvent('change');
				this.createEvent('start');
				this.createEvent('stop');
			};

			Slider.prototype.createDefaultDef = function() {
				return TemplateFactory.createDef({
					host : TemplateFactory.createDef({
						nodeName : 'smooth-slider'
					}),
					members : [
						TemplateFactory.createDef({
							nodeName : 'button',
							attributes : [
								{id : 'slider-action-up-' + TemplateFactory.UIDGenerator.newUID()},
								{className : 'triangle-left'}
							]
						}),
						TemplateFactory.createDef({
							nodeName : 'div',
							attributes : [
								{id : 'slider-track-' + TemplateFactory.UIDGenerator.newUID()},
								{className : 'slider-horizontal'}
							]
						}),
						TemplateFactory.createDef({
							nodeName : 'button',
							attributes : [
								{id : 'slider-action-down-' + TemplateFactory.UIDGenerator.newUID()},
								{className : 'triangle-right'}
							]
						})
					]
				});
			};

			Slider.prototype.onDOMReadyInit = function() {
				var self = this;
				var inter = setInterval(function() {
					
					if (self.view.getWrappingNode() && self.view.getWrappingNode().querySelector('div')) {
						clearInterval(inter);
						// ResizeObserver needs to be configured depending on the observed box : content-box (the default), and border-box.
						appConstants.resizeObserver.observe(self.view.getWrappingNode().querySelector('div'), self.getTrackDimensions.bind(self));
						appConstants.resizeObserver.observe(self.view.getWrappingNode().querySelector('slider-handle'), self.getHandleDimensions.bind(self));
					}
				}, 512);
			};

			Slider.prototype.getTrackDimensions = function(e) {
				this.trackElementSize = {w : e.data.boundingBox.w, h : e.data.boundingBox.h};
				this.trackElementOffset.left = this.view.getWrappingNode().querySelector('div').offset().left;
				this.trackElementOffset.top = this.view.getWrappingNode().querySelector('div').offset().top;
				
				if (this.handleSize.w) {
					this._maxPixelsInner = {
							x : this.trackElementSize.w - this.handleSize.w - 1,
							y : this.trackElementSize.h - this.handleSize.h - 1
					};
				}
				appConstants.resizeObserver.unobserve(this.view.getWrappingNode().querySelector('div'));
			};

			/**
			 * @param e {resizeObserver_event}
			 */
			Slider.prototype.getHandleDimensions = function(e) {
				this.handleElem = this.view.getWrappingNode().querySelector('slider-handle');

				var marginTop;
				this.handleSize = {
					w : e.data.boundingBox.w,
					h : e.data.boundingBox.h,
					marginTop : parseInt((marginTop = window.getComputedStyle(this.handleElem).marginTop) ? marginTop.match(/\d+/)[0] : 0, 10)
				};
				
				
				if (this.trackElementSize.w) {
					this._maxPixelsInner = {
							x : this.trackElementSize.w - this.handleSize.w - 1,
							y : this.trackElementSize.h - this.handleSize.h - 1
					};
					
					if (this.orientation === 'vertical' && this.handleSize.h > this.trackElementSize.h) {
						// TODO: define an algo and update the sWrapper
						// And solve the arbitrary lineHeight, as there are issues with tiny ranges onMouseWheel
						this.handleSize.h = this.handleSize.h / 4;
						this.handleElem.style.height = (this.handleElem.clientHeight / 4).toString() + 'px';
					}
					else if (this.orientation === 'horizontal' && this.handleSize.w > this.trackElementSize.w) {
						// TODO: define an algo and update the sWrapper
						// And solve the arbitrary lineHeight, as there are issues with tiny ranges onMouseWheel
						this.handleSize.w = this.handleSize.w / 4;
						this.handleElem.style.width = (this.handleElem.clientWidth / 4).toString() + 'px';
					}
				}
				appConstants.resizeObserver.unobserve(this.view.getWrappingNode().querySelector('slider-handle'));
			};

			Slider.prototype._valueMin = function() {
				return this.min;
			};

			Slider.prototype._valueMax = function() {
				return this.max;
			};

			Slider.prototype.registerClickEvents = function() {
				var self = this;
			//	this.view.getWrappingNode().querySelector('div').addEventListener('mousedown', function(e) {
			//		e.stopPropagation();
			//		self._mouseStarted = true;
			//	});
				this.view.getWrappingNode().querySelector('slider-handle').addEventListener('mousedown', function(e) {
					e.stopPropagation();
					self._mouseStarted = true;
					self.handleElem.setAttribute('hovered', 'hover');
					self._mouseDown(e);
				});
				document.addEventListener('mouseup', this._mouseUp.bind(this));
			};

			Slider.prototype._mouseDown = function(e) {
				this._clickOffset = this._getClickOffset(e);
				document.addEventListener('mousemove', this._mouseMove);
			};

			Slider.prototype._mouseUp = function(e) {
				if (this._mouseStarted)
					document.removeEventListener('mousemove', this._mouseMove);
				this._mouseStarted = false;
				this._mouseMovement = false;
				this.handleElem.removeAttribute('hovered');
			};

			Slider.prototype._mouseMove = function(e) {
				this._mouseMovement = true;
				var position = {x: e.pageX, y: e.pageY};
				
				var mouseNormValue = this._normValueFromMouse(position, this._clickOffset);
				// Then we must round and trim to get a value that is "centered" on a step, and included, as a safety, in the range
				// the Component must reflect after that the "numeric" value of the slider
				this._value = this._trimAlignValue(mouseNormValue);

				this.setPosition();
					
				if (this._mouseStarted) {
					this.trigger('change', this._value);
					this.trigger('slide', {value : this._value});
				}
			};

			Slider.prototype._normValueFromMouse = function(position, _clickOffset) {
				var pixelTotal,
					pixelMouse,
					percentMouse,
					valueTotal,
					valueMouse;

				

				if (this.orientation === "horizontal") {
					pixelTotal = this.trackElementSize.w;
					pixelMouse = position.x - this.trackElementOffset.left - _clickOffset.left;
				} else {
					pixelTotal = this.trackElementSize.h;
					pixelMouse = position.y - this.trackElementOffset.top - _clickOffset.top;
				}
				
				// Passing by, we handle the slider/checkbox difference: the checkbox must constrain its values inside the range, handle size included.
				// And we shall have to repeat the operation as we need the value to go till _maxValue, so we correct the percentage based on pixels
				// but we need to make the  inverse operation in setPosition() to constrain the % offset in the inner range
				var maxExcursionPercent = this.limitExcursionToInner
											? (this.orientation === 'horizontal'
												? (this.trackElementSize.w - this.handleSize.w) / this.trackElementSize.w 
													: (this.trackElementSize.h - this.handleSize.h) / this.trackElementSize.h) 
														: 1;
				
				percentMouse = pixelMouse / (pixelTotal * maxExcursionPercent);
				if ( percentMouse > 1 ) {
					percentMouse = 1;
				}
				else if ( percentMouse < 0 ) {
					percentMouse = 0;
				}
				
				// implement uncommented if used as a power slider
			//	if ( this.orientation === "vertical" ) {
			//		percentMouse = 1 - percentMouse;
			//	}
				
				valueTotal = this._valueMax() - this._valueMin();
				valueMouse = this._valueMin() + percentMouse * valueTotal;
				return valueMouse;
			};

			Slider.prototype._trimAlignValue = function(val) {
				if ( val <= this._valueMin() ) {
					return this._valueMin();
				}
				if ( val >= this._valueMax() ) {
					return this._valueMax();
				}
				
				var step = (this.step > 0) ? this.step : 1,
					valModStep = (val - this._valueMin()) % step,
					alignValue = val - valModStep;

				if (Math.abs(valModStep) * 2 >= step) {
					alignValue += (valModStep > 0) ? step : (-step);
				}
				
				return alignValue;
			};

			Slider.prototype._getClickOffset = function(event) {
				
				var offset = this.handleElem.offset();
				return {
						left: event.pageX - offset.left - this.handleSize.w / 2,
						top: (event.pageY - offset.top + this.handleSize.marginTop)
				};
			};

			Slider.prototype.setPosition = function() {

				var maxExcursionPercent = this.limitExcursionToInner
											? (this.orientation === 'horizontal'
												? (this.trackElementSize.w - this.handleSize.w) * 100 / this.trackElementSize.w 
													: (this.trackElementSize.h - this.handleSize.h) * 100 / this.trackElementSize.h) 
														: 100;

				if (this.orientation === 'horizontal')
					this.handleElem.style.left = ((this._value - this._valueMin()) * maxExcursionPercent / (this._valueMax() - this._valueMin())).toString() + '%';// * (this.trackElementSize.w - this.handleSize.w);
				else
					this.handleElem.style.top = ((this._value - this._valueMin()) * maxExcursionPercent / (this._valueMax() - this._valueMin())).toString() + '%';// * (this.trackElementSize.w - this.handleSize.w);
			};






















				
			module.exports = Slider;
			},{"formantCore":2,"src/UI/_interfaces/orientationDependantInterface":12,"src/UI/categories/basics/AbstractSlider/componentDefs/abstractSliderHandleDef":16}],"src/UI/categories/basics/ClickableComponent/ClickableComponent.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor ClickableComponent
			 * @author : Kinegraphx
			*/

			const {TemplateFactory, Components} = _dereq_('formantCore');

			//var createClickableComponentHostDef = require('src/UI/categories/_recentlyCreated/ClickableComponent/componentDefs/ClickableComponentHostDef');
			//var createClickableComponentSlotsDef = require('src/UI/categories/_recentlyCreated/ClickableComponent/componentDefs/ClickableComponentSlotsDef');

			const ClickableComponent = function(definition, parentView, parent) {
				Components.CompositorComponent.call(this, definition, parentView, parent);
				this.objectType = 'ClickableComponent';
			};
			ClickableComponent.prototype = Object.create(Components.CompositorComponent.prototype);
			ClickableComponent.prototype.objectType = 'ClickableComponent';
			ClickableComponent.prototype.extendsCore = 'CompoundComponentWithHooks';

			//ClickableComponent.defaultDef = {
			//	nodeName : 'div',
			//	attributes : [],
			//	states : [],
			//	props : [],
			//	reactOnParent : [],
			//	reactOnSelf : []
			//}

			ClickableComponent.prototype.createDefaultDef = function() {
			//	return createClickableComponentHostDef();
			};

			ClickableComponent.prototype.createEvents = function() {
			//	console.log('createEvents');
				this.createEvent('clicked_ok');
				this.createEvent('dblClicked_ok');
				this.createEvent('clicked_refused');
			};

			ClickableComponent.prototype.registerClickEvents = function() {
			//	console.log('registerClickEvents');
				// Click event listener & canAct management
				this.eventPayload = {
					originalEvent : new Event('mouseDown'),		// Dummy val => TODO: benchmark this on huge lists 
															// (we could have set it to null, but we thought avoiding realocation could improve perfs)
					self : this,
					key : this._key
				};
				this.clickHandler = this.handleClickEvent.bind(this);
				this.dblClickHandler = this.handledDblClickEvent.bind(this);
				this.view.getMasterNode().addEventListener('mousedown', this.clickHandler);
				this.view.getMasterNode().addEventListener('dblclick', this.dblClickHandler);
			};

			ClickableComponent.prototype.handleClickEvent = function(e) {
				var self = this;
				
				e.stopPropagation();
				
				if (self.command && self.command.act !== null)
					var canActQuery = self.command.act();
				else {
					this.eventPayload.originalEvent = e;
					self.trigger('clicked_ok', this.eventPayload);
					return;
				}
				
				canActQuery.then(
					function(queryResult) {
						self.trigger('clicked_ok', self.eventPayload);
					},
					function(queryResult) {
						self.view.getMasterNode()['disabled'] = 'disabled';
						setTimeout(function() {
							self.view.getMasterNode()['disabled'] = null;
						}, 255);
						self.trigger('clicked_refused', self.eventPayload);
					}
				);
			};

			ClickableComponent.prototype.handledDblClickEvent = function(e) {
				var self = this;
				e.stopPropagation();
				
				if (self.command && self.command.act !== null)
					var canActQuery = self.command.act();
				else {
					this.eventPayload.originalEvent = e;
					self.trigger('dblClicked_ok', this.eventPayload);
					return;
				}
				
				canActQuery.then(
					function(queryResult) {
						self.trigger('dblClicked_ok', this.eventPayload);
					},
					function(queryResult) {
						self.view.getMasterNode()['disabled'] = 'disabled';
						setTimeout(function() {
							self.view.getMasterNode()['disabled'] = null;
						}, 255);
						self.trigger('clicked_refused', this.eventPayload);
					}
				);
			};

			module.exports = ClickableComponent;
			},{"formantCore":2}],"src/UI/categories/basics/GenericTitledPanelComponent/GenericTitledPanelComponent.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor GenericTitledPanelComponent
			*/

			const {TemplateFactory, Components, appConstants} = _dereq_('formantCore');

			var createGenericTitledPanelComponentHostDef = _dereq_('src/UI/categories/basics/GenericTitledPanelComponent/componentDefs/GenericTitledPanelComponentHostDef');
			//var createGenericTitledPanelComponentSlotsDef = require('src/UI/categories/basics/GenericTitledPanelComponent/componentDefs/GenericTitledPanelComponentSlotsDef');

			var GenericTitledPanelComponent = function(definition, parentView, parent) {
				var def = (definition.getGroupHostDef() && definition.getGroupHostDef().type) 
					? definition 
						: createGenericTitledPanelComponentHostDef();
						
				Components.CompositorComponent.call(this, def, parentView, parent);
				this.objectType = 'GenericTitledPanelComponent';
			};
			GenericTitledPanelComponent.prototype = Object.create(Components.CompositorComponent.prototype);
			GenericTitledPanelComponent.prototype.objectType = 'GenericTitledPanelComponent';
			GenericTitledPanelComponent.prototype.extendsCore = 'CompoundComponent';

			//GenericTitledPanelComponent.defaultDef = {
			//	nodeName : 'div',
			//	attributes : [],
			//	states : [],
			//	props : [],
			//	reactOnParent : [],
			//	reactOnSelf : []
			//}

			//GenericTitledPanelComponent.prototype.createDefaultDef = function() {
			//	return 
			//}

			//GenericTitledPanelComponent.prototype.getBoundingBox = function() {
			//	var self = this;
			//	
			//	return new Promise(function(resolve, reject) {
			//		var inter = setInterval(function() {
			//			if (self.view.getMasterNode()) {
			//				clearInterval(inter);				
			//				appConstants.resizeObserver.observe(self.view.getMasterNode(), self.storeBoundingBox.bind(self, resolve));
			//			}
			//		}, 512);
			//	});
			//}
			//GenericTitledPanelComponent.prototype.storeBoundingBox = function(resolve, e) {
			//	resolve(this.boundingBox = e.data.boundingBox);
			//}






			module.exports = GenericTitledPanelComponent;
			},{"formantCore":2,"src/UI/categories/basics/GenericTitledPanelComponent/componentDefs/GenericTitledPanelComponentHostDef":17}],"src/UI/categories/basics/InnerReactiveComponent/InnerReactiveComponent.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor InnerReactiveComponent
			 * This is an abstract implementation
			*/


			const {TemplateFactory, Components} = _dereq_('formantCore');



			var EachOnTheBeachComponent = function(definition, parentView, parent) {
				Components.ComponentWithReactiveText.call(this, definition, parentView, parent);
				this.objectType = 'EachOnTheBeachComponent';
			};
			EachOnTheBeachComponent.prototype = Object.create(Components.ComponentWithReactiveText.prototype);
			EachOnTheBeachComponent.prototype.objectType = 'EachOnTheBeachComponent';

			EachOnTheBeachComponent.prototype.createDefaultDef = function() {
				// The "contentToList/errors/what you want" stream only calls a callback : this.updateTargetView, and pass it the array of nodes to create and append to the declared "slot"
				return TemplateFactory.createHostDef({
					UID : 'ZZ',
					templateNodeName : 'p',
					targetSlotIndex : 1,
					reactOnParent : [
						{
							cbOnly : true,
							from : 'errors',
							subscribe : this.updateTargetView
						}
					]
				});
			};

			EachOnTheBeachComponent.prototype.updateTargetView = function(contentArray) {
				if (!Array.isArray(contentArray))
					return;
				
				if (this.shallUpdate(contentArray)) {
					this.setContentFromCacheOnTargetSubview();
					this.trigger('update', this.targetSubViewContentCache);
				}
				else if (!contentArray.length)
					this.reset();
			};

			EachOnTheBeachComponent.prototype.shallUpdate = function(contentArray) {
				if (Array.isArray(contentArray) && contentArray.length)
					return this.dirtyCheckTargetViewContent(contentArray);
			};

			EachOnTheBeachComponent.prototype.dirtyCheckTargetViewContent = function(contentArray) {
				if (!contentArray || !contentArray.length)
					return this.resetTargetSubViewContent();
				var exists = 0;
				contentArray.forEach(function(val) {
					(this.targetSubViewContentCache.indexOf(val) !== -1 && exists++);
				}, this);
				return (
						(!this.targetSubViewContentCache.length || exists !== this.targetSubViewContentCache.length)
								&& (this.targetSubViewContentCache = contentArray)
						);
			};



			module.exports = EachOnTheBeachComponent;
			},{"formantCore":2}],"src/UI/categories/basics/KeyValuePairComponent/KeyValuePairComponent.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor KeyValuePairComponent
			*/

			const {TemplateFactory, Components} = _dereq_('formantCore');

			//var keyValueListSlotsDef = require('src/UI/packages_defs/structs/keyValueListSlotsDef');

			var KeyValuePairComponent = function() {
				Components.ComponentWithReactiveText.apply(this, arguments);
				this.objectType = 'KeyValuePairComponent';
			};
			KeyValuePairComponent.prototype = Object.create(Components.ComponentWithReactiveText.prototype);
			KeyValuePairComponent.prototype.objectType = 'KeyValuePairComponent';

			KeyValuePairComponent.prototype.createDefaultDef = function() {
				return TemplateFactory.createDef({
					host : TemplateFactory.createDef({
						nodeName : 'tr',
						props : [
							{keyValuePair : undefined}
						],
						reactOnSelf : [
								{
									from : 'keyValuePair',
									cbOnly : true,
									subscribe : this.setContentFromArrayOnEachMemberView
								}
						],
			//			sWrapper : keyValueListSlotsDef().headerDef.getHostDef().sWrapper
					}),
					members : [
						TemplateFactory.createDef({
							nodeName : 'td',
						}),
						TemplateFactory.createDef({
							nodeName : 'td',
						})
					]
				});
			};

			module.exports = KeyValuePairComponent;
			},{"formantCore":2}],"src/UI/categories/basics/MultisetAccordionComponent/MultisetAccordionComponent.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor MultisetAccordionComponent
			*/

			const {TemplateFactory, Components} = _dereq_('formantCore');

			var createMultisetAccordionComponentHostDef = _dereq_('src/UI/categories/basics/MultisetAccordionComponent/componentDefs/MultisetAccordionComponentHostDef');
			//var createMultisetAccordionComponentSlotsDef = require('src/UI/categories/basics/MultisetAccordionComponent/componentDefs/MultisetAccordionComponentSlotsDef');

			var MultisetAccordionComponent = function(definition, parentView, parent, hostedTypes) {
				// Only override but don't re-assign:
				// 		when the Component is decorated, the def obj passed here as arg
				// 		may be the one that shall be used to add additionnal reactive bindings
				if (!definition.getGroupHostDef().nodeName) {
					var def = createMultisetAccordionComponentHostDef();
					definition.getGroupHostDef().nodeName = def.getGroupHostDef().nodeName;
					definition.lists = def.lists;
				}
				
				// Default to a single accordion set, so then a single typedSlot
				if (!hostedTypes)
					hostedTypes = ['ComponentWithView'];
					
			//	this.setsCount = this.setsCount || setsCount || 1;
			//	this.setDef = createMultisetAccordionComponentSlotsDef();
				
				// not required, as the hostedTypes are retrieved and injected by the AccordionAccordion ctor
			//	this.slotsDefFactory = createMultisetAccordionComponentSlotsDef;
				
				Components.CompositorComponent.call(this, definition, parentView, parent, hostedTypes);
				this.objectType = 'MultisetAccordionComponent';
				
			//	console.log(this);
			};
			MultisetAccordionComponent.prototype = Object.create(Components.CompositorComponent.prototype);
			MultisetAccordionComponent.prototype.objectType = 'MultisetAccordionComponent';
			MultisetAccordionComponent.prototype.extendsCore = 'AbstractAccordion';

			//MultisetAccordionComponent.defaultDef = {
			//	nodeName : 'div',
			//	attributes : [],
			//	states : [],
			//	props : [],
			//	reactOnParent : [],
			//	reactOnSelf : []
			//}

			//MultisetAccordionComponent.prototype.createDefaultDef = function() {
			//	return TypeManager.createComponentDef(
			//			Object.assign(MultisetAccordionComponent.defaultDef, createMultisetAccordionComponentHostDef()),
			//			'MultisetAccordionComponentDefaultDef'
			//		);
			//}

			//MultisetAccordionComponent.prototype.acquireDatasets = function(datasetList) {
			//	
			//	this.typedSlots = [];
			//	datasetList.forEach(function(dataset, key) {
			//		var set = new Components.ComponentWithView(
			//			TypeManager.createComponentDef({
			//				nodeName : 'accordion-set',
			//				sWrapper : createMultisetAccordionComponentHostDef().setDef.getHostDef().sWrapper
			//			}),
			//			this.view,
			//			this
			//		);
			//		this.typedSlots.push(
			//			new this.rDataset(
			//				set,
			//				set,
			//				this.slotsDef,
			//				[]
			//			)
			//		);
			//
			////		console.log(this.typedSlots[key]);
			//		this.typedSlots[key].pushApply(dataset);
			//		this.registerAccordionSetClickEvents(key);
			//	}, this);
			//}

			MultisetAccordionComponent.prototype.registerAccordionSetClickEvents = function(accordionSetIdx) {
				// It is admitted here we shall not add panels after the first init (or use the next method)
				// component.view.subViewsHolder.memberAt(0) is <header>
				var self = this;
				this._children[accordionSetIdx]._children.forEach(function(component) {
					component.view.subViewsHolder.memberAt(0).addEventListener('mousedown', function(e) {
						component.trigger('update', {self_key : component._key, self_UID : component._UID});
					});
					component.addEventListener('update', function(e) {
						self.typedSlots[accordionSetIdx].targetContainerDeploy(e.data.self_key);
					});
				}, this);

			};

			MultisetAccordionComponent.prototype.registerNewPanelClickEvents = function(accordionSetIdx) {
				// Here we may handle newly added panels after the first init
				this._children[accordionSetIdx].getLastChild().view.subViewsHolder.memberAt(0).addEventListener('mousedown', function(e) {
					component.trigger('update', {self_key : this._children[accordionSetIdx].getLastChild().UID});
				});
			};

			module.exports = MultisetAccordionComponent;
			},{"formantCore":2,"src/UI/categories/basics/MultisetAccordionComponent/componentDefs/MultisetAccordionComponentHostDef":18}],"src/UI/categories/basics/SimpleText/SimpleText.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor SimpleText
			*/

			const {TemplateFactory, Components} = _dereq_('formantCore');


			const SimpleText = function() {
				Components.ComponentWithReactiveText.apply(this, arguments);
				this.objectType = 'SimpleText';
			};
			SimpleText.prototype = Object.create(Components.ComponentWithReactiveText.prototype);
			SimpleText.prototype.objectType = 'SimpleText';

			SimpleText.prototype.createDefaultDef = function(componentDef) {
				var def = TemplateFactory.createHostDef({
						props : [
			//				{text : undefined}		// REMINDER: Keep this line commented
							{content : undefined}
						],
						reactOnSelf : [
							{to : 'content', cbOnly : true, subscribe : this.appendTextFromValueOnView},
							{from : 'text', to : 'content'}
						]
				});
				
				// Sort of a Hack, to reduce the risk of errors for the user:
				// In case of a component choosing not to define a "text"" prop
				// but rather, for example, reactOnParent directly to "content"
				if (!componentDef.getHostDef().props.hasObjectByKey('text')) {
					var textProp = new TemplateFactory.propsModel({text : undefined});
					def.getHostDef().props.push(textProp);
					def.getHostDef().streams.push(textProp);
				}
				
				return def;
			};



			module.exports = SimpleText;
			},{"formantCore":2}],"src/UI/categories/basics/SimpleTextReplace/SimpleTextReplace.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor SimpleTextReplace
			*/

			const {TemplateFactory, Components} = _dereq_('formantCore');


			var SimpleTextReplace = function() {
				Components.ComponentWithReactiveText.apply(this, arguments);
				this.objectType = 'SimpleTextReplace';
			};
			SimpleTextReplace.prototype = Object.create(Components.ComponentWithReactiveText.prototype);
			SimpleTextReplace.prototype.objectType = 'SimpleTextReplace';

			SimpleTextReplace.prototype.createDefaultDef = function(componentDef) {
				var def = TemplateFactory.createHostDef({
						props : [
			//				{text : undefined}		// REMINDER: Keep this line commented
							{content : undefined}
						],
						reactOnSelf : [
							{to : 'content', cbOnly : true, subscribe : this.setContentFromValueOnView},
							{from : 'text', to : 'content'}
						]
				});
				
				// Sort of a Hack, to reduce the risk of errors for the user:
				// In case of a component choosing not to define a "text"" prop
				// but rather, for example, reactOnParent directly to "content"
				if (!componentDef.getHostDef().props.hasObjectByKey('text')) {
					var textProp = new TemplateFactory.propsModel({text : undefined});
					def.getHostDef().props.push(textProp);
					def.getHostDef().streams.push(textProp);
				}
				
				return def;
			};



			module.exports = SimpleTextReplace;
			},{"formantCore":2}],"src/UI/categories/basics/SpecializedTypedListComponent/SpecializedTypedListComponent.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor SpecializedTypedListComponent
			*/

			const {TemplateFactory} = _dereq_('formantCore');

			var TypedListComponent = _dereq_('src/UI/categories/basics/TypedListComponent/TypedListComponent');

			var createSpecializedTypedListComponentHostDef = _dereq_('src/UI/categories/basics/SpecializedTypedListComponent/componentDefs/SpecializedTypedListComponentHostDef');
			var createSpecializedTypedListComponentSlotsDef = _dereq_('src/UI/categories/basics/SpecializedTypedListComponent/componentDefs/SpecializedTypedListComponentSlotsDef');

			var SpecializedTypedListComponent = function(definition, parentView, parent) {
				this.listItemNodeName = this.listItemNodeName || '';
				this.listItemMembersCount = this.listItemMembersCount || 0;
				this.listItemMemberType = this.listItemMemberType || '';
				
				this.slotsDefFactory = this.slotsDefFactory || createSpecializedTypedListComponentSlotsDef;
				
				TypedListComponent.call(this, definition, parentView, parent);
				this.objectType = 'SpecializedTypedListComponent';
				
				// Those props are not writable...
			//	this.typedSlots[0].push = this.membersCountAwarePushMethod.bind(this.typedSlots[0]);
			//	this.typedSlots[0].pushApply = this.membersCountAwarePushApplyMethod.bind(this.typedSlots[0]);
				
				this.typedSlots[0].setSchema(['updateChannel']);
				
				if (this.listItemNodeName && this.listItemMembersCount)
					this.defineSlotHost();
				if (this.listItemMemberType || this.listItemNodeName)
					this.defineSlotMembers();
			};
			SpecializedTypedListComponent.prototype = Object.create(TypedListComponent.prototype);
			SpecializedTypedListComponent.prototype.objectType = 'SpecializedTypedListComponent';
			SpecializedTypedListComponent.prototype.extends = 'TypedListComponent';

			//SpecializedTypedListComponent.defaultDef = {
			//	nodeName : 'div',
			//	attributes : [],
			//	states : [],
			//	props : [],
			//	reactOnParent : [],
			//	reactOnSelf : []
			//}

			SpecializedTypedListComponent.prototype.createDefaultDef = function() {
				return createSpecializedTypedListComponentHostDef().getHostDef();
			};

			SpecializedTypedListComponent.prototype.membersCountAwarePushMethod = function(item) {
				if (!Array.isArray(item.updateChannel)) {
					console.warn(this.rootComponent.objectType, 'typedSlots[0] (ReactiveDataset)', 'pushed item has no "updateChannel" prop or the prop value is not of type Array.', item, 'Returning...');
					return;
				}
				var membersCount = item.updateChannel.length;
				this.rootComponent.updateMembersCount(membersCount);
				Object.getPrototypeOf(this).push.call(this, item);
			};

			SpecializedTypedListComponent.prototype.membersCountAwarePushApplyMethod = function(itemList) {
				itemList.forEach(function(item) {
					this.push(item);
					console.log(item);
				}, this);
			};

			SpecializedTypedListComponent.prototype.defineSlotHost = function() {
				this.typedSlots[0].defaultListDef.getHostDef().template = TypeManager.createComponentDef({
					host : TypeManager.createComponentDef({
						type : 'CompoundComponent',
						nodeName : this.listItemNodeName,
						props : [
							{updateChannel : undefined}
						]
			//			,
			//			reactOnSelf : [
			//					{
			//						from :  'updateChannel',
			//						cbOnly : true,
			//						subscribe : function(val) {
			////							console.log(val);
			//						}
			//					}
			//			]
					})
				});
			};

			SpecializedTypedListComponent.prototype.defineSlotMembers = function() {
				var membersDef = this.typedSlots[0].defaultListDef.getHostDef().template.members = [];
				
				// This loop may be defined in the factory function defined as this.slotsDefFactory
				for (let i = 0; i < this.listItemMembersCount; i++) {
					membersDef.push(
						TypeManager.createComponentDef({
							type : this.listItemMemberType,
							reactOnParent : [
								{
									from : 'updateChannel',
									to : 'updateChannel'
								}
							]
						})
					);
				}
			};

			SpecializedTypedListComponent.prototype.updateMembersCount = function(membersCount) {
				this.listItemMembersCount = membersCount;
				this.defineSlotMembers();
			};

			module.exports = SpecializedTypedListComponent;
			},{"formantCore":2,"src/UI/categories/basics/SpecializedTypedListComponent/componentDefs/SpecializedTypedListComponentHostDef":19,"src/UI/categories/basics/SpecializedTypedListComponent/componentDefs/SpecializedTypedListComponentSlotsDef":20,"src/UI/categories/basics/TypedListComponent/TypedListComponent":"src/UI/categories/basics/TypedListComponent/TypedListComponent.js"}],"src/UI/categories/basics/Tooltip/Tooltip.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor Tooltip
			 * 
			*/
			const {TemplateFactory, appConstants} = _dereq_('formantCore');

			var InnerReactiveComponent = _dereq_('src/UI/categories/basics/InnerReactiveComponent/InnerReactiveComponent');

			var createTooltipDef = _dereq_('src/UI/categories/basics/Tooltip/componentDefs/tooltipDef');


			var Tooltip = function(def, parentView, parent) {
				// width calculation is handled in appConstants.textSizeGetter
				
				InnerReactiveComponent.call(this, def, parentView, parent);
				this.objectType = 'Tooltip';
				
				this.targetSubViewContentCache = ['no hint on this field'];
			};
			Tooltip.prototype = Object.create(InnerReactiveComponent.prototype);
			Tooltip.prototype.objectType = 'Tooltip';

			// CAUTION : _asyncInitTasks rely on an Array being present on the proto. But that Array is present only when addInterface creates it,
			// via the onExtend callback.
			// SO CREATE IT FIRST.
			//Tooltip.prototype._asyncInitTasks = [];
			//Tooltip.prototype._asyncRegisterTasks = [];
			//
			//Tooltip.prototype._asyncInitTasks.push(new TemplateFactory.TaskDefinition({
			//		type : 'lastAddChild',
			//		task : function(definition) {
			//				this.pushChild(
			//					new ReactiveEachSubComponent(
			//						TemplateFactory.createHostDef({
			//							UID : 'ZZ'
			//						}),
			//						this.view,
			//						this
			//					)
			//				);
			//			}
			//	})
			//)

			Tooltip.prototype.createDefaultDef = function() {
				var defaultDef = createTooltipDef();
			//	if (!defaultDef.getHostDef().subscribeOnSelf.length) { 
					defaultDef.getHostDef().subscribeOnSelf.push(new TemplateFactory.subscribeOnSelfModel({	
									on : 'update',
									subscribe : this.resize
								})
					);
			//	}
			//	if (defaultDef.getHostDef().reactOnParent.length === 1) { 
					defaultDef.getHostDef().reactOnParent.push(new TemplateFactory.reactOnParentModel({
							cbOnly : true,
							from : 'errors',
							subscribe : this.updateTargetView // updateTargetView() expects an array
						})
					);
			//	}
				return defaultDef;
			};

			Tooltip.prototype.resize = function(e) {
				var messages = e.data;
				if (Array.isArray(messages) && messages.length) {
					var w = appConstants.textSizeGetter.getTextWidth(messages[0]) + 25;
					this.view.getMasterNode().style.width = w.toString() + 'px';
					return true;
				}
			};


			module.exports = Tooltip;
			},{"formantCore":2,"src/UI/categories/basics/InnerReactiveComponent/InnerReactiveComponent":"src/UI/categories/basics/InnerReactiveComponent/InnerReactiveComponent.js","src/UI/categories/basics/Tooltip/componentDefs/tooltipDef":21}],"src/UI/categories/basics/TypedListComponent/TypedListComponent.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor TypedListComponent
			*/

			const {TemplateFactory, Components} = _dereq_('formantCore');

			var createTypedListComponentHostDef = _dereq_('src/UI/categories/basics/TypedListComponent/componentDefs/TypedListComponentHostDef');
			var createTypedListComponentSlotsDef = _dereq_('src/UI/categories/basics/TypedListComponent/componentDefs/TypedListComponentSlotsDef');

			var TypedListComponent = function(definition, parentView, parent) {
				var stdDef = definition || createTypedListComponentHostDef();
				this.slotsDef = this.slotsDef || createTypedListComponentSlotsDef();
				this.slotsCount = 1;
				
				Components.CompositorComponent.call(this, stdDef, parentView, parent);
				this.objectType = 'TypedListComponent';
				
			//	console.log(this);
			};
			TypedListComponent.prototype = Object.create(Components.CompositorComponent.prototype);
			TypedListComponent.prototype.objectType = 'TypedListComponent';
			TypedListComponent.prototype.extendsCore = 'LazySlottedCompoundComponent';

			//TypedListComponent.defaultDef = {
			//	nodeName : 'typed-list',
			//	attributes : [],
			//	states : [],
			//	props : [],
			//	reactOnParent : [],
			//	reactOnSelf : []
			//}
			//
			//TypedListComponent.prototype.createDefaultDef = function() {
			//	return TypeManager.createComponentDef(
			//			createTypedListComponentHostDef(),
			//			'TypedListComponentDefaultDef',
			//			'rootOnly'
			//		);
			//}



			/**
			 * @overrride
			 */
			TypedListComponent.prototype.updateDefinitionBasedOnSlotsCount = function(definition) {
				
			};


			/**
			 * @overrride
			 */
			TypedListComponent.prototype.affectSlots = function() {
				var i = 0;
			//	console.log(this);
				for (let slotDef in this.slotsDef) {
					this.typedSlots.push(new this.rDataset(
						this,
						this,
						this.slotsDef[slotDef],
						[])
					);
					i++;
				}

				return true;
			};












			module.exports = TypedListComponent;
			},{"formantCore":2,"src/UI/categories/basics/TypedListComponent/componentDefs/TypedListComponentHostDef":22,"src/UI/categories/basics/TypedListComponent/componentDefs/TypedListComponentSlotsDef":23}],"src/UI/categories/basics/VisibleStateComponent/VisibleStateComponent.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			* @constructor visibleStateComponent
			*/


			const {TemplateFactory, CoreTypes, Components} = _dereq_('formantCore');

			var AGDef = _dereq_('src/UI/categories/_configurationFiles/_arias&glyphsDef');

			var visibleStateComponent = function(def, containerDOMId, automakeable) {
				Components.ComponentWithReactiveText.apply(this, arguments);
				this.objectType = 'VisibleStateComponent';
			};

			visibleStateComponent.prototype = Object.create(Components.ComponentWithReactiveText.prototype);
			visibleStateComponent.prototype.objectType = 'VisibleStateComponent';

			visibleStateComponent.prototype.createDefaultDef = function(componentDef) {
				var def = TemplateFactory.createHostDef({
						props : [
			//				{text : undefined}
							{content : undefined}
						],
						reactOnSelf : [
							{to : 'content', cbOnly : true, subscribe : this.appendContentFromValueOnView},
							{from : 'text', to : 'content'},
						]
				});
				
				// SAME AS IN SIMPLE TEXT
				// Sort of a Hack, to reduce the risk of errors for the user:
				// In case of a component choosing not to define a "text"" prop
				// but rather, for example, reactOnParent directly to "content"
				if (!componentDef.getHostDef().props.hasObjectByKey('text')) {
					var textProp = new TypeManager.propsModel({text : undefined});
					def.getHostDef().props.push(textProp);
					def.getHostDef().streams.push(textProp);
				}
				
				return def;
			};

			visibleStateComponent.prototype.createEvents = function() {
				this.createEvent('clicked_ok');
				this.createEvent('dblClicked_ok');
				this.createEvent('clicked_refused');
			};

			visibleStateComponent.prototype.basicLateViewExtend = function(definition) {
				var glyphDef = AGDef.getGlyphs(this.__proto__.objectType);
				if (glyphDef === null)
					return;

				var state;
				
				var nodeDef = TypeManager.createComponentDef({
					nodeName : 'span',
					attributes : [
						{hidden : 'hidden'},
						{className : null}
					]
				});
				
				for (let glyphName in glyphDef) {
					state = glyphName.slice(5).toLowerCase();				// glyphSomething
					if (state in CoreTypes.commonStates) {
						nodeDef.getHostDef().attributes[1].className = 'glyphicon ' + glyphDef[glyphName];
						this.addReactiveMemberViewFromFreshDef(definition, nodeDef, state);
					}
					state = glyphName.slice(8);								// glyphNotsomething
					if (state in CoreTypes.commonStates) {
						nodeDef.getHostDef().attributes[1].className = 'glyphicon ' + glyphDef[glyphName]; 
						this.addReactiveMemberViewFromFreshDef(definition, nodeDef, 'Not' + state);
					}
				}
			};


			visibleStateComponent.prototype.registerClickEvents = function() {
				// Click event listener & canAct management
				this.eventPayload = {
					originalEvent : new Event('mouseDown'),		// Dummy val => TODO: benchmark this on huge lists 
															// (we could have set it to null, but we thought avoiding realocation could improve perfs)
					self : this
				};
				this.clickHandler = this.handleClickEvent.bind(this);
				this.dblClickHandler = this.handledDblClickEvent.bind(this);
				this.view.getMasterNode().addEventListener('mousedown', this.clickHandler);
				this.view.getMasterNode().addEventListener('dblclick', this.dblClickHandler);
			};

			visibleStateComponent.prototype.handleClickEvent = function(e) {
				var self = this;
				
				e.stopPropagation();
				
				if (self.command && self.command.act !== null)
					var canActQuery = self.command.act();
				else {
					this.eventPayload.originalEvent = e;
					self.trigger('clicked_ok', this.eventPayload);
					return;
				}
				
				canActQuery.then(
					function(queryResult) {
						self.trigger('clicked_ok', self.eventPayload);
					},
					function(queryResult) {
						self.view.getMasterNode()['disabled'] = 'disabled';
						setTimeout(function() {
							self.view.getMasterNode()['disabled'] = null;
						}, 255);
						self.trigger('clicked_refused', self.eventPayload);
					}
				);
			};

			visibleStateComponent.prototype.handledDblClickEvent = function(e) {
				var self = this;
				e.stopPropagation();
				
				if (self.command && self.command.act !== null)
					var canActQuery = self.command.act();
				else {
					this.eventPayload.originalEvent = e;
					self.trigger('dblClicked_ok', this.eventPayload);
					return;
				}
				
				canActQuery.then(
					function(queryResult) {
						self.trigger('dblClicked_ok', this.eventPayload);
					},
					function(queryResult) {
						self.view.getMasterNode()['disabled'] = 'disabled';
						setTimeout(function() {
							self.view.getMasterNode()['disabled'] = null;
						}, 255);
						self.trigger('clicked_refused', this.eventPayload);
					}
				);
			};


			module.exports = visibleStateComponent;

			},{"formantCore":2,"src/UI/categories/_configurationFiles/_arias&glyphsDef":15}],"src/UI/categories/forms/BoolSelector/BoolSelector.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * 
			 * @constructor BoolSelector
			 * 
			*/



			const {TemplateFactory, Components, appConstants} = _dereq_('formantCore');

			const BoolSelectorDef = _dereq_('src/UI/categories/forms/BoolSelector/componentDefs/boolSelectorDef');


			const Slider = _dereq_('src/UI/categories/basics/AbstractSlider/AbstractSlider');
			//const orientationDependantInterface = require('src/UI/_interfaces/orientationDependantInterface');
			const labelledInputInterface = _dereq_('src/UI/_interfaces/labelledInputInterface');
			const typedInputInterface = _dereq_('src/UI/_interfaces/typedInputInterface');



				
			let BoolSelector = function(definition, parentView, parent) {
				this.limitExcursionToInner = true;
				this.orientation = 'horizontal';
				this.min = 0;
				this.max = 1;
				this.step = 1;
				Slider.call(this, definition, parentView, parent);
				this.objectType = 'BoolSelector';
				
				var self = this;
				this.addEventListener('change', function(e) {
					self.streams.toggle.value = e.data === self._valueMax() ? true : null;
					self.trigger('update', {toggle : self.streams.toggle.value});
				});
			};

			/**
			 * @chained_inheritance BoolSelector <= Slider <= ComponentWithHooks
			 */
			var proto_proto = Object.create(Components.ComponentWithHooks.prototype);
			Object.assign(proto_proto, Slider.prototype);
			BoolSelector.prototype = Object.create(proto_proto);
			BoolSelector.prototype.objectType = 'BoolSelector';

			//	BoolSelector = Components.ExtensibleObject.prototype.addInterface(BoolSelector, orientationDependantInterface);
			BoolSelector = Components.ExtensibleObject.prototype.addInterface(BoolSelector, labelledInputInterface);
			BoolSelector = Components.ExtensibleObject.prototype.addInterface(BoolSelector, typedInputInterface);

			BoolSelector.prototype.createDefaultDef = function() {
				return TemplateFactory.createDef({
					host : TemplateFactory.createDef({
						nodeName : 'toggle-selector',
						states : [
							{toggle : undefined}
						],
						sWrapper : BoolSelectorDef().getHostDef().sWrapper
					}, null, 'hostOnly'),
					members : [
						TemplateFactory.createDef({
							nodeName : 'div',
							attributes : [
								{id : 'slider-track-' + TypeManager.UIDGenerator.newUID()},
								{title : 'On/Off Selector'},
								{className : 'slider-horizontal'}
							]
						}, null, 'hostOnly')
					]
				}, null, 'rootOnly');
			};

			BoolSelector.prototype._mouseUp = function(e) {
				if (this._mouseStarted) {
					if (!this._mouseMovement) {
						this._value = this._value !== this._valueMax() ? this._valueMax() : this._valueMin();
						this.handle.style.left = this._value === this._valueMax() ? this._maxPixelsInner.x.toString() + 'px' : 0;
						this.streams.toggle.value = this._value === this._valueMax() ? true : null;
						this.trigger('update', {toggle : this.streams.toggle.value});
					}
					
					document.removeEventListener('mousemove', this._mouseMove);
				}
					
				this._mouseStarted = false;
				this._mouseMovement = false;
			};
				

			module.exports = BoolSelector;
			},{"formantCore":2,"src/UI/_interfaces/labelledInputInterface":8,"src/UI/_interfaces/typedInputInterface":13,"src/UI/categories/basics/AbstractSlider/AbstractSlider":"src/UI/categories/basics/AbstractSlider/AbstractSlider.js","src/UI/categories/forms/BoolSelector/componentDefs/boolSelectorDef":24}],"src/UI/categories/forms/CancelButton/CancelButton.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor CancelButton
			 * 
			*/
			const {TemplateFactory, Components} = _dereq_('formantCore');
			const typedInputInterface = _dereq_('src/UI/_interfaces/typedInputInterface');

			const createCancelButtonDef = _dereq_('src/UI/categories/forms/CancelButton/componentDefs/cancelButtonDef');

			let CancelButton = function() {
				Components.ComponentWithHooks.apply(this, arguments);
				this.objectType = 'CancelButton';
			};
			CancelButton.prototype = Object.create(Components.ComponentWithHooks.prototype);
			CancelButton.prototype.objectType = 'CancelButton';

			CancelButton = Components.ExtensibleObject.prototype.addInterface(CancelButton, typedInputInterface);

			CancelButton.prototype.createEvents = function() {
				this.createEvent('clicked_ok');
				this.createEvent('cancel');
			};

			CancelButton.prototype.createDefaultDef = function() {
				const def = TemplateFactory.createHostDef({
						nodeName : 'button',
						attributes : [
							{title : '-Cancel'}
						],
						props : [
			//				{text : undefined},
							{content : undefined}
						],
						reactOnSelf : [
							{
								cbOnly : true,
								to	 : 'content',
								subscribe : this.appendContentFromValueOnView,
							},
							{
								from : 'text',
								to : 'content',
							}
						],
						sWrapper : createCancelButtonDef().getHostDef().sWrapper
				});
				return def;
			};

			CancelButton.prototype.afterCreateDOM = function() {
			//		this.view.getMasterNode()['value'] = this.def.title;
			//		if (this.def.sWrapper && this.def.sWrapper.styleElem)
			//			this.view.getMasterNode().appendChild(this.def.sWrapper.styleElem);
			};

			CancelButton.prototype.afterRegisterEvents = function() {
				var self = this;
				this.view.currentViewAPI.getMasterNode().addEventListener('mouseup', function(e) {
					self.trigger('clicked_ok');
				});
				this.onclicked_ok = this._parent.trigger.bind(this._parent, 'cancel');
			};
				

			module.exports = CancelButton;
			},{"formantCore":2,"src/UI/_interfaces/typedInputInterface":13,"src/UI/categories/forms/CancelButton/componentDefs/cancelButtonDef":25}],"src/UI/categories/forms/CheckboxInput/CheckboxInput.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor CheckboxInput
			*/

			const {TemplateFactory, Components} = _dereq_('formantCore');

			const createCheckboxInputDef = _dereq_('src/UI/categories/forms/CheckboxInput/componentDefs/checkboxInputDef');

			const labelledCheckboxInputInterface = _dereq_('src/UI/_interfaces/labelledCheckboxInputInterface');
			//const validableInterface = require('src/UI/_interfaces/validableInterface');
			const locallySavableInputInterface = _dereq_('src/UI/_interfaces/locallySavableInputInterface');

			let CheckboxInput = function(definition, parentView, parent) {
				this.savableStore = definition.options.savableStore;
				Components.ComponentWithReactiveText.call(this, definition, parentView, parent);
				this.objectType = 'CheckboxInput';
			};
			CheckboxInput.prototype = Object.create(Components.ComponentWithReactiveText.prototype);
			CheckboxInput.prototype.objectType = 'CheckboxInput';

			CheckboxInput = Components.ExtensibleObject.prototype.addInterface(CheckboxInput, labelledCheckboxInputInterface);
			CheckboxInput = Components.ExtensibleObject.prototype.addInterface(CheckboxInput, locallySavableInputInterface);

			CheckboxInput.prototype.createEvents = function() {
			//	GenericComponent.prototype.createEvents.call(this);
			//	this.createEvent('checked');
			};

			CheckboxInput.prototype.createDefaultDef = function() {
				return TemplateFactory.createHostDef({
					nodeName : 'smart-input',
					attributes : [
						{role : 'checkbox'}
					],
					props : [
						{checked : undefined}
					],
					reactOnSelf : [
						{
							from : 'checked',
							cbOnly : true,
							map : function(value) {return value ? 'checked' : null},	// TODO: double-check the MDN: although it seems {String|null} is allowed, this prop returns a real boolean
							subscribe : function(value) {
								this.view.subViewsHolder.memberViews[1].getMasterNode().checked = value;
							}
						}
					],
					sWrapper : createCheckboxInputDef().getHostDef().sWrapper,
				});
			};

			CheckboxInput.prototype.registerClickEvents = function() {
				var self = this;
				this.view.subViewsHolder.memberViews[1].getMasterNode().addEventListener('change', function(e) {
					self.trigger('update', {checked : self.view.subViewsHolder.memberViews[1].getMasterNode().checked ? 'checked' : null});
			//		self.trigger('checked', {checked : self.view.subViewsHolder.memberViews[1].getMasterNode().checked ? 'checked' : null});
				});
			};

			CheckboxInput.prototype.getValue = function() {
				// we can't use the stream's value cause passing a transform function in the stream's definition isn't yet implemented
			//	return this.streams.checked.value;
				return this.view.subViewsHolder.memberViews[1].getMasterNode().checked;
			};

			CheckboxInput.prototype.setValue = function(value) {
				this.streams.checked.value = value;
			};






			module.exports = CheckboxInput;
			},{"formantCore":2,"src/UI/_interfaces/labelledCheckboxInputInterface":7,"src/UI/_interfaces/locallySavableInputInterface":11,"src/UI/categories/forms/CheckboxInput/componentDefs/checkboxInputDef":26}],"src/UI/categories/forms/ColorPickerSliderInput/ColorPickerSliderInput.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor ColorPickerSliderInput
			*/

			const {TemplateFactory, CreateStyle, Components} = _dereq_('formantCore');

			const ColorPickerSliderInput = function(definition, parentView) {
				const def = definition || null;
				Components.ComponentWithHooks.call(this, def, parentView);
				this.objectType = 'ColorPickerSliderInput';
				
				this.absolutLeft = 0;
				this.xMin = definition.options.xMin || 0;
				this.xMax = definition.options.xMax || 400;
				this.leftOffset = definition.options.initialLeft || 0;
				this.initialClickOffset = 0;
			};
			ColorPickerSliderInput.prototype = Object.create(Components.ComponentWithHooks.prototype);
			ColorPickerSliderInput.prototype.objectType = 'ColorPickerSliderInput';

			ColorPickerSliderInput.prototype.createDefaultDef = function() {
				return TemplateFactory.createDef({
					host: TemplateFactory.createDef({
						nodeName: 'triangle-colorpicker',
						props : [
							{
								currentColor : undefined
							}
						],
						reactOnSelf : [
							{
								from : 'currentColor',
								cbOnly: true,
								subscribe : function(value) {
									this.view.subViewsHolder.memberViews[1].getMasterNode().value = value;
									this.view.subViewsHolder.memberViews[2].getMasterNode().textContent = value;
									this.trigger('update', {type : 'colorChanged', value : value, key : this._key}, true);
								}
							}
						],
						sWrapper: CreateStyle([
							{
								selector: ':host',
								color : '#999',
								position : 'absolute',
								top : '0',
								display : 'flex',
								alignItems : 'center',
								fontSize : '14px',
								marginTop : '-22px'
							},
							{
								selector: ':host div',
								display : 'inline-block'
							},
							{
								selector: ':host div:nth-child(4)',
								display : 'inline-block',
								marginTop : '-42px',
								marginLeft : '4px'
							},
							{
								selector: ':host div.arrow',
								height: '0',
								width: '0',
								borderTop: '22px #ED2 solid',
								borderRight: '8px #00000000 solid',
								borderLeft: '8px #00000000 solid',
								cursor : 'pointer'
							},
							{
								selector: ':host input[type="color"]',
								border: '1px #AAA solid',
								padding: '0',
								width: '16px',
								height: '16px',
								margin : '-42px 0px 0px -16px',
								outline: 'none'
							},
							{
								selector : ':host input[type="color"]::-webkit-color-swatch',
								border : '0',
								padding : '0'
							},
							{
								selector : ':host input[type="color"]::-webkit-color-swatch-wrapper',
								border : '0',
								padding : '0'
							}
						])
					}),
					members: [
						TemplateFactory.createDef({
							nodeName: 'div',
							attributes : [
								{className : 'arrow'}
							]
						}),
						TemplateFactory.createDef({
							nodeName: 'input',
							attributes: [
								{ 'type': 'color' }
							]
						}),
						/* displays the value of the color-picker */
						TemplateFactory.createDef({
							nodeName: 'div'
						})
					]
				})
			};

			ColorPickerSliderInput.prototype._asyncRegisterTasks = [];
			ColorPickerSliderInput.prototype._asyncRegisterTasks.push(new TemplateFactory.TaskDefinitionModel({
				type : 'lateBinding',
				task : function() {
					this.view.getMasterNode().style.left = this.absolutLeft + this.leftOffset + 'px';
					this.view.getMasterNode().style.transform = 'translate(-8px)';
				}
			}));

			ColorPickerSliderInput.prototype.registerClickEvents = function() {
				this.view.subViewsHolder.memberViews[1].getMasterNode().addEventListener('input', function(e) {
					this.view.subViewsHolder.memberViews[2].getMasterNode().textContent = e.target.value;
					this.trigger('update', {type : 'colorChanged', value : e.target.value, key : this._key}, true);
				}.bind(this));
				
				// listening to the pointer and capturing the pointer isn't needed
				// (the bug we had came from the parent element being out of flow due to its absolute positionning)
				// thoug, it seems to be a good practice
				// TODO: convert every mouse events to pointer events in the framework, as mouse events may not be correctly handled on mobile
				this.view.subViewsHolder.memberViews[0].getMasterNode().addEventListener('pointerdown', function(e) {
					e.target.setPointerCapture(e.pointerId);
					this.initialClickOffset = e.clientX - this.absolutLeft - this.leftOffset;
					this.handleDrag.call(this);
				}.bind(this));
			};

			ColorPickerSliderInput.prototype.handleDrag = function() {
				const dragHandler = this.dragHandler.bind(this);
				document.body.addEventListener('pointermove', dragHandler);
				document.body.addEventListener('pointerup', function(e) {
					e.target.releasePointerCapture(e.pointerId);
					this.leftOffset = parseInt(this.view.getMasterNode().style.left.slice(0, -2));
					document.body.removeEventListener('pointermove', dragHandler);
				}.bind(this));
			};

			ColorPickerSliderInput.prototype.dragHandler = function(e) {
				const moveOffset = e.clientX - this.initialClickOffset - this.absolutLeft;
				if (moveOffset < this.xMax && moveOffset > this.xMin) {
					this.view.getMasterNode().style.left = this.absolutLeft + moveOffset + 'px';
					this.trigger('update', {type : 'positionChanged', value : Math.round(moveOffset * 100 / this.xMax), key : this._key}, true);
				}
			};





			module.exports = ColorPickerSliderInput;
			},{"formantCore":2}],"src/UI/categories/forms/EMailInput/EMailInput.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor EMailInput
			*/

			//var Component = require('src/core/Component');
			var TextInput = _dereq_('src/UI/categories/forms/TextInput/TextInput');


			var EMailInput = function() {
				TextInput.apply(this, arguments);
				this.objectType = 'EMailInput';
			};
			EMailInput.prototype = Object.create(TextInput.prototype);
			EMailInput.prototype.objectType = 'EMailInput';
			//Component.ExtensibleObject.prototype.getCleanDefAfterExtension(EMailInput);

			module.exports = EMailInput;
			},{"src/UI/categories/forms/TextInput/TextInput":"src/UI/categories/forms/TextInput/TextInput.js"}],"src/UI/categories/forms/Fieldset/Fieldset.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor Fieldset
			*/

			//var TemplateFactory = require('src/core/TemplateFactory');
			const {TemplateFactory, Components} = _dereq_('formantCore');

			var createFieldsetDef = _dereq_('src/UI/categories/forms/Fieldset/componentDefs/FieldsetDef');

			var Fieldset = function(definition, parentView, parent) {
				// This component may be a group or autonomous
				var hostDef = definition.getGroupHostDef() || definition.getHostDef();
				if (!hostDef.props.findObjectByKey('slotsTextContent'))
					hostDef.props.push({slotsTextContent : undefined});
					
				Components.CompositorComponent.call(this, definition, parentView, parent);
				this.objectType = 'Fieldset';
			};
			Fieldset.prototype = Object.create(Components.CompositorComponent.prototype);
			Fieldset.prototype.objectType = 'Fieldset';
			Fieldset.prototype.extendsCore = 'CompoundComponentWithReactiveText';

			Fieldset.prototype.createDefaultDef = function() {
				return createFieldsetDef();
			};

			module.exports = Fieldset;
			},{"formantCore":2,"src/UI/categories/forms/Fieldset/componentDefs/FieldsetDef":27}],"src/UI/categories/forms/FormComponent/FormComponent.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor FormComponent
			 * 
			*/


			const {TemplateFactory, Components, integratedLibs} = _dereq_('formantCore');
			const md5 = integratedLibs.md5;
			const TextInput = _dereq_('src/UI/categories/forms/TextInput/TextInput');
			const TextareaInput = _dereq_('src/UI/categories/forms/TextareaInput/TextareaInput');
			const Fieldset = _dereq_('src/UI/categories/forms/Fieldset/Fieldset');


			const createFormComponentDef = _dereq_('src/UI/categories/forms/FormComponent/componentDefs/formComponentHostDef');
				
			var FormComponent = function() {
				Components.CompositorComponent.apply(this, arguments);
				this.objectType = 'FormComponent';
				this.data;
				this.isValid = true;
			};
			FormComponent.prototype = Object.create(Components.CompositorComponent.prototype);
			FormComponent.prototype.objectType = 'FormComponent';
			FormComponent.prototype.extendsCore = 'CompoundComponentWithHooks';

			FormComponent.prototype.createEvents = function() {
				this.createEvent('submit');
				this.createEvent('success');
				this.createEvent('cancel');
				this.createEvent('acknowledged');
			};

			FormComponent.prototype.createDefaultDef = function() {
				return createFormComponentDef();
			};

			FormComponent.prototype.afterRegisterEvents = function() {
				this.onsubmit = this.getFormData.bind(this);	// "this" scope defaults to the _eventHandlers array, so we have to set it explicitly here :
																// we can't set it in the factory : the scope may be set by anyone who wants to define a specific scope
				// let's allow not pointing toward an API endpoint
				// => automatic sending of the form is triggered only when the form's "action" is defined
				if (this.streams.action) {
					this.onsubmit = this.sendFormData.bind(this);
				}
			};

			FormComponent.prototype.getFormData = function(e) {
				this.isValid = true;
				var name,
					value,
					inputs = this._children.reduce(function(aggregator, child) {
						if (!child._children.length)
							return aggregator;

						if (child instanceof TextInput || child instanceof TextareaInput)
							aggregator.push(child);
						else if (child instanceof Fieldset) {
							child._children.forEach(function(potentialInput) {
								if (potentialInput instanceof TextInput || potentialInput instanceof TextareaInput) {
									aggregator.push(potentialInput);
								}
							});	
						} 
						// Temporarily handle that way the case of a "select" component,
						// and see while using it if we need a better solution
						else if (child._children[1].objectType.match(/selector/i)) {
							if (child._children[1]._children[0] instanceof TextInput || child._children[1]._children[0] instanceof TextareaInput)
								aggregator.push(child._children[1]._children[0]);
						}
						return aggregator;
					}, []);
				
				if (!inputs.length) {
					console.warn(this.objectType, 'no inputs to get data from');
					return;
				}
				
				this.data = new FormData();
				inputs.forEach(function(field) {
					if (!this.isValid)
						return;
					if (field.handleValidation && field.namedEW) {
						field.handleValidation({target : field.namedEW[0]});
					}
					if (field.streams.valid && field.streams.valid.value !== true) {
						field.streams.valid.value = null;	// force visual feedback of the validation (the user may submit before having typed anything)
						console.warn('field validation error when sending Form to server. State is : ', field.streams.valid.value, field.objectType);
						this.isValid = false;
						return;
					}
					
					name = field.getName(), value = field.getValue();
					if (name && value) {
						// let's assume that all of the API's we're gonna target shall expect a hashed password
						if (name.match(/password/) !== null) {
							 this.data.set(name, md5(field.getValue()));
						}
						else
							this.data.set(name, field.getValue());
					}
					else if (!value) {
						// tooltip.show('vous devez sélectionner un fichier)
					}
				}, this);
				
			//	console.log(isValid, [...this.data.entries()]);
			};

			FormComponent.prototype.sendFormData = function(e) {
				if (!this.isValid)
					return;
				else
					this.trigger('success');
					
				var options = {
					method : 'POST',
					body : JSON.stringify(Object.fromEntries(this.data.entries())),
					headers: {
						"Content-Type": "application/json",
						"Accept": "application/json"
					}
				};
				var self = this;
				fetch(this.streams.action.value, options).then(function(response) {
					response.text().then(function(content) {
						self.trigger('acknowledged', content);
					});
				});
			};
				
			module.exports = FormComponent;
			},{"formantCore":2,"src/UI/categories/forms/Fieldset/Fieldset":"src/UI/categories/forms/Fieldset/Fieldset.js","src/UI/categories/forms/FormComponent/componentDefs/formComponentHostDef":28,"src/UI/categories/forms/TextInput/TextInput":"src/UI/categories/forms/TextInput/TextInput.js","src/UI/categories/forms/TextareaInput/TextareaInput":"src/UI/categories/forms/TextareaInput/TextareaInput.js"}],"src/UI/categories/forms/LabelledButton/LabelledButton.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor LabelledButton
			*/

			const {TemplateFactory, Components} = _dereq_('formantCore');

			var labelledButtonInterface = _dereq_('src/UI/_interfaces/labelledButtonInterface');

			var createLabelledButtonHostDef = _dereq_('src/UI/categories/forms/LabelledButton/componentDefs/LabelledButtonHostDef');
			//var createLabelledButtonSlotsDef = require('src/UI/categories/forms/LabelledButton/componentDefs/LabelledButtonSlotsDef');

			var LabelledButton = function(definition, parentView, parent) {
				Components.ComponentWithHooks.call(this, definition, parentView, parent);
				this.objectType = 'LabelledButton';
			};
			LabelledButton.prototype = Object.create(Components.ComponentWithHooks.prototype);
			LabelledButton.prototype.objectType = 'LabelledButton';

			LabelledButton = Components.ExtensibleObject.prototype.addInterface(LabelledButton, labelledButtonInterface);

			LabelledButton.prototype.createDefaultDef = function() {
				return createLabelledButtonHostDef();
			};

			module.exports = LabelledButton;
			},{"formantCore":2,"src/UI/_interfaces/labelledButtonInterface":6,"src/UI/categories/forms/LabelledButton/componentDefs/LabelledButtonHostDef":29}],"src/UI/categories/forms/NamedButton/NamedButton.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor NamedButton
			*/

			const {TemplateFactory, Components} = _dereq_('formantCore');
			var SimpleText = _dereq_('src/UI/categories/basics/SimpleText/SimpleText');

			var createNamedButtonHostDef = _dereq_('src/UI/categories/forms/NamedButton/componentDefs/NamedButtonHostDef');
			//var createNamedButtonSlotsDef = require('src/UI/categories/forms/NamedButton/componentDefs/NamedButtonSlotsDef');

			var NamedButton = function(definition, parentView, parent) {
				Components.ComponentWithView.call(this, definition, parentView, parent);
				this.objectType = 'NamedButton';
			};
			NamedButton.prototype = Object.create(SimpleText.prototype);
			NamedButton.prototype.objectType = 'NamedButton';


			NamedButton.prototype.createDefaultDef = function() {
				const def = SimpleText.prototype.createDefaultDef(TemplateFactory.mockDef());
				def.getHostDef().sWrapper = createNamedButtonHostDef().getHostDef().sWrapper;
				return def;
			};

			NamedButton.prototype.registerClickEvents = function() {
				this.view.getMasterNode().addEventListener('mouseup', this.handleClickEvent.bind(this));
			};
			NamedButton.prototype.handleClickEvent = function(e) {
				// TODO: define an EventPayload factory in the TemplateFactory
				this.trigger('update', {grandParent_key : this._parent._parent._key, parent_key : this._parent._key, self_depth : this.getSelfDepth(), self_key : this._key, self_UID : this._UID}, true);
			};

			module.exports = NamedButton;
			},{"formantCore":2,"src/UI/categories/basics/SimpleText/SimpleText":"src/UI/categories/basics/SimpleText/SimpleText.js","src/UI/categories/forms/NamedButton/componentDefs/NamedButtonHostDef":30}],"src/UI/categories/forms/PasswordInput/PasswordInput.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor PasswordInput
			*/

			//var Component = require('src/core/Component');
			const TextInput = _dereq_('src/UI/categories/forms/TextInput/TextInput');

			const PasswordInput = function(def) {
			//	console.log(def)

				TextInput.apply(this, arguments);
				this.objectType = 'PasswordInput';

			};
			PasswordInput.prototype = Object.create(TextInput.prototype);
			PasswordInput.prototype.objectType = 'PasswordInput';
			//Component.ExtensibleObject.prototype.getCleanDefAfterExtension(PasswordInput);




			module.exports = PasswordInput;
			},{"src/UI/categories/forms/TextInput/TextInput":"src/UI/categories/forms/TextInput/TextInput.js"}],"src/UI/categories/forms/SubmitButton/SubmitButton.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor SubmitButton
			 * 
			*/
			const {TemplateFactory, Components} = _dereq_('formantCore');
			const typedInputInterface = _dereq_('src/UI/_interfaces/typedInputInterface');

			const createSubmitButtonDef = _dereq_('src/UI/categories/forms/SubmitButton/componentDefs/submitButtonDef');
			//	console.log(createSubmitButtonDef);

			let SubmitButton = function() {
				Components.ComponentWithHooks.apply(this, arguments);
				this.objectType = 'SubmitButton';
			};
			SubmitButton.prototype = Object.create(Components.ComponentWithHooks.prototype);
			SubmitButton.prototype.objectType = 'SubmitButton';

			SubmitButton = Components.ExtensibleObject.prototype.addInterface(SubmitButton, typedInputInterface);

			SubmitButton.prototype.createEvents = function() {
				this.createEvent('clicked_ok');
			};

			SubmitButton.prototype.createDefaultDef = function() {
				return TemplateFactory.createHostDef({
						nodeName : 'submit-button',
						attributes : [
							{title : '-Submit'}
						],
						props : [
			//				{text : undefined},
							{content : undefined}
						],
						reactOnSelf : [
							{
								cbOnly : true,
								to	 : 'content',
								subscribe : this.appendContentFromValueOnView,
							},
							{
								from : 'text',
								to : 'content',
							}
						],
						sWrapper : createSubmitButtonDef().getHostDef().sWrapper
				});
			};

			SubmitButton.prototype.afterCreateDOM = function() {
			//	this.view.getMasterNode()['value'] = this.def.title;
			//	if (this.def.sWrapper && this.def.sWrapper.styleElem)
			//		this.view.getMasterNode().appendChild(this.def.sWrapper.styleElem);
			};

			SubmitButton.prototype.afterRegisterEvents = function() {
			//	console.log(this._parent)
				var self = this;
				this.view.currentViewAPI.getMasterNode().addEventListener('mouseup', function(e) {
					self.trigger('clicked_ok');
				});
				this.onclicked_ok = this._parent.trigger.bind(this._parent, 'submit');
			};
				

			module.exports = SubmitButton;
			},{"formantCore":2,"src/UI/_interfaces/typedInputInterface":13,"src/UI/categories/forms/SubmitButton/componentDefs/submitButtonDef":31}],"src/UI/categories/forms/TextInput/TextInput.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor TextInput
			 * 
			 * This type is a good example of a high-level component (formal layer).
			 * More than a starting point, it's a quite complete implementation.
			 * It exposes the most part of the core functionalities, and it develops progressively.
			 * Nevertheless, it's not ready-to-go yet.
			 * At this extension stage, a component can implement a rich typology (a default "geography"
			 * of views and states), and a lot of applicative behaviors.
			 * It acquires its functionnalities through inheritance from rich abstract types  
			 * that already abstract some behaviors, it may acquire concrete behaviors from 
			 * some generic-implementations and eventually decorate itself through interfaces.
			 * Here's also a good place to register itself in the render queue, and then have its listeners
			 * attached to user-events.
			 * But, as said, it still needs a few more key-specializations.
			 * It's a rich base-class that is ideal for a concise-and-clear specialization.
			 * 
			 * [FIXED:not related to an unintented reference (the cause was an unintented cascade of merge in TemplateFactory.Single...streams)]
			 * ***the main risk at this stage being that the decorators (aka. here "interfaces")
			 * ***mutate the default definition.
			 * ***The specialized type must at least take care of this potential break (see e.g. UsernameInput).
			 * [PATCH METHOD REMAINS:eventual testing purpose]
			 */


			const {TemplateFactory, Registries, Components} = _dereq_('formantCore');
			const VisibleStateComponent = _dereq_('src/UI/categories/basics/VisibleStateComponent/VisibleStateComponent');
			const Tooltip = _dereq_('src/UI/categories/basics/Tooltip/Tooltip');

			const labelledTextInputInterface = _dereq_('src/UI/_interfaces/labelledTextInputInterface');
			const typedInputInterface = _dereq_('src/UI/_interfaces/typedInputInterface');
			const validableInterface = _dereq_('src/UI/_interfaces/validableInterface');
			const locallySavableInputInterface = _dereq_('src/UI/_interfaces/locallySavableInputInterface');

			const createTextInputDef = _dereq_('src/UI/categories/forms/TextInput/componentDefs/textInputDef');

			/**
			 * @constructor TextInput
			 * 
			 */
			let TextInput = function(definition, parentView, parent) {
				this.defaultValidator = 'textInput';
				this.savableStore = (definition.options && definition.options.savableStore) ? definition.options.savableStore : null;
				
				Components.ComponentStrokeAware.call(this, definition, parentView, parent);
				this.objectType = 'TextInput';
				
				
			};
			/**
			 * @chained_inheritance TextInput <= VisibleStateComponent <= ComponentStrokeAware
			 */
			var proto_proto = Object.create(Components.ComponentStrokeAware.prototype);
			Object.assign(proto_proto, VisibleStateComponent.prototype);
			TextInput.prototype = Object.create(proto_proto);
			TextInput.prototype.objectType = 'TextInput';

			/**
			 * @interfaces_implementation
			 */
			TextInput = Components.ExtensibleObject.prototype.addInterface(TextInput, labelledTextInputInterface);
			TextInput = Components.ExtensibleObject.prototype.addInterface(TextInput, typedInputInterface);
			TextInput = Components.ExtensibleObject.prototype.addInterface(TextInput, validableInterface);
			TextInput = Components.ExtensibleObject.prototype.addInterface(TextInput, locallySavableInputInterface);
			/**
			 * We need a Tooltip. Here is the Tooltip.
			 * Here we have something as cool from the point of view of the functionality, as from the "didactical" point of view:
			 * Instanciating a Component in an interface appears as weird as getting back to the dining room at dinner-time,
			 * proposing to your guests a "dinner on plates" after having served the dishes roughly on the wood of the table.
			 * But after having implemented a whole lot of interfaces, adding another task to the queue
			 * seems to be the way to follow on the incremental extension. 
			 */
			TextInput.prototype._asyncInitTasks.push(new TemplateFactory.TaskDefinition({
				type : 'lateAddChild',
				task : function(definition) {
						var basicDef = TemplateFactory.createHostDef({type : 'emptyDef'});
						new Tooltip(basicDef, this.view, this);
						this.view.subViewsHolder.addMemberView(this._children[this._children.length - 1].view);
					}
				})
			);

			/**
			 * @implementation {optional} {default_implementation_on_abstract_type}
			 */
			TextInput.prototype.createDefaultDef = function() {
				
				return TemplateFactory.createHostDef({
						nodeName : 'smart-input',
						sWrapper : createTextInputDef().getHostDef().sWrapper,
						states : [
							{valid : undefined},
							{errors : undefined}
						]
					}, null);
			};

			/**
			 * @implementation {pure_virtual_on_abstract_type} {chained_inherited_implementation}
			 */
			TextInput.prototype.createEvents = function() {
				VisibleStateComponent.prototype.createEvents.call(this);
				Components.ComponentStrokeAware.prototype.createEvents.call(this);
				this.createEvent('return_key');
			};

			/**
			 * @inherited_implementation_override
			 */
			TextInput.prototype.registerClickEvents = function() {};

			/**
			 * @implementation {pure_virtual_on_abstract_type}
			 */
			TextInput.prototype.registerKeyboardEvents = function(e) {
				Components.ComponentStrokeAware.prototype.registerKeyboardEvents.call(this);
				
				var self = this,
					input = this.view.subViewsHolder.memberViews[1];
			//	console.warn('TextInput :', 'where is "input"', input);
				
				// Stroke event listener & canAct management 
				input.getMasterNode().addEventListener('keyup', function(e) {
					e.stopPropagation();
					// allow triggering command by pressing "return" key
					if (e.keyCode === 13) {
						self.trigger('update', self.getValue());
						
						if (!self.command)
							return;
						
						if (self.command.act !== null) {
							var canActQuery = self.command.act();
							canActQuery.then(
								function(queryResult) {
									self.trigger('return', input.val());
								},
								function(queryResult) {
									self.view.getMasterNode()['disable'] = true;
									setTimeout(function() {
										self.view.getMasterNode()['disable'] = false;
									}, 255);
								}
							);
						}
						else
							self.trigger('return', input.val());
					}
				});
			};

			TextInput.prototype.getName = function() {
				return Registries.hostsDefinitionsCacheRegistry.cache[this._defUID].getHostDef().attributes.getObjectValueByKey('name');
			};

			TextInput.prototype.getValue = function() {
				return this.view.subViewsHolder.memberViews[1].getMasterNode().value;
			};

			TextInput.prototype.setValue = function(value) {
				this.view.subViewsHolder.memberViews[1].getMasterNode().value = value;
			};

			/**
			 * Hack due to the browser debouncing the attribute change (how ? needs investigation): 
			 * 		"hidden" is first set to true, as it reflects the "valid" state,
			 * 		and then setting it to null from the "errors" stream has no effect 
			 * 		TODO: check what happens in the stream, could come from a setAttribute / removeAttribute conflict
			 * 		seems forcing the attribute's value is better handled
			 */
			TextInput.prototype.forceShowTooltip = function() {
				this.view.subViewsHolder.lastMember().getMasterNode().hidden = null;
			};


			module.exports = TextInput;
			},{"formantCore":2,"src/UI/_interfaces/labelledTextInputInterface":9,"src/UI/_interfaces/locallySavableInputInterface":11,"src/UI/_interfaces/typedInputInterface":13,"src/UI/_interfaces/validableInterface":14,"src/UI/categories/basics/Tooltip/Tooltip":"src/UI/categories/basics/Tooltip/Tooltip.js","src/UI/categories/basics/VisibleStateComponent/VisibleStateComponent":"src/UI/categories/basics/VisibleStateComponent/VisibleStateComponent.js","src/UI/categories/forms/TextInput/componentDefs/textInputDef":32}],"src/UI/categories/forms/TextareaInput/TextareaInput.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor TextareaInput
			 * 
			 * This type is a good example of a high-level component (formal layer).
			 * More than a starting point, it's a quite complete implementation.
			 * It exposes the most part of the core functionalities, and it develops progressively.
			 * Nevertheless, it's not ready-to-go yet.
			 * At this extension stage, a component can implement a rich typology (a default "geography"
			 * of views and states), and a lot of applicative behaviors.
			 * It acquires its functionnalities through inheritance from rich abstract types  
			 * that already abstract some behaviors, it may acquire concrete behaviors from 
			 * some generic-implementations and eventually decorate itself through interfaces.
			 * Here's also a good place to register itself in the render queue, and then have its listeners
			 * attached to user-events.
			 * But, as said, it still needs a few more key-specializations.
			 * It's a rich base-class that is ideal for a concise-and-clear specialization.
			 * 
			 * [FIXED:not related to an unintented reference (the cause was an unintented cascade of merge in TemplateFactory.Single...streams)]
			 * ***the main risk at this stage being that the decorators (aka. here "interfaces")
			 * ***mutate the default definition.
			 * ***The specialized type must at least take care of this potential break (see e.g. UsernameInput).
			 * [PATCH METHOD REMAINS: eventual testing purpose]
			 */


			const {TemplateFactory, Registries, Components} = _dereq_('formantCore');

			const VisibleStateComponent = _dereq_('src/UI/categories/basics/VisibleStateComponent/VisibleStateComponent');
			const Tooltip = _dereq_('src/UI/categories/basics/Tooltip/Tooltip');

			const labelledTextareaInputInterface = _dereq_('src/UI/_interfaces/labelledTextareaInputInterface');
			const validableInterface = _dereq_('src/UI/_interfaces/validableInterface');

			const createTextareaInputDef = _dereq_('src/UI/categories/forms/TextInput/componentDefs/textInputDef');

			/**
			 * @constructor TextareaInput
			 * This type is not inheriting from TextInput cause it must not implement all the interfaces
			 * => it  has implications in the FormComponent when retrieving data (we test 2 cases of instanceof)
			 */
			var TextareaInput = function(def, parentView, parent) {
				this.defaultValidator = 'textInput';
				
				Components.ComponentStrokeAware.call(this, def, parentView, parent);
				this.objectType = 'TextareaInput';
				
				
			};
			/**
			 * @chained_inheritance TextareaInput <= VisibleStateComponent <= ComponentStrokeAware
			 */
			var proto_proto = Object.create(Components.ComponentStrokeAware.prototype);
			Object.assign(proto_proto, VisibleStateComponent.prototype);
			TextareaInput.prototype = Object.create(proto_proto);
			TextareaInput.prototype.objectType = 'TextareaInput';

			/**
			 * @interfaces_implementation
			 */
			TextareaInput = Components.ExtensibleObject.prototype.addInterface(TextareaInput, labelledTextareaInputInterface);
			//TextareaInput = Components.ExtensibleObject.prototype.addInterface(TextareaInput, typedInputInterface);
			TextareaInput = Components.ExtensibleObject.prototype.addInterface(TextareaInput, validableInterface);
			/**
			 * We need a Tooltip. Here is the Tooltip.
			 * Here we have something as cool from the point of view of the functionality, as from the "didactical" point of view:
			 */
			TextareaInput.prototype._asyncInitTasks.push(new TemplateFactory.TaskDefinition({
				type : 'lateAddChild',
				task : function(definition) {
						var basicDef = TemplateFactory.createHostDef({type : 'emptyDef'});
						new Tooltip(basicDef, this.view, this);
						this.view.subViewsHolder.addMemberView(this._children[this._children.length - 1].view);
					}
				})
			);

			/**
			 * @implementation {optional} {default_implementation_on_abstract_type}
			 */
			TextareaInput.prototype.createDefaultDef = function() {
				const dummyDef = createTextareaInputDef().getHostDef();
				const def = TemplateFactory.createHostDef({
					nodeName : 'smart-input',
					sWrapper : dummyDef.sWrapper,
					states : [
						{valid : undefined},
						{errors : undefined}
					]
				}, null);
				return def;
			};

			/**
			 * @implementation {pure_virtual_on_abstract_type} {chained_inherited_implementation}
			 */
			TextareaInput.prototype.createEvents = function() {
				VisibleStateComponent.prototype.createEvents.call(this);
				Components.ComponentStrokeAware.prototype.createEvents.call(this);
				this.createEvent('return_key');
			};

			/**
			 * @inherited_implementation_override
			 */
			TextareaInput.prototype.registerClickEvents = function() {};

			/**
			 * @implementation {pure_virtual_on_abstract_type}
			 */
			TextareaInput.prototype.registerKeyboardEvents = function(e) {
				Components.ComponentStrokeAware.prototype.registerKeyboardEvents.call(this);
				var self = this,
					input = this.view.subViewsHolder.memberViews[1];
			//	console.warn('TextareaInput :', 'where is "input"', input);
				
				// Stroke event listener & canAct management 
				input.getMasterNode().addEventListener('keyup', function(e) {
					e.stopPropagation();
					
					// allow triggering command by pressing "return" key
					if (e.keyCode === 13) {
						if (self.command.act !== null) {
							var canActQuery = self.command.act();
							canActQuery.then(
								function(queryResult) {
									self.trigger('return', input.val());
								},
								function(queryResult) {
									self.view.getMasterNode()['disable'] = true;
									setTimeout(function() {
										self.view.getMasterNode()['disable'] = false;
									}, 255);
								}
							);
						}
						else
							self.trigger('return', input.val());
					}
				});
			};

			TextareaInput.prototype.getName = function() {
				return Registries.hostsDefinitionsCacheRegistry.cache[this._defUID].getHostDef().attributes.getObjectValueByKey('name');
			};

			TextareaInput.prototype.getValue = function() {
				return this.view.subViewsHolder.memberViews[1].getMasterNode().value;
			};

			TextareaInput.prototype.setValue = function(value) {
				this.view.subViewsHolder.memberViews[1].getMasterNode().value = value;
			};

			/**
			 * Hack due to the browser debouncing the attribute change (triggered on focus lost): 
			 * 		"hidden" is first set to true, as it reflects the "valid" state,
			 * 		and then setting it to null from the "errors" stream has no effect 
			 * 		TODO: check what happens in the stream, could come from a setAttribute / removeAttribute conflict
			 * 		seems forcing the attribute's value is better handled
			 */
			TextareaInput.prototype.forceShowTooltip = function() {
				this.view.subViewsHolder.lastMember().getMasterNode().hidden = null;
			};

			TextareaInput.prototype.setTooltipContentAndShow = function(content) {
				this.streams['errors'].value = ['', content];
				this.view.subViewsHolder.lastMember().getMasterNode().hidden = null;
			};


			module.exports = TextareaInput;
			},{"formantCore":2,"src/UI/_interfaces/labelledTextareaInputInterface":10,"src/UI/_interfaces/validableInterface":14,"src/UI/categories/basics/Tooltip/Tooltip":"src/UI/categories/basics/Tooltip/Tooltip.js","src/UI/categories/basics/VisibleStateComponent/VisibleStateComponent":"src/UI/categories/basics/VisibleStateComponent/VisibleStateComponent.js","src/UI/categories/forms/TextInput/componentDefs/textInputDef":32}],"src/UI/categories/forms/UsernameInput/UsernameInput.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor UsernameInput
			*/

			//const Component = require('src/core/Component');
			const TextInput = _dereq_('src/UI/categories/forms/TextInput/TextInput');


			const UsernameInput = function() {
				TextInput.apply(this, arguments);
				this.objectType = 'UsernameInput';
			};
			UsernameInput.prototype = Object.create(TextInput.prototype);
			UsernameInput.prototype.objectType = 'UsernameInput';
			//Component.ExtensibleObject.prototype.getCleanDefAfterExtension(UsernameInput);

			module.exports = UsernameInput;
			},{"src/UI/categories/forms/TextInput/TextInput":"src/UI/categories/forms/TextInput/TextInput.js"}],"src/UI/categories/specials/SourceCodeViewCleanerRouter":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @module SourceCodeViewRouter 
			 */

			//var TemplateFactory = require('src/core/TemplateFactory');
			const SourceInjectionUtility = _dereq_('src/UI/categories/specials/SourceInjectionUtility');
			const ComponentTabPanel = _dereq_('src/UI/categories/tabs/ComponentTabPanel/ComponentTabPanel');
			const tabPanelDefinition = _dereq_('src/UI/categories/tabs/TabPanel/componentDefs/TabPanelHostDef');


			const {App} = _dereq_('formantCore');
			const prismCSS = _dereq_('css/prism_highlighter_in_code.css');
			//const sourceCodeIndex = require('cache/stringifiedSources').sourcesAsStringArrays;

			const SourceCodeViewRouter = function(projectKeyword, parentView) {
				const sourceCodeIndex = App.data.stringifiedSources;
				const prismStyleElem = document.createElement('style');
				prismStyleElem.innerHTML = prismCSS;
				
				// We're defining that each time, as it's a complete def hosting a list:
				// The "each" property won't be re-initialized, so we need a new instance each time.
				const defForStyle = tabPanelDefinition();
				defForStyle.lists[0].getHostDef().template.getHostDef().sOverride = [
					{
						selector : ':host tab-header',
						fontSize : '13px',
						lineHeight : '15px',
						height : '28px',
						marginTop : '7px',
						borderRadius : '7px',
						borderWidth : '1px',
						backgroundColor : 'transparent'
					},
					{
						selector : ':host',
						backgroundColor : '#282828'
					}
				];
				
				function init(containerIdOrContainerNode) {
					if (!sourceCodeIndex[projectKeyword]) {
						console.warn('source code for ' + projectKeyword + ' not found');
						return;
					}
					
					let headerTitle = '';
					
					// Instanciate a full panel which shall contain a tab
					// for each source-file embedded in the source-files map
					// by the bundler
					const panelObj = new ComponentTabPanel(defForStyle, parentView);
					
					// Loop on each source file
					sourceCodeIndex[projectKeyword].forEach(function(fileDescObj, key) {
						const prettyDefNameRegex = new RegExp(projectKeyword + '(.*Def.*)', 'i');
						
						// tabKeyword is an empty string, cause we're following the existing signature for "router" functions
						// (this routerMock is called in ComponentSet)
						const routerMock = function(tabKeyword, tabContentView) {
							return {
								init : function() {
									tabContentView.getWrappingNode().appendChild(prismStyleElem.cloneNode(true));
									
									// No real need to define a component's template here
									// as it would be cumbersome to put the Prism stylesheet in DB
									// (see previuous line : we inject it from a in-memory stylesheet)
									var pre = document.createElement('pre');
									var code = document.createElement('code');
									// from the doc of prism.js:
									// the <pre> will automatically get the language-xxxx class (if it doesn’t already have it) and will be styled as a code block.
									pre.className = 'language-javascript';
									code.className = 'language-js';
									pre.appendChild(code);
									
									code.innerHTML = SourceInjectionUtility.prototype.cleanSourceCode(fileDescObj.content);
									tabContentView.getWrappingNode().appendChild(pre);
									Prism.highlightElement(code);
								}
							}
						};
						
						if (fileDescObj.name.match(/Router|Launcher/)) {
							if (sourceCodeIndex[projectKeyword].length > 1)
								headerTitle = 'Launcher';
						}
						else if ((headerTitle = fileDescObj.name.match(prettyDefNameRegex)))
							headerTitle = '{template} ' + headerTitle[0];// + '</i>';
						else
							headerTitle = fileDescObj.name;
						
						// add a tab
						panelObj.addTabForComponent(headerTitle, routerMock);
						
						// Prepare possibility for styling & roughly bind a click event on the tab header
						const lastTabIdx = panelObj._children[0]._children.length - 1;
						panelObj._children[0]._children[lastTabIdx].view.getMasterNode().setAttribute('is-codeviewheader', 'true');
						// Hide enpty headers
						if (!headerTitle.length)
							panelObj._children[0]._children[lastTabIdx].view.getMasterNode().setAttribute('hidden', 'true');
						panelObj._children[0]._children[lastTabIdx].addEventListener('update', function(e) {
							panelObj.ignitePanel(lastTabIdx);
							this.childButtonsHighlightLoop(lastTabIdx);
						}.bind(panelObj._children[0]));
						
						panelObj._children[1]._children[lastTabIdx].view.getMasterNode().setAttribute('is-codeview', 'true');
						
						// ignite the first tab
						if (key === 0)
							panelObj.ignitePanel(key);
					});
				}
				
				return {
					init : init
				}
			};

			module.exports = SourceCodeViewRouter;
			},{"css/prism_highlighter_in_code.css":5,"formantCore":2,"src/UI/categories/specials/SourceInjectionUtility":"src/UI/categories/specials/SourceInjectionUtility","src/UI/categories/tabs/ComponentTabPanel/ComponentTabPanel":"src/UI/categories/tabs/ComponentTabPanel/ComponentTabPanel.js","src/UI/categories/tabs/TabPanel/componentDefs/TabPanelHostDef":35}],"src/UI/categories/specials/SourceCodeViewRouterForExternalSources":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @module SourceCodeViewRouter 
			 */

			const {App} = _dereq_('formantCore');
			const prismCSS = _dereq_('css/prism_highlighter_in_code.css');
			//const sourceCodeIndex = require('cache/stringifiedSources').sourcesAsStringArrays;
			const sourceCodeIndex = App.data.stringifiedSources;

			var SourceCodeViewRouter = function() {
				var prismStyleElem = document.createElement('style');
				prismStyleElem.innerHTML = prismCSS;
				
				function init(containerIdOrContainerNode) {
					return function(projectKeyword, parentView) {
						
						var headerTitle;
						var panelObj = new App.componentTypes.TabPanel(null, parentView);
						
						
						for (let projectName in sourceCodeIndex) {
							if (projectName === projectKeyword) {
								sourceCodeIndex[projectName].forEach(function(fileDescObj) {

									var prettyDefNameRegex = new RegExp(projectKeyword + '(.*Def.*)', 'i');
									var routerMock = {
											init : function(parentView) {
												parentView.getRoot().append(prismStyleElem.cloneNode(true));
												
												var pre = document.createElement('pre');
												var code = document.createElement('code');
												pre.className = 'language-javascript';
												code.className = 'language-javascript';
												pre.appendChild(code);
												code.innerHTML = fileDescObj.content;
												parentView.getRoot().append(pre);
											}
									};
									if (fileDescObj.name.match(/Router/))
										headerTitle = 'Launcher';
									else if ((headerTitle = fileDescObj.name.match(prettyDefNameRegex)))
										headerTitle = '{definition} <i>' + headerTitle[1].slice(-10) + '</i>';
									else
										return;
									
									panelObj.addTabForComponent(headerTitle, routerMock);
									
									// Moving-on Styling & Rough click event binding on the tab header
									var lastTabIdx = panelObj._children[0]._children.length - 1;
									panelObj._children[0]._children[lastTabIdx].view.getMasterNode().setAttribute('is-codeviewheader', 'true');
									panelObj._children[1]._children[lastTabIdx].view.getMasterNode().setAttribute('is-codeview', 'true');
									panelObj._children[0]._children[lastTabIdx].addEventListener('update', function(e) {
										panelObj.ignitePanel(lastTabIdx);
										this.childButtonsHighlightLoop(lastTabIdx);
									}.bind(panelObj._children[0]));
								});
							}
						}
					};
				}
				
				return {
					init : init
				}
			};

			module.exports = SourceCodeViewRouter();
			},{"css/prism_highlighter_in_code.css":5,"formantCore":2}],"src/UI/categories/specials/SourceCodeViewRouter":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @module SourceCodeViewRouter 
			 */

			const ComponentTabPanel = _dereq_('src/UI/categories/tabs/ComponentTabPanel/ComponentTabPanel');
			const tabPanelDefinition = _dereq_('src/UI/categories/tabs/TabPanel/componentDefs/TabPanelHostDef');

			// We're defining that here, in order NOT to re-implement a complete def
			// Let's see how it works... (this "router" file has a very specific use-case, after all)
			const defForStyle = tabPanelDefinition();
			defForStyle.lists[0].getHostDef().template.getHostDef().sOverride = [
				{
					selector : ':host tab-header',
					fontSize : '13px',
					lineHeight : '15px',
					height : '28px',
					marginTop : '7px',
					borderRadius : '7px',
					borderWidth : '1px',
					backgroundColor : 'transparent'
				},
				{
					selector : ':host',
					backgroundColor : '#282828'
				}
			];

			const {App} = _dereq_('formantCore');
			const prismCSS = _dereq_('css/prism_highlighter_in_code.css');
			//const sourceCodeIndex = require('cache/stringifiedSources').sourcesAsStringArrays;
			const sourceCodeIndex = App.data.stringifiedSources;

			var SourceCodeViewRouter = function(projectKeyword, parentView) {
				var prismStyleElem = document.createElement('style');
				prismStyleElem.innerHTML = prismCSS;
				
				function init(containerIdOrContainerNode) {
					if (!sourceCodeIndex[projectKeyword]) {
						console.warn('source code for ' + projectKeyword + ' not found');
						return;
					}
					
					var headerTitle;
					
					// Instanciate a full panel which shall contain a tab
					// for each source-file embedded in the source-files map
					// by the bundler
					var panelObj = new ComponentTabPanel(defForStyle, parentView);
					
					// Loop on each source file
					sourceCodeIndex[projectKeyword].forEach(function(fileDescObj, key) {
						var prettyDefNameRegex = new RegExp(projectKeyword + '(.*Def.*)', 'i');
						
						// tabKeyword is an empty string, cause we're following the existing signature for "router" functions
						// (this routerMock is called in ComponentSet)
						var routerMock = function(tabKeyword, tabContentView) {
							return {
								init : function() {
									tabContentView.getWrappingNode().appendChild(prismStyleElem.cloneNode(true));
									
									// No real need to define a component's template here
									// as it would be cumbersome to put the Prism stylesheet in DB
									// (see previuous line : we inject it from a in-memory stylesheet)
									var pre = document.createElement('pre');
									var code = document.createElement('code');
									// from the doc of prism.js:
									// the <pre> will automatically get the language-xxxx class (if it doesn’t already have it) and will be styled as a code block.
									pre.className = 'language-javascript';
									code.className = 'language-js';
									pre.appendChild(code);
									
									code.innerHTML = fileDescObj.content;
									tabContentView.getWrappingNode().appendChild(pre);
									Prism.highlightElement(code);
								}
							}
						};
						
						if (fileDescObj.name.match(/Router|Launcher/))
							headerTitle = 'Launcher';
						else if ((headerTitle = fileDescObj.name.match(prettyDefNameRegex)))
							headerTitle = '{template} ' + headerTitle[1];// + '</i>';
						else
							headerTitle = fileDescObj.name;
						
						// add a tab
						panelObj.addTabForComponent(headerTitle, routerMock);
						
						// Prepare possibility for styling & roughly bind a click event on the tab header
						var lastTabIdx = panelObj._children[0]._children.length - 1;
						panelObj._children[0]._children[lastTabIdx].view.getMasterNode().setAttribute('is-codeviewheader', 'true');
						panelObj._children[1]._children[lastTabIdx].view.getMasterNode().setAttribute('is-codeview', 'true');
						panelObj._children[0]._children[lastTabIdx].addEventListener('update', function(e) {
							panelObj.ignitePanel(lastTabIdx);
							this.childButtonsHighlightLoop(lastTabIdx);
						}.bind(panelObj._children[0]));
						
						// ignite the first tab
						if (key === 0)
							panelObj.ignitePanel(key);
					});
				}
				
				return {
					init : init
				}
			};

			module.exports = SourceCodeViewRouter;
			},{"css/prism_highlighter_in_code.css":5,"formantCore":2,"src/UI/categories/tabs/ComponentTabPanel/ComponentTabPanel":"src/UI/categories/tabs/ComponentTabPanel/ComponentTabPanel.js","src/UI/categories/tabs/TabPanel/componentDefs/TabPanelHostDef":35}],"src/UI/categories/specials/SourceInjectionUtility":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor SourceInjectionUtility
			 */

			const SourceInjectionUtility = function(rawSources, scopedElement) {
			//	console.log(rawSources['stylingBasics'][0].content)
				this.sourcePlaceholderRegEx = /\[Source\:(.*?)(:(.*?))?\]/gi;
				let pageContent = scopedElement.innerHTML;
				
				this.newInnerHTML = '';
				let sourceCursor = 0;
				const sourceNames = Object.keys(rawSources);
				while(sourceCursor < sourceNames.length
						&& (pageContent = this.replaceNextSourcePlaceholder(
							pageContent,
							sourceNames[sourceCursor],
							rawSources[sourceNames[sourceCursor]]
						)
					)) {
					this.newInnerHTML = pageContent;
					sourceCursor++;
				}
			};

			SourceInjectionUtility.prototype.replaceNextSourcePlaceholder = function(pageContent, currentFlag, sourceCode) {
				let matchedSubFlag = '';
				const matched = Array.from(pageContent.matchAll(this.sourcePlaceholderRegEx));
				let foundFlag = '', foundSubFlag = '', newPageContent = pageContent;
				
				if (matched.length) {
					sourceCode.forEach(function(source, key) {
						matched.forEach(function(match) {
							foundFlag = match[1];
							foundSubFlag = match[3];
			//				console.log(foundFlag, currentFlag);
							if (foundSubFlag && foundSubFlag === source.name) {
								newPageContent = this.effectiveReplaceContent(newPageContent, match[0], source.content);
							}
							else if (foundFlag === currentFlag) {
			//					console.log(currentFlag);
								newPageContent = this.effectiveReplaceContent(newPageContent, match[0], source.content);
							}
						}, this);
					}, this);
				}
				return newPageContent.length ? newPageContent : pageContent;
			};

			SourceInjectionUtility.prototype.effectiveReplaceContent = function (pageContent, match, sourceCode) {
				const cleanedCode = this.cleanSourceCode(sourceCode);
				return pageContent.replace(
					match,
					this.highlightSourceCode(
						cleanedCode
					)
				);
			};

			SourceInjectionUtility.prototype.cleanSourceCode = function (codeAsString) {
				// Multiline comments won't be cought if they're not in the first level of indentation
				// It's a feature: comments inside the code are meant to persist in the doc
				const multilineCommentRegEx = /(\n\r?)+\/\*(.|[\n\r\s])*?\*\//gi;
				const initiatorRegEx = /(\n\r?)+module.exports.*\n?\s*return.*\n?\s*init.*\n*/gi;
				const endingsRegEx = /\s*\}\n?\s*\}\n?\s*\}\n*\s*$/i;
				const indentationRegEx = /^\t{3}/gmi;
				const lastReturnRegEx = /(return\s)(App\.renderDOM\()(\w+)((.|[\n\s])*)$/i;
				
				codeAsString = codeAsString.replace(multilineCommentRegEx, '');
				codeAsString = codeAsString.replace(initiatorRegEx, '');
				codeAsString = codeAsString.replace(endingsRegEx, '');
				codeAsString = codeAsString.replace(indentationRegEx, '');
				return codeAsString.replace(lastReturnRegEx, '$2\'body\'$4');
			};

			SourceInjectionUtility.prototype.highlightSourceCode = function (codeAsString) {
				const codeElem = document.createElement('code');
				codeElem.innerHTML = codeAsString;
				codeElem.className = 'language-js';
				const preElem = document.createElement('div');
				preElem.appendChild(codeElem);
				Prism.highlightElement(codeElem);
				preElem.className = 'spip_code';
				return preElem.outerHTML;
			};

			module.exports = SourceInjectionUtility;
			},{}],"src/UI/categories/tables/ExtensibleTable/ExtensibleTable.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor ExtensibleTable
			*/

			const {TemplateFactory, Components} = _dereq_('formantCore');
			const SpinnerComponent = _dereq_('src/UI/categories/utilities/SpinnerComponent/SpinnerComponent');

			const createExtensibleTableDef = _dereq_('src/UI/categories/tables/ExtensibleTable/componentDefs/extensibleTableDef');
			const createExtensibleTableSlotsDef = _dereq_('src/UI/categories/tables/ExtensibleTable/componentDefs/extensibleTableSlotsDef');


			const ExtensibleTable = function(def, parentView, parent, slotsCount, slotsDef) {
				var stdDefinition = def && def.getGroupHostDef().nodeName ? def : createExtensibleTableDef();
				this.slotsDef = createExtensibleTableSlotsDef();

				this.listTemplate = TemplateFactory.createDef({ type: 'ComponentList' });
				this.listTemplate.getHostDef().each = this.pseudoModel;
				
				Components.CompositorComponent.call(this, stdDefinition, parentView, parent, slotsCount, slotsDef);
				this.pseudoModel = [];
				this.objectType = 'ExtensibleTable';
			};
			ExtensibleTable.prototype = Object.create(Components.CompositorComponent.prototype);
			ExtensibleTable.prototype.objectType = 'ExtensibleTable';
			ExtensibleTable.prototype.extendsCore = 'AbstractTable';

			ExtensibleTable.prototype._asyncInitTasks = [];
			ExtensibleTable.prototype._asyncInitTasks.push(new TemplateFactory.TaskDefinition({
				type : 'lateAddChild',
				task : function(definition) {
			//			var basicDef = TemplateFactory.createDef({type : 'emptyDef'}, 'SpinnerUsedByExtensibleTable');
			//			this.pushChild(new SpinnerComponent(basicDef, this.view, this));
			//			this.view.subViewsHolder.addMemberView(this._children[this._children.length - 1].view);
					}
				})
			);

			ExtensibleTable.prototype.pushToSlotFromText = function(slotNbr, content) {
				// Here, newItem() depends on the type given in the ctor... or afterwards with setSchema()
				this.typedSlots[slotNbr].push(this.typedSlots[slotNbr].newItem(content));
				
				if (slotNbr === 0) {
					var lastChild = this._children[0].getLastChild();
					lastChild.getMasterNode().addEventListener('mousedown', function(e) {
						this.trigger('header_clicked', {self_key : lastChild._key});
						this.typedSlots[1].sortForPropHostingArrayOnArrayIdx('rowContentAsArray', lastChild._key, lastChild.streams.sortedasc.value ? 'invert' : null);
						this._children[0].childButtonsSortedLoop(lastChild._key, lastChild.streams.sortedasc.value ? 'desc' : 'asc');
					}.bind(this));
				}
			};

			ExtensibleTable.prototype.pushApplyToSlot = function(slotNbr, contentAsArray) {
				var lastChildIndex = this._children[0]._children.length;
				
				// Here, newItem() depends on the type given in the ctor... or afterwards with setSchema()
				var cAsArray = contentAsArray.map(function(value, key) {
					if (value instanceof this.typedSlots[1].Item)
						return value;
					else if (Array.isArray(value) || typeof value === 'string')
						return this.typedSlots[slotNbr].newItem(value);
					else if (Object.getPrototypeOf(value) === Object.prototype) {
						const values = Object.values(value);
						return this.typedSlots[slotNbr].newItem(values);
					}
				}, this);
				
				this.typedSlots[slotNbr].pushApply(cAsArray);
				
				if (slotNbr === 0) {
					for (let i = lastChildIndex; i < this._children[0]._children.length; i++) {
						this._children[0]._children[i].view.getMasterNode().addEventListener('mousedown', function(e) {
							this.trigger('header_clicked', {self_key : this._children[0]._children[i]._key});
							this.typedSlots[1].sortForPropHostingArrayOnArrayIdx('rowContentAsArray', this._children[0]._children[i]._key, this._children[0]._children[i].streams.sortedasc.value ? 'invert' : null);
							this._children[0].childButtonsSortedLoop(this._children[0]._children[i]._key, this._children[0]._children[i].streams.sortedasc.value ? 'desc' : 'asc');
						}.bind(this));
					}
				}
			};

			ExtensibleTable.prototype.addHeaders = function(contentAsArray) {
				this.pushApplyToSlot(0, contentAsArray);
			};

			ExtensibleTable.prototype.acquireData  = function(dataAsArrayOfObjects) {
				this.pushApplyToSlot(1, dataAsArrayOfObjects);
			};
				

			module.exports = ExtensibleTable;

			},{"formantCore":2,"src/UI/categories/tables/ExtensibleTable/componentDefs/extensibleTableDef":33,"src/UI/categories/tables/ExtensibleTable/componentDefs/extensibleTableSlotsDef":34,"src/UI/categories/utilities/SpinnerComponent/SpinnerComponent":37}],"src/UI/categories/tabs/ComponentTabPanel/ComponentTabPanel.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @constructor ComponentTabPanel
			*/

			//var createComponentTabPanelHostDef = require('src/UI/categories/tabs/ComponentTabPanel/componentDefs/ComponentTabPanelHostDef');
			//var createComponentTabPanelSlotsDef = require('src/UI/categories/tabs/ComponentTabPanel/componentDefs//ComponentTabPanelSlotsDef');

			//const {Components} = require('formantCore');
			var TabPanel = _dereq_('src/UI/categories/tabs/TabPanel/TabPanel');

			var ComponentTabPanel = function(definition, parentView, parent, slotsCount, slotsDef) {
				TabPanel.call(this, definition, parentView, parent, slotsCount, slotsDef);
				this.objectType = 'ComponentTabPanel';
			};
			ComponentTabPanel.prototype = Object.create(TabPanel.prototype);
			ComponentTabPanel.prototype.objectType = 'ComponentTabPanel';
			ComponentTabPanel.prototype.extends = 'TabPanel';


			ComponentTabPanel.prototype.affectSlots = function() {
				this.typedSlots.push(new this.rDataset(
						this._children[0],
						this._children[0],
						this.slotsDef['headerDef'],
						[])
					);
				
				this.typedSlots.push(new this.cSet(this._children[1], this.slotsDef['sectionDef']));
				
				return true;
			};


			ComponentTabPanel.prototype.affectSlot = function(slotNumber, slotDef) {
				this.typedSlots[slotNumber] = new this.cSet(this._children[slotNumber], slotDef);
				this._children[slotNumber].view.styleHook.s = slotDef.getHostDef().sWrapper.clone();
			};

			ComponentTabPanel.prototype.pushToSlotFromComponent = function(routerObj, routerKeyword) {
				this.typedSlots[1].push(this.typedSlots[1].newItem(routerObj, routerKeyword));
			};

			ComponentTabPanel.prototype.addTabForComponent = function(headerText, routerObj, routerKeyword) {
				this.pushToSlotFromText(0, headerText);
				this.pushToSlotFromComponent(routerObj, routerKeyword || '');
				
				this.getLastHeader().addEventListener('update', this.updateHandler.bind(this));
				return this;
			};

			ComponentTabPanel.prototype.updateHandler = function(e) {
				this.ignitePanel(e.data.self_key);
			};

			ComponentTabPanel.prototype.ignitePanel = function(idx) {
				this.typedSlots[1].ignite(idx);
				this.getHeaders().childButtonsHighlightLoop(idx);
			};



			module.exports = ComponentTabPanel;
			},{"src/UI/categories/tabs/TabPanel/TabPanel":"src/UI/categories/tabs/TabPanel/TabPanel.js"}],"src/UI/categories/tabs/TabPanel/TabPanel.js":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @abstract @constructor TabPanel
			 * ComponentTabPanel inherits from this type and is a smarter implementation
			 * that is able to initialize a whole application by itself
			*/

			const {TemplateFactory, Components} = _dereq_('formantCore');

			var createTabPanelHostDef = _dereq_('src/UI/categories/tabs/TabPanel/componentDefs/TabPanelHostDef');
			var createTabPanelSlotsDef = _dereq_('src/UI/categories/tabs/TabPanel/componentDefs/TabPanelSlotsDef');

			var TabPanel = function(def, parentView, parent, slotsCount, slotsDef) {
			//	console.log(def, parentView, parent, slotsCount, slotsDef);
				def = def || createTabPanelHostDef();
				this.slotsCount = slotsCount || this.slotsCount || 2;
				this.slotsDef = slotsDef || this.slotsDef || createTabPanelSlotsDef();
				
				// As in the majority of the components, custom styling is thought to be made via a sOverride
				this.slotsDef.headerDef.getHostDef().sWrapper = createTabPanelSlotsDef().headerDef.getHostDef().sWrapper;

				Components.CompositorComponent.call(this, def, parentView, parent);
				this.objectType = 'TabPanel';
				
				// Here, the typedSlots solely have a schema. 
				// In ComponentTabPanel, the typedSlots[1] makes this abstract class smarter :
				//  it has a cSet as "self" and a custom method (pushToSlotFromComponent()) to access it.
				this.typedSlots[0].setSchema(['headerTitle']);
				this.typedSlots[1].setSchema(['panelTitle']);
			}; 
			TabPanel.prototype = Object.create(Components.CompositorComponent.prototype);
			TabPanel.prototype.objectType = 'TabPanel';
			// This Dependancy Injection mecanism is called in dependancyInjector.js (index.js requires it, and it's a mandatory include, so the DI shall be permanent)
			TabPanel.prototype.extendsCore = 'LazySlottedCompoundComponent';


			/**
			 * No default def, as we ALWAYS need a pretty complex definition,
			 * so, the ctor handles that.
			 * (and thus, an override MUST be made of a complete new def,
			 * based on the one provided by the component itself)
			 */
			//TabPanel.prototype.createDefaultDef = function() {
			//	return createTabPanelHostDef();
			//}

			TabPanel.prototype.addTabs = function(tabName) { //tabNameX, tabNameY, ...
				this.addPairedItems.apply(this, arguments);
				this.getLastHeader().addEventListener('update', this.updateHandler.bind(this));
			};

			TabPanel.prototype.getHeaders = function() {
				return this._children[0];
			};
			TabPanel.prototype.getPanels = function() {
				return this._children[1];
			};
			TabPanel.prototype.getHeader = function(idx) {
				return this._children[0]._children[idx];
			};
			TabPanel.prototype.getLastHeader = function() {
				return this._children[0]._children[this._children[0]._children.length - 1];
			};
			TabPanel.prototype.getPanel = function(idx) {
				return this._children[1]._children[idx];
			};
			TabPanel.prototype.getLastPanel = function() {
				return this._children[1]._children[this._children[1]._children.length - 1];
			};
			TabPanel.prototype.getSmartTabsInPanel = function(idx) {
				return this._children[1]._children[idx]._children[0];
			};
			TabPanel.prototype.getSmartTabsInLastPanel = function() {
				return this._children[1]._children[this._children[1]._children.length - 1]._children[0];
			};

			TabPanel.prototype.updateHandler = function(e) {
				this.ignitePanel(e.data.self_key);
			};

			TabPanel.prototype.ignitePanel = function(idx) {
				this._children[1]._children.forEach(function(child, key) {
					if (key === idx)
						child.view.getMasterNode().style.display = 'flex';
					else
						child.view.getMasterNode().style.display = 'none';
				});
				this.getHeaders().childButtonsHighlightLoop(idx);
			};


			module.exports = TabPanel;
			},{"formantCore":2,"src/UI/categories/tabs/TabPanel/componentDefs/TabPanelHostDef":35,"src/UI/categories/tabs/TabPanel/componentDefs/TabPanelSlotsDef":36}],"src/UI/categories/validators/apipasswordInputDef":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @programmatic_validator for PasswordInput
			 */


			var validator = (function(uniqueID, options) {
				
				// Password validation
				var constraints = {
					format : {
						pattern : /[a-zA-Z_]+/,
						message: ["^The Password must contain only alphanumeric or underscore characters"]
					},
					length : {
						minimum : 8,
						message : '^The Password must be at least 8 characters long'
					},
					presence : {
						allowEmpty: false,
						message: "^The Password is required"	// when validating single values, validate.js neither know which name to use nor uses the default message, 
					}
				};
				
				return constraints;
			})();

			module.exports = validator;
			},{}],"src/UI/categories/validators/emailInputDef":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @programmatic_validator for EMailInput
			 */


			var validator = (function(uniqueID, options) {
				
				// E-Mail validation
				var constraints = {
					email : {
						message: "^This address doesn't look like a valid E-Mail"
					},
					presence : {
						allowEmpty: false,
						message: "^The E-Mail address is required"	// when validating single values, validate.js neither know which name to use nor uses the default message, 
					}
				};
				
				return constraints;
			})();

			module.exports = validator;
			},{}],"src/UI/categories/validators/filenameInputDef":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @programmatic_validator for FilenameInput
			 */


			var validator = (function(uniqueID, options) {
				
				// Filename validation
				var constraints = {
					format : {
						pattern : /[a-zA-Z0-9_-]+\.[a-zA-Z0-9]{3,4}/,
						message: ['^This doesn\'t look like a valid filename : "name.ext"']
					},
					presence : {
						allowEmpty: false,
						message: "^The Filename is required"	// when validating single values, validate.js neither know which name to use nor uses the default message, 
					}
				};
				
				return constraints;
			})();

			module.exports = validator;
			},{}],"src/UI/categories/validators/mapcontentInputDef":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @programmatic_validator for TextInput
			 */


			var validator = (function(uniqueID, options) {
				
				// Username validation
				var constraints = {
					length : {
						minimum : 1,
						message : '^No content Found'
					}
				};
				
				return constraints;
			})();

			module.exports = validator;
			},{}],"src/UI/categories/validators/passwordInputDef":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @programmatic_validator for PasswordInput
			 */


			var validator = (function(uniqueID, options) {
				
				// Password validation
				var constraints = {
					format : {
						pattern : /^(?:[a-z]+[a-zA-Z]*(?:@|\?|\||\#)+\w*[A-Z]+[a-zA-Z]*|[a-zA-Z]*[A-Z]+[a-zA-Z]*(?:@|\?|\||\#)+\w*[a-z]+)+[a-zA-Z]+$/,
						message: ["^The Password must contain one of these special characters : @, ?, |, # (at a position -not- being start or end)",
								"The Password must contain lower -and- upper case"]
					},
					length : {
						minimum : 8,
						message : '^The Password must be at least 8 characters long'
					},
					presence : {
						allowEmpty: false,
						message: "^The Password is required"	// when validating single values, validate.js neither know which name to use nor uses the default message, 
					}
				};
				
				return constraints;
			})();

			module.exports = validator;
			},{}],"src/UI/categories/validators/usernameInputDef":[function(_dereq_,module,exports){
			"use strict";
			/**
			 * @programmatic_validator for TextInput
			 */


			var validator = (function(uniqueID, options) {
				
				// Username validation
				var constraints = {
			//		length : {
			//			minimum : 0,
			//			message : '^The Username is optional.'
			//		},
					presence : {
						allowEmpty: true,
						message : '^The Username is optional.'
					}
				};
				
				return constraints;
			})();

			module.exports = validator;
			},{}]},{},[1])(1)
			});
			
		} (formant$1, formant$1.exports));
		return formant$1.exports;
	}

	var constants_1;
	var hasRequiredConstants;

	function requireConstants () {
		if (hasRequiredConstants) return constants_1;
		hasRequiredConstants = 1;
		const constants = {
		    api_url : 'http://127.0.0.1:51312',
		    endpoints : {
		        run : '/start_worker',
		        stop : '/stop_worker',
		        status : '/status_worker',
		        restart : null,
		    },
		    workers : {
		        server : 'server',
		        playback : 'playback',
		        client : 'client',
		    },
		    statuses : {
		        running : 'running',
		        stopped : 'stopped',
		        error : 'error'
		    },
		    successTriggers : {
		        server : ['INFO : Using cpu for inference.', 'INFO : SSH Client closed'],
		        playback : ['INFO : Server listening on port 9999...', 'INFO : Exit flag reset.'],
		        client : ['INFO : Connected to video playback socket.', 'INFO : Client subprocess terminated.']
		    }
		};

		constants_1 = constants;
		return constants_1;
	}

	var button_template;
	var hasRequiredButton_template;

	function requireButton_template () {
		if (hasRequiredButton_template) return button_template;
		hasRequiredButton_template = 1;
		const {TemplateFactory} = requireFormant();
		const {endpoints} = requireConstants();

		function get_button_templates(worker) {
		    const button_templates = {};

		    Object.keys(endpoints).forEach(function(endpointName) {

		        button_templates[endpointName] = TemplateFactory.createDef({
		            host : TemplateFactory.createHostDef({
		                type : 'ClickableComponent',
		                nodeName : 'button',
		                attributes : [
		                    {className : endpointName + '_button'},
		                    {textContent : endpointName}
		                ]
		            })
		        });
		    });

		    return button_templates
		}

		button_template = get_button_templates;
		return button_template;
	}

	var api;
	var hasRequiredApi;

	function requireApi () {
		if (hasRequiredApi) return api;
		hasRequiredApi = 1;
		const {api_url, endpoints} = requireConstants();

		const get_api_requests = function(worker) {
		    const api_request = {};

		    Object.keys(endpoints).forEach(function(endpointName) {
		        const path = endpoints[endpointName];

		        api_request[endpointName] = function () {
		    
		            return fetch(api_url + path, {
		                method: 'POST',
		                headers: {
		                'Accept': 'application/json',
		                'Content-Type': 'application/json'
		                },
		                body: JSON.stringify({
		                    'name' : worker
		                })
		            }).catch(function(error) {
		                console.error('Error requesting the orchestrator, it may not be running');
		            });

		        };
		    });

		    // console.log(api_request)
		    return api_request
		};

		api = get_api_requests;
		return api;
	}

	var UIManager_1;
	var hasRequiredUIManager;

	function requireUIManager () {
		if (hasRequiredUIManager) return UIManager_1;
		hasRequiredUIManager = 1;
		const {statuses, workers} = requireConstants();

		class UIManager {
		    datasets = {
		        statuses : {},
		        workers : {}
		    }
		    logDOMElements = {}
		    buttonRefreshStreams = {}
		    constructor() {
		        Object.keys(workers).forEach(function(workerName) {
		            this.datasets.workers[workerName] = null;
		        }, this);
		        Object.keys(statuses).forEach(function(status) {
		            this.datasets.workers[status] = null;
		        }, this);
		    }

		    handleError(intervalID, workerName, originButtonGroup) {
		        originButtonGroup.streams.statusFeedback.value = statuses.stopped;
		        this.filterStatuses(this.datasets.statuses, workerName, statuses.error);
		        clearInterval(intervalID);
		    }

		    acquireDatasets(type, datasets) {
		        for (let entry in datasets) {
		            const dataset = datasets[entry];
		            this.datasets[type][entry] = dataset;
		        }
		    }

		    acquireButtonRefreshStreams(worker, stream) {
		        this.buttonRefreshStreams[worker] = stream;
		    }

		    acquireLogElement(worker, element) {
		        this.logDOMElements[worker] = element;
		    }
		    
		    updateScroll(worker){
		        this.logDOMElements[worker].scrollTop = this.logDOMElements[worker].scrollHeight;
		    }

		    updateButtonState(worker, status) {
		        this.buttonRefreshStreams[worker].value = status;
		    }

		    filterStatuses(from, newStatus) {
		        const self = this;
		        Object.keys(this.datasets.statuses).forEach(function(status) {
		            const dataset = self.datasets.statuses[status];
		            const oldValues = dataset.slice();
		            
		            const workerExists = oldValues.findObjectByValue('text', from);
		    
		            if (workerExists && status === newStatus) {
		                // return
		            }
		            else if (workerExists && status !== newStatus) {
		                let newValues = oldValues.filter((val) => val.text !== from);
		                dataset.resetLength();
		                newValues = newValues.map((val) => dataset.newItem(val.text));
		                dataset.pushApply(newValues);
		            }
		            if (!workerExists && status === newStatus) {
		                dataset.push(dataset.newItem(from));
		            }
		        });
		    }
		}

		UIManager_1 = new UIManager();
		return UIManager_1;
	}

	var apiInterpreter;
	var hasRequiredApiInterpreter;

	function requireApiInterpreter () {
		if (hasRequiredApiInterpreter) return apiInterpreter;
		hasRequiredApiInterpreter = 1;
		const {api_url, endpoints, workers, statuses, successTriggers} = requireConstants();
		const UIManager = requireUIManager();

		class ApiInterpreter {
		    statusPath = endpoints.status

		    constructor() {

		    }

		    async interpretResponse(from, response) {
		        const headers = response.headers;
		        let content;
		        if (headers.get('content-type') === 'application/json') {
		            content = await response.json();
		        }
		        if (typeof content !== 'undefined') {
		            if (content.type) {
		                const dataset = UIManager.datasets.workers[from];
		                const messageType = content.type.toLowerCase();
		                
		                if (messageType === 'success') {
		                    dataset.push(dataset.newItem(content.message));
		                    return true;
		                }
		                else if (messageType === 'info') {
		                    dataset.push(dataset.newItem(content.message));
		                }
		                else if (messageType === 'status') {
		                    const items = [];
		                    content.message_stack.forEach(function(message) {
		                        items.push(dataset.newItem('MANUAL STATUS CHECK - ' + message));
		                    });
		                    dataset.pushApply(items);
		                    UIManager.updateScroll(from);

		                    // Propagate state on action buttons
		                    const newStatus = this.getStatusFromMessage(content.status);
		                    UIManager.updateButtonState(workerName, newStatus);
		                    UIManager.filterStatuses(from, newStatus);
		                }
		                else if (messageType === 'end_status') {
		                    // message is the success message, but may not : display and don't rely on
		                    dataset.push(dataset.newItem(content.message));

		                    const items = [];
		                    let isSuccessTrigger = false;
		                    content.message_stack.forEach(function(message) {
		                        if (successTriggers[from].indexOf(message.slice(22).trim()) !== -1)
		                            isSuccessTrigger = true;
		                        items.push(dataset.newItem('FINAL STATUS CHECK - ' + message));
		                    });
		                    dataset.pushApply(items);
		                    
		                    let newStatus;
		                    if (isSuccessTrigger) {
		                        newStatus = statuses.stopped;
		                        UIManager.filterStatuses(from, newStatus);
		                        UIManager.updateButtonState(from, newStatus);
		                    }

		                    return isSuccessTrigger;
		                }
		                else if (messageType === 'error') {
		                    dataset.push(dataset.newItem(content.message));
		                    return false;
		                }
		            }
		        }
		    }

		    // Here we're supposed to have received the response from the server, and be sure it's a success
		    startupCheck(workerName) {
		        const self = this;
		        let i = 0, max  = 14;
		        const checkInterval = setInterval(function() {
		            self.specificStatusRequest(workerName).then(async function(response) {
		                const headers = response.headers;
		                if (response && response.ok) {
		                    let content;
		                    if (headers.get('content-type') === 'application/json') {
		                        content = await response.json();
		                    }
		                    if (typeof content !== 'undefined') {
		                        const dataset = UIManager.datasets.workers[workerName];
		                        const items = [];
		                        let isSuccessTrigger = false;
		                        content.message_stack.forEach(function(message) {
		                            if (successTriggers[workerName].indexOf(message.slice(22).trim()) !== -1)
		                                isSuccessTrigger = true;
		                            items.push(dataset.newItem(message));
		                            if (/ERROR/i.test(message)) {
		                                self.handleError(checkInterval, workerName);
		                            }
		                        });
		                        dataset.pushApply(items);
		                        UIManager.updateScroll(workerName);

		                        if (/ERROR/i.test(content.status)) {
		                            self.handleError(checkInterval, workerName);
		                        }
		                        else if (isSuccessTrigger) {
		                            const newStatus = statuses.running;
		                            UIManager.filterStatuses(workerName, newStatus);
		                            UIManager.updateButtonState(workerName, newStatus);
		                        }
		                        
		                    }
		                }
		            });
		            if (i >= max)
		                clearInterval(checkInterval);
		            i++;
		        }, 1000);
		    }

		    appInitCheck(key, originButtonGroup) {
		        const self = this;
		        const workerName = Object.keys(workers)[key];
		        self.specificStatusRequest(workerName).then(async function(response) {
		            const headers = response.headers;
		            if (response && response.ok) {
		                let content;
		                if (headers.get('content-type') === 'application/json') {
		                    content = await response.json();
		                }
		                if (typeof content !== 'undefined') {
		                    let newStatus;
		                    if (/ERROR/i.test(content.status)) {
		                        self.handleError(0, workerName, originButtonGroup);
		                    }
		                    else {
		                        if (/running/i.test(content.status)) {
		                            newStatus = statuses.running;
		                        }
		                        else if (/stopped/i.test(content.status)) {
		                            newStatus = statuses.stopped;
		                        }
		                        UIManager.filterStatuses(workerName, newStatus);
		                        UIManager.updateButtonState(workerName, newStatus);
		                    }
		                }
		            }
		        });
		    }

		    specificStatusRequest(workerName) {
		        return fetch(api_url + this.statusPath, {
		            method: 'POST',
		            headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		            },
		            body: JSON.stringify({
		                'name' : workerName
		            })
		        }).catch(function(error) {
		            console.error(error);
		        });
		    }

		    handleError(intervalID, workerName) {
		        UIManager.updateButtonState(workerName, statuses.stopped);
		        UIManager.filterStatuses(workerName, statuses.error);
		        clearInterval(intervalID);
		    }

		    getStatusFromMessage(status) {
		        let newStatus;
		        if (/ERROR/.test(status))
		            newStatus = statuses.error;
		        else if (/running/.test(status))
		            newStatus = statuses.running;
		        else if (/stopped/.test(status))
		            newStatus = statuses.stopped;
		        return newStatus;
		    }
		}

		apiInterpreter = new ApiInterpreter();
		return apiInterpreter;
	}

	var workerButtonsGroup;
	var hasRequiredWorkerButtonsGroup;

	function requireWorkerButtonsGroup () {
		if (hasRequiredWorkerButtonsGroup) return workerButtonsGroup;
		hasRequiredWorkerButtonsGroup = 1;
		const {TemplateFactory} = requireFormant();
		const {statuses} = requireConstants();
		const get_button_templates = requireButton_template();
		const get_api_requests = requireApi();
		const apiInterpreter = requireApiInterpreter();

		workerButtonsGroup = function(workerName, endpointNames) {

		    const requests = get_api_requests(workerName);

		    function makeStandardRequest(endpoint) {
		        const self = this;
		        requests[endpoint]()
		            .catch(function(error) {
		                console.error(error);
		            })
		            .then(function(response) {
		                if (response && response.ok) {
		                    const isSuccess = apiInterpreter.interpretResponse(workerName, response);  // passing a ref to self is a small hack 
		                                                                                            // to be able to refresh statuses when calling /status_worker
		                    if (isSuccess) {
		                        if (endpoint === 'run') {
		                            apiInterpreter.startupCheck(workerName);
		                        }
		                    }
		                }
		            });
		    }

		    function makeRestartRequest() {
		        const self = this;
		        makeStandardRequest.call(this, 'stop');

		        setTimeout(function() {
		            makeStandardRequest.call(self, 'run');
		        }, 3000);
		    }

		    return TemplateFactory.createDef({
		        host : TemplateFactory.createHostDef({
		            type : 'CompoundComponent',
		            nodeName : 'div',
		            props : [
		                {statusFeedback : undefined}
		            ],
		            reactOnSelf : [
		                {
		                    cbOnly : true,
		                    from : 'statusFeedback',
		                    subscribe : function(value) {
		                        if (value === statuses.running) {
		                            this._children[0].view.setPresence(false);
		                            this._children[1].view.setPresence(true);
		                        }
		                        else if (value === statuses.stopped) {
		                            this._children[0].view.setPresence(true);
		                            this._children[1].view.setPresence(false);
		                        }
		                        else if (value === statuses.error) {
		                            this._children[0].view.setPresence(false);
		                            this._children[1].view.setPresence(false);
		                        }
		                    }
		                }
		            ],
		            subscribeOnChild : [
		                {
		                    on : 'clicked_ok',
		                    subscribe : function(e) {
		                        const endpoint = endpointNames[e.data.key];
		                        if (e.data.key === 3) {
		                            makeRestartRequest.call(this);
		                        }
		                        else {
		                            makeStandardRequest.call(this, endpoint);
		                        }
		                        
		                    }
		                }
		            ]
		        }),
		        members : Object.values(get_button_templates(workerName))
		    })
		};
		return workerButtonsGroup;
	}

	var startAllbutton_template;
	var hasRequiredStartAllbutton_template;

	function requireStartAllbutton_template () {
		if (hasRequiredStartAllbutton_template) return startAllbutton_template;
		hasRequiredStartAllbutton_template = 1;
		const {TemplateFactory} = requireFormant();
		const {endpoints} = requireConstants();

		function get_button_template() {
		    const button_templates = {};

		    Object.keys(endpoints).forEach(function(endpointName) {

		    button_templates[endpointName] = TemplateFactory.createDef({
		            host : TemplateFactory.createHostDef({
		                type : 'ClickableComponent',
		                nodeName : 'button',
		                attributes : [
		                    {className : endpointName + '_button'},
		                    {textContent : endpointName}
		                ]
		            })
		        });
		    });

		    return button_templates
		}

		startAllbutton_template = get_button_template;
		return startAllbutton_template;
	}

	var startAllButtonsGroup;
	var hasRequiredStartAllButtonsGroup;

	function requireStartAllButtonsGroup () {
		if (hasRequiredStartAllButtonsGroup) return startAllButtonsGroup;
		hasRequiredStartAllButtonsGroup = 1;
		const {TemplateFactory} = requireFormant();
		const {statuses} = requireConstants();
		const get_button_template = requireStartAllbutton_template();
		const get_api_requests = requireApi();
		const apiInterpreter = requireApiInterpreter();

		startAllButtonsGroup = function(workerNames, endpointNames) {

		    const requests = {};
		    workerNames.forEach(function(workerName) {
		        requests[workerName] = get_api_requests(workerName);
		    });

		    function makeStandardRequest(workerName, endpoint) {
		        const self = this;
		        requests[workerName][endpoint]()
		            .catch(function(error) {
		                console.error(error);
		            })
		            .then(function(response) {
		                if (response && response.ok) {
		                    const isSuccess = apiInterpreter.interpretResponse(workerName, response);  // passing a ref to self is a small hack 
		                                                                                            // to be able to refresh statuses when calling /status_worker
		                    if (isSuccess) {
		                        if (endpoint === 'run') {
		                            apiInterpreter.startupCheck(workerName);
		                        }
		                    }
		                }
		            });
		    }

		    function makeRestartRequest(workerName) {
		        const self = this;
		        makeStandardRequest.call(this, workerName, 'stop');

		        setTimeout(function() {
		            makeStandardRequest.call(self, workerName, 'run');
		        }, 3000);
		    }

		    return TemplateFactory.createDef({
		        host : TemplateFactory.createHostDef({
		            type : 'CompoundComponent',
		            nodeName : 'div',
		            props : [
		                {statusFeedback : undefined}
		            ],
		            reactOnSelf : [
		                {
		                    cbOnly : true,
		                    from : 'statusFeedback',
		                    subscribe : function(value) {
		                        if (value === statuses.running) {
		                            this._children[0].view.setPresence(false);
		                            this._children[1].view.setPresence(true);
		                        }
		                        else if (value === statuses.stopped) {
		                            this._children[0].view.setPresence(true);
		                            this._children[1].view.setPresence(false);
		                        }
		                        else if (value === statuses.error) {
		                            this._children[0].view.setPresence(false);
		                            this._children[1].view.setPresence(false);
		                        }
		                    }
		                }
		            ],
		            subscribeOnChild : [
		                {
		                    on : 'clicked_ok',
		                    subscribe : function(e) {
		                        const self = this;
		                        const endpoint = endpointNames[e.data.key];
		                        if (e.data.key === 3) {
		                            for (let i = 0, max = 2; i < max; i++) {
		                                let workerName = workerNames[i];
		                                setTimeout(function() {
		                                    makeRestartRequest.call(self, workerName);
		                                }, i * 2000);
		                            }
		                        }
		                        else {
		                            for (let i = 0, max = 2; i < max; i++) {
		                                let workerName = workerNames[i];
		                                setTimeout(function() {
		                                    makeStandardRequest.call(self, workerName, endpoint);
		                                }, i * 2000);
		                            }
		                        }
		                        
		                    }
		                }
		            ]
		        }),
		        members : Object.values(get_button_template())
		    })
		};
		return startAllButtonsGroup;
	}

	var listTemplate;
	var hasRequiredListTemplate;

	function requireListTemplate () {
		if (hasRequiredListTemplate) return listTemplate;
		hasRequiredListTemplate = 1;
		const {App, TemplateFactory} = requireFormant();
		const {statuses} = requireConstants();

		const listHostTemplate = TemplateFactory.createHostDef({
		    type : 'ComponentWithView',
			nodeName : 'ul',
		    attributes : [
		        {className : 'list_host'}
		    ]
		});

		const listItemTemplate = TemplateFactory.createDef({
			host : TemplateFactory.createDef({
				type : 'ComponentWithView',
				nodeName : 'li',
		        attributes : [
		            {className : 'list_line'}
		        ],
				props : [
					{text : undefined}
				],
				reactOnSelf : [
					{
						cbOnly : true,
						from : 'text',
						subscribe : App.componentTypes.ComponentWithView.prototype.appendTextFromValueOnView
					}
				]
			})
		});

		function get_list_templates(categories) {
		    const list_templates = {};

		    Object.keys(categories).forEach(function(status) {
		        const templates = {};
		        list_templates[status] = {
		            host : listHostTemplate,
		            item : listItemTemplate
		        };
		    });

		    return list_templates
		}

		listTemplate = get_list_templates;
		return listTemplate;
	}

	var statusColumnsTemplate;
	var hasRequiredStatusColumnsTemplate;

	function requireStatusColumnsTemplate () {
		if (hasRequiredStatusColumnsTemplate) return statusColumnsTemplate;
		hasRequiredStatusColumnsTemplate = 1;
		const {App, TemplateFactory} = requireFormant();
		// const {statuses} = require('../constants/constants')

		function get_column_templates(categories, showButton = false) {
		    const list_templates = {};

		    Object.values(categories).forEach(function(category) {
		        list_templates[category] = TemplateFactory.createDef({
		            host : TemplateFactory.createHostDef({
		                type : 'CompoundComponent',
		                nodeName : 'section'
		            }),
		            members : [
		                TemplateFactory.createDef({
		                    host : TemplateFactory.createHostDef({
		                        type : 'CompoundComponent',
		                        nodeName : 'header',
		                        attributes : [
		                            {className : 'column_header'}
		                        ]
		                    }),
		                    members : [
		                        TemplateFactory.createHostDef({
		                            type : 'ComponentWithView',
		                            nodeName : 'span',
		                            attributes : [
		                                {textContent : category}
		                            ]
		                        }),
		                        TemplateFactory.createDef({
		                            host : TemplateFactory.createHostDef({
		                                type : 'ClickableComponent',
		                                nodeName : showButton ? 'button' : 'span',
		                                attributes : [
		                                    {title : showButton ? 'clear logs' : ''},
		                                    {className : showButton ? 'backspace' : ''}
		                                ]
		                            })
		                        })
		                    ]
		                }),
		                TemplateFactory.createHostDef({
		                    type : 'ComponentWithView',
		                    nodeName : 'div',
		                    attributes : [
		                        {className : showButton ? 'column_content scrollable' : 'column_content'}
		                    ]
		                })
		            ]
		        });
		    });

		    return list_templates
		}

		statusColumnsTemplate = get_column_templates;
		return statusColumnsTemplate;
	}

	var actionColumnsTemplate;
	var hasRequiredActionColumnsTemplate;

	function requireActionColumnsTemplate () {
		if (hasRequiredActionColumnsTemplate) return actionColumnsTemplate;
		hasRequiredActionColumnsTemplate = 1;
		const {App, TemplateFactory} = requireFormant();

		function get_column_template(title) {
		    return TemplateFactory.createDef({
		        host : TemplateFactory.createHostDef({
		            type : 'CompoundComponent',
		            nodeName : 'section',
		            attributes : [
		                {className : 'margin_top'}
		            ]
		        }),
		        members : [
		            TemplateFactory.createDef({
		                host : TemplateFactory.createDef({
		                    type : 'ComponentWithView',
		                    nodeName : 'header',
		                    attributes : [
		                        {className : 'column_header'},
		                        {textContent : status}
		                    ]
		                }),
		                members : [
		                    TemplateFactory.createDef({
		                        nodeName : 'h3',
		                        attributes : [
		                            {textContent : title}
		                        ]
		                    })
		                ]
		            }),
		            TemplateFactory.createDef({
		                host : TemplateFactory.createHostDef({
		                    type : 'CompoundComponent',
		                    nodeName : 'div',
		                    attributes : [
		                        {className : title === 'Logs' ? 'row column_content logs' : 'row column_content'}
		                    ]
		                })
		            })
		        ]
		    });
		}

		actionColumnsTemplate = get_column_template;
		return actionColumnsTemplate;
	}

	var innerCSS = "* {\r\n\tbox-sizing : border-box;\r\n}\r\n\r\n:host {\r\n\tdisplay : flex;\r\n\talign-items : center;\r\n\tmax-width : 1801px;\r\n}\r\n:host > section {\r\n\tmin-width : 98%;\r\n\tmin-height : 152px;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n\tmargin : 0px;\r\n}\r\n\r\nheader {\r\n\theight : 20px;\r\n}\r\n  \r\n  .row {\r\n\tdisplay : flex;\r\n\tjustify-content : space-around;\r\n\tgap : 17px;\r\n  }\r\n\r\n.row.logs section {\r\n\tflex : 1 1 0;\r\n}\r\n  \r\n  .margin_top {\r\n\tmargin-top: 24px;\r\n  }\r\n  \r\n  button {\r\n\tdisplay : block;\r\n\tjustify-content : end; /*hack cause we don't run scoped CSS, so the framework shall display flex at some point*/\r\n\ttext-align : right;\r\n\tbackground-repeat : no-repeat;\r\n\tcolor : #000;\r\n\tfont-size : 15px;\r\n\twidth : 74px;\r\n\tmargin : 4px;\r\n\tpadding : 5px 0px;\r\n\tborder : none;\r\n\tborder-radius : 7px;\r\n\tcursor : pointer;\r\n  }\r\n  \r\n  .run_button {\r\n\tposition : absolute;\r\n\ttop : 7px;\r\n\tleft : 7px;\r\n\tbackground-color : #00904400;\r\n\tfilter: invert(90%) sepia(5%) saturate(5026%) hue-rotate(175deg) brightness(100%) contrast(102%);\r\n\tbackground-image: url(img/play-circle-outline.svg);\r\n  }\r\n  \r\n  .stop_button {\r\n\tposition : absolute;\r\n\ttop : 7px;\r\n\tleft : 7px;\r\n\tbackground-color : #BD222200;\r\n\tfilter: invert(21%) sepia(99%) saturate(1962%) hue-rotate(348deg) brightness(89%) contrast(89%);\r\n\tbackground-image: url(img/stop-circle-outline.svg);\r\n  }\r\n  \r\n  .status_button {\r\n\tposition : absolute;\r\n\tbottom : 7px;\r\n\tright : 7px;\r\n\tbackground-color : #5550;\r\n\tfilter: invert(32%) sepia(0%) saturate(0%) hue-rotate(172deg) brightness(95%) contrast(84%);\r\n\tbackground-image: url(img/cube-outline.svg);\r\n\tbackground-position : right center;\r\n\ttext-align : left;\r\n  }\r\n  \r\n  .restart_button {\r\n\tposition : absolute;\r\n\tbottom : 7px;\r\n\tleft : 7px;\r\n\tbackground-color : #22779900;\r\n\tfilter: invert(36%) sepia(94%) saturate(385%) hue-rotate(151deg) brightness(91%) contrast(90%);\r\n\tbackground-image: url(img/refresh-outline.svg);\r\n  }\r\n\r\n  .run_button:hover {\r\n\tfilter: invert(90%) sepia(5%) saturate(5026%) hue-rotate(175deg) brightness(200%) contrast(102%);\r\n  }\r\n  \r\n  .stop_button:hover {\r\n\tfilter: invert(21%) sepia(99%) saturate(1962%) hue-rotate(348deg) brightness(180%) contrast(89%);\r\n  }\r\n  \r\n  .status_button:hover {\r\n\tfilter: invert(32%) sepia(0%) saturate(0%) hue-rotate(172deg) brightness(190%) contrast(84%);\r\n  }\r\n  \r\n  .restart_button:hover {\r\n\tfilter: invert(36%) sepia(94%) saturate(385%) hue-rotate(151deg) brightness(180%) contrast(90%);\r\n  }\r\n\r\n  .column_content {\r\n\tmargin-top : 5px;\r\n}\r\n\r\n.column_content.scrollable ul {\r\n\theight : 380px;\r\n\tscrollbar-width: thin;\r\n\toverflow-y : scroll;\r\n}\r\n\r\n.column_content.scrollable ul::-webkit-scrollbar-thumb {\r\n\tborder-radius : 4px;\r\n}\r\n\r\n.column_header {\r\n\tline-height : 18px;\r\n}\r\n\r\n.column_content div {\r\n  position : relative;\r\n  background-color: #22242B;\r\n  min-width : 189px;\r\n  max-width : 634px;\r\n  padding : 7px;\r\n  border : 2px solid #1A1824;\r\n  border-width : 2px 1px 1px 1px;\r\n  border-color : #997755 #1A1824 #1A1824 #443311;\r\n  border-radius : 7px;\r\n}\r\n\r\n .column_content h4 {\r\n\ttext-align : center;\r\n\tmargin : 57px 21px 57px 21px;\r\n  }\r\n\r\n  ul {\r\n\tfont-family : consolas;\r\n\tpadding : 0px;\r\n\tmargin : 5px 0px;\r\n  }\r\n\r\n  li {\r\n\tlist-style-type : none;\r\n\tfont-size: 11px;\r\n  }\r\n\r\n  .success {\r\n\tcolor : #228855;\r\n  }\r\n\r\n  .backspace {\r\n\tdisplay : inline-block;\r\n\tposition : relative;\r\n\ttop : -4px;\r\n\tbackground-color  : #0000;\r\n\tbackground-image: url(img/backspace-outline.svg);\r\n\tbackground-repeat : no-repeat;\r\n\tcolor : #EFEFEF;\r\n\tfilter: invert(32%) sepia(0%) saturate(0%) hue-rotate(172deg) brightness(190%) contrast(84%);\r\n\twidth : 19px;\r\n\theight : 19px;\r\n\tmargin : 7px;\r\n\tpadding : 0px 0px;\r\n\tcursor : pointer;\r\n  }";

	var innerCSS$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		default: innerCSS
	});

	var require$$9 = /*@__PURE__*/getAugmentedNamespace(innerCSS$1);

	var app;
	var hasRequiredApp;

	function requireApp () {
		if (hasRequiredApp) return app;
		hasRequiredApp = 1;
		const {App, TemplateFactory} = requireFormant();
		const {endpoints, workers, statuses} = requireConstants();
		const getWorkerButtonsGroup = requireWorkerButtonsGroup();
		const getSartAllButton = requireStartAllButtonsGroup();
		const getListsTemplates = requireListTemplate();
		const get_column_templates = requireStatusColumnsTemplate();
		const get_column_template = requireActionColumnsTemplate();
		const apiInterpreter = requireApiInterpreter();
		const UIManager = requireUIManager();

		const innerStyles = require$$9;


		/**
		 * @factory appName
		 * @launcher
		 */
		app = function(parentView) {
			return {
				init : function (containerSelector) {

					const root = new App.RootView();

					// statuses Lists section
					const listsSectionTemplate = get_column_template('Status');
					listsSectionTemplate.members[1].members = Object.values(get_column_templates(statuses));
					const listsComponent = new App.componentTypes.CompoundComponent(listsSectionTemplate, root.view);

					const statusNames = Object.values(statuses);
					const listDatasets = {};
					Object.values(getListsTemplates(statuses)).forEach(function(listTemplate, key) {
						const list = new App.coreComponents.IteratingComponent(listTemplate.host, listsComponent._children[1]._children[key]._children[1].view, listTemplate.item);
						listDatasets[statusNames[key]] = list.typedSlot;
					});
					
					// Buttons section
					
					const endpointNames = Object.keys(endpoints);
					let buttonSectionMembers;
					if (location.pathname.includes('admin')) {
						buttonSectionMembers = Object.keys(workers).map(function(worker, key) {
							const workerActionsTemplate = getWorkerButtonsGroup(worker, endpointNames);
							workerActionsTemplate.members.unshift(TemplateFactory.createHostDef({nodeName : 'h4', attributes : [{textContent : worker}]}));
							return workerActionsTemplate
						});
					}
					else {
						const workerActionTemplate = getSartAllButton(Object.values(workers), endpointNames);
						workerActionTemplate.members.unshift(TemplateFactory.createHostDef({nodeName : 'h4', attributes : [{textContent : 'Run Avatar'}]}));
						buttonSectionMembers = [
							workerActionTemplate
						];
					}
					
					const buttonSectionTemplate = get_column_template('Actions');
					buttonSectionTemplate.members[1].members = buttonSectionMembers;
					const workerCards = new App.componentTypes.CompoundComponent(buttonSectionTemplate, root.view);

					// Logs Lists section
					const logsSectionTemplate = get_column_template('Logs');
					logsSectionTemplate.members[1].members = Object.values(get_column_templates(workers, 'showButton'));
					const logsComponent = new App.componentTypes.CompoundComponent(logsSectionTemplate, root.view);

					const logListDatasets = {}, listsComponents = [];
					const workerNames = Object.values(workers);
					Object.values(getListsTemplates(workers)).forEach(function(listTemplate, key) {
						const wipeButton = logsComponent._children[1]._children[key]._children[0]._children[1];
						const list = new App.coreComponents.IteratingComponent(listTemplate.host, logsComponent._children[1]._children[key]._children[1].view, listTemplate.item);
						listsComponents.push(list);
						wipeButton.addEventListener('clicked_ok', function(e) {list.typedSlot.resetLength();});
						logListDatasets[workerNames[key]] = list.typedSlot;
					});


					//  Pass lists to API-responses interpreters
					UIManager.acquireDatasets('statuses', listDatasets);
					UIManager.acquireDatasets('workers', logListDatasets);

					App.renderDOM();

					// SET INITIAL STATE (Things that need the DOM to be rendered to have effect)

					// Acquire scrollable elements to maintain last logs visible
					listsComponents.forEach((listComponent, key) => {
						UIManager.acquireLogElement(workerNames[key], listComponent.view.getMasterNode());
						UIManager.acquireLogElement(workerNames[key], listComponent.view.getMasterNode());
					});
					// Check statuses of all workers at initialization (in case the page has been reloaded on an intermediate state)
					if (location.pathname.includes('admin')) {
						workerCards._children[1]._children.forEach(function(workerCard) { workerCard.streams.statusFeedback.value = statuses['stopped'];}); // Set state optimistically at first
						workerCards._children[1]._children.forEach(function(buttonComponent, key) {
							apiInterpreter.appInitCheck(key, buttonComponent);
							UIManager.acquireButtonRefreshStreams(workerNames[key], buttonComponent.streams.statusFeedback);
						});
					}
					else {
						const buttonComponent = workerCards._children[1]._children[0];
						buttonComponent.streams.statusFeedback.value = statuses['stopped'];
						Object.keys(workers).forEach(function(workerName, key) {
							apiInterpreter.appInitCheck(key, buttonComponent);
							UIManager.acquireButtonRefreshStreams(workerName, buttonComponent.streams.statusFeedback);
						});
					}
					
					// inner styles
					const styleElem = document.createElement('style');
					styleElem.innerHTML = innerStyles.default;
					root.view.getWrappingNode().prepend(styleElem);
				}
			}
		};
		return app;
	}

	/**
	 * Entry point of the App, you should not have to edit this file
	 * @author KingraphX (aka E_B_U_n19)
	 * @thanks to @SteveDev76 @ArcureDev & @Gulhe_le_GuJ for their very kind and thoroughful testing and insights during their Twitch livestreams
	 */

	var main$1;
	var hasRequiredMain;

	function requireMain () {
		if (hasRequiredMain) return main$1;
		hasRequiredMain = 1;
		const {appConstants, App} = requireFormant();

		(function () {
			appConstants.launch({
				UIDPrefix : 'Wav2Lip_orchestrator_frontend'
			});
			
			// this.Wav2Lip_orchestrator_frontendLauncher = require('src/App/launcher/app');
			App.componentTypes.CompositorComponent.createAppLevelExtendedComponent();
		}).call(window);

		main$1 = requireApp();
		return main$1;
	}

	var mainExports = requireMain();
	var main = /*@__PURE__*/getDefaultExportFromCjs(mainExports);

	return main;

})();
//# sourceMappingURL=Wav2Lip_orchestrator_frontend.js.map
