from django.contrib import admin
from .models import Category, Subcategory

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']

@admin.register(Subcategory)
class SubcategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'category']
