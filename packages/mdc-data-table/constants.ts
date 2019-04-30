/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

export const cssClasses = {
  ROOT: 'mdc-data-table',
  CELL: 'mdc-data-table__cell',
  CELL_NUMERIC: 'mdc-data-table__cell--numeric',
  ROW: 'mdc-data-table__row',
  HEADER_ROW: 'mdc-data-table__header-row',
  ROW_SELECTED: 'mdc-data-table__row--selected',
  HEADER_ROW_CHECKBOX: 'mdc-data-table__header-row-checkbox',
  ROW_CHECKBOX: 'mdc-data-table__row-checkbox',
  CONTENT: 'mdc-data-table__content',
};

export const strings = {
  DATA_ROW_ID_ATTR: 'data-row-id',
  ARIA_SELECTED: 'aria-selected',
  ROW_SELECTOR: `.${cssClasses.ROW}`,
  ROW_CHECKBOX_SELECTOR: `.${cssClasses.ROW_CHECKBOX}`,
  HEADER_ROW_CHECKBOX_SELECTOR: `.${cssClasses.HEADER_ROW_CHECKBOX}`,
  ROW_SELECTED_SELECTOR: `.${cssClasses.ROW_SELECTED}`,
};

export const events = {
  ROW_SELECTION_CHANGED: 'MDCDataTable:changed',
  SELECTED_ALL: 'MDCDataTable:selectedAll',
  UNSELECTED_ALL: 'MDCDataTable:unselectedAll',
};
