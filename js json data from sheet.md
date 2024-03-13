                            <script>
                                fetch('https://script.google.com/macros/s/AKfycbxxucemfZth7E649ymIlDXvW4Xg1ba57j6XUwEgonrSYlcn3HwS1XPrAMsEckwlB-Eq/exec')
                                    .then(response => response.json())
                                    .then(data => {
                                        data.forEach(item => {
                                            let productId = item.productId;
                                            let productName = item.productName;
                                            let productDescription = item.productDescription;
                                            let productPrice = item.productPrice;
                                            let productImage = item.productImage;
                                            let productCategory = item.productCategory;
                            
                                            let productHTML = `
                                                <div class="col-md-12" data-filter="${productCategory}">
                                                    <article>
                                                        <div class="figure-grid">
                                                            <div class="image">
                                                                <a href="${productId}" class="mfp-open">
                                                                    <img src="${productImage}" alt="" width="360" />
                                                                </a>
                                                            </div>
                                                            <div class="text">
                                                                <h2 class="title h4">${productName}</h2>
                                                                <sup>$ ${productPrice}</sup>
                                                                <span class="description clearfix">${productDescription}</span>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            `;
                            
                                            document.getElementById("box-filter-results").innerHTML += productHTML;
                                        });
                                    })
                                    .catch(error => console.error('Error fetching JSON data:', error));
                            </script>
