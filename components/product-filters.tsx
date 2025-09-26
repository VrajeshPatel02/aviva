"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, X } from "lucide-react"

interface ProductFiltersProps {
  categories: string[]
  onCategoryChange: (category: string) => void
  onSearchChange: (search: string) => void
  selectedCategory: string
  searchTerm: string
}

export function ProductFilters({
  categories,
  onCategoryChange,
  onSearchChange,
  selectedCategory,
  searchTerm,
}: ProductFiltersProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search products..."
          className="pl-10 pr-4 py-3"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
            onClick={() => onSearchChange("")}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Category Filters */}
      <div className="space-y-4">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden">
          <Button variant="outline" onClick={() => setIsFilterOpen(!isFilterOpen)} className="w-full justify-between">
            <span className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Categories
            </span>
            {selectedCategory !== "All Products" && <Badge variant="secondary">{selectedCategory}</Badge>}
          </Button>
        </div>

        {/* Filter Options */}
        <div className={`${isFilterOpen ? "block" : "hidden"} md:block`}>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className="rounded-full"
                onClick={() => {
                  onCategoryChange(category)
                  setIsFilterOpen(false)
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {(selectedCategory !== "All Products" || searchTerm) && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {selectedCategory !== "All Products" && (
            <Badge variant="secondary" className="gap-1">
              {selectedCategory}
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => onCategoryChange("All Products")}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          {searchTerm && (
            <Badge variant="secondary" className="gap-1">
              Search: "{searchTerm}"
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => onSearchChange("")}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}
