<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Management System</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #56ab2f;
            --secondary: #a8e063;
            --success: #198754;
            --warning: #ffc107;
            --light: #f8f9fa;
            --dark: #212529;
            --gray: #6c757d;
            --light-gray: #e9ecef;
            --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        body {
            background: linear-gradient(135deg, #f5f7fb, #ffffff);
            color: var(--dark);
            line-height: 1.6;
        }
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }
        /* Header Styles */
        .header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 1rem 0;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.5rem;
            font-weight: 700;
        }
        .logo i {
            font-size: 1.8rem;
        }
        #logoutBtn {
            background-color: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid white;
            padding: 6px 12px;
            border-radius: 50px;
            cursor: pointer;
            transition: var(--transition);
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 0.9rem;
        }
        #logoutBtn i {
            font-size: 1rem;
        }
        #logoutBtn:hover {
            background-color: white;
            color: var(--primary);
        }
        /* Top Navbar */
        .top-navbar {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 10px;
        }
        .top-navbar a {
            color: white;
            text-decoration: none;
            font-size: 1rem;
            transition: var(--transition);
        }
        .top-navbar a:hover {
            color: var(--light);
        }
        @media (max-width: 768px) {
            .top-navbar {
                display: none;
            }
        }
        /* Bottom Navbar */
        .bottom-navbar {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 10px 0;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
            z-index: 100;
        }
        .bottom-navbar a {
            color: white;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            width: 60px;
            height: 50px;
            transition: var(--transition);
        }
        .bottom-navbar a:hover {
            transform: translateY(-2px);
        }
        @media (min-width: 769px) {
            .bottom-navbar {
                display: none;
            }
        }
        /* Role Selection */
        .role-selection {
            max-width: 800px;
            margin: 4rem auto;
            text-align: center;
        }
        .role-selection h2 {
            color: var(--primary);
            margin-bottom: 1rem;
        }
        .role-selection p {
            color: var(--gray);
            margin-bottom: 2rem;
        }
        .role-cards {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        .role-card {
            background: white;
            border-radius: 10px;
            padding: 2rem;
            width: 200px;
            text-align: center;
            cursor: pointer;
            transition: var(--transition);
            box-shadow: var(--card-shadow);
        }
        .role-card:hover {
            transform: translateY(-5px);
        }
        .role-card i {
            font-size: 3rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }
        .role-card h3 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }
        .role-card p {
            font-size: 0.9rem;
            color: var(--gray);
        }
        @media (max-width: 768px) {
            .role-cards {
                flex-direction: column;
            }
            .role-card {
                width: 100%;
                margin-bottom: 1rem;
            }
        }
        /* Auth Container */
        .auth-container {
            max-width: 500px;
            margin: 2rem auto;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: var(--card-shadow);
        }
        .auth-header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 1.5rem;
            text-align: center;
        }
        .auth-body {
            padding: 2rem;
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: var(--dark);
        }
        .form-control {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid var(--light-gray);
            border-radius: 8px;
            font-size: 1rem;
            transition: var(--transition);
        }
        .form-control:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.2);
        }
        .btn {
            display: inline-block;
            padding: 12px 25px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            transition: var(--transition);
            text-align: center;
        }
        .btn:hover {
            background: linear-gradient(135deg, var(--secondary), var(--primary));
            transform: translateY(-2px);
        }
        .btn-block {
            display: block;
            width: 100%;
        }
        .btn-outline {
            background-color: transparent;
            border: 1px solid var(--primary);
            color: var(--primary);
        }
        .btn-outline:hover {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
        }
        .btn-circle {
            border-radius: 50%;
            width: 20px;
            height: 20px;
            padding: 0;
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 20px;
        }
        .btn-small {
            padding: 4px 8px;
            font-size: 0.8rem;
            border-radius: 4px;
        }
        .auth-footer {
            text-align: center;
            margin-top: 1.5rem;
        }
        /* Dashboard Styles */
        .dashboard {
            margin: 2rem 0;
        }
        .dashboard-header {
            margin-bottom: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
        }
        .section-title {
            font-size: 1.8rem;
            color: var(--dark);
            position: relative;
            padding-bottom: 10px;
        }
        .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 3px;
            background-color: var(--primary);
        }
        /* Products Grid (Original) */
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 2rem;
        }
        .product-card {
            background: linear-gradient(135deg, white, #f8f9fa);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: var(--card-shadow);
            transition: var(--transition);
        }
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .product-img {
            width: 100%;
            height: 180px;
            object-fit: cover;
        }
        .product-body {
            padding: 1.5rem;
        }
        .product-title {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            color: var(--dark);
        }
        .product-description {
            font-size: 0.9rem;
            color: var(--gray);
            margin-bottom: 0.5rem;
        }
        .product-price {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 1rem;
        }
        /* Order Grid and Cards */
        .order-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
        }
        .order-card {
            background: white;
            border-radius: 10px;
            padding: 0.4rem;
            box-shadow: var(--card-shadow);
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
            transition: var(--transition);
        }
        .order-card:hover {
            transform: translateY(-5px);
        }
        .order-header {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 0.4rem;
        }
        .order-field {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.1rem;
            font-size: 0.75rem;
        }
        .order-label {
            font-weight: 500;
            color: var(--gray);
            font-size: 0.75rem;
        }
        .order-value {
            font-weight: 600;
            color: var(--dark);
            font-size: 0.75rem;
        }
        .order-value.otp {
            color: var(--primary);
        }
        .item-list {
            display: flex;
            flex-direction: column;
            gap: 0.1rem;
        }
        .item-card {
            border: 1px solid var(--light-gray);
            border-radius: 5px;
            padding: 0.1rem;
            display: flex;
            align-items: center;
            gap: 0.1rem;
            font-size: 0.6rem;
        }
        /* Tables */
        .table-container {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: var(--card-shadow);
            overflow-x: auto;
            width: 100%; /* Increased width for better layout */
        }
        .data-table {
            width: 100%;
            border-collapse: collapse;
        }
        .data-table th,
        .data-table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid var(--light-gray);
        }
        .data-table th {
            background-color: #f8f9fa;
            font-weight: 600;
            color: var(--gray);
        }
        .data-table tr:last-child td {
            border-bottom: none;
        }
        .status-badge {
            display: inline-block;
            padding: 5px 10px;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 500;
        }
        .status-pending {
            background: linear-gradient(135deg, #fff3cd, #ffeeba);
            color: #856404;
        }
        .status-confirmed {
            background: linear-gradient(135deg, #d1ecf1, #bee5eb);
            color: #0c5460;
        }
        .status-delivered {
            background: linear-gradient(135deg, #d4edda, #c3e6cb);
            color: #155724;
        }
        .status-draft {
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
            color: #6c757d;
        }
        /* Responsive Table */
        @media (max-width: 576px) {
            .data-table thead {
                display: none;
            }
            .data-table tr {
                display: block;
                margin-bottom: 1rem;
                border: 1px solid var(--light-gray);
                border-radius: 8px;
                padding: 0.5rem;
            }
            .data-table td {
                display: block;
                text-align: right;
                position: relative;
                padding-left: 50%;
                border: none;
            }
            .data-table td:before {
                content: attr(data-label);
                position: absolute;
                left: 0;
                width: 50%;
                padding-right: 10px;
                font-weight: bold;
                text-align: left;
            }
            .table-container {
                width: 100%; /* Reset to full width on small screens */
            }
        }
        /* Forms */
        .card {
            background: linear-gradient(135deg, white, #f8f9fa);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: var(--card-shadow);
            margin-bottom: 2rem;
        }
        .card-header {
            padding: 1.5rem;
            border-bottom: 1px solid var(--light-gray);
            font-weight: 600;
            font-size: 1.2rem;
            color: var(--dark);
        }
        .card-body {
            padding: 1.5rem;
        }
        /* Utility Classes */
        .hidden {
            display: none !important;
        }
        .text-center {
            text-align: center;
        }
        .text-success {
            color: #28a745;
        }
        .text-error {
            color: #dc3545;
        }
        .mt-1 { margin-top: 0.5rem; }
        .mt-2 { margin-top: 1rem; }
        .mt-3 { margin-top: 1.5rem; }
        .mb-1 { margin-bottom: 0.5rem; }
        .mb-2 { margin-bottom: 1rem; }
        .mb-3 { margin-bottom: 1.5rem; }
        /* Responsive Design */
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                gap: 10px;
            }
          
            .products-grid {
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            }
          
            .dashboard-header {
                flex-direction: column;
                align-items: flex-start;
            }
          
            .auth-container {
                margin: 1rem;
            }
        }
        @media (max-width: 576px) {
            .products-grid {
                grid-template-columns: 1fr;
            }
          
            .data-table {
                font-size: 0.9rem;
            }
          
            .data-table th,
            .data-table td {
                padding: 0.75rem;
            }
          
            .btn {
                padding: 10px 15px;
            }
        }
        /* Animation */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
            animation: fadeIn 0.5s ease forwards;
        }
        /* Modal Styles */
        .modal {
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0,0,0,0.4);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .modal-content {
            background-color: #fefefe;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-width: 500px;
            border-radius: 10px;
            text-align: center;
        }
        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }
        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }

        /* New Styles from Provided Code for User Dashboard */
        /* Basic reset */
        *{box-sizing:border-box;margin:0;padding:0;font-family:Arial,verdana,sans-serif}
        html,body{height:100%}
       
        /* Top navigation (fixed) for User */
        .user-topbar{
          position:fixed;top:0;left:0;right:0;height:56px;background:#fff;border-bottom:1px solid #e6e6e6;display:flex;align-items:center;gap:12px;padding:8px 12px;z-index:30
        }
        .search{flex:0 1 200px;height:36px;border-radius:8px;border:1px solid #ddd;display:flex;align-items:center;padding:0 10px}
        .search input{flex:1;border:0;outline:none;font-size:15px}
        /* Left vertical category rail */
        .user-left-rail{
          position:fixed;left:8px;top:72px;bottom:72px;width:72px;display:flex;flex-direction:column;align-items:center;gap:10px;z-index:20;overflow:auto;padding:8px
        }
        .user-left-rail::-webkit-scrollbar { display: none; } /* Hide scrollbar for Chrome, Safari and Opera */
        .user-left-rail { -ms-overflow-style: none; scrollbar-width: none; } /* Hide scrollbar for IE, Edge and Firefox */
        .cat{
          width:60px;height:60px;border-radius:12px;background:#fafafa;border:1px solid #ddd;display:flex;
          flex-direction:column;align-items:center;justify-content:center;font-size:12px;padding:5px;
          transition: all 0.2s ease;
        }
        .cat.active{background:#1a73e8;color:white;border-color:#1a73e8}
        .cat-img{width:24px;height:24px;object-fit:contain;margin-bottom:4px}
        .cat-title{font-size:10px;text-align:center;line-height:1.1}
        /* Main content for User */
        .user-main{
          padding:80px 16px 84px 96px; /* top right bottom left (leave room for left rail) */
          background:#f7f7f8;min-height:100vh;
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* 3 products per row by default */
          gap: 16px; /* Space between cards */
        }
        .user-product-card{
          background:#fff;border-radius:12px;padding:0 2px;
          box-shadow:0 2px 8px rgba(0,0,0,0.08);display:flex;flex-direction:column;
          width: 100%; /* Ensure card fits within grid */
        }
        .user-product-img{
          width:100%;height:150px;border-top-left-radius:12px;border-top-right-radius:12px;display:flex;align-items:center;
          justify-content:center;overflow:hidden;flex-shrink:0;margin:0;
        }
        .user-product-img img{width:100%;height:100%;object-fit:cover}
        .user-product-info{
          padding:12px;display:flex;flex-direction:column;gap:6px;
        }
        .user-product-name{font-weight:600;font-size:15px;line-height:1.3}
        .user-product-price{color:#1a73e8;font-weight:700;font-size:16px;display:flex;align-items:center;gap:5px}
        .user-product-price del{color:#999;font-weight:400}
        .user-product-desc{font-size:13px;color:#666;line-height:1.4;margin-bottom:10px}
        /* Bottom nav (fixed) for User */
        .user-bottombar{
          position:fixed;left:0;right:0;bottom:0;height:64px;background:#fff;border-top:1px solid #e6e6e6;
          display:flex;justify-content:space-around;align-items:center;z-index:40
        }
        .user-bottombar button{
          background:transparent;border:0;display:flex;flex-direction:column;align-items:center;
          gap:4px;font-size:12px;padding:8px 12px;border-radius:8px;transition:all 0.2s ease
        }
        .user-bottombar button.active{background:#f0f6ff}
        /* Responsive tweaks */
        @media(max-width:1024px){
          .user-main {
            grid-template-columns: repeat(2, 1fr); /* 2 products per row on medium screens */
          }
        }
        @media(max-width:768px){
          .user-main {
            grid-template-columns: 1fr; /* 1 product per row on small screens */
            padding-left: 84px; /* Adjust for smaller screens */
          }
          .user-product-img{height:160px}
          .user-left-rail{width:64px;left:6px}
          .cat{width:52px;height:52px}
          .cat-img{width:20px;height:20px}
        }
        /* Empty state */
        .empty-state{text-align:center;padding:40px 20px;color:#666}
        .empty-state img{width:120px;margin-bottom:16px;opacity:0.5}
    </style>
</head>
<body>
    <div class="header">
        <div class="container header-content">
            <div class="logo">
                <i class="fas fa-box"></i>
                <span>Your Order Management System Platform</span>
            </div>
            <button id="logoutBtn" class="hidden"><i class="fas fa-sign-out-alt"></i> Logout</button>
        </div>
        <div id="topNavbar" class="top-navbar hidden"></div>
    </div>
    <div class="container">
        <!-- Role Selection -->
        <div id="roleSelection" class="role-selection fade-in">
            <h2><i class="fas fa-users"></i> Choose Your Role</h2>
            <p>Please select your role to proceed with registration or login.</p>
            <div class="role-cards">
                <div class="role-card" onclick="selectRole('user')">
                    <i class="fas fa-user"></i>
                    <h3>User</h3>
                    <p>Order delicious food from your favorite restaurants.</p>
                </div>
                <div class="role-card" onclick="selectRole('delivery')">
                    <i class="fas fa-bicycle"></i>
                    <h3>Delivery Boy</h3>
                    <p>Manage and deliver orders to customers.</p>
                </div>
                <div class="role-card" onclick="selectRole('owner')">
                    <i class="fas fa-store"></i>
                    <h3>Owner</h3>
                    <p>Manage your restaurant and add products.</p>
                </div>
            </div>
        </div>
        <!-- Login Form -->
        <div id="authContainer" class="auth-container fade-in hidden">
            <div class="auth-header">
                <h2 id="authTitle">Login to Your Account</h2>
            </div>
            <div class="auth-body">
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" class="form-control" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control" placeholder="Enter your password" required>
                </div>
                <div class="form-group">
                    <label for="role">Select Role</label>
                    <select id="role" class="form-control" required>
                        <option value="user">User</option>
                        <option value="owner">Owner</option>
                        <option value="delivery">Delivery</option>
                    </select>
                </div>
                <button id="authBtn" class="btn btn-block">Login</button>
                <div class="auth-footer">
                    <p id="authMessage" class="text-error mt-2"></p>
                    <button id="toggleAuthBtn" class="btn btn-outline mt-2">Switch to Register</button>
                </div>
            </div>
        </div>
        <!-- User Dashboard with New Design -->
        <div id="userDashboard" class="dashboard hidden">
            <!-- Top navigation for User -->
            <div class="user-topbar" id="userTopbar">
                <div class="search">
                    <input id="searchInput" placeholder="Search products, schools, items... (type to filter)" />
                    <button id="searchClear" title="Clear" style="border:0;background:transparent transparent">✖</button>
                </div>
            </div>
            <!-- Left vertical categories for User -->
            <div class="user-left-rail" id="userLeftRail">
                <!-- Categories will be injected here -->
            </div>
            <!-- Main product area for User -->
            <main class="user-main" id="userProductList">
                <!-- Product cards injected with JS -->
            </main>
            <!-- Bottom navigation for User -->
            <nav class="user-bottombar" id="userBottombar">
                <button id="navHome" class="active">🏠<span>Home</span></button>
                <button id="navProducts">🛍️<span>Products</span></button>
                <button id="navCart">🛒<span>Cart</span></button>
                <button id="navOrders">📦<span>Orders</span></button>
                <button id="navProfile">👤<span>Profile</span></button>
            </nav>
            <div id="user-cart" class="hidden">
                <h3 class="mb-2">My Cart</h3>
                <div id="cartItems" class="order-card"></div>
                <button id="placeOrderBtn" class="btn mt-2" disabled>Place Order</button>
                <button id="clearCartBtn" class="btn mt-2" style="background: linear-gradient(135deg, #dc3545, #b02a37); color: white;" disabled>Clear Cart</button>
            </div>
            <div id="user-orders">
                <h3 class="mb-2" id="my-orders-title">My Orders</h3>
                <div id="userOrdersGrid" class="order-grid"></div>
            </div>
            <div id="user-history" class="hidden">
                <h3 class="mb-2">Order History</h3>
                <div id="userHistoryGrid" class="order-grid"></div>
            </div>
            <div id="user-profile" class="hidden">
                <h3 class="mb-2">User Profile</h3>
                <p>Email: <span id="user-email"></span></p>
                <p>Role: User</p>
            </div>
        </div>
        <!-- Owner Dashboard (Unchanged) -->
        <div id="ownerDashboard" class="dashboard hidden">
            <div id="owner-header" class="dashboard-header">
                <h2 class="section-title">Owner Dashboard</h2>
                <p>Manage products and orders from your store.</p>
                <p id="ownerMessage" class="mt-2"></p>
            </div>
            <div id="owner-add-product">
                <div class="card">
                    <div class="card-header">Add New Product</div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="productName">Product Name</label>
                            <input type="text" id="productName" class="form-control" placeholder="Enter product name">
                        </div>
                        <div class="form-group">
                            <label for="productPrice">Price (₹)</label>
                            <input type="number" id="productPrice" class="form-control" placeholder="Enter price">
                        </div>
                        <div class="form-group">
                            <label for="productImage">Image URL</label>
                            <input type="text" id="productImage" class="form-control" placeholder="Enter image URL">
                        </div>
                        <button id="addProductBtn" class="btn">Add Product</button>
                        <p id="productMessage" class="mt-2"></p>
                    </div>
                </div>
            </div>
            <div class="card hidden" id="owner-edit-product">
                <div class="card-header">Edit Product</div>
                <div class="card-body">
                    <input type="hidden" id="editProductId">
                    <div class="form-group">
                        <label for="editProductName">Product Name</label>
                        <input type="text" id="editProductName" class="form-control" placeholder="Enter product name">
                    </div>
                    <div class="form-group">
                        <label for="editProductPrice">Price (₹)</label>
                        <input type="number" id="editProductPrice" class="form-control" placeholder="Enter price">
                    </div>
                    <div class="form-group">
                        <label for="editProductImage">Image URL</label>
                        <input type="text" id="editProductImage" class="form-control" placeholder="Enter image URL">
                    </div>
                    <button id="updateProductBtn" class="btn">Update Product</button>
                    <button id="cancelEditBtn" class="btn btn-outline mt-1">Cancel</button>
                    <p id="editProductMessage" class="mt-2"></p>
                </div>
            </div>
            <div id="owner-all-products">
                <h3 class="mb-2">All Products</h3>
                <div class="table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="ownerProducts"></tbody>
                    </table>
                </div>
            </div>
            <div id="owner-pending-orders">
                <h3 class="mb-2">Pending Orders</h3>
                <div class="form-group">
                    <label for="pendingFilter">Show Pending Orders From Last:</label>
                    <select id="pendingFilter" class="form-control">
                        <option value="0">All</option>
                        <option value="1">1 Hour</option>
                        <option value="24">1 Day</option>
                    </select>
                </div>
                <button id="showPendingHistory" class="btn btn-outline">Show/Hide Pending History</button>
                <div class="table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Products</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Ordered At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="ownerPendingOrders"></tbody>
                    </table>
                </div>
            </div>
            <div id="owner-pending-history" class="hidden">
                <h3 class="mb-2">Pending History (Older)</h3>
                <div class="table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Products</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Ordered At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="ownerPendingHistory"></tbody>
                    </table>
                </div>
            </div>
            <div id="owner-all-orders">
                <h3 class="mb-2">All Orders</h3>
                <div class="table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Products</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Ordered At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="ownerOrders"></tbody>
                    </table>
                </div>
            </div>
            <div id="owner-profile" class="hidden">
                <h3 class="mb-2">Owner Profile</h3>
                <p>Email: <span id="owner-email"></span></p>
                <p>Role: Owner</p>
            </div>
        </div>
        <!-- Delivery Dashboard (Unchanged) -->
        <div id="deliveryDashboard" class="dashboard hidden">
            <div id="delivery-header" class="dashboard-header">
                <h2 class="section-title">Delivery Dashboard</h2>
                <p>Manage order deliveries and track your progress.</p>
            </div>
            <div id="delivery-search">
                <div class="card">
                    <div class="card-header">Search Order by OTP</div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="otpInput">Enter OTP</label>
                            <div style="display: flex; gap: 10px;">
                                <input type="text" id="otpInput" class="form-control" placeholder="Enter OTP code">
                                <button id="searchOtpBtn" class="btn">Search</button>
                            </div>
                        </div>
                        <p id="otpMessage" class="mt-2"></p>
                        <div id="otpOrderResult" class="hidden mt-3">
                            <h4>Order Details</h4>
                            <p id="otpOrderDetails" class="mt-1"></p>
                            <button id="markDeliveredBtn" class="btn mt-2">Mark as Delivered</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="delivery-history">
                <h3 class="mb-2">Delivery History</h3>
                <div class="table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Products</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Delivered At</th>
                            </tr>
                        </thead>
                        <tbody id="deliveryHistory"></tbody>
                    </table>
                </div>
            </div>
            <div id="delivery-profile" class="hidden">
                <h3 class="mb-2">Delivery Profile</h3>
                <p>Email: <span id="delivery-email"></span></p>
                <p>Role: Delivery</p>
            </div>
        </div>
    </div>
    <!-- Bottom Navbars for Owner and Delivery (Unchanged) -->
    <div id="ownerNavbar" class="bottom-navbar hidden">
        <a href="#" onclick="showOwnerSection('add-product')"><i class="fas fa-plus"></i></a>
        <a href="#" onclick="showOwnerSection('all-products')"><i class="fas fa-boxes"></i></a>
        <a href="#" onclick="showOwnerSection('pending-orders')"><i class="fas fa-clock"></i></a>
        <a href="#" onclick="showOwnerSection('all-orders')"><i class="fas fa-list"></i></a>
        <a href="#" onclick="showOwnerSection('profile')"><i class="fas fa-user"></i></a>
    </div>
    <div id="deliveryNavbar" class="bottom-navbar hidden">
        <a href="#" onclick="showDeliverySection('search')"><i class="fas fa-search"></i></a>
        <a href="#" onclick="showDeliverySection('history')"><i class="fas fa-history"></i></a>
        <a href="#" onclick="showDeliverySection('profile')"><i class="fas fa-user"></i></a>
    </div>
    <!-- Payment Modal -->
    <div id="paymentModal" class="modal hidden">
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2>Make Payment</h2>
            <p>Total Amount: ₹<span id="paymentTotal"></span></p>
            <img id="qrCode" src="" alt="QR Code" style="margin: 10px auto; display: block;">
            <a id="upiLink" href="" class="btn">Pay via UPI</a>
        </div>
    </div>
    <script>
        const API_URL = 'http://localhost:3000';
        let token = localStorage.getItem('token');
        let userRole = localStorage.getItem('role');
        let currentOrderId = null;
        let allOrders = [];
        let filterHours = 0;
        // DOM Elements (Original)
        const roleSelection = document.getElementById('roleSelection');
        const authContainer = document.getElementById('authContainer');
        const userDashboard = document.getElementById('userDashboard');
        const ownerDashboard = document.getElementById('ownerDashboard');
        const deliveryDashboard = document.getElementById('deliveryDashboard');
        const authBtn = document.getElementById('authBtn');
        const toggleAuthBtn = document.getElementById('toggleAuthBtn');
        const authTitle = document.getElementById('authTitle');
        const authMessage = document.getElementById('authMessage');
        const logoutBtn = document.getElementById('logoutBtn');
        const cartItems = document.getElementById('cartItems');
        const placeOrderBtn = document.getElementById('placeOrderBtn');
        const clearCartBtn = document.getElementById('clearCartBtn');
        const userOrdersGrid = document.getElementById('userOrdersGrid');
        const userHistoryGrid = document.getElementById('userHistoryGrid');
        const ownerOrders = document.getElementById('ownerOrders');
        const ownerPendingOrders = document.getElementById('ownerPendingOrders');
        const ownerPendingHistory = document.getElementById('ownerPendingHistory');
        const deliveryHistory = document.getElementById('deliveryHistory');
        const addProductBtn = document.getElementById('addProductBtn');
        const productMessage = document.getElementById('productMessage');
        const searchOtpBtn = document.getElementById('searchOtpBtn');
        const otpMessage = document.getElementById('otpMessage');
        const otpOrderResult = document.getElementById('otpOrderResult');
        const otpOrderDetails = document.getElementById('otpOrderDetails');
        const markDeliveredBtn = document.getElementById('markDeliveredBtn');
        const pendingFilter = document.getElementById('pendingFilter');
        const showPendingHistory = document.getElementById('showPendingHistory');
        const paymentModal = document.getElementById('paymentModal');
        const paymentTotal = document.getElementById('paymentTotal');
        const qrCode = document.getElementById('qrCode');
        const upiLink = document.getElementById('upiLink');
        // Additional DOM for new features
        const ownerProducts = document.getElementById('ownerProducts');
        const editProductForm = document.getElementById('owner-edit-product');
        const editProductId = document.getElementById('editProductId');
        const editProductName = document.getElementById('editProductName');
        const editProductPrice = document.getElementById('editProductPrice');
        const editProductImage = document.getElementById('editProductImage');
        const updateProductBtn = document.getElementById('updateProductBtn');
        const cancelEditBtn = document.getElementById('cancelEditBtn');
        const editProductMessage = document.getElementById('editProductMessage');
        const topNavbar = document.getElementById('topNavbar');
        // New DOM for User Dashboard
        const userTopbar = document.getElementById('userTopbar');
        const userLeftRail = document.getElementById('userLeftRail');
        const userProductList = document.getElementById('userProductList');
        const userBottombar = document.getElementById('userBottombar');
        const searchInput = document.getElementById('searchInput');
        const searchClear = document.getElementById('searchClear');
        const navHome = document.getElementById('navHome');
        const navProducts = document.getElementById('navProducts');
        const navCart = document.getElementById('navCart');
        const navOrders = document.getElementById('navOrders');
        const navProfile = document.getElementById('navProfile');
        // Sample categories for user left rail (adapt as needed)
        const categories = [  
            {name: 'All', icon: '🛍️'},  
            {name: 'Food', icon: '🍔'},  
            {name: 'Drinks', icon: '🥤'},  
            {name: 'Desserts', icon: '🍰'},  
            {name: 'Snacks', icon: '🍟'},  
            {name: 'More', icon: '⋯'}  
        ];  
        // Check if user is logged in
        function checkAuth() {
            if (token && userRole) {
                roleSelection.classList.add('hidden');
                authContainer.classList.add('hidden');
                logoutBtn.classList.remove('hidden');
                topNavbar.classList.remove('hidden');
                updateTopNavbar();
                if (userRole === 'user') {
                    userDashboard.classList.remove('hidden');
                    fetchUserProducts(); // New function for user products
                    fetchUserOrders();
                    fetchCart();
                    showUserSection('home'); // Default to home
                    document.getElementById('user-email').innerText = localStorage.getItem('email') || 'N/A';
                    renderUserCategories(); // Render left rail categories
                } else if (userRole === 'owner') {
                    ownerDashboard.classList.remove('hidden');
                    fetchAllOrders();
                    fetchOwnerProducts();
                    showOwnerSection('all-products');
                    document.getElementById('owner-email').innerText = localStorage.getItem('email') || 'N/A';
                    document.getElementById('ownerNavbar').classList.remove('hidden');
                } else if (userRole === 'delivery') {
                    deliveryDashboard.classList.remove('hidden');
                    fetchDeliveryHistory();
                    showDeliverySection('search');
                    document.getElementById('delivery-email').innerText = localStorage.getItem('email') || 'N/A';
                    document.getElementById('deliveryNavbar').classList.remove('hidden');
                }
            } else {
                roleSelection.classList.remove('hidden');
                authContainer.classList.add('hidden');
            }
        }
        // Select Role
        function selectRole(role) {
            document.getElementById('role').value = role;
            roleSelection.classList.add('hidden');
            authContainer.classList.remove('hidden');
        }
        // Update top navbar based on role (keep for owner/delivery, hide for user)
        function updateTopNavbar() {
            topNavbar.innerHTML = '';
            if (userRole !== 'user') {
                if (userRole === 'owner') {
                    topNavbar.innerHTML = `
                        <a href="#" onclick="showOwnerSection('add-product')">Add Product</a>
                        <a href="#" onclick="showOwnerSection('all-products')">All Products</a>
                        <a href="#" onclick="showOwnerSection('pending-orders')">Pending</a>
                        <a href="#" onclick="showOwnerSection('all-orders')">All Orders</a>
                        <a href="#" onclick="showOwnerSection('profile')">Profile</a>
                    `;
                } else if (userRole === 'delivery') {
                    topNavbar.innerHTML = `
                        <a href="#" onclick="showDeliverySection('search')">Search</a>
                        <a href="#" onclick="showDeliverySection('history')">History</a>
                        <a href="#" onclick="showDeliverySection('profile')">Profile</a>
                    `;
                }
            } else {
                topNavbar.classList.add('hidden'); // Hide original top nav for user
            }
        }
        // Render user categories in left rail
        function renderUserCategories() {
            userLeftRail.innerHTML = '';
            categories.forEach(cat => {
                const d = document.createElement('div');
                d.className = 'cat' + (cat.name === 'All' ? ' active' : '');
                d.innerHTML = `
                    <div class="cat-img">${cat.icon}</div>
                    <div class="cat-title">${cat.name}</div>
                `;
                d.title = cat.name;
                d.addEventListener('click', () => {
                    document.querySelectorAll('.cat').forEach(el => el.classList.remove('active'));
                    d.classList.add('active');
                    filterUserByCategory(cat.name);
                });
                userLeftRail.appendChild(d);
            });
        }
        // Show User Sections with new navigation
        function showUserSection(section) {
            const sections = ['user-cart', 'user-orders', 'user-history', 'user-profile'];
            sections.forEach(s => document.getElementById(s).classList.add('hidden'));
            userProductList.classList.add('hidden');
            userLeftRail.style.display = 'none';
            if (section === 'home') {
                userProductList.classList.remove('hidden');
                userLeftRail.style.display = 'none';
                setUserTab('home');
            } else if (section === 'products') {
                userProductList.classList.remove('hidden');
                userLeftRail.style.display = 'flex';
                setUserTab('products');
            } else if (section === 'cart') {
                document.getElementById('user-cart').classList.remove('hidden');
                fetchCart();
            } else if (section === 'orders') {
                document.getElementById('user-orders').classList.remove('hidden');
            } else if (section === 'history') {
                document.getElementById('user-history').classList.remove('hidden');
            } else if (section === 'profile') {
                document.getElementById('user-profile').classList.remove('hidden');
            }
        }
        // Show Owner Sections (Unchanged)
        function showOwnerSection(section) {
            const sections = ['owner-header', 'owner-add-product', 'owner-edit-product', 'owner-all-products', 'owner-pending-orders', 'owner-pending-history', 'owner-all-orders', 'owner-profile'];
            sections.forEach(s => document.getElementById(s).classList.add('hidden'));
            if (section === 'add-product') {
                document.getElementById('owner-add-product').classList.remove('hidden');
            } else if (section === 'all-products') {
                document.getElementById('owner-all-products').classList.remove('hidden');
            } else if (section === 'pending-orders') {
                document.getElementById('owner-pending-orders').classList.remove('hidden');
            } else if (section === 'all-orders') {
                document.getElementById('owner-all-orders').classList.remove('hidden');
            } else if (section === 'profile') {
                document.getElementById('owner-profile').classList.remove('hidden');
            }
            // Edit form is shown separately
        }
        // Show Delivery Sections (Unchanged)
        function showDeliverySection(section) {
            const sections = ['delivery-header', 'delivery-search', 'delivery-history', 'delivery-profile'];
            sections.forEach(s => document.getElementById(s).classList.add('hidden'));
            if (section === 'search') {
                document.getElementById('delivery-search').classList.remove('hidden');
            } else if (section === 'history') {
                document.getElementById('delivery-history').classList.remove('hidden');
            } else if (section === 'profile') {
                document.getElementById('delivery-profile').classList.remove('hidden');
            }
        }
        // Login/Register toggle
        let isLogin = true;
        toggleAuthBtn.addEventListener('click', () => {
            isLogin = !isLogin;
            authTitle.textContent = isLogin ? 'Login to Your Account' : 'Create New Account';
            authBtn.textContent = isLogin ? 'Login' : 'Register';
            toggleAuthBtn.textContent = isLogin ? 'Switch to Register' : 'Switch to Login';
            authMessage.textContent = '';
        });
        // Auth handler
        authBtn.addEventListener('click', async () => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const role = document.getElementById('role').value;
            try {
                const endpoint = isLogin ? '/login' : '/register';
                const response = await fetch(`${API_URL}${endpoint}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password, role })
                });
                const data = await response.json();
                if (response.ok) {
                    if (isLogin) {
                        token = data.token;
                        userRole = data.user.role;
                        localStorage.setItem('token', token);
                        localStorage.setItem('role', userRole);
                        localStorage.setItem('email', data.user.email);
                        checkAuth();
                    } else {
                        authMessage.textContent = 'Registration successful! Please login.';
                        authMessage.classList.remove('text-error');
                        authMessage.classList.add('text-success');
                    }
                } else {
                    authMessage.textContent = data.error;
                    authMessage.classList.add('text-error');
                }
            } catch (err) {
                authMessage.textContent = 'Server error';
                authMessage.classList.add('text-error');
            }
        });
        // Logout
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            localStorage.removeItem('email');
            localStorage.removeItem('cart');
            token = null;
            userRole = null;
            authContainer.classList.add('hidden');
            userDashboard.classList.add('hidden');
            ownerDashboard.classList.add('hidden');
            deliveryDashboard.classList.add('hidden');
            logoutBtn.classList.add('hidden');
            document.querySelectorAll('.bottom-navbar').forEach(nav => nav.classList.add('hidden'));
            topNavbar.classList.add('hidden');
            authMessage.textContent = '';
            checkAuth();
        });
        // Fetch products for user (adapted to new design)
        async function fetchUserProducts() {
            try {
                const response = await fetch(`${API_URL}/products`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const products = await response.json();
                // Adapt to new render
                currentUserProducts = products.map(p => ({
                    id: p._id,
                    name: p.name,
                    price: p.price,
                    cat: p.category || 'All', // Assume category field or default
                    image: p.imageUrl,
                    desc: p.description || ''
                }));
                setUserTab('home'); // Initial render
            } catch (err) {
                console.error('Error fetching products:', err);
            }
        }
        // User state
        let currentUserCategory = 'All';
        let currentUserTab = 'home';
        let currentUserProducts = [];
        // Render user products
        function renderUserProducts(list) {
            userProductList.innerHTML = '';
            if(list.length === 0) {
                userProductList.innerHTML = `
                    <div class="empty-state">
                        <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='120' height='120'><path fill='%23666' d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>" alt="No products">
                        <h3>No products found</h3>
                        <p>Try a different search or category</p>
                    </div>
                `;
                return;
            }
            list.forEach(p => {
                const card = document.createElement('article');
                card.className = 'user-product-card';
                let priceHtml = `₹ ${p.price}`;
                card.innerHTML = `
                    <div class="user-product-img">
                        <img src="${p.image}" alt="${p.name}">
                    </div>
                    <div class="user-product-info">
                        <div class="user-product-name">${p.name}</div>
                        <div class="user-product-desc">${p.desc}</div>
                        <div class="actions">
                            <div class="user-product-price">${priceHtml}</div>
                            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;">
                                <label>Qty:</label>
                                <input type="number" min="1" value="1" style="width: 60px; padding: 5px; border-radius: 5px; border: 1px solid var(--light-gray);" id="qty-${p.id}">
                            </div>
                            <button onclick="addToCart('${p.id}', document.getElementById('qty-${p.id}').value)" class="btn btn-block">Add to Cart</button>
                        </div>
                    </div>
                `;
                userProductList.appendChild(card);
            });
        }
        // Filtering by category for user
        function filterUserByCategory(cat) {
            currentUserCategory = cat;
            if(cat === 'All') {
                currentUserProductsFiltered = [...currentUserProducts];
            } else {
                currentUserProductsFiltered = currentUserProducts.filter(p => p.cat === cat);
            }
            const searchQuery = searchInput.value.trim().toLowerCase();
            if(searchQuery) {
                currentUserProductsFiltered = currentUserProductsFiltered.filter(p =>
                    p.name.toLowerCase().includes(searchQuery) || p.cat.toLowerCase().includes(searchQuery)
                );
            }
            renderUserProducts(currentUserProductsFiltered);
        }
        // Set user tab
        function setUserTab(tab) {
            currentUserTab = tab;
            document.querySelectorAll('.user-bottombar button').forEach(btn => btn.classList.remove('active'));
            document.getElementById(`nav${tab.charAt(0).toUpperCase() + tab.slice(1)}`).classList.add('active');
            if (tab === 'home') {
                userLeftRail.style.display = 'none';
                userProductList.style.paddingLeft = '16px';
                const q = searchInput.value.trim().toLowerCase();
                const filtered = q ? currentUserProducts.filter(p => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)) : currentUserProducts;
                renderUserProducts(filtered);
            } else if (tab === 'products') {
                userLeftRail.style.display = 'flex';
                userProductList.style.paddingLeft = '96px';
                filterUserByCategory(currentUserCategory);
            } else {
                showUserSection(tab); // For cart, orders, profile
            }
        }
        // Search for user
        searchInput.addEventListener('input', () => {
            const q = searchInput.value.trim().toLowerCase();
            if (currentUserTab === 'home') {
                const filtered = q ? currentUserProducts.filter(p => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)) : currentUserProducts;
                renderUserProducts(filtered);
            } else if (currentUserTab === 'products') {
                filterUserByCategory(currentUserCategory);
            }
        });
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            if (currentUserTab === 'home') {
                renderUserProducts(currentUserProducts);
            } else if (currentUserTab === 'products') {
                filterUserByCategory(currentUserCategory);
            }
        });
        // User bottom nav handlers
        navHome.addEventListener('click', () => setUserTab('home'));
        navProducts.addEventListener('click', () => setUserTab('products'));
        navCart.addEventListener('click', () => setUserTab('cart'));
        navOrders.addEventListener('click', () => setUserTab('orders'));
        navProfile.addEventListener('click', () => setUserTab('profile'));
        // Cart management (Unchanged)
        function getCart() {
            return JSON.parse(localStorage.getItem('cart') || '[]');
        }
        function saveCart(cart) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        function addToCart(productId, qty) {
            qty = parseInt(qty) || 1;
            let cart = getCart();
            const existing = cart.find(item => item.productId === productId);
            if (existing) {
                existing.quantity += qty;
            } else {
                cart.push({ productId, quantity: qty });
            }
            saveCart(cart);
            alert('Added to cart!');
            fetchCart();
        }
        function updateCartQty(index, delta) {
            let cart = getCart();
            cart[index].quantity += delta;
            if (cart[index].quantity < 1) {
                removeFromCart(index);
                return;
            }
            saveCart(cart);
            fetchCart();
        }
        function removeFromCart(index) {
            let cart = getCart();
            cart.splice(index, 1);
            saveCart(cart);
            fetchCart();
        }
        async function fetchCart() {
            let cart = getCart();
            cartItems.innerHTML = '';
            if (cart.length === 0) {
                cartItems.innerHTML = '<p>Cart is empty</p>';
                placeOrderBtn.disabled = true;
                clearCartBtn.disabled = true;
                return;
            }
            placeOrderBtn.disabled = false;
            clearCartBtn.disabled = false;
            const itemsWithDetails = await Promise.all(cart.map(async (item) => {
                const res = await fetch(`${API_URL}/products/${item.productId}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const product = await res.json();
                return { ...item, product };
            }));
            let html = '<div class="item-list">';
            let subtotal = 0;
            itemsWithDetails.forEach((item, index) => {
                const itemSubtotal = item.product.price * item.quantity;
                subtotal += itemSubtotal;
                html += `
                    <div class="item-card">
                        <img src="${item.product.imageUrl}" style="width:30px; height:30px; flex-shrink: 0;">
                        <div style="flex: 1; display: flex; flex-direction: column; gap: 0.1rem;">
                            <span style="font-weight: bold; font-size: 0.8rem;">${item.product.name}</span>
                            <div style="display: flex; justify-content: space-between; font-size: 0.7rem;">
                                <span>₹${item.product.price.toFixed(2)}</span>
                                <span>
                                    <button class="btn btn-circle" onclick="updateCartQty(${index}, -1)">-</button>
                                    ${item.quantity}
                                    <button class="btn btn-circle" onclick="updateCartQty(${index}, 1)">+</button>
                                </span>
                            </div>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            let gst = Math.round(subtotal * 0.05);
            let platformFee = 8;
            let total = subtotal + gst + platformFee;
            html += `
                <div class="order-field"><span class="order-label">Subtotal</span><span class="order-value">₹${subtotal.toFixed(2)}</span></div>
                <div class="order-field"><span class="order-label">GST</span><span class="order-value">₹${gst.toFixed(2)}</span></div>
                <div class="order-field"><span class="order-label">Platform Fee</span><span class="order-value">₹${platformFee.toFixed(2)}</span></div>
                <div class="order-field"><span class="order-label">Total</span><span class="order-value">₹${total.toFixed(2)}</span></div>
            `;
            cartItems.innerHTML = html;
        }
        // Place order from cart
        placeOrderBtn.addEventListener('click', async () => {
            const cart = getCart();
            if (cart.length === 0) return;
            try {
                const response = await fetch(`${API_URL}/orders`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ items: cart })
                });
                const data = await response.json();
                if (response.ok) {
                    saveCart([]);
                    fetchCart();
                    fetchUserOrders();
                    alert('Order placed successfully!');
                } else {
                    alert(data.error);
                }
            } catch (err) {
                alert('Server error');
            }
        });
        // Clear cart
        clearCartBtn.addEventListener('click', () => {
            if (confirm('Clear entire cart?')) {
                saveCart([]);
                fetchCart();
            }
        });
        // Fetch products for owner (Unchanged)
        async function fetchOwnerProducts() {
            try {
                const response = await fetch(`${API_URL}/products`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const products = await response.json();
                ownerProducts.innerHTML = '';
                products.forEach(product => {
                    const row = document.createElement('tr');
                    row.className = 'fade-in';
                    row.innerHTML = `
                        <td data-label="Name">${product.name}</td>
                        <td data-label="Price">₹${product.price.toFixed(2)}</td>
                        <td data-label="Image"><img src="${product.imageUrl}" alt="${product.name}" style="width:50px;height:50px;"></td>
                        <td data-label="Actions">
                            <button onclick="editProduct('${product._id}', '${product.name}', ${product.price}, '${product.imageUrl}')" class="btn btn-outline">Edit</button>
                            <button onclick="deleteProduct('${product._id}')" class="btn btn-outline" style="background: linear-gradient(135deg, var(--warning), #b5175f); color: white;">Delete</button>
                        </td>
                    `;
                    ownerProducts.appendChild(row);
                });
            } catch (err) {
                console.error('Error fetching owner products:', err);
            }
        }
        // Edit product (Unchanged)
        function editProduct(id, name, price, imageUrl) {
            editProductId.value = id;
            editProductName.value = name;
            editProductPrice.value = price;
            editProductImage.value = imageUrl;
            editProductForm.classList.remove('hidden');
        }
        // Update product (Unchanged)
        updateProductBtn.addEventListener('click', async () => {
            const id = editProductId.value;
            const name = editProductName.value;
            const price = editProductPrice.value;
            const imageUrl = editProductImage.value;
            try {
                const response = await fetch(`${API_URL}/products/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ name, price, imageUrl })
                });
                const data = await response.json();
                if (response.ok) {
                    editProductMessage.textContent = 'Product updated successfully!';
                    editProductMessage.classList.add('text-success');
                    fetchOwnerProducts();
                    fetchUserProducts(); // Update user products too
                    setTimeout(() => {
                        editProductForm.classList.add('hidden');
                        editProductMessage.textContent = '';
                    }, 2000);
                } else {
                    editProductMessage.textContent = data.error;
                    editProductMessage.classList.add('text-error');
                }
            } catch (err) {
                editProductMessage.textContent = 'Server error';
                editProductMessage.classList.add('text-error');
            }
        });
        // Cancel edit (Unchanged)
        cancelEditBtn.addEventListener('click', () => {
            editProductForm.classList.add('hidden');
            editProductMessage.textContent = '';
        });
        // Delete product (Unchanged)
        async function deleteProduct(id) {
            if (!confirm('Are you sure you want to delete this product?')) return;
            try {
                const response = await fetch(`${API_URL}/products/${id}`, {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const data = await response.json();
                if (response.ok) {
                    fetchOwnerProducts();
                    fetchUserProducts();
                    alert('Product deleted successfully!');
                } else {
                    alert(data.error);
                }
            } catch (err) {
                alert('Server error');
            }
        }
        // Confirm user order (Unchanged)
        async function confirmUserOrder(orderId) {
            try {
                const response = await fetch(`${API_URL}/orders/${orderId}/confirm-user`, {
                    method: 'PATCH',
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const data = await response.json();
                if (response.ok) {
                    fetchUserOrders();
                    fetchAllOrders(); // for owner if open
                    alert('Order confirmed and sent to owner!');
                } else {
                    alert(data.error);
                }
            } catch (err) {
                alert('Server error');
            }
        }
        // Delete entire order (Unchanged)
        async function deleteOrder(orderId) {
            if (!confirm('Delete entire order?')) return;
            try {
                const response = await fetch(`${API_URL}/orders/${orderId}`, {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (response.ok) {
                    fetchUserOrders();
                } else {
                    alert('Error deleting order');
                }
            } catch (err) {
                alert('Server error');
            }
        }
        // Fetch user orders (Unchanged)
        async function fetchUserOrders() {
            try {
                const response = await fetch(`${API_URL}/orders/user`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                let orders = await response.json();
                orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                userOrdersGrid.innerHTML = '';
                userHistoryGrid.innerHTML = '';
                orders.forEach(order => {
                    const card = document.createElement('div');
                    card.className = 'order-card fade-in';
                    card.id = `order-card-${order._id}`;
                    let headerHtml = '';
                    if (order.status === 'draft') {
                        headerHtml = `<div class="order-header"><button onclick="deleteOrder('${order._id}')" style="background: none; border: none; color: red; cursor: pointer;"><i class="fas fa-trash"></i></button></div>`;
                    }
                    let itemsHtml = '<div class="item-list">';
                    order.items.forEach(item => {
                        itemsHtml += `
                            <div class="item-card" id="item-${item.productId}">
                                <img src="${item.imageUrl}" style="width:40px; height:40px; flex-shrink: 0;">
                                <div style="flex: 1; display: flex; flex-direction: column; gap: 0.1rem;">
                                    <span style="font-weight: bold; font-size: 0.8rem;">${item.productName}</span>
                                    <div style="display: flex; justify-content: space-between; font-size: 0.75rem;">
                                        <span>Price: ₹${item.price.toFixed(2)}</span>
                                        <span>Quantity: <span id="qty-${item.productId}">${item.quantity}</span></span>
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                    itemsHtml += '</div>';
                    card.innerHTML = `
                        ${headerHtml}
                        ${itemsHtml}
                        <div class="order-field">
                            <span class="order-label">Subtotal</span>
                            <span class="order-value subtotal">₹${order.subtotal.toFixed(2)}</span>
                        </div>
                        <div class="order-field">
                            <span class="order-label">GST</span>
                            <span class="order-value gst">₹${order.gst.toFixed(2)}</span>
                        </div>
                        <div class="order-field">
                            <span class="order-label">Platform Fee</span>
                            <span class="order-value">₹${order.platformFee.toFixed(2)}</span>
                        </div>
                        <div class="order-field">
                            <span class="order-label">Total</span>
                            <span class="order-value total">₹${order.total.toFixed(2)}</span>
                        </div>
                        <div class="order-field">
                            <span class="order-label">Status</span>
                            <span class="status-badge status-${order.status}">${order.status}</span>
                        </div>
                        <div class="order-field">
                            <span class="order-label">OTP</span>
                            <span class="order-value otp">${order.otp || '-'}</span>
                        </div>
                        <div class="order-field">
                            <span class="order-label">Ordered At</span>
                            <span class="order-value">${order.createdAt ? new Date(order.createdAt).toLocaleString() : '-'}</span>
                        </div>
                    `;
                    if (order.status === 'draft') {
                        card.innerHTML += `<button onclick="confirmUserOrder('${order._id}')" class="btn mt-1">Confirm Order</button>`;
                    } else if (order.status === 'pending') {
                        card.innerHTML += `<button onclick="generatePayment('${order._id}')" class="btn mt-1">Payment</button>`;
                    } else if (order.status === 'confirmed') {
                        card.innerHTML += `<p>Waiting for delivery</p>`;
                    }
                    if (order.status === 'delivered') {
                        userHistoryGrid.appendChild(card);
                    } else {
                        userOrdersGrid.appendChild(card);
                    }
                });
            } catch (err) {
                console.error('Error fetching user orders:', err);
            }
        }
        // Generate payment (Unchanged)
        async function generatePayment(orderId) {
            try {
                const response = await fetch(`${API_URL}/orders/${orderId}/generate-payment`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (response.ok) {
                    paymentTotal.innerText = data.total.toFixed(2);
                    qrCode.src = data.qrSrc;
                    upiLink.href = data.upiUrl;
                    paymentModal.classList.remove('hidden');
                } else {
                    alert(data.error);
                }
            } catch (err) {
                alert('Server error');
            }
        }
        // Close modal (Unchanged)
        function closeModal() {
            paymentModal.classList.add('hidden');
        }
        // Fetch all orders (owner) (Unchanged)
        async function fetchAllOrders() {
            try {
                const response = await fetch(`${API_URL}/orders`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                allOrders = await response.json();
                allOrders = allOrders.filter(order => order.status !== 'draft');
                allOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                refreshOwnerTables();
            } catch (err) {
                console.error('Error fetching all orders:', err);
            }
        }
        // Refresh owner tables (Unchanged)
        function refreshOwnerTables() {
            ownerOrders.innerHTML = '';
            ownerPendingOrders.innerHTML = '';
            ownerPendingHistory.innerHTML = '';
            let allRows = '';
            let pendingRecent = '';
            let pendingOld = '';
            allOrders.forEach(order => {
                const productsList = order.items.map(item => `${item.productName} (x${item.quantity})`).join(', ');
                const row = `
                    <tr class="fade-in">
                        <td data-label="User">${order.userId.email}</td>
                        <td data-label="Products">${productsList}</td>
                        <td data-label="Total">₹${order.total.toFixed(2)}</td>
                        <td data-label="Status"><span class="status-badge status-${order.status}">${order.status}</span></td>
                        <td data-label="Ordered At">${order.createdAt ? new Date(order.createdAt).toLocaleString() : '-'}</td>
                        <td data-label="Action">
                            ${order.status === 'pending' ?
                                `<button onclick="confirmOrder('${order._id}')" class="btn">Confirm</button>` :
                                '<span class="text-success">Confirmed</span>'}
                        </td>
                    </tr>
                `;
                allRows += row;
                if (order.status === 'pending') {
                    const timeDiff = (Date.now() - new Date(order.createdAt).getTime()) / 3600000;
                    if (filterHours === 0 || timeDiff <= filterHours) {
                        pendingRecent += row;
                    } else {
                        pendingOld += row;
                    }
                }
            });
            ownerOrders.innerHTML = allRows;
            ownerPendingOrders.innerHTML = pendingRecent;
            ownerPendingHistory.innerHTML = pendingOld;
        }
        // Confirm order (Unchanged)
        async function confirmOrder(orderId) {
            try {
                const response = await fetch(`${API_URL}/orders/${orderId}/confirm`, {
                    method: 'PATCH',
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const data = await response.json();
                if (response.ok) {
                    fetchAllOrders();
                    ownerMessage.textContent = 'Order confirmed! OTP sent to user.';
                    ownerMessage.classList.remove('text-error');
                    ownerMessage.classList.add('text-success');
                    setTimeout(() => ownerMessage.textContent = '', 3000);
                } else {
                    ownerMessage.textContent = data.error;
                    ownerMessage.classList.remove('text-success');
                    ownerMessage.classList.add('text-error');
                    setTimeout(() => ownerMessage.textContent = '', 3000);
                }
            } catch (err) {
                ownerMessage.textContent = 'Server error';
                ownerMessage.classList.add('text-error');
                setTimeout(() => ownerMessage.textContent = '', 3000);
            }
        }
        // Add product (Unchanged)
        addProductBtn.addEventListener('click', async () => {
            const name = document.getElementById('productName').value;
            const price = document.getElementById('productPrice').value;
            const imageUrl = document.getElementById('productImage').value;
            try {
                const response = await fetch(`${API_URL}/products`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ name, price, imageUrl })
                });
                const data = await response.json();
                if (response.ok) {
                    productMessage.textContent = 'Product added successfully!';
                    productMessage.classList.remove('text-error');
                    productMessage.classList.add('text-success');
                    fetchUserProducts();
                    fetchOwnerProducts();
                } else {
                    productMessage.textContent = data.error;
                    productMessage.classList.add('text-error');
                }
            } catch (err) {
                productMessage.textContent = 'Server error';
                productMessage.classList.add('text-error');
            }
        });
        // Search order by OTP with attempts (Unchanged)
        searchOtpBtn.addEventListener('click', async () => {
            const otp = document.getElementById('otpInput').value;
            try {
                const response = await fetch(`${API_URL}/orders/otp/attempt`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ otp })
                });
                const data = await response.json();
                if (response.ok) {
                    currentOrderId = data.order._id;
                    otpOrderResult.classList.remove('hidden');
                    const productsList = data.order.items.map(item => `${item.productName} (x${item.quantity})`).join('<br>');
                    otpOrderDetails.innerHTML = `
                        <strong>User:</strong> ${data.order.userId.email}<br>
                        <strong>Products:</strong> ${productsList}<br>
                        <strong>Total:</strong> ₹${data.order.total.toFixed(2)}<br>
                        <strong>Status:</strong> <span class="status-badge status-${data.order.status}">${data.order.status}</span><br>
                        <strong>Ordered At:</strong> ${data.order.createdAt ? new Date(data.order.createdAt).toLocaleString() : '-'}
                    `;
                    otpMessage.textContent = `Attempt ${data.attempts}/3 successful.`;
                    otpMessage.classList.add('text-success');
                } else {
                    otpOrderResult.classList.add('hidden');
                    otpMessage.textContent = data.error + (data.attempts ? ` (Attempt ${data.attempts}/3)` : '');
                    otpMessage.classList.add('text-error');
                    if (response.status === 429) {
                        lockScreen();
                    } else if (response.status === 403) {
                        otpMessage.textContent = 'Account permanently blocked.';
                        setTimeout(() => logoutBtn.click(), 2000);
                    }
                }
            } catch (err) {
                otpMessage.textContent = 'Server error';
                otpMessage.classList.add('text-error');
            }
        });
        // Lock screen for 30 seconds with countdown (Unchanged)
        function lockScreen() {
            const overlay = document.createElement('div');
            overlay.id = 'lockOverlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'red';
            overlay.style.opacity = '0.8';
            overlay.style.zIndex = '9999';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.color = 'white';
            overlay.style.fontSize = '2rem';
            overlay.style.pointerEvents = 'all';
            document.body.appendChild(overlay);
            document.body.style.pointerEvents = 'none';
            let countdown = 30;
            overlay.innerText = `Locked for ${countdown} seconds`;
            const interval = setInterval(() => {
                countdown--;
                overlay.innerText = `Locked for ${countdown} seconds`;
                if (countdown <= 0) {
                    clearInterval(interval);
                    overlay.remove();
                    document.body.style.pointerEvents = 'auto';
                }
            }, 1000);
        }
        // Mark order as delivered (Unchanged)
        markDeliveredBtn.addEventListener('click', async () => {
            if (!currentOrderId) return;
            try {
                const response = await fetch(`${API_URL}/orders/${currentOrderId}/deliver`, {
                    method: 'PATCH',
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const data = await response.json();
                if (response.ok) {
                    otpOrderResult.classList.add('hidden');
                    otpMessage.textContent = 'Order delivered successfully!';
                    otpMessage.classList.remove('text-error');
                    otpMessage.classList.add('text-success');
                    fetchDeliveryHistory();
                } else {
                    otpMessage.textContent = data.error;
                    otpMessage.classList.add('text-error');
                }
            } catch (err) {
                otpMessage.textContent = 'Server error';
                otpMessage.classList.add('text-error');
            }
        });
        // Fetch delivery history (Unchanged)
        async function fetchDeliveryHistory() {
            try {
                const response = await fetch(`${API_URL}/orders/delivered`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                let orders = await response.json();
                orders.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
                deliveryHistory.innerHTML = '';
                orders.forEach(order => {
                    const productsList = order.items.map(item => `${item.productName} (x${item.quantity})`).join(', ');
                    const row = document.createElement('tr');
                    row.className = 'fade-in';
                    row.innerHTML = `
                        <td data-label="User">${order.userId.email}</td>
                        <td data-label="Products">${productsList}</td>
                        <td data-label="Total">₹${order.total.toFixed(2)}</td>
                        <td data-label="Status"><span class="status-badge status-${order.status}">${order.status}</span></td>
                        <td data-label="Delivered At">${order.updatedAt ? new Date(order.updatedAt).toLocaleString() : '-'}</td>
                    `;
                    deliveryHistory.appendChild(row);
                });
            } catch (err) {
                console.error('Error fetching delivery history:', err);
            }
        }
        // Event listeners (Unchanged)
        pendingFilter.addEventListener('change', () => {
            filterHours = parseInt(pendingFilter.value);
            refreshOwnerTables();
        });
        showPendingHistory.addEventListener('click', () => {
            document.getElementById('owner-pending-history').classList.toggle('hidden');
        });
        // Initialize
        checkAuth();
    </script>
</body>
</html>
