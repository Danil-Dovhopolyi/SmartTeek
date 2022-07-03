function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.itemCount() / this.itemsPerPage);
};

PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  if (pageIndex + 1 < this.pageCount()) {
    return this.itemsPerPage;
  } else if (pageIndex + 1 === this.pageCount()) {
    return this.itemCount() % this.itemsPerPage;
  }
  return -1;
};

PaginationHelper.prototype.pageIndex = function (itemIndex) {
  const res = Math.floor(itemIndex / this.itemsPerPage);
  return 0 <= res && res < this.pageCount() ? res : -1;
};
