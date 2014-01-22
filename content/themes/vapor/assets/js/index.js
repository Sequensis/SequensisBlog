/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($, undefined) {
    'use strict';

    $(function() {
        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$('#blog-logo').prependTo('#site-head-content');

        // Find all comment nodes containing the text 'language: lang-xxx'.
        // Extract the language (the 'lang-xxx' part).
        // Use that for the next <pre><code> block.
        var contents = $('section.post-content').contents();
        
        for (var idx = 0; idx < contents.length; ++idx) {
            var node = contents[idx];

            if (node.nodeType == 8 && node.data.match(/language:/)) {
                // Extract the language from the comment node.
                var language = node.data.match(/language: (.*) +/)[1];
                var wasPreFound = false;

                // Find the <pre> element.
                for (var i = idx + 1; i < contents.length && !wasPreFound; ++i) {
                    if (contents[i].nodeName == 'PRE') {
                        var pre = contents[i];

                        // If the <pre> element contains a <code> element, highlight the code.
                        for (var node = pre.firstChild; node; node = node.nextSibling) {
                            if (node.nodeName == 'CODE') {
                                $(node).addClass(language);
                                hljs.highlightBlock(node);
                                
                                wasPreFound = true;
                                
                                break;
                            }
                        }
                    }
                }
            }
        }
    });
}(jQuery));