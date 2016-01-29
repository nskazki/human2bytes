'use strict'

import assert from 'power-assert'
import b2h from 'filesize'
import h2b from '../src'

describe('from bytes', () => {
  it('100 B', () => {
    let size = 100
    assert(h2b(b2h(size)) === size)
  })

  it('1000 B', () => {
    let size = 100
    assert(h2b(b2h(size)) === size)
  })

  it('1 KB', () => {
    let size = 1024
    assert(h2b(b2h(size)) === size)
  })

  it('1.5 KB', () => {
    let size = 1024 + 512
    assert(h2b(b2h(size)) === size)
  })

  it('1 MB', () => {
    let size = 1024*1024
    assert(h2b(b2h(size)) === size)
  })

  it('512 MB', () => {
    let size = 1024*1024*512
    assert(h2b(b2h(size)) === size)
  })

  it('1.5 GB', () => {
    let size = 1024*1024*1024+1024*1024*512
    assert(h2b(b2h(size)) === size)
  })

  it('2 GB', () => {
    let size = 1024*1024*1024*2
    assert(h2b(b2h(size)) === size)
  })

  it('256 TB', () => {
    let size = 1024*1024*1024*1024*256
    assert(h2b(b2h(size)) === size)
  })

  it('128 PB', () => {
    let size = 1024*1024*1024*1024*1024
    assert(h2b(b2h(size)) === size)
  })

  it('1 EB', () => {
    let size = 1024*1024*1024*1024*1024*1024
    assert(h2b(b2h(size)) === size)
  })

  it('1 ZB', () => {
    let size = 1024*1024*1024*1024*1024*1024*1024
    assert(h2b(b2h(size)) === size)
  })

  it('1 YB', () => {
    let size = 1024*1024*1024*1024*1024*1024*1024*1024
    assert(h2b(b2h(size)) === size)
  })

  it('1024 YB', () => {
    let size = 1024*1024*1024*1024*1024*1024*1024*1024*1024
    assert(h2b(b2h(size)) === size)
  })
})

describe('from bits', () => {
  it('1 b', () => {
    let size = 1/8
    assert(h2b('1 b') === size)
  })

  it('8 b', () => {
    let size = 1
    assert(h2b(b2h(size, { bits: true })) === size)
  })

  it('8 Kb', () => {
    let size = 1024
    assert(h2b(b2h(size, { bits: true })) === size)
  })

  it('8 Mb', () => {
    let size = 1024*1024
    assert(h2b(b2h(size, { bits: true })) === size)
  })

  it('8 Gb', () => {
    let size = 1024*1024*1024
    assert(h2b(b2h(size, { bits: true })) === size)
  })

  it('8 Tb', () => {
    let size = 1024*1024*1024*1024
    assert(h2b(b2h(size, { bits: true })) === size)
  })

  it('8 Pb', () => {
    let size = 1024*1024*1024*1024*1024
    assert(h2b(b2h(size, { bits: true })) === size)
  })

  it('8 Eb', () => {
    let size = 1024*1024*1024*1024*1024*1024
    assert(h2b(b2h(size, { bits: true })) === size)
  })

  it('8 Zb', () => {
    let size = 1024*1024*1024*1024*1024*1024*1024
    assert(h2b(b2h(size, { bits: true })) === size)
  })

  it('8 Yb', () => {
    let size = 1024*1024*1024*1024*1024*1024*1024*1024
    assert(h2b(b2h(size, { bits: true })) === size)
  })
})

describe('from unix bytes format (like ls -hl)', () => {
  it('1', () => {
    let size = 1
    assert(h2b(b2h(size, { unix: true })) === size)
  })

  it('1K', () => {
    let size = 1024
    assert(h2b(b2h(size, { unix: true })) === size)
  })

  it('1M', () => {
    let size = 1024*1024
    assert(h2b(b2h(size, { unix: true })) === size)
  })

  it('1.5M', () => {
    let size = 1024*1024*1/2
    assert(h2b(b2h(size, { unix: true })) === size)
  })

  it('1G', () => {
    let size = 1024*1024*1024
    assert(h2b(b2h(size, { unix: true })) === size)
  })

  it('1T', () => {
    let size = 1024*1024*1024*1024
    assert(h2b(b2h(size, { unix: true })) === size)
  })

  it('1P', () => {
    let size = 1024*1024*1024*1024*1024
    assert(h2b(b2h(size, { unix: true })) === size)
  })

  it('1E', () => {
    let size = 1024*1024*1024*1024*1024*1024
    assert(h2b(b2h(size, { unix: true })) === size)
  })

  it('1Z', () => {
    let size = 1024*1024*1024*1024*1024*1024*1024
    assert(h2b(b2h(size, { unix: true })) === size)
  })

  it('1Y', () => {
    let size = 1024*1024*1024*1024*1024*1024*1024*1024
    assert(h2b(b2h(size, { unix: true })) === size)
  })
})
