(function ($, Drupal, window, document, undefined) {
    Drupal.behaviors.basic = {attach: function (context, settings) {


                $(document).ready(function () {

                    initialize();

                });

                function initialize() {
                    hideBadge(0);
                    setDomElementProperties();

                    try {
                        formValidation();
                    } catch (Exception) {

                    }
                }

                function formValidation() {


                    $('#edit-signature-date').val(moment().format("L"));

                    $('.line-br').once().each(function () {
                        $(this).after("<br/>");
                    });

                    $('.line-br-pre').once().each(function () {
                        $(this).before("<br/>");
                    });

                }


                function setDomElementProperties() {

                    // Set element definitions
                    var apply_button = buildButton("/rentalforms", "Apply Online");
                    var contact_button = buildButton("/contact", "Contact Us");
                    var property_buttons = apply_button + "&nbsp&nbsp" + contact_button;

                    $('#button_div').html(property_buttons);


                    // Set file fields to open in _blank
                    $('a[type*="application/pdf"]').each(function () {
                        $(this).attr({target: "_blank"});
                    });
                }


                function buildButton(path, text) {
                    return '<form class="button-form" action="' + path + '"><button class="button button--primary" type="submit">' + text + '</button></form>';
                }

                function hideBadge(i) {
                    setTimeout(function () {
                        var badgeChrome = $('div[style*="display: block !important; width: 90px !important; height: 24px !important;"]');
                        var badgeFox = $('div[style*="display:block !important;width:90px !important;height:24px !important;"]');

                        badgeChrome.hide();
                        badgeFox.hide();

                        if (badgeChrome.css('display') !== 'none' || badgeFox.css('display') !== 'none' && i < 50) {
                            i++;
                            hideBadge(i);
                        }
                    }, 100);
                }



        }
    };
}(jQuery, Drupal, this, this.document));
