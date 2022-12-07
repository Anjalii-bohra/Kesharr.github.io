
customElements.define('my-footer', MyFooter)

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <!-- Start Footer -->
        <footer>
        <div class="footer-wrapper">
            <div id="footer" class="footer-1">
                <div class="footer-main">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 ">
                                <aside id="contact-info-widget-3" class="widget contact-info">
                                    <h3 class="widget-title">Contact Info</h3>
                                    <div class="contact-info contact-info-block">
                                        <ul class="contact-details list list-icons">
                                            <li><i class="far fa-dot-circle"></i> <strong>Address:</strong> <span>Keshar
                                                    Enterprises 2B1, Sarabhai Society, Sarabhai Road, B/H. Pandya Eye
                                                    Hospital,
                                                    Vadodara. Gujarat, India.</span></li>
                                            <li><i class="fab fa-whatsapp"></i> <strong>Phone:</strong> <span>+91 99043
                                                    99998</span></li>
                                            <li><i class="far fa-envelope"></i> <strong>Email:</strong> <span><a
                                                        href="mailto:sales@kesharenterprises.com">sales@kesharenterprises.com</a></span>
                                            </li>
                                            <li><i class="far fa-clock"></i> <strong>Working Days/Hours:</strong> <span>Mon
                                                    -
                                                    Sat / 9:00 AM - 7:00 PM</span></li>
                                        </ul>
                                    </div>
    
                                </aside>
                                <aside id="follow-us-widget-3" class="widget follow-us">
                                    <div class="share-links">
                                        <a href="#" rel="nofollow" target="_blank" title="Facebook"
                                            class="share-facebook">Facebook</a>
                                        <a href="#" rel="nofollow" target="_blank" title="Twitter"
                                            class="share-twitter">Twitter</a>
                                        <a href="#" rel="nofollow" target="_blank" title="Instagram"
                                            class="share-instagram">Instagram</a>
                                    </div>
    
                                </aside>
                            </div>
                            <div class="col-lg-4 ">
                                <aside id="nav_menu-2" class="widget widget_nav_menu">
                                    <h3 class="widget-title">Our Categories</h3>
                                    <div class="menu-footer-menu-container">
                                        <ul id="menu-footer-menu" class="menu">
                                            <li id="menu-item-2389"
                                                class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2389">
                                                <a
                                                    href="https://kesharenterprises.com/product-category/non-woven-fabric-bag/">Non
                                                    Woven Fabric Bag</a>
                                            </li>
                                            <li id="menu-item-2393"
                                                class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2393">
                                                <a
                                                    href="https://kesharenterprises.com/product-category/sugar-bagasse-disposal/">Sugar
                                                    Bagasse Disposal</a>
                                            </li>
                                            <li id="menu-item-2388"
                                                class="menu-item menu-item-type-taxonomy menu-item-object-product_cat current-product_cat-ancestor menu-item-2388">
                                                <a href="https://kesharenterprises.com/product-category/eps-disposal/">EPS
                                                    Disposal</a>
                                            </li>
                                            <li id="menu-item-2391"
                                                class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2391">
                                                <a href="https://kesharenterprises.com/product-category/plastic-disposal/">Plastic
                                                    Disposal</a>
                                            </li>
                                            <li id="menu-item-2392"
                                                class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2392">
                                                <a href="https://kesharenterprises.com/product-category/silver-foil/">Silver
                                                    Foil</a>
                                            </li>
                                            <li id="menu-item-2390"
                                                class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2390">
                                                <a href="https://kesharenterprises.com/product-category/paper-cups/">Paper
                                                    Cups</a>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                            <div class="col-lg-4 ">
                                <aside id="nav_menu-3" class="widget widget_nav_menu">
                                    <h3 class="widget-title">Quick Links</h3>
                                    <div class="menu-footer-menu-widget-container">
                                        <ul id="menu-footer-menu-widget" class="menu">
                                            <li id="menu-item-2395"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-2395">
                                                <a href="index.html">Home</a>
                                            </li>
                                            <li id="menu-item-2396"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2396">
                                                <a href="about.html">About Us</a>
                                            </li>
                                            <li id="menu-item-2399"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2399">
                                                <a href="shop.html">Products</a>
                                            </li>
                                            <li id="menu-item-2397"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2397">
                                                <a href="contact.html">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="footer-bottom">
                    <div class="container">
                        <div class="footer-left">
                            <span class="footer-copyright">© copyright 2021 Keshar Enterprises. All Rights Reserved.</span>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    
        </div><!-- end wrapper -->
    
        <!-- End Footer -->
        </footer>
`
    }
    }
    
    customElements.define('my-footer', MyFooter)

