        fetch('https://script.google.com/macros/s/AKfycbw4_Xv1eSwj_dTDBl0KMi5pM8N-5PtNxqo1XW1VHOIFK502ZFBc8nog5PzTSWXsmbsY/exec')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    let productId = item.productId;
                    let productName = item.name;
                    let productDescription = item.description;
                    let productPrice = item.price;
                    let productImage = item.image; // Assuming you have an 'image' field in your JSON data

                    let productHTML = `
                        <div class="col-md-12">
                            <article>
                                <div class="figure-list">
                                    <div class="image">
                                        <a href="${productId}" class="mfp-open">
                                            <img src="${productImage}" alt="" width="360" />
                                        </a>
                                    </div>
                                    <div class="text">
                                        <h2 class="title h4">${productName}</h2>
                                        <sup>${productPrice}</sup>
                                        <span class="description clearfix">${productDescription}</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    `;

                    // Append the productHTML to the productContainer
                    document.getElementById("productContainer").innerHTML += productHTML;
                });
            })
            .catch(error => console.error('Error fetching JSON data:', error));
