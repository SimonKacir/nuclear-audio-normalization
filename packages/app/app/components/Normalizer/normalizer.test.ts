import { Normalizer, NormalizerProps } from './index';

describe('Normalizer props', () => {
  const mock = jest.fn<NormalizerProps, []>(() => {
    return {
      url: 'someUrl',
      normalize: true
    };
  });
  
  it('should return properties', () => {
    const NormalizerProps = mock();
    expect(NormalizerProps.url).toEqual('someUrl');
    expect(NormalizerProps.normalize).toEqual(true);
  });
});

describe('Normalize update url', () => {
  const mockNextEqualProps = jest.fn<NormalizerProps, []>(() => {
    return {
      url: 'url1',
      normalize: true
    };
  });

  const mockPrevEqualProps = jest.fn<NormalizerProps, []>(() => {
    return {
      url: 'url1',
      normalize: true
    };
  });

  const mockNextDiffProps = jest.fn<NormalizerProps, []>(() => {
    return {
      url: 'url1',
      normalize: true
    };
  });

  const mockPrevDiffProps = jest.fn<NormalizerProps, []>(() => {
    return {
      url: 'url2',
      normalize: false
    };
  });

  const mockClass = jest.fn<Normalizer, []>(() => {
    return new Normalizer();
  });

  it('should update when different', () => {
    const PrevProps = mockPrevDiffProps();
    const NextProps = mockNextDiffProps();
    const Normalizer = mockClass();

    const shouldNotUpdate = Normalizer.shouldNotUpdate(PrevProps, NextProps);

    expect(shouldNotUpdate).toEqual(false);
  });

  it('should not update when equivalent', () => {
    const PrevProps = mockPrevEqualProps();
    const NextProps = mockNextEqualProps();
    const Normalizer = mockClass();

    const shouldNotUpdate = Normalizer.shouldNotUpdate(PrevProps, NextProps);

    expect(shouldNotUpdate).toEqual(true);
  });
});
