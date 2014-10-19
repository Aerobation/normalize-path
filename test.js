/*!
 * normalize-path <https://github.com/jonschlinkert/normalize-path>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var should = require('should');
var normalize = require('./');

describe('normalize:', function () {
  it('should normalize "E://foo//bar//baz"', function() {
    normalize('E://foo//bar//baz').should.equal('e:/foo/bar/baz');
  });
  it('should normalize "E://foo//bar//baz//"', function() {
    normalize('E://foo//bar//baz//').should.equal('e:/foo/bar/baz');
  });
  it('should normalize "E:/foo/bar/baz/"', function() {
    normalize('E:/foo/bar/baz/').should.equal('e:/foo/bar/baz');
  });
  it('should normalize "E://foo\\bar\\baz"', function() {
    normalize('E://foo\\bar\\baz').should.equal('e:/foo/bar/baz');
  });
  it('should normalize "foo\\bar\\baz"', function() {
    normalize('foo\\bar\\baz').should.equal('foo/bar/baz');
  });
  it('should normalize "foo\\bar\\baz\\"', function() {
    normalize('foo\\bar\\baz\\').should.equal('foo/bar/baz');
  });
  it('should normalize "E://foo/bar\\baz"', function() {
    normalize('E://foo/bar\\baz').should.equal('e:/foo/bar/baz');
  });
  it('should normalize "E:\\\\foo/bar\\baz"', function() {
    normalize('E:\\\\foo/bar\\baz').should.equal('e:/foo/bar/baz');
  });
  it('should normalize "foo/bar\\baz"', function() {
    normalize('//foo/bar\\baz').should.equal('/foo/bar/baz');
  });
  it('should normalize "foo\\bar\\baz"', function() {
    normalize('//foo\\bar\\baz').should.equal('/foo/bar/baz');
  });
  it('should normalize "C:\\user\\docs\\Letter.txt"', function() {
    normalize('C:\\user\\docs\\Letter.txt').should.equal('c:/user/docs/letter.txt');
  });
  it('should normalize "user/docs/Letter.txt"', function() {
    normalize('/user/docs/Letter.txt').should.equal('/user/docs/letter.txt');
  });
  it('should normalize "C:Letter.txt"', function() {
    normalize('C:Letter.txt').should.equal('c:letter.txt');
  });
  it('should normalize "Server01\\user\\docs\\Letter.txt"', function() {
    normalize('\\Server01\\user\\docs\\Letter.txt').should.equal('/server01/user/docs/letter.txt');
  });
  it('should normalize "UNC\\Server01\\user\\docs\\Letter.txt"', function() {
    normalize('\\?\\UNC\\Server01\\user\\docs\\Letter.txt').should.equal('/?/unc/server01/user/docs/letter.txt');
  });
  it('should normalize "C:\\user\\docs\\Letter.txt"', function() {
    normalize('\\?\\C:\\user\\docs\\Letter.txt').should.equal('/?/c:/user/docs/letter.txt');
  });
  it('should normalize "C:\\user\\docs\\somefile.ext:alternate_stream_name"', function() {
    normalize('C:\\user\\docs\\somefile.ext:alternate_stream_name').should.equal('c:/user/docs/somefile.ext:alternate_stream_name');
  });
  it('should normalize "cwd"', function() {
    normalize('./cwd').should.equal('cwd');
  });
  it('should normalize "grandparent"', function() {
    normalize('../../grandparent').should.equal('../../grandparent');
  });
});