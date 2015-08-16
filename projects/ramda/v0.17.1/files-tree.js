var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' files tree',
  body: [
    d('BOOKMARKLET.md'),
    d('bower.json'),
    d('CHANGELOG.md'),
    d('CONTRIBUTING.md'),
    c('dist', [
      d('ramda.js'),
      d('ramda.min.js'),
    ]),
    c('lib', [
      c('bench', [
        d('concat.bench.js'),
        d('curry.bench.js'),
        d('each.bench.js'),
        d('filter.bench.js'),
        d('filter-where.bench.js'),
        d('find.bench.js'),
        d('findIndex.bench.js'),
        d('findIndex-where.bench.js'),
        d('find-where.bench.js'),
        d('indexof.bench.js'),
        d('isset.bench.js'),
        d('map.bench.js'),
        d('maxWith.bench.js'),
        d('reduce.bench.js'),
      ]),
      c('sauce', [
        d('android.js'),
        d('apple.js'),
        d('browsers.js'),
        d('conf.js'),
        d('ie8-shim.js'),
        d('ios.js'),
        d('linux.js'),
        d('mocharun.js'),
        d('server.js'),
        d('windows.js'),
      ]),
      c('test', [
        d('assert-shim.js'),
        d('bundle.js'),
        d('expect.js'),
        d('index.html'),
        d('mocha.css'),
        d('mocha.js'),
        d('require-shim.js'),
      ]),
    ]),
    d('LICENSE.txt'),
    d('Makefile'),
    d('package.json'),
    d('README.md'),
    c('scripts', [
      d('benchRunner'),
      d('bookmarklet'),
      d('bookmarklet.tmpl.js'),
      d('BOOKMARKLET.tmpl.md'),
      d('build'),
      d('doc-blob'),
      d('header'),
      d('prepublish'),
      d('template.js'),
      d('testfiles'),
    ]),
    c('src', [
      d('addIndex.js'),
      d('add.js'),
      d('adjust.js'),
      d('all.js'),
      d('allPass.js'),
      d('always.js'),
      d('and.js'),
      d('any.js'),
      d('anyPass.js'),
      d('aperture.js'),
      d('ap.js'),
      d('append.js'),
      d('apply.js'),
      d('assoc.js'),
      d('assocPath.js'),
      d('binary.js'),
      d('bind.js'),
      d('both.js'),
      d('call.js'),
      d('chain.js'),
      d('clone.js'),
      d('commute.js'),
      d('commuteMap.js'),
      d('comparator.js'),
      d('complement.js'),
      d('compose.js'),
      d('composeK.js'),
      d('composeP.js'),
      d('concat.js'),
      d('cond.js'),
      d('construct.js'),
      d('constructN.js'),
      d('contains.js'),
      d('containsWith.js'),
      d('converge.js'),
      d('countBy.js'),
      d('createMapEntry.js'),
      d('curry.js'),
      d('curryN.js'),
      d('dec.js'),
      d('defaultTo.js'),
      d('difference.js'),
      d('differenceWith.js'),
      d('dissoc.js'),
      d('dissocPath.js'),
      d('divide.js'),
      d('drop.js'),
      d('dropLast.js'),
      d('dropLastWhile.js'),
      d('dropRepeats.js'),
      d('dropRepeatsWith.js'),
      d('dropWhile.js'),
      d('either.js'),
      d('empty.js'),
      d('eqProps.js'),
      d('equals.js'),
      d('evolve.js'),
      d('filter.js'),
      d('findIndex.js'),
      d('find.js'),
      d('findLastIndex.js'),
      d('findLast.js'),
      d('F.js'),
      d('flatten.js'),
      d('flip.js'),
      d('forEach.js'),
      d('fromPairs.js'),
      d('functionsIn.js'),
      d('functions.js'),
      d('groupBy.js'),
      d('gte.js'),
      d('gt.js'),
      d('hasIn.js'),
      d('has.js'),
      d('head.js'),
      d('identical.js'),
      d('identity.js'),
      d('ifElse.js'),
      d('inc.js'),
      d('indexOf.js'),
      d('init.js'),
      d('insertAll.js'),
      d('insert.js'),
      c('internal', [
        d('_arity.js'),
        d('_checkForMethod.js'),
        d('_clone.js'),
        d('_cloneRegExp.js'),
        d('_complement.js'),
        d('_concat.js'),
        d('_contains.js'),
        d('_containsWith.js'),
        d('_createPartialApplicator.js'),
        d('_curry1.js'),
        d('_curry2.js'),
        d('_curry3.js'),
        d('_curryN.js'),
        d('_dispatchable.js'),
        d('_equals.js'),
        d('_filter.js'),
        d('_flatCat.js'),
        d('_forceReduced.js'),
        d('_functionsWith.js'),
        d('_has.js'),
        d('_hasMethod.js'),
        d('_identity.js'),
        d('_indexOf.js'),
        d('_isArray.js'),
        d('_isInteger.js'),
        d('_isNumber.js'),
        d('_isString.js'),
        d('_isTransformer.js'),
        d('_makeFlat.js'),
        d('_map.js'),
        d('_pipe.js'),
        d('_pipeP.js'),
        d('_predicateWrap.js'),
        d('_quote.js'),
        d('_reduced.js'),
        d('_reduce.js'),
        d('_slice.js'),
        d('_stepCat.js'),
        d('_toISOString.js'),
        d('_toString.js'),
        d('_xall.js'),
        d('_xany.js'),
        d('_xchain.js'),
        d('_xdrop.js'),
        d('_xdropRepeatsWith.js'),
        d('_xdropWhile.js'),
        d('_xfBase.js'),
        d('_xfilter.js'),
        d('_xfindIndex.js'),
        d('_xfind.js'),
        d('_xfindLastIndex.js'),
        d('_xfindLast.js'),
        d('_xgroupBy.js'),
        d('_xmap.js'),
        d('_xtake.js'),
        d('_xtakeWhile.js'),
        d('_xwrap.js'),
      ]),
      d('intersection.js'),
      d('intersectionWith.js'),
      d('intersperse.js'),
      d('into.js'),
      d('invert.js'),
      d('invertObj.js'),
      d('invoker.js'),
      d('isArrayLike.js'),
      d('isEmpty.js'),
      d('is.js'),
      d('isNil.js'),
      d('isSet.js'),
      d('join.js'),
      d('__.js'),
      d('keysIn.js'),
      d('keys.js'),
      d('lastIndexOf.js'),
      d('last.js'),
      d('length.js'),
      d('lensIndex.js'),
      d('lens.js'),
      d('lensProp.js'),
      d('lift.js'),
      d('liftN.js'),
      d('lte.js'),
      d('lt.js'),
      d('mapAccum.js'),
      d('mapAccumRight.js'),
      d('map.js'),
      d('mapObjIndexed.js'),
      d('mapObj.js'),
      d('match.js'),
      d('mathMod.js'),
      d('maxBy.js'),
      d('max.js'),
      d('mean.js'),
      d('median.js'),
      d('memoize.js'),
      d('mergeAll.js'),
      d('merge.js'),
      d('minBy.js'),
      d('min.js'),
      d('modulo.js'),
      d('multiply.js'),
      d('nAry.js'),
      d('negate.js'),
      d('none.js'),
      d('not.js'),
      d('nthArg.js'),
      d('nth.js'),
      d('objOf.js'),
      d('of.js'),
      d('omit.js'),
      d('once.js'),
      d('or.js'),
      d('over.js'),
      d('pair.js'),
      d('partial.js'),
      d('partialRight.js'),
      d('partition.js'),
      d('pathEq.js'),
      d('path.js'),
      d('pickAll.js'),
      d('pickBy.js'),
      d('pick.js'),
      d('pipe.js'),
      d('pipeK.js'),
      d('pipeP.js'),
      d('pluck.js'),
      d('prepend.js'),
      d('product.js'),
      d('project.js'),
      d('propEq.js'),
      d('propIs.js'),
      d('prop.js'),
      d('propOr.js'),
      d('propSatisfies.js'),
      d('props.js'),
      d('range.js'),
      d('reduced.js'),
      d('reduce.js'),
      d('reduceRight.js'),
      d('reject.js'),
      d('remove.js'),
      d('repeat.js'),
      d('replace.js'),
      d('reverse.js'),
      d('scan.js'),
      d('set.js'),
      d('slice.js'),
      d('sortBy.js'),
      d('sort.js'),
      d('splitEvery.js'),
      d('split.js'),
      d('subtract.js'),
      d('sum.js'),
      d('tail.js'),
      d('take.js'),
      d('takeLast.js'),
      d('takeLastWhile.js'),
      d('takeWhile.js'),
      d('tap.js'),
      d('test.js'),
      d('times.js'),
      d('T.js'),
      d('toLower.js'),
      d('toPairsIn.js'),
      d('toPairs.js'),
      d('toString.js'),
      d('toUpper.js'),
      d('transduce.js'),
      d('trim.js'),
      d('type.js'),
      d('unapply.js'),
      d('unary.js'),
      d('uncurryN.js'),
      d('unfold.js'),
      d('union.js'),
      d('unionWith.js'),
      d('uniqBy.js'),
      d('uniq.js'),
      d('uniqWith.js'),
      d('unless.js'),
      d('unnest.js'),
      d('update.js'),
      d('useWith.js'),
      d('valuesIn.js'),
      d('values.js'),
      d('view.js'),
      d('when.js'),
      d('whereEq.js'),
      d('where.js'),
      d('wrap.js'),
      d('xprod.js'),
      d('zip.js'),
      d('zipObj.js'),
      d('zipWith.js'),
    ]),
    c('test', [
      d('addIndex.js'),
      d('add.js'),
      d('adjust.js'),
      d('all.js'),
      d('allPass.js'),
      d('always.js'),
      d('and.js'),
      d('any.js'),
      d('anyPass.js'),
      d('aperture.js'),
      d('ap.js'),
      d('append.js'),
      d('apply.js'),
      d('assoc.js'),
      d('assocPath.js'),
      d('binary.js'),
      d('bind.js'),
      d('both.js'),
      d('call.js'),
      d('chain.js'),
      d('clone.js'),
      d('commute.js'),
      d('commuteMap.js'),
      d('comparator.js'),
      d('complement.js'),
      d('compose.js'),
      d('composeK.js'),
      d('composeP.js'),
      d('concat.js'),
      d('cond.js'),
      d('construct.js'),
      d('constructN.js'),
      d('contains.js'),
      d('containsWith.js'),
      d('converge.js'),
      d('countBy.js'),
      d('createMapEntry.js'),
      d('curry.js'),
      d('curryN.js'),
      d('dec.js'),
      d('defaultTo.js'),
      d('difference.js'),
      d('differenceWith.js'),
      d('dissoc.js'),
      d('dissocPath.js'),
      d('divide.js'),
      d('drop.js'),
      d('dropLast.js'),
      d('dropLastWhile.js'),
      d('dropRepeats.js'),
      d('dropRepeatsWith.js'),
      d('dropWhile.js'),
      d('either.js'),
      d('empty.js'),
      d('eqProps.js'),
      d('equals.js'),
      d('evolve.js'),
      d('filter.js'),
      d('findIndex.js'),
      d('find.js'),
      d('findLastIndex.js'),
      d('findLast.js'),
      d('F.js'),
      d('flatten.js'),
      d('flip.js'),
      d('forEach.js'),
      d('fromPairs.js'),
      d('functionsIn.js'),
      d('functions.js'),
      d('groupBy.js'),
      d('gte.js'),
      d('gt.js'),
      d('hasIn.js'),
      d('has.js'),
      d('head.js'),
      c('helpers', [
        d('listXf.js'),
        d('test.examplesRunner.js'),
      ]),
      d('identical.js'),
      d('identity.js'),
      d('ifElse.js'),
      d('inc.js'),
      d('indexOf.js'),
      d('init.js'),
      d('insertAll.js'),
      d('insert.js'),
      c('internal', [
        d('_curry2.js'),
        d('_curry3.js'),
      ]),
      d('intersection.js'),
      d('intersectionWith.js'),
      d('intersperse.js'),
      d('into.js'),
      d('invariants.js'),
      d('invert.js'),
      d('invertObj.js'),
      d('invoker.js'),
      d('isArrayLike.js'),
      d('isEmpty.js'),
      d('is.js'),
      d('isNil.js'),
      d('isSet.js'),
      d('join.js'),
      d('keysIn.js'),
      d('keys.js'),
      d('lastIndexOf.js'),
      d('last.js'),
      d('length.js'),
      d('lenses.js'),
      d('lift.js'),
      d('liftN.js'),
      d('lte.js'),
      d('lt.js'),
      d('mapAccum.js'),
      d('mapAccumRight.js'),
      d('map.js'),
      d('mapObjIndexed.js'),
      d('mapObj.js'),
      d('match.js'),
      d('mathMod.js'),
      d('maxBy.js'),
      d('max.js'),
      d('mean.js'),
      d('median.js'),
      d('memoize.js'),
      d('mergeAll.js'),
      d('merge.js'),
      d('minBy.js'),
      d('min.js'),
      d('modulo.js'),
      d('multiply.js'),
      d('nAry.js'),
      d('negate.js'),
      d('none.js'),
      d('not.js'),
      d('nthArg.js'),
      d('nth.js'),
      d('objOf.js'),
      d('of.js'),
      d('omit.js'),
      d('once.js'),
      d('or.js'),
      d('pair.js'),
      d('partial.js'),
      d('partialRight.js'),
      d('partition.js'),
      d('pathEq.js'),
      d('path.js'),
      d('pickAll.js'),
      d('pickBy.js'),
      d('pick.js'),
      d('pipe.js'),
      d('pipeK.js'),
      d('pipeP.js'),
      d('pluck.js'),
      d('prepend.js'),
      d('product.js'),
      d('project.js'),
      d('propEq.js'),
      d('propIs.js'),
      d('prop.js'),
      d('propOr.js'),
      d('propSatisfies.js'),
      d('props.js'),
      d('range.js'),
      d('reduced.js'),
      d('reduce.js'),
      d('reduceRight.js'),
      d('reject.js'),
      d('remove.js'),
      d('repeat.js'),
      d('replace.js'),
      d('reverse.js'),
      d('scan.js'),
      c('shared', [
        c('internal', [
          d('util.js'),
        ]),
        d('Maybe.js'),
      ]),
      d('slice.js'),
      d('sortBy.js'),
      d('sort.js'),
      d('splitEvery.js'),
      d('split.js'),
      d('subtract.js'),
      d('sum.js'),
      d('tail.js'),
      d('take.js'),
      d('takeLast.js'),
      d('takeLastWhile.js'),
      d('takeWhile.js'),
      d('tap.js'),
      d('test.js'),
      d('times.js'),
      d('T.js'),
      d('toLower.js'),
      d('toPairsIn.js'),
      d('toPairs.js'),
      d('toString.js'),
      d('toUpper.js'),
      d('transduce.js'),
      d('trim.js'),
      d('type.js'),
      d('unapply.js'),
      d('unary.js'),
      d('uncurryN.js'),
      d('unfold.js'),
      d('union.js'),
      d('unionWith.js'),
      d('uniqBy.js'),
      d('uniq.js'),
      d('uniqWith.js'),
      d('unless.js'),
      d('unnest.js'),
      d('update.js'),
      d('useWith.js'),
      d('valuesIn.js'),
      d('values.js'),
      d('when.js'),
      d('whereEq.js'),
      d('where.js'),
      d('wrap.js'),
      d('xprod.js'),
      d('zip.js'),
      d('zipObj.js'),
      d('zipWith.js'),
    ]),
    d('testem.json'),
  ]
});