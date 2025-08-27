import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface StatCard {
  title: string;
  value: number;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products: Product[] = [];
  stats: StatCard[] = [];

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.loadProducts();
    this.loadStats();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  goHome() {
    this.router.navigate(['/']);
  }

  loadProducts() {
    this.products = [
      { id: 1, name: 'Laptop', price: 25000, stock: 10 },
      { id: 2, name: 'Mouse', price: 500, stock: 50 },
      { id: 3, name: 'Keyboard', price: 1500, stock: 30 },
      { id: 4, name: 'Monitor', price: 7000, stock: 15 },
    ];
  }

  loadStats() {
    this.stats = [
      { title: 'Total Products', value: this.products.length },
      { title: 'Total Orders', value: 120 },
      { title: 'Users', value: 45 },
    ];
  }
}
